import Hero from "@/components/sections/hero"
export default function PageShell({ heroProps, children }) {
  return (
    <>
      <Hero/>
      {children}
    </>
  )
}
