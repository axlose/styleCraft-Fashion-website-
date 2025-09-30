import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductCategories } from "@/components/product-categories"
import { CompanyValues } from "@/components/company-values"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductCategories />
        <CompanyValues />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
