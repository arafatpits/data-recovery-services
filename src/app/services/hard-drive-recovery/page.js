import UniversalTemplate from "@/components/layout/universal-template"
import HardDriveDetails from "@/components/sections/hard-drive-details"

export default function HardDriveRecoveryPage() {
  const heroConfig = {
    title: "Hard Drive Data Recovery",
    subtitle:
      "Professional recovery for damaged, clicking, or failed hard drives. Our clean room facilities and expert technicians ensure maximum data recovery success.",
      imgsrc:"/images/data-recovery-workspace.jpg"
  }

  return (
    <UniversalTemplate heroConfig={heroConfig}>
      <HardDriveDetails />
    </UniversalTemplate>
  )
}
