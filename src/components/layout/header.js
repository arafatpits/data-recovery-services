"use client"

import Link from "next/link"
import Image from "next/image"
import { COMPANY_INFO } from "@/lib/constants"
import { Phone, Menu, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const navigation = [
    { name: "Our Process", href: "/process/" },
    { name: "About Us", href: "/about/" },
    { name: "Contact Us", href: "/contact/" },
  ]

  const services = [
    { name: "Hard Drive Recovery", href: "/services/hard-drive-recovery/" },
    { name: "SSD Recovery", href: "/services/ssd-recovery/" },
    { name: "RAID Recovery", href: "/services/raid-recovery/" },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Company Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center space-x-4">
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium text-gray-700 transition-all hover:text-primary hover:border-b-2 hover:border-primary bg-transparent hover:bg-transparent focus:bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[200px] gap-1 p-2 bg-white shadow-lg rounded-md">
                    {services.map((service) => (
                      <NavigationMenuLink key={service.name} asChild>
                        <Link
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                        >
                          {service.name}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Regular Navigation Items */}
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="inline-flex h-10 items-center justify-center px-4 text-sm font-medium text-gray-700 transition-all hover:text-primary hover:border-b-2 hover:border-primary"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <div className="text-sm">
                <div className="font-semibold text-gray-900">Free Quote</div>
                <div className="text-gray-600">No obligation</div>
              </div>
            </div>

            <Button
              asChild
              className="text-white font-semibold px-6 py-2 transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "var(--color-heading)",
                borderColor: "var(--color-heading)",
              }}
            >
              <a href={`tel:${COMPANY_INFO.phone.tel}`}>{COMPANY_INFO.phone.display}</a>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-gray-700 hover:bg-gray-50">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetHeader className="border-b pb-4 mb-4">
                  <SheetTitle className="text-left">
                    <Image
                      src="/images/logo.svg"
                      alt="Company Logo"
                      width={140}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </SheetTitle>
                  <SheetDescription className="text-left">Professional data recovery</SheetDescription>
                </SheetHeader>

                <nav className="grid gap-2">
                  <div className="px-2 py-1.5 text-sm font-semibold text-gray-900">Services</div>
                  {services.map((item) => (
                    <Button
                      key={item.name}
                      asChild
                      variant="ghost"
                      className="justify-start text-gray-700 hover:text-primary"
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  ))}

                  <div className="mt-4 px-2 py-1.5 text-sm font-semibold text-gray-900">Navigation</div>
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      asChild
                      variant="ghost"
                      className="justify-start text-gray-700 hover:text-primary"
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  ))}

                  <div className="border-t pt-6 mt-6 space-y-4">
                    <div className="flex items-center space-x-2 px-1">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">Free Quote</div>
                        <div className="text-gray-600">No obligation</div>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="w-full text-white font-semibold transition-all duration-200 hover:opacity-90"
                      style={{
                        backgroundColor: "var(--color-heading)",
                        borderColor: "var(--color-heading)",
                      }}
                      size="lg"
                    >
                      <a href={`tel:${COMPANY_INFO.phone.tel}`} className="flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>{COMPANY_INFO.phone.display}</span>
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
