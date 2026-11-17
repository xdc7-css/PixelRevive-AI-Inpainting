import { useState } from "react"
import useResolution from "@/hooks/useResolution"
import PixelReviveLogo from "./PixelReviveLogo"
import { UploadCloud, Sparkles, Cpu, Layers, ShieldCheck } from "lucide-react"

type FileSelectProps = {
  onSelection: (file: File) => void
}

export default function FileSelect(props: FileSelectProps) {
  const { onSelection } = props
  const [uploadElemId] = useState(`file-upload-${Math.random().toString()}`)
  const [isDragOver, setIsDragOver] = useState(false)
  const resolution = useResolution()

  function onFileSelected(file: File) {
    if (!file) {
      return
    }
    const isImage = file.type.match("image.*")
    if (!isImage) {
      alert("Please upload a valid image file (PNG, JPG, WEBP, BMP).")
      return
    }
    try {
      if (file.size > 20 * 1024 * 1024) {
        throw new Error("File exceeds 20MB limit.")
      }
      onSelection(file)
    } catch (e) {
      alert(`Error: ${(e as any).message}`)
    }
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none z-10 overflow-y-auto">
      <div className="w-full max-w-2xl flex flex-col items-center text-center space-y-6 pointer-events-auto my-auto animate-in fade-in-50 duration-500">
        
        {/* Academic Affiliation Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181116] border border-[#3D1E28] text-xs text-[#D8CBBF] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#8B263E] animate-pulse" />
          <span className="font-medium text-[#F5EFEB]">University of Basrah</span>
          <span className="text-[#6D655E]">&bull;</span>
          <span>College of Engineering</span>
          <span className="text-[#6D655E]">&bull;</span>
          <span>Computer Engineering 2026–2027</span>
        </div>

        {/* Hero Branding */}
        <div className="flex flex-col items-center space-y-2">
          <div className="p-3 rounded-2xl bg-gradient-to-b from-[#2D0D16] to-[#141419] border border-[#4A1521] shadow-xl shadow-[#4A1521]/20">
            <PixelReviveLogo size={56} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5EFEB] mt-2">
            Pixel<span className="text-[#D8CBBF] font-light">Revive</span>
          </h1>
          <p className="text-sm sm:text-base font-medium text-[#D8CBBF] max-w-lg">
            AI-Driven Image Restoration &amp; Intelligent Inpainting
          </p>
          <p className="text-xs text-[#8E8379] italic font-serif">
            &ldquo;Restore. Reconstruct. Revive.&rdquo;
          </p>
        </div>

        {/* Main Dropzone Card */}
        <label
          htmlFor={uploadElemId}
          onDragOver={(ev) => {
            ev.stopPropagation()
            ev.preventDefault()
            setIsDragOver(true)
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={(ev) => {
            ev.preventDefault()
            ev.stopPropagation()
            setIsDragOver(false)
            if (ev.dataTransfer.files && ev.dataTransfer.files.length > 0) {
              onFileSelected(ev.dataTransfer.files[0])
            }
          }}
          className={`group relative flex flex-col items-center justify-center w-full p-8 sm:p-10 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-300 shadow-xl ${
            isDragOver
              ? "border-[#A82D4A] bg-[#220B13]/60 scale-[1.01]"
              : "border-[#33222B] bg-[#121217]/90 hover:border-[#6B1D2F] hover:bg-[#181116]/80"
          }`}
        >
          <input
            className="hidden"
            id={uploadElemId}
            name={uploadElemId}
            type="file"
            onChange={(ev) => {
              const file = ev.currentTarget.files?.[0]
              if (file) {
                onFileSelected(file)
              }
            }}
            accept="image/png, image/jpeg, image/webp, image/bmp, image/tiff"
          />

          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-full bg-[#200D16] border border-[#4A1521] text-[#D8CBBF] group-hover:scale-110 group-hover:text-[#F5EFEB] group-hover:border-[#8B263E] transition-all duration-300">
              <UploadCloud className="w-8 h-8 text-[#E8DFD8]" />
            </div>

            <div className="space-y-1">
              <p className="text-base font-semibold text-[#F5EFEB]">
                {resolution === "desktop"
                  ? "Drop your image here or click to browse"
                  : "Tap to select an image"}
              </p>
              <p className="text-xs text-[#A69B91]">
                Support for high-resolution images up to 20MB
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1B1B22] text-[#D8CBBF] border border-[#2D2D38]">
                PNG
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1B1B22] text-[#D8CBBF] border border-[#2D2D38]">
                JPEG
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1B1B22] text-[#D8CBBF] border border-[#2D2D38]">
                WEBP
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1B1B22] text-[#D8CBBF] border border-[#2D2D38]">
                BMP
              </span>
            </div>
          </div>
        </label>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full text-left">
          <div className="bg-[#121217] border border-[#24242C] rounded-xl p-3 flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#220B13] border border-[#4A1521] text-[#D8CBBF] shrink-0">
              <Sparkles className="w-4 h-4 text-[#8B263E]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#F5EFEB]">LaMa Engine</div>
              <div className="text-[10px] text-[#A69B91]">Fourier Convolutions</div>
            </div>
          </div>

          <div className="bg-[#121217] border border-[#24242C] rounded-xl p-3 flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#220B13] border border-[#4A1521] text-[#D8CBBF] shrink-0">
              <Cpu className="w-4 h-4 text-[#8B263E]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#F5EFEB]">CUDA Accelerated</div>
              <div className="text-[10px] text-[#A69B91]">GTX 1650 Ti GPU</div>
            </div>
          </div>

          <div className="bg-[#121217] border border-[#24242C] rounded-xl p-3 flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#220B13] border border-[#4A1521] text-[#D8CBBF] shrink-0">
              <Layers className="w-4 h-4 text-[#8B263E]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#F5EFEB]">Large Mask Support</div>
              <div className="text-[10px] text-[#A69B91]">Global Receptive Field</div>
            </div>
          </div>

          <div className="bg-[#121217] border border-[#24242C] rounded-xl p-3 flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#220B13] border border-[#4A1521] text-[#D8CBBF] shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#8B263E]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#F5EFEB]">Private &amp; Offline</div>
              <div className="text-[10px] text-[#A69B91]">100% Local Processing</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
