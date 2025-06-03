import Header from "./header"
import Hero from "../sections/hero"
import PageContent from "./page-content"

export default function UniversalTemplate({ heroConfig, children }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero {...heroConfig} />
      <PageContent>{children}</PageContent>
    </div>
  )
}
