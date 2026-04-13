import { CreditCard, ArrowUpRight, Star } from "lucide-react"
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

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <CreditCard className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Карты с выгодными условиями</h3>
      <p className="mb-4 text-sm text-gray-400">Подберём кредитную или дебетовую карту с максимальным кэшбэком и без скрытых комиссий</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Все предложения <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

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

        <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white mt-1">
          Подобрать карту
        </Button>
      </div>
    </div>
  )
}
