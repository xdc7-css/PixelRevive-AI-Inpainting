import logoSvg from "@/assets/pixelrevive_logo.svg"

interface PixelReviveLogoProps {
  className?: string
  size?: number
  showText?: boolean
  subtitle?: string
}

export const PixelReviveLogo = ({
  className = "",
  size = 32,
  showText = false,
  subtitle,
}: PixelReviveLogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <img
        src={logoSvg}
        alt="PixelRevive Logo"
        style={{ height: `${size}px`, width: "auto" }}
        className="shrink-0 transition-transform duration-300 hover:scale-105 object-contain"
      />

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-semibold tracking-tight text-[16px] text-[#F5EFEB]">
              Pixel<span className="text-[#D8CBBF] font-light">Revive</span>
            </span>
            <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#4A101E]/80 border border-[#8B263E]/60 text-[#E8DFD8] font-medium">
              AI
            </span>
          </div>
          {subtitle && (
            <span className="text-[10px] text-[#A69B91] tracking-wide mt-0.5 leading-tight font-normal">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default PixelReviveLogo
