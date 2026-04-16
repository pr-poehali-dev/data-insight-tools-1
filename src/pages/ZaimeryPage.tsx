import { Link } from "react-router-dom"
import { ArrowLeft, CheckCircle2, Zap, Shield, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"

const zaimery = [
  {
    id: 1,
    badge: "До 30 000 ₽",
    badgeColor: "bg-yellow-500/20 text-yellow-400",
    title: "Займер — онлайн займ",
    subtitle: "Быстрое одобрение за 5 минут",
    features: [
      "Сумма: до 30 000 рублей",
      "Срок: от 7 до 30 дней",
      "Одобрение онлайн без визита в офис",
      "Деньги на карту любого банка",
      "Решение за 5 минут",
    ],
    rate: "от 0%",
    rateLabel: "первый займ",
    link: "#",
  },
  {
    id: 2,
    badge: "До 100 000 ₽",
    badgeColor: "bg-violet-500/20 text-violet-400",
    title: "МФК «Лайм-Займ»",
    subtitle: "Крупная сумма с минимальными требованиями",
    features: [
      "Сумма: до 100 000 рублей",
      "Срок: от 3 до 12 месяцев",
      "Только паспорт — без справок",
      "Перевод на карту или счёт",
      "Досрочное погашение без штрафов",
    ],
    rate: "от 0.5%",
    rateLabel: "в день",
    link: "#",
  },
]

export default function ZaimeryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Назад на главную
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="text-white font-semibold text-lg">Топ займеров</span>
        </div>

        <div className="flex flex-col gap-5">
          {zaimery.map((item) => (
            <div key={item.id} className="rounded-2xl bg-[#141414] border border-[#262626] p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-white mb-1">{item.title}</h2>
                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">{item.rate}</span>
                  </div>
                  <span className="text-xs text-gray-500">{item.rateLabel}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {item.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Button
                  asChild
                  className="bg-violet-600 hover:bg-violet-500 text-white font-medium px-6"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Оформить <ArrowUpRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Shield className="h-3.5 w-3.5" />
                  Бесплатно для клиентов
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="py-8 text-center text-sm text-gray-400">
        От оформления ИП до подбора выгодной карты —{" "}
        <span className="font-medium text-white">ваш личный финансовый помощник.</span>
      </footer>
    </main>
  )
}
