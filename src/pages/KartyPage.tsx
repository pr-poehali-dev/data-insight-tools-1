import { Link } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, CheckCircle2, CreditCard, Star, Percent, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"

const creditCards = [
  {
    id: 1,
    bank: "Тинькофф",
    type: "Кредитная",
    name: "Платинум",
    badge: "Хит",
    badgeColor: "bg-amber-500/20 text-amber-400",
    cardColor: "from-violet-700 to-violet-900",
    cashback: "До 30% кэшбэк у партнёров",
    limit: "Лимит до 700 000 ₽",
    grace: "55 дней без %",
    features: ["Беспроцентный период 55 дней", "Кэшбэк до 30% у партнёров", "Бесплатное обслуживание", "Рассрочка 0%"],
    link: "#",
  },
  {
    id: 2,
    bank: "Альфа-Банк",
    type: "Кредитная",
    name: "100 дней",
    badge: "Выгодно",
    badgeColor: "bg-red-500/20 text-red-400",
    cardColor: "from-red-700 to-red-900",
    cashback: "До 5% кэшбэк",
    limit: "Лимит до 1 000 000 ₽",
    grace: "100 дней без %",
    features: ["100 дней без процентов", "Кэшбэк 5% на всё", "Лимит до 1 000 000 ₽", "Бесплатное снятие наличных"],
    link: "#",
  },
  {
    id: 3,
    bank: "Сбербанк",
    type: "Кредитная",
    name: "СберКарта",
    badge: "Популярно",
    badgeColor: "bg-green-500/20 text-green-400",
    cardColor: "from-green-700 to-green-900",
    cashback: "До 10% кэшбэк Бонусами",
    limit: "Лимит до 600 000 ₽",
    grace: "120 дней без %",
    features: ["120 дней без процентов", "Бонусы СберСпасибо", "Скидки в СберМегаМаркет", "Страхование покупок"],
    link: "#",
  },
]

const debitCards = [
  {
    id: 4,
    bank: "Тинькофф",
    type: "Дебетовая",
    name: "Блэк",
    badge: "Бесплатно",
    badgeColor: "bg-violet-500/20 text-violet-400",
    cardColor: "from-gray-700 to-gray-900",
    cashback: "До 15% кэшбэк",
    limit: "До 6% на остаток",
    grace: "Бесплатное обслуживание",
    features: ["Кэшбэк до 15% у партнёров", "До 6% на остаток", "Бесплатное обслуживание", "Переводы без комиссии"],
    link: "#",
  },
  {
    id: 5,
    bank: "ВТБ",
    type: "Дебетовая",
    name: "Мультикарта",
    badge: "Новинка",
    badgeColor: "bg-blue-500/20 text-blue-400",
    cardColor: "from-blue-700 to-blue-900",
    cashback: "До 5% кэшбэк",
    limit: "До 8.5% на остаток",
    grace: "Бесплатное обслуживание",
    features: ["Кэшбэк до 5% на всё", "До 8.5% на остаток", "Снятие без комиссии", "Кешбэк за ЖКХ"],
    link: "#",
  },
  {
    id: 6,
    bank: "Газпромбанк",
    type: "Дебетовая",
    name: "Умная карта",
    badge: "Выгодно",
    badgeColor: "bg-teal-500/20 text-teal-400",
    cardColor: "from-teal-700 to-teal-900",
    cashback: "До 10% кэшбэк",
    limit: "До 7% на остаток",
    grace: "Обслуживание от 0 ₽",
    features: ["Кэшбэк 10% в топ-категории", "До 7% на остаток", "Обслуживание от 0 ₽", "Мгновенный выпуск"],
    link: "#",
  },
]

function CardOffer({ offer }: { offer: typeof creditCards[0] }) {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col hover:border-violet-500/40 transition-colors">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`h-12 w-20 rounded-lg bg-gradient-to-br ${offer.cardColor} flex items-center justify-center`}>
            <CreditCard className="h-5 w-5 text-white opacity-80" />
          </div>
          <div>
            <p className="text-xs text-gray-500">{offer.bank}</p>
            <p className="text-sm font-semibold text-white">{offer.name}</p>
          </div>
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${offer.badgeColor}`}>{offer.badge}</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-5">
        {[
          { label: "Кэшбэк", value: offer.cashback },
          { label: "Лимит / Остаток", value: offer.limit },
          { label: "Льготный период", value: offer.grace },
        ].map((item) => (
          <div key={item.label} className="rounded-lg bg-[#1a1a1a] border border-[#262626] p-2.5 text-center">
            <p className="text-xs text-gray-500 mb-1">{item.label}</p>
            <p className="text-xs font-medium text-violet-400 leading-tight">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2 mb-5">
        {offer.features.map((f, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-violet-400 flex-shrink-0" />
            <span className="text-sm text-gray-300">{f}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <Button asChild className="w-full bg-violet-600 hover:bg-violet-700 text-white">
          <a href={offer.link} target="_blank" rel="noopener noreferrer">
            Оформить <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}

export default function KartyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Назад на главную
        </Link>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-3 py-1 mb-4">
            <CreditCard className="h-3.5 w-3.5 text-violet-400" />
            <span className="text-xs text-violet-400 font-medium">Карты</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Выберите карту с лучшими условиями</h1>
          <p className="text-gray-400 text-lg">Кредитные и дебетовые карты от топовых банков — максимальный кэшбэк, без скрытых комиссий</p>
        </div>

        <div className="mb-3">
          <div className="flex items-center gap-2 mb-5">
            <Star className="h-4 w-4 text-amber-400" />
            <h2 className="text-lg font-semibold text-white">Кредитные карты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {creditCards.map((offer) => (
              <CardOffer key={offer.id} offer={offer} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-2 mb-5">
            <Gift className="h-4 w-4 text-teal-400" />
            <h2 className="text-lg font-semibold text-white">Дебетовые карты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {debitCards.map((offer) => (
              <CardOffer key={offer.id} offer={offer} />
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Percent, title: "Максимальный кэшбэк", desc: "Подберём карту с наибольшим кэшбэком под ваши категории трат" },
            { icon: CreditCard, title: "Мгновенный выпуск", desc: "Большинство карт выпускается онлайн и доставляется курьером" },
            { icon: Gift, title: "Бонусы при оформлении", desc: "Специальные условия для клиентов, оформивших карту через нас" },
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
