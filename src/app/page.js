import PageShell from "@/components/layout/page-shell"

export default function HomePage() {
  return (
    <PageShell
      heroProps={{
        title: "Trusted Data Recovery Experts",
        subtitle:
          "Recover lost data from hard drives, SSDs, RAID systems, flash drives, and more — with industry-leading success rates and secure handling.",
        imgsrc: "/images/data-recovery-workspace.jpg",
      }}
    >
      <div className="space-y-6 text-foreground text-base">
        <p>
          At our core, we’re committed to helping individuals and businesses recover what matters most — their data. Whether you've experienced accidental deletion, physical damage, or a RAID failure, our team is ready to assist.
        </p>
        <p>
          We serve clients across industries with transparency, efficiency, and advanced cleanroom facilities. All diagnostics are free, and there's no charge unless your data is successfully recovered.
        </p>
      </div>
    </PageShell>
  )
}
