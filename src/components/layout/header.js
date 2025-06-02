"use client"

import Link from "next/link"
import Image from "next/image"
import { COMPANY_INFO } from "@/lib/constants"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Services", href: "/services/" },
    { name: "Our Process", href: "/process/" },
    { name: "About Us", href: "/about/" },
    { name: "Contact Us", href: "/contact/" },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/logo.svg" alt={`${COMPANY_INFO.name} Logo`} width={100} height={40} priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Call to Action - Phone */}
          <div className="flex items-center space-x-4">
            {/* Desktop phone button */}
            <Button asChild className="hidden sm:flex">
              <a href={`tel:${COMPANY_INFO.phone.tel}`} className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phone.display}</span>
              </a>
            </Button>

            {/* Mobile phone icon */}
            <Button asChild size="icon" className="sm:hidden">
              <a href={`tel:${COMPANY_INFO.phone.tel}`}>
                <Phone className="w-5 h-5" />
              </a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile phone number display */}
              <div className="px-3 py-2 border-t mt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone.tel}`}
                  className="flex items-center space-x-2 text-primary font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>{COMPANY_INFO.phone.display}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
