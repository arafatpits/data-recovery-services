import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="/images/drs-logo.svg"
                alt="Company Logo"
                width={200}
                height={36}
                className="h-8 sm:h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <div className="text-sm">
                <div className="font-semibold text-heading">Free Quote</div>
                <div className="text-body">No obligation</div>
              </div>
            </div>

            <Button asChild>
              <a href={`tel:${COMPANY_INFO.phone.tel}`} className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phone.display}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
