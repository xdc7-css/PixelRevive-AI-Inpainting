import base64
import io
import time
import requests
import numpy as np
from PIL import Image

SERVER_URL = "http://127.0.0.1:8080"

def wait_for_server(timeout=300):
    print(f"Waiting for IOPaint server at {SERVER_URL}...")
    start = time.time()
    while time.time() - start < timeout:
        try:
            r = requests.get(SERVER_URL, timeout=2)
            if r.status_code == 200:
                print(f"Server responded successfully in {time.time() - start:.1f}s!")
                return True
        except Exception:
            pass
        time.sleep(2)
    return False

def test_inpainting():
    # 1. Check server health
    if not wait_for_server():
        print("ERROR: Server did not respond within timeout.")
        return False

    # 2. Check current model info
    try:
        r = requests.get(f"{SERVER_URL}/api/v1/model-info", timeout=5)
        print(f"Model Info endpoint status: {r.status_code}")
    except Exception:
        pass

    # 3. Create a sample image (256x256 blue background with red circle)
    img_arr = np.zeros((256, 256, 3), dtype=np.uint8)
    img_arr[:, :] = [50, 100, 200]  # Blue background
    # Add a red block in the center
    img_arr[96:160, 96:160] = [220, 30, 30]

    # Mask covering the red block
    mask_arr = np.zeros((256, 256), dtype=np.uint8)
    mask_arr[90:166, 90:166] = 255

    # Encode to base64
    def to_b64(arr, is_gray=False):
        img = Image.fromarray(arr)
        buf = io.BytesIO()
        img.save(buf, format="PNG")
        b64_str = base64.b64encode(buf.getvalue()).decode("utf-8")
        prefix = "data:image/png;base64,"
        return prefix + b64_str

    img_b64 = to_b64(img_arr)
    mask_b64 = to_b64(mask_arr, is_gray=True)

    payload = {
        "image": img_b64,
        "mask": mask_b64,
        "ldm_steps": 20,
        "ldm_sampler": "plms",
        "zits_wireframe": False,
        "cv2_flag": "INPAINT_NS",
        "cv2_radius": 4,
        "hd_strategy": "Original",
        "hd_strategy_crop_margin": 128,
        "hd_strategy_crop_trigger_size": 800,
        "hd_strategy_resize_limit": 1024,
        "prompt": "",
        "negative_prompt": "",
        "use_croper": False,
        "croper_x": 0,
        "croper_y": 0,
        "croper_height": 512,
        "croper_width": 512,
        "sd_mask_blur": 0,
        "sd_strength": 0.75,
        "sd_steps": 20,
        "sd_guidance_scale": 7.5,
        "sd_sampler": "uni_pc",
        "sd_seed": 42,
        "sd_match_histograms": False,
        "sd_scale": 1.0,
        "powerpaint_task": "text-guided",
        "save_state": False,
        "custom_masks": [],
    }

    print("Sending inpainting request to /api/v1/inpaint...")
    t0 = time.time()
    res = requests.post(f"{SERVER_URL}/api/v1/inpaint", json=payload, timeout=60)
    duration = time.time() - t0
    print(f"Response status: {res.status_code}, time: {duration:.2f}s")

    if res.status_code == 200 and len(res.content) > 1000:
        with open("X:/image project/test_result.png", "wb") as f:
            f.write(res.content)
        print(f"SUCCESS: Inpainted image saved to X:/image project/test_result.png ({len(res.content)} bytes)")
        return True
    else:
        print(f"FAILED: Status {res.status_code}, Body: {res.text[:300]}")
        return False

if __name__ == "__main__":
    success = test_inpainting()
    exit(0 if success else 1)
