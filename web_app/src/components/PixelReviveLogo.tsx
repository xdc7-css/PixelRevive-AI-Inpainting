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
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="pr-burgundy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A82D4A" />
            <stop offset="50%" stopColor="#7E1D34" />
            <stop offset="100%" stopColor="#4A101E" />
          </linearGradient>
          <linearGradient id="pr-beige-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5EFEB" />
            <stop offset="100%" stopColor="#D8CBBF" />
          </linearGradient>
          <radialGradient id="pr-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B263E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B263E" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Glow */}
        <circle cx="24" cy="24" r="22" fill="url(#pr-glow)" />

        {/* Outer Shield / Precision Frame */}
        <rect
          x="4"
          y="4"
          width="40"
          height="40"
          rx="10"
          fill="#141419"
          stroke="url(#pr-burgundy-grad)"
          strokeWidth="1.5"
        />

        {/* Reconstructed Pixel Grid (Matrix Restoration) */}
        {/* Top-Left: Raw/Input Pixels */}
        <rect x="10" y="10" width="7" height="7" rx="2" fill="#7E1D34" fillOpacity="0.4" stroke="#A82D4A" strokeWidth="0.8" />
        <rect x="19" y="10" width="7" height="7" rx="2" fill="#7E1D34" fillOpacity="0.7" stroke="#A82D4A" strokeWidth="0.8" />
        <rect x="10" y="19" width="7" height="7" rx="2" fill="#7E1D34" fillOpacity="0.7" stroke="#A82D4A" strokeWidth="0.8" />

        {/* Center Neural Inpainting Core */}
        <rect
          x="19"
          y="19"
          width="10"
          height="10"
          rx="3"
          fill="url(#pr-burgundy-grad)"
          stroke="url(#pr-beige-grad)"
          strokeWidth="1.2"
        />
        <circle cx="24" cy="24" r="2" fill="#F5EFEB" />

        {/* Bottom-Right: Pristine Restored Output */}
        <rect x="31" y="19" width="7" height="7" rx="2" fill="url(#pr-beige-grad)" />
        <rect x="19" y="31" width="7" height="7" rx="2" fill="url(#pr-beige-grad)" />
        <rect x="31" y="31" width="7" height="7" rx="2" fill="url(#pr-beige-grad)" />

        {/* Restoration Vector Pulse */}
        <path
          d="M 12 36 L 16 32 M 32 16 L 36 12"
          stroke="url(#pr-beige-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
      </svg>

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
