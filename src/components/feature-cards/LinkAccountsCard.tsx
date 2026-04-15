import { FileText, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const steps = [
  { label: "Подача заявки онлайн", done: true },
  { label: "Проверка документов", done: true },
  { label: "Регистрация в налоговой", done: false },
  { label: "Открытие расчётного счёта", done: false },
]

const banks = [
  { label: "А", bg: "bg-red-600", title: "Альфа-Банк" },
  { label: "ВТБ", bg: "bg-blue-600", title: "ВТБ" },
  { label: "Т", bg: "bg-yellow-400", title: "Тинькофф" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
          <FileText className="h-5 w-5 text-gray-400" />
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

      <h3 className="mb-2 text-lg font-semibold text-white">Оформление ИП за 1 день</h3>
      <p className="mb-4 text-sm text-gray-400">Регистрируем ИП без визита в налоговую — полностью онлайн и бесплатно</p>

      <Link to="/ip" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </Link>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2.5">
            <div className="flex items-center gap-3">
              <CheckCircle2
                className={`h-4 w-4 ${step.done ? "text-violet-400" : "text-gray-600"}`}
              />
              <p className={`text-sm font-medium ${step.done ? "text-white" : "text-gray-500"}`}>{step.label}</p>
            </div>
            {step.done && (
              <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">Готово</span>
            )}
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-violet-400 hover:text-white hover:bg-[#1f1f1f] mt-2"
          asChild
        >
          <Link to="/ip">Начать оформление</Link>
        </Button>
      </div>
    </div>
  )
}