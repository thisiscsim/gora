import Header from "@/components/header"
import About from "@/components/about"
import Team from "@/components/team"
import Portfolio from "@/components/portfolio"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-4 py-32 space-y-16">
      <Header />
      <About />
      <Team />
      <Portfolio />
      <Footer />
    </main>
  )
}

