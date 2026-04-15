import { ArrowUpRight, Play } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <Link to="/ip" className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2 hover:bg-[#222] transition-colors cursor-pointer">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">ВЫГОДНО</span>
        <span className="text-gray-300">Оформление ИП бесплатно за 1 день</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </Link>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        Финансовые решения для вашего бизнеса
      </h1>

      <p className="mb-8 max-w-xl text-gray-400">Открытие ИП, кредитные и дебетовые карты с лучшими условиями — всё с персональной консультацией.</p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-violet-600 px-6 hover:bg-violet-700 text-white" asChild>
          <Link to="/usloviya">Оформить заявку <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
        </Button>
        <Button variant="outline" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800" asChild>
          <Link to="/usloviya"><Play className="mr-2 h-4 w-4 fill-violet-500 text-violet-500" /> Узнать подробнее</Link>
        </Button>
      </div>
    </section>
  )
}