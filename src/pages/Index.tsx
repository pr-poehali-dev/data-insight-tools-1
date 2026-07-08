import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { SEO } from "@/components/SEO"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <SEO
        title="Оформление ИП, карт и займов онлайн"
        description="Бесплатно оформите ИП, дебетовую или кредитную карту, расчётный счёт для бизнеса и займ онлайн. Лучшие условия банков и МФО в одном месте."
        keywords="оформить ИП онлайн, дебетовая карта, кредитная карта, расчётный счёт для бизнеса, займ онлайн, открыть расчётный счёт, РКО, регистрация ИП бесплатно"
        path="/"
      />
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        От оформления ИП до подбора выгодной карты —{" "}
        <span className="font-medium text-white">ваш личный финансовый помощник.</span>
      </footer>
    </main>
  )
}