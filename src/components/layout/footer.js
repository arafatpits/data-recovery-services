import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-muted text-body text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col text-left items-start sm:text-center sm:items-center">
          <div className="mb-6 relative w-[250px] h-[50px]">
            <Image
              src="/images/drs-logo.svg"
              alt="Company Logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <p className="text-base leading-relaxed max-w-xl">
            Our company is a trusted provider of secure data retrieval solutions
            — specializing in hard drives, SSDs, RAID arrays, and enterprise
            storage systems.
          </p>

          <hr className="w-full border-border my-10" />

          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Data Recovery Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
