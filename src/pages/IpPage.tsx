import { Link } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, CheckCircle2, FileText, Clock, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"

const offers = [
  {
    id: 1,
    bank: "Альфа-Банк",
    badge: "Бесплатно",
    badgeColor: "bg-violet-500/20 text-violet-400",
    title: "Открытие ИП онлайн + РКО",
    description: "Регистрация ИП за 1 день без визита в налоговую. Расчётный счёт в подарок.",
    features: ["Бесплатная регистрация", "Счёт за 0 ₽/мес первые 3 месяца", "Помощь с документами", "Электронная подпись бесплатно"],
    color: "bg-red-600",
    link: "#",
  },
  {
    id: 2,
    bank: "Сбербанк",
    badge: "Хит",
    badgeColor: "bg-amber-500/20 text-amber-400",
    title: "ИП с расчётным счётом",
    description: "Готовим документы и регистрируем ИП. Счёт с кэшбэком и выгодным эквайрингом.",
    features: ["Регистрация за 1 день", "Кэшбэк до 3% на расходы", "Эквайринг от 1.6%", "Бухгалтерия онлайн"],
    color: "bg-green-600",
    link: "#",
  },
  {
    id: 3,
    bank: "Альфа-Банк",
    badge: "Выгодно",
    badgeColor: "bg-red-500/20 text-red-400",
    title: "ИП под ключ",
    description: "Полное сопровождение: от регистрации до открытия счёта и первых операций.",
    features: ["Документы за 2 часа", "Счёт 0 ₽/мес навсегда", "Овердрафт сразу", "Персональный менеджер"],
    color: "bg-red-600",
    link: "#",
  },
  {
    id: 4,
    bank: "ВТБ",
    badge: "Новинка",
    badgeColor: "bg-blue-500/20 text-blue-400",
    title: "ИП Старт",
    description: "Простая и быстрая регистрация ИП с бонусами для новых предпринимателей.",
    features: ["Бесплатная регистрация", "Первые 6 мес без комиссий", "Корпоративная карта", "Страхование бизнеса"],
    color: "bg-blue-600",
    link: "#",
  },
]

export default function IpPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Назад на главную
        </Link>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-3 py-1 mb-4">
            <FileText className="h-3.5 w-3.5 text-violet-400" />
            <span className="text-xs text-violet-400 font-medium">Оформление ИП</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Выберите предложение для открытия ИП</h1>
          <p className="text-gray-400 text-lg">Регистрация бесплатно, онлайн, без визита в налоговую — выберите банк с лучшими условиями для вашего бизнеса</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {offers.map((offer) => (
            <div key={offer.id} className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col hover:border-violet-500/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-xl ${offer.color} flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{offer.bank.slice(0, 2)}</span>
                  </div>
                  <span className="text-white font-semibold">{offer.bank}</span>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${offer.badgeColor}`}>{offer.badge}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{offer.title}</h3>
              <p className="text-sm text-gray-400 mb-5">{offer.description}</p>

              <div className="space-y-2 mb-6">
                {offer.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-violet-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Button
                  asChild
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                >
                  <a href={offer.link} target="_blank" rel="noopener noreferrer">
                    Оформить <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Clock, title: "За 1 день", desc: "Регистрация ИП проходит в течение одного рабочего дня" },
            { icon: Shield, title: "Без рисков", desc: "Проверяем документы перед подачей — отказы исключены" },
            { icon: Zap, title: "Полностью онлайн", desc: "Не нужно ехать в налоговую или МФЦ — всё дистанционно" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-[#141414] border border-[#262626] p-4 flex gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                <Icon className="h-4 w-4 text-violet-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                <p className="text-xs text-gray-400">{desc}</p>
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