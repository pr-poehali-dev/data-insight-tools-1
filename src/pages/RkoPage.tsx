import { Link } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, CheckCircle2, Building2, Clock, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"

const offers = [
  {
    id: 1,
    bank: "ВТБ",
    badge: "0 руб.",
    badgeColor: "bg-blue-500/20 text-blue-400",
    title: "ВТБ — РКО",
    description: "Расчётный счёт для бизнеса с бесплатным обслуживанием до 12 месяцев.",
    features: [
      "Открытие счёта — БЕСПЛАТНО / 0 руб.",
      "Удобный мобильный и интернет-банк — БЕСПЛАТНО, управляйте бизнесом с любого устройства",
      "КЭП для бизнеса — БЕСПЛАТНО при открытии счёта",
      "Широкая сеть отделений по работе с бизнесом в шаговой доступности",
      "Удалённое открытие счёта, с услугой выездного сервиса",
      "Для ИП переводы на свой счёт физ. лица — без лимитов, без комиссий",
      "Обслуживание счёта для бизнеса до 12 мес. — 0 руб.",
      "Продлённый платёжный день",
      "Поддержка 24/7",
      "Открытие счёта для ООО в офисе — за 25 минут",
      "Привлекательные бонусы от партнёров",
      "Бизнес-карта для бизнеса — обслуживание 0 руб., выпуск виртуальной карты за 1 минуту, повышенный кэшбэк",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/93226358-8db1-4c70-9d3f-a1a5aa48a709.png",
    link: "https://go.leadgid.ru/aff_c?aff_id=143535&offer_id=6058&p=10705&erid=LjN8KPGbS",
  },
  {
    id: 2,
    bank: "Т-Банк",
    badge: "4 мес. бесплатно",
    badgeColor: "bg-yellow-500/20 text-yellow-400",
    title: "Т-Банк — РКО",
    description: "До четырёх месяцев бесплатного обслуживания для нового бизнеса.",
    features: [
      "До четырёх месяцев бесплатного обслуживания",
      "Бесплатная онлайн-бухгалтерия",
      "Платежи в налоговую — бесплатно",
      "Вывод денег на личные карты Тинькофф — до 1 000 000 ₽ бесплатно на тарифе «Профессиональный»",
      "Бесплатное сопровождение по 115-ФЗ",
      "До 500 000 ₽ на сервисы партнёров",
      "Все переводы ИП и юридическим лицам в Тинькофф бесплатно",
      "Платёжный день с 01:00 до 21:00 в другие банки и круглосуточно внутри Тинькофф",
      "Возможность открыть счёт-овердрафт в первый день после открытия РКО",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/8770058e-79e8-4ec2-83fb-a4989557b111.png",
    link: "https://go.leadgid.ru/aff_c?aff_id=143535&offer_id=4307&p=10705&erid=LjN8KESJh",
  },
  {
    id: 4,
    bank: "Промсвязьбанк",
    badge: "0 ₽",
    badgeColor: "bg-orange-500/20 text-orange-400",
    title: "Промсвязьбанк — РКО",
    description: "Получите карту за 5 минут — начните пользоваться уже сегодня!",
    features: [
      "Бесплатные переводы физлицам до 10 млн ₽",
      "Обслуживание счёта — 0 ₽",
      "Кэшбэк по карте — до 10%",
      "Эквайринг",
      "Комиссия от 0,4%",
      "Мгновенное зачисление на счёт",
      "Для онлайн и офлайн бизнесов",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/66004ba7-cdf0-4fe5-9f6f-56a45d0f56da.png",
    link: "https://go.leadgid.ru/aff_c?aff_id=143535&offer_id=7029&p=10705&erid=2W5zFJEjRtL",
  },
  {
    id: 5,
    bank: "Уралсиб",
    badge: "От 0 ₽",
    badgeColor: "bg-purple-500/20 text-purple-400",
    title: "Уралсиб Банк — РКО",
    description: "Счёт для бизнеса с бесплатными переводами и выгодным кэшбэком.",
    features: [
      "Открытие счёта — от 0 руб.",
      "Год обслуживания — от 0 руб.",
      "До 7% кэшбэк по бизнес-карте",
      "До 3% на остаток по счёту по бизнес-карте",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/03937e0c-46fe-4d3c-9117-98abe371fb0c.jpg",
    link: "https://go.leadgid.ru/aff_c?aff_id=143535&offer_id=5568&p=10705&erid=2W5zFJkoeBA",
  },
  {
    id: 6,
    bank: "МТС Банк",
    badge: "ТОП-40",
    badgeColor: "bg-red-500/20 text-red-400",
    title: "МТС Банк — РКО",
    description: "Реквизиты сразу после заявки: работайте с договорами контрагентов без ожидания.",
    features: [
      "Бесплатные переводы: совершайте бесплатные переводы на счёта физлиц до 1 млн. ₽",
      "Бонусы от партнёров: откройте счёт и получайте доступ к предложениям от партнёров",
      "Надёжность: входим в ТОП-40 банков по активам",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/7d4d794a-244b-4aec-a08d-f3fb7bfb0d12.png",
    link: "#",
  },
  {
    id: 7,
    bank: "ЛокоБанк",
    badge: "Бесплатно",
    badgeColor: "bg-teal-500/20 text-teal-400",
    title: "Локо Банк — РКО",
    description: "КБ «ЛОКО-Банк» (АО) предлагает привлекательные условия для всех новых клиентов!",
    features: [
      "Бесплатное открытие и обслуживание расчётного счёта",
      "Бесплатные переводы физическим лицам до 2 миллионов рублей и до 150 тысяч рублей через СБП",
      "Фиксированную стоимость за платежи и поручения",
      "Удобные и необходимые сервисы",
      "Открытие РКО в любой точке России",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/4a167e4e-5bf8-47f9-85eb-028c88e777ba.png",
    link: "https://t.fincpanetwork.ru/click/91093/354/?erid=2W5zFFxcWrk",
  },
  {
    id: 3,
    bank: "УБРиР",
    badge: "От 0 ₽",
    badgeColor: "bg-violet-500/20 text-violet-400",
    title: "УБРиР Банк — РКО",
    description: "Тарифы от 0 рублей — открытие и обслуживание расчётного счёта для бизнеса.",
    features: [
      "Тарифы от 0 рублей — открытие и обслуживание",
      "Бесплатная бизнес-карта со 100% кэшбэком в первый месяц",
      "Онлайн-бухгалтерия с предложениями партнёров до 1 года бесплатно",
      "Выездное открытие на место ведения бизнеса",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/55d49a7d-cadb-489d-a3a4-f0512cc23a5b.png",
    link: "https://t.fincpanetwork.ru/click/91093/631/?erid=2W5zFHvrcYQ",
  },
]

export default function RkoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Назад на главную
        </Link>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-3 py-1 mb-4">
            <Building2 className="h-3.5 w-3.5 text-violet-400" />
            <span className="text-xs text-violet-400 font-medium">РКО — Расчётный счёт</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Расчётный счёт для бизнеса</h1>
          <p className="text-gray-400 text-lg">Выберите банк с лучшими условиями РКО — открытие счёта бесплатно, онлайн, без лишних документов</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {offers.map((offer) => (
            <div key={offer.id} className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col hover:border-violet-500/40 transition-colors">
              <div className="mb-4 rounded-xl overflow-hidden">
                <img src={offer.image} alt={offer.bank} className="w-full object-cover" />
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{offer.title}</h3>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ml-2 ${offer.badgeColor}`}>{offer.badge}</span>
              </div>

              <p className="text-sm text-gray-400 mb-5">{offer.description}</p>

              <div className="space-y-2 mb-6">
                {offer.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-violet-400 flex-shrink-0 mt-0.5" />
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
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Clock, title: "Быстрое открытие", desc: "Расчётный счёт открывается онлайн за 1 день без визита в банк" },
            { icon: Shield, title: "Надёжные банки", desc: "Работаем только с лицензированными банками с государственной поддержкой" },
            { icon: Zap, title: "Без скрытых комиссий", desc: "Все условия прозрачны — никаких сюрпризов после открытия счёта" },
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