import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-muted text-body text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-start gap-12">
          <div className="mb-10 md:mb-0 max-w-md">
            <a href="/" className="flex items-center mb-4">
              <Image src="/images/logo.svg" alt="Company Logo" width={140} height={36} />
            </a>
            <p className="text-base leading-relaxed">
              PITS Global Data Recovery Services is a trusted leader in secure data retrieval solutions,
              specializing in hard drives, SSDs, RAID, and enterprise storage systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-8 gap-x-12 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-heading uppercase">Services</h2>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-accent">Hard Drive Recovery</a></li>
                <li><a href="#" className="hover:text-accent">RAID Recovery</a></li>
                <li><a href="#" className="hover:text-accent">SSD Recovery</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-heading uppercase">Company</h2>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-accent">About Us</a></li>
                <li><a href="#" className="hover:text-accent">Locations</a></li>
                <li><a href="#" className="hover:text-accent">Certifications</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-heading uppercase">Legal</h2>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent">Terms & Conditions</a></li>
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
