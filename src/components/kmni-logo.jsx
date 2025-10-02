import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        {/* Logo Image - Reduced */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="KMNI Logo"
            height={35}
            width={35}
            className="object-contain"
          />
        </div>

        {/* Vertical Divider Line - Shorter */}
        <div className="h-7 w-[1px] bg-green-600"></div>

        {/* Church Name - Smaller Text */}
        <div>
          <h1 className="text-green-700 font-medium text-sm leading-tight">
            KINGDOM MISSION<br />
            NETWORK INT.
          </h1>
        </div>
      </div>
    </Link>

  )
}