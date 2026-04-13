import { Sparkles, Sun, Diamond, Activity, Zap, Circle, Building } from "lucide-react"

const partners = [
  { name: "Сбербанк", icon: Building },
  { name: "Тинькофф", icon: Sparkles },
  { name: "ВТБ", icon: Diamond },
  { name: "Альфа-Банк", icon: Activity },
  { name: "Открытие", icon: Sun },
  { name: "Росбанк", icon: Zap },
  { name: "Газпромбанк", icon: Circle },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {partners.map((partner) => (
        <div key={partner.name} className="flex items-center gap-2 text-gray-500">
          <partner.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{partner.name}™</span>
        </div>
      ))}
    </section>
  )
}