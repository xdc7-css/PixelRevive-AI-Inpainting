import {
  GraduationCap,
  Cpu,
  Users,
  ShieldCheck,
  BookOpen,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { IconButton } from "./ui/button"
import PixelReviveLogo from "./PixelReviveLogo"

const GROUP_MEMBERS = [
  { name: "حسين علي جاسب", id: "28", role: "AI & Full-Stack Lead" },
  { name: "حسين علي حسن", id: "29", role: "Computer Vision Engineer" },
  { name: "حسين إياد عبدالرزاق", id: "23", role: "Backend & Model Optimization" },
  { name: "سجاد عباس نعمة", id: "67", role: "Frontend & UI/UX Design" },
  { name: "طه قاسم جبار", id: "75", role: "Testing & Systems Integration" },
]

export function About() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton tooltip="About PixelRevive — Graduation Project">
          <GraduationCap className="w-5 h-5 text-[#D8CBBF] hover:text-[#F5EFEB] transition-colors" />
        </IconButton>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-[#0E0E12] border border-[#2E2027] text-[#F5EFEB] p-0 overflow-hidden shadow-2xl rounded-2xl">
        {/* Banner with gradient accent */}
        <div className="relative bg-gradient-to-r from-[#2D0D16] via-[#1A0E13] to-[#0E0E12] px-6 py-5 border-b border-[#3D1E28]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <PixelReviveLogo size={36} />
              <div>
                <DialogTitle className="text-xl font-bold tracking-tight text-[#F5EFEB] flex items-center gap-2">
                  PixelRevive
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#6B1D2F] text-[#F5EFEB] border border-[#8B263E]">
                    Academic Project
                  </span>
                </DialogTitle>
                <p className="text-xs text-[#D8CBBF] mt-0.5">
                  AI-Driven Image Restoration &amp; Intelligent Inpainting
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-[#A69B91] mt-2 italic">
            &ldquo;Restore. Reconstruct. Revive.&rdquo;
          </p>
        </div>

        <div className="px-6 py-5 space-y-5 max-h-[75vh] overflow-y-auto pr-4">
          {/* Academic Institution Card */}
          <div className="bg-[#141419] border border-[#26262F] rounded-xl p-4 flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#2D0D16] text-[#D8CBBF] shrink-0 border border-[#4A1521]">
              <BookOpen className="w-5 h-5 text-[#E8DFD8]" />
            </div>
            <div className="space-y-1 text-sm">
              <div className="font-semibold text-[#F5EFEB] flex items-center gap-2">
                University of Basrah &bull; جامعة البصرة
              </div>
              <div className="text-xs text-[#D8CBBF]">
                College of Engineering &bull; كلية الهندسة
              </div>
              <div className="text-xs text-[#A69B91]">
                Department of Computer Engineering &bull; قسم هندسة الحاسوب
              </div>
              <div className="text-[11px] text-[#8B263E] font-medium pt-0.5">
                Academic Year: 2026–2027 &bull; Graduation Project
              </div>
            </div>
          </div>

          {/* Group Members Table */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D8CBBF]">
              <Users className="w-4 h-4 text-[#8B263E]" />
              Group Members &bull; فريق العمل
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {GROUP_MEMBERS.map((member, idx) => (
                <div
                  key={member.id}
                  className="bg-[#141419]/80 border border-[#24242C] rounded-lg p-2.5 flex items-center justify-between hover:border-[#6B1D2F] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#24131A] border border-[#4A1521] text-[#D8CBBF] text-xs flex items-center justify-center font-semibold">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-sm font-medium text-[#F5EFEB] font-sans" dir="rtl">
                        {member.name}
                      </div>
                      <div className="text-[10px] text-[#A69B91]">{member.role}</div>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-bold text-[#E8DFD8] bg-[#1E1E24] px-2 py-0.5 rounded border border-[#2D2D36]">
                    #{member.id}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D8CBBF]">
              <Cpu className="w-4 h-4 text-[#8B263E]" />
              Architecture &amp; Intelligence Stack
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#141419] border border-[#26262F] p-3 rounded-lg">
                <div className="text-xs text-[#A69B91]">Core Model</div>
                <div className="text-sm font-semibold text-[#F5EFEB] mt-0.5">LaMa FFC</div>
                <div className="text-[10px] text-[#8B263E] mt-0.5">Fourier Convolutions</div>
              </div>
              <div className="bg-[#141419] border border-[#26262F] p-3 rounded-lg">
                <div className="text-xs text-[#A69B91]">Inference Engine</div>
                <div className="text-sm font-semibold text-[#F5EFEB] mt-0.5">PyTorch CUDA</div>
                <div className="text-[10px] text-[#8B263E] mt-0.5">NVIDIA GTX 1650</div>
              </div>
              <div className="bg-[#141419] border border-[#26262F] p-3 rounded-lg">
                <div className="text-xs text-[#A69B91]">Full-Stack App</div>
                <div className="text-sm font-semibold text-[#F5EFEB] mt-0.5">FastAPI + Vite</div>
                <div className="text-[10px] text-[#8B263E] mt-0.5">Tailwind &bull; React</div>
              </div>
            </div>
          </div>

          {/* Licensing & Open-Source Compliance */}
          <div className="bg-[#121217] border border-[#202028] rounded-xl p-3.5 text-xs text-[#A69B91] space-y-1">
            <div className="flex items-center gap-1.5 font-medium text-[#D8CBBF]">
              <ShieldCheck className="w-4 h-4 text-[#8B263E]" />
              Licensing &amp; Open-Source Compliance
            </div>
            <p className="leading-relaxed">
              PixelRevive is released under the Apache License 2.0. Neural inpainting
              utilizes the Large Mask Inpainting (LaMa) architecture. Foundational open-source
              components and third-party dependencies are acknowledged and governed under their
              respective open-source licenses as documented in the project repository.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default About
