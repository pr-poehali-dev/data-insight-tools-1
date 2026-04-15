import { useState } from "react"
import { MessageCircle, ArrowUpRight } from "lucide-react"

export function SendFundsCard() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <MessageCircle className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Бесплатная консультация</h3>
      <p className="mb-6 text-sm text-gray-400">Эксперт ответит на все вопросы — поможем выбрать нужный продукт и условия</p>

      <div className="relative inline-block">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
        >
          Записаться <ArrowUpRight className="ml-1 h-4 w-4" />
        </button>
        {hovered && (
          <div className="absolute left-0 top-7 z-10 whitespace-nowrap rounded-lg bg-[#1f1f1f] border border-[#2a2a2a] px-3 py-2 text-sm text-violet-400 shadow-lg">
            ymiiva555@gmail.com
          </div>
        )}
      </div>
    </div>
  )
}