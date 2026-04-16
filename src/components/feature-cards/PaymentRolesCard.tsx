import { CreditCard, ArrowUpRight, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const cards = [
  {
    name: "Кредитная карта",
    cashback: "До 10% кэшбэк",
    limit: "Лимит до 1 000 000 ₽",
    color: "bg-violet-600",
    badge: "Хит",
  },
  {
    name: "Дебетовая карта",
    cashback: "До 5% на остаток",
    limit: "Бесплатное обслуживание",
    color: "bg-teal-600",
    badge: null,
  },
]

const banks = [
  { label: "ВТБ", bg: "bg-blue-600", title: "ВТБ" },
  { label: "А", bg: "bg-red-600", title: "Альфа-Банк" },
  { label: "Т", bg: "bg-yellow-400", title: "Тинькофф" },
  { label: "Г", bg: "bg-blue-800", title: "Газпромбанк" },
]

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
          <CreditCard className="h-5 w-5 text-gray-400" />
        </div>
        <div className="flex items-center gap-0.5">
          {banks.map((b, i) => (
            <div key={i} className="flex items-center">
              <div title={b.title} className={`h-7 w-7 rounded-full ${b.bg} flex items-center justify-center border-2 border-[#141414] -ml-1 first:ml-0`}>
                <span className={`text-[9px] font-bold ${b.bg === "bg-yellow-400" ? "text-black" : "text-white"}`}>{b.label}</span>
              </div>
              {i < banks.length - 1 && <span className="text-gray-600 text-xs mx-0.5">+</span>}
            </div>
          ))}
          <span className="ml-2 text-xs text-gray-500">и другие банки</span>
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Карты с выгодными условиями</h3>
      <p className="mb-4 text-sm text-gray-400">Подберём кредитную или дебетовую карту с максимальным кэшбэком и без скрытых комиссий</p>

      <Link to="/karty" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Все предложения <ArrowUpRight className="ml-1 h-4 w-4" />
      </Link>

      <div className="mt-auto space-y-3 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        {cards.map((card, index) => (
          <div key={index} className="rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`h-6 w-6 rounded ${card.color} flex items-center justify-center`}>
                  <CreditCard className="h-3 w-3 text-white" />
                </div>
                <p className="text-sm font-medium text-white">{card.name}</p>
              </div>
              {card.badge && (
                <span className="flex items-center gap-1 text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
                  <Star className="h-3 w-3" /> {card.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-violet-400 mb-0.5">{card.cashback}</p>
            <p className="text-xs text-gray-500">{card.limit}</p>
          </div>
        ))}

        <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white mt-1" asChild>
          <Link to="/karty">Подобрать карту</Link>
        </Button>
      </div>

      <div className="mt-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-white">Займы онлайн</p>
          <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Быстро</span>
        </div>
        <div className="space-y-2 mb-3">
          <div className="rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-3">
            <p className="text-sm font-medium text-white mb-1">До 30 000 ₽</p>
            <p className="text-xs text-green-400 mb-0.5">Первый займ под 0%</p>
            <p className="text-xs text-gray-500">Одобрение за 5 минут</p>
          </div>
          <div className="rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-3">
            <p className="text-sm font-medium text-white mb-1">До 100 000 ₽</p>
            <p className="text-xs text-violet-400 mb-0.5">Только паспорт</p>
            <p className="text-xs text-gray-500">Деньги на карту любого банка</p>
          </div>
        </div>
        <Button className="w-full bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white border border-[#333] mt-1" asChild>
          <Link to="/zaimery">Топ займеров</Link>
        </Button>
      </div>
    </div>
  )
}