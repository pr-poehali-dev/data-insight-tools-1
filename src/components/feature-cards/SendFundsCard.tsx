import { MessageCircle, ArrowUpRight, User, Calendar, Phone } from "lucide-react"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <MessageCircle className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Бесплатная консультация</h3>
      <p className="mb-4 text-sm text-gray-400">Эксперт ответит на все вопросы — поможем выбрать нужный продукт и условия</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Записаться <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-3 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div>
          <label className="mb-1.5 flex items-center gap-1 text-xs text-gray-400">
            <User className="h-3 w-3" /> Ваше имя
          </label>
          <div className="flex items-center rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <input
              type="text"
              placeholder="Иван Иванов"
              className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-1 text-xs text-gray-400">
            <Phone className="h-3 w-3" /> Телефон
          </label>
          <div className="flex items-center rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-1 text-xs text-gray-400">
            <Calendar className="h-3 w-3" /> Что вас интересует?
          </label>
          <div className="flex items-center rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <select className="flex-1 bg-transparent text-gray-400 outline-none text-sm">
              <option value="" className="bg-[#0f0f0f]">Выберите услугу...</option>
              <option value="ip" className="bg-[#0f0f0f]">Оформление ИП</option>
              <option value="credit" className="bg-[#0f0f0f]">Кредитная карта</option>
              <option value="debit" className="bg-[#0f0f0f]">Дебетовая карта</option>
              <option value="consult" className="bg-[#0f0f0f]">Общая консультация</option>
            </select>
          </div>
        </div>

        <button className="w-full rounded-lg bg-violet-600 hover:bg-violet-700 text-white py-2.5 text-sm font-medium transition-colors">
          Отправить заявку
        </button>
      </div>
    </div>
  )
}
