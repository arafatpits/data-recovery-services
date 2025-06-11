import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted text-body text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-start gap-12">
          <div className="mb-10 md:mb-0 max-w-md">
            <Link href="#" className="flex items-center mb-4">
              <Image src="/images/drs-logo.svg" alt="Company Logo" width={250} height={36} />
            </Link>
            <p className="text-base leading-relaxed">
              PITS Global Data Recovery Services is a trusted leader in secure data retrieval solutions,
              specializing in hard drives, SSDs, RAID, and enterprise storage systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-8 gap-x-12 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-heading uppercase">Services</h2>
              <ul className="space-y-3">
                <li><Link href="#" className="hover:text-accent">Hard Drive Recovery</Link></li>
                <li><Link href="#" className="hover:text-accent">RAID Recovery</Link></li>
                <li><Link href="#" className="hover:text-accent">SSD Recovery</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-heading uppercase">Company</h2>
              <ul className="space-y-3">
                <li><Link href="#" className="hover:text-accent">About Us</Link></li>
                <li><Link href="#" className="hover:text-accent">Locations</Link></li>
                <li><Link href="#" className="hover:text-accent">Certifications</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-heading uppercase">Legal</h2>
              <ul className="space-y-3">
                <li><Link href="#" className="hover:text-accent">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-accent">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-10 border-border" />

        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Data Recovery Services. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
