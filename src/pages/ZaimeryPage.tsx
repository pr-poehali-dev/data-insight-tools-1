import { Link } from "react-router-dom"
import { ArrowLeft, CheckCircle2, Zap, Shield, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"

const zaimery = [
  {
    id: 1,
    badge: "АКЦИЯ — первый 0%",
    badgeColor: "bg-orange-500/20 text-orange-400",
    title: "Первый заём без процентов",
    subtitle: "от 2 000 до 30 000 руб. · срок от 7 до 30 дней",
    features: [
      "Сумма: от 2 000 до 30 000 руб.",
      "Срок: от 7 до 30 дней",
      "Ставка: 0% (новые) / 0,8% в день (повторные)",
      "Досрочное погашение без комиссии",
      "Без скрытых подписок и комиссий",
    ],
    rate: "от 0%",
    rateLabel: "первый займ",
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/a631f970-de50-4bb1-8c26-9bc49a8ecc21.png",
    disclaimer: "Заём от 2000 руб. до 30000 руб., срок до 30 дней, ПСК 292% годовых, ставка 0-0,8%. ПАО МКК «Займер». ИНН: 5406836941. ОГРН: 1235400049356. 18+",
    link: "https://t.fincpanetwork.ru/click/91093/15/?erid=2W5zFHwA2h6",
  },
  {
    id: 2,
    badge: "Первый займ бесплатно",
    badgeColor: "bg-green-500/20 text-green-400",
    title: "Первый онлайн заём бесплатно",
    subtitle: "от 1 500 до 100 000 руб. · срок от 5 дней до 12 месяцев",
    features: [
      "Сумма: от 1 500 до 100 000 руб.",
      "Первый займ до 15 000 руб. — без процентов",
      "Срок: от 5 дней до 12 месяцев",
      "Ставка: от 0% до 0,8% в день",
      "ПСК: от 0% до 292% в год",
    ],
    rate: "от 0%",
    rateLabel: "первый займ",
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/f7da0b37-f62f-41b2-8465-271635b4a3a9.jpg",
    disclaimer: "ООО МФК «Мани Мен». Полная стоимость займа 0-292% годовых. При своевременном погашении первичного займа на сумму от 1500 до 15000 рублей на срок от 5 до 21 дня полная стоимость займа составит 0%. Оценивайте свои финансовые возможности и риски.",
    link: "https://go.leadgid.com/aff_c?aff_id=143535&offer_id=5024&p=10705&erid=LjN8KHDvg",
  },
  {
    id: 3,
    badge: "До 30 000 ₽",
    badgeColor: "bg-yellow-500/20 text-yellow-400",
    title: "Решение по заявке за 1 минуту",
    subtitle: "от 2 000 до 30 000 руб. · срок от 1 до 30 дней",
    features: [
      "Сумма: от 2 000 до 30 000 руб.",
      "Срок: от 1 до 30 дней",
      "Ставка: от 0% до 0,8% в день",
      "Бесплатная пролонгация (продление) срока займа",
      "Время заполнения анкеты: от 2 до 7 минут",
    ],
    rate: "от 0%",
    rateLabel: "в день",
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/a71d7a20-1cd9-4a13-9aee-14976a371c42.png",
    disclaimer: "Реклама ООО МКК «Срочноденьги» ИНН 5260271530. Диапазон полной стоимости займа 292%-292% годовых. Ставка 0,8%/день. Сумма от 2 до 100 тыс.руб. Срок от 1 до 360 дней. Без залога.",
    link: "https://t.fincpanetwork.ru/click/91093/38/?erid=LjN8Kaxif",
  },
  {
    id: 4,
    badge: "До 30 000 ₽",
    badgeColor: "bg-blue-500/20 text-blue-400",
    title: "Займ на карту за 15 минут",
    subtitle: "от 1 000 до 30 000 руб. · срок от 5 до 30 дней",
    features: [
      "Сумма: от 1 000 до 30 000 руб.",
      "Срок: от 5 до 30 дней",
      "Ставка: 0,8% в день",
      "Досрочное погашение без комиссии",
      "Без посещения офиса",
    ],
    rate: "0,8%",
    rateLabel: "в день",
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/4b88082a-32e1-4c9d-9636-2cda37052f35.jpg",
    disclaimer: "ПСК 292% годовых. Ставка в день 0,8%. Сумма от 1000 руб. до 30000 руб. Срок от 5 до 30 дней. Валюта: Рубли. Оценивайте свои финансовые возможности и риски.",
    link: "https://t.fincpanetwork.ru/click/91093/241/?erid=LjN8K54Q9",
  },
  {
    id: 5,
    badge: "Первые 10 дней 0%",
    badgeColor: "bg-violet-500/20 text-violet-400",
    title: "Первые 10 дней бесплатно",
    subtitle: "от 3 000 до 30 000 руб. · срок от 12 до 30 дней",
    features: [
      "Сумма: от 3 000 до 30 000 руб.",
      "Срок: от 12 до 30 дней",
      "Ставка: 0% с 1 по 10 день, далее 0,07%/день",
      "Без залога и поручителей",
      "Высокое одобрение, без визита в офис",
    ],
    rate: "от 0%",
    rateLabel: "первые 10 дней",
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/fb4959a9-422e-419f-bcc0-f16f454b4245.jpg",
    disclaimer: "ООО МКК Быстроденьги. ПСК 25,550%-25,550%. Ставка 0,07% в день (0% с 1 по 10 день при возврате не позднее 10-го дня). Сумма от 3000 до 30000 руб. Срок от 12 до 30 дней. 18+",
    link: "https://t.fincpanetwork.ru/click/91093/613/?erid=LjN8JtHPe",
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
            <div key={item.id} className="rounded-2xl bg-[#141414] border border-[#262626] overflow-hidden hover:border-violet-500/40 transition-colors">
              <div className="w-full">
                <img src={item.image} alt={item.title} className="w-full object-cover max-h-52" />
              </div>

              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-white mb-0.5">{item.title}</h2>
                    <p className="text-sm text-gray-400">{item.subtitle}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-0.5 shrink-0">
                    <span className="text-2xl font-bold text-white">{item.rate}</span>
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

                <div className="flex items-center gap-3 mb-4">
                  <Button asChild className="bg-violet-600 hover:bg-violet-500 text-white font-medium px-6">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Оформить <ArrowUpRight className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Shield className="h-3.5 w-3.5" />
                    Бесплатно для клиентов
                  </div>
                </div>

                <p className="text-[10px] text-gray-600 leading-relaxed">{item.disclaimer}</p>
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