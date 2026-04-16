import { Link } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, CheckCircle2, CreditCard, Star, Percent, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"

const creditCards = [
  {
    id: 10,
    badge: "До 1 млн ₽",
    badgeColor: "bg-yellow-500/20 text-yellow-400",
    title: "Т-Банк — Кредитная карта «Платинум»",
    description: "",
    features: [
      "Кредитный лимит: до 1 000 000 рублей",
      "Беспроцентный период: до 55 дней",
      "120 дней без процентов предоставляется только при переводе баланса с другой кредитки, то есть, когда клиент переходит в Банк из другого Банка",
    ],
    image: "https://cdn.poehali.dev/files/433a81e2-1ea6-4fa6-be3c-91681c64e8cc.jpg",
    link: "https://go.leadgid.ru/aff_c?aff_id=143535&offer_id=5642&p=10705&erid=LjN8KLpTP",
  },
  {
    id: 11,
    badge: "120 дней без %",
    badgeColor: "bg-purple-500/20 text-purple-400",
    title: "Уралсиб Банк — Кредитная карта",
    description: "",
    features: [
      "5 млн ₽ кредитный лимит",
      "Бесплатное обслуживание карты навсегда без каких-либо условий",
      "До 120 дней без процентов",
      "Для оформления нужен только паспорт",
      "Кэшбэк до 30% за покупки в витрине партнёров",
    ],
    image: "https://cdn.poehali.dev/files/bdc4741a-97ed-46bf-a839-973e9221cc3a.jpg",
    link: "https://t.fincpanetwork.ru/click/91093/407/?erid=2W5zFH4Ww45",
  },
  {
    id: 1,
    badge: "110 дней без %",
    badgeColor: "bg-blue-500/20 text-blue-400",
    title: "ВТБ — Кредитная карта",
    description: "",
    features: [
      "Максимальный кредитный лимит — 1 000 000 р.",
      "Максимальный лимит без подтверждения дохода — 300 000 р.",
      "Льготный период до 200 дней при рефинансировании (погашение задолженности по кредитной карте в другом банке), далее — до 110 дней",
      "Льготный период до 100 дней распространяется на покупки",
      "Снятие наличных и переводы до 50 000 р. без комиссии в первые 30 дней, далее — 5.9% + 590 р.",
      "Бесплатное оформление и обслуживание карты без скрытых условий",
      "Бесплатная доставка карты курьером",
    ],
    image: "https://cdn.poehali.dev/files/9218d324-8d07-4ed7-9da3-db39b97bc6d2.png",
    link: "https://t.fincpanetwork.ru/click/91093/622/?erid=2W5zFJExbPv",
  },
  {
    id: 2,
    badge: "60 дней без %",
    badgeColor: "bg-red-500/20 text-red-400",
    title: "Альфа-Банк — Кредитная карта",
    description: "",
    features: [
      "60 дней без % на покупки",
      "Бесплатное обслуживание в первый год, далее 990 ₽ при наличии расходных операций по кредитному счёту",
      "Кэшбэк до 100% в барабане суперкэшбэка",
      "0 ₽ за доставку",
      "Теперь кэшбэк за любые покупки по кредитке",
      "Максимальный кредитный лимит до 1 000 000 рублей",
      "Есть кредитные каникулы для клиентов с хорошей кредитной историей",
      "Можно переводить собственные деньги с кредитной карты на дебетовую карту или счёт в Альфа-Банке без комиссии",
    ],
    image: "https://cdn.poehali.dev/files/9bbb75a4-8e1d-4cf8-96da-27b16164222a.png",
    link: "#",
  },
]

const debitCards = [
  {
    id: 3,
    badge: "Кэшбэк до 15%",
    badgeColor: "bg-blue-500/20 text-blue-400",
    title: "ВТБ — Дебетовая карта «МИР»",
    description: "Категории кэшбэка на март месяц для новых клиентов:",
    features: [
      "15% на украшения и бижутерию (лимит — 1000 руб.)",
      "8% на цветы (лимит — 1000 руб.)",
      "5% на транспорт, спортивные товары, аптеки",
      "3% на кафе и рестораны",
      "2% на супермаркеты",
      "2% на все покупки",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/69706859-1edd-41cb-a206-ccf0185f6606.jpg",
    link: "https://t.fincpanetwork.ru/click/91093/193/?erid=Kra23hiMc",
  },
  {
    id: 4,
    badge: "Сертификат 2000 ₽",
    badgeColor: "bg-red-500/20 text-red-400",
    title: "Альфа Банк — Дебетовая карта Альфа-Карта",
    description: "Альфа-Банк дарит сертификат на 2000 рублей в Золотое Яблоко, ВБ, Гифтери или Пятёрочку.",
    features: [
      "Бесплатная. Всегда, без условий.",
      "Кэшбэк до 100% в барабане суперкэшбэка и до 30% в категориях на выбор",
      "Бесплатная доставка",
      "До 20% годовых по накопительному Альфа-Счёту",
      "Перевод без комиссии в другие банки по номеру телефона",
      "Бесплатная оплата ЖКХ, Мобильной связи, Штрафов ГИБДД и других услуг в приложении",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/91968efe-d66b-4b73-a3ff-30ca6a2b1f3a.jpg",
    link: "https://rfnd.io/t/wnj8x/?pid=2395&erid=2SDnjcfk959",
  },
  {
    id: 5,
    badge: "3 мес. Pro бесплатно",
    badgeColor: "bg-yellow-500/20 text-yellow-400",
    title: "Дебетовая карта Black",
    description: "3 месяца подписки Т-Банк Pro бесплатно.",
    features: [
      "Кэшбэк в рублях — до 30% по спецпредложениям от партнёров",
      "Обслуживание бесплатно (если на карте, вкладах, накопительных и брокерских счетах каждый день в сумме хранится не менее 50 000 ₽), в остальных случаях 99 руб. в месяц",
      "Возможность выбора 4-х любимых категорий каждый месяц с повышенным кэшбэком 15%",
      "Бесплатное снятие наличных в банкоматах Тинькофф — любую сумму до 500 000 ₽ в месяц",
      "Переводы без комиссии в другой банк по номеру карты или номеру телефона до 20 000 ₽ в месяц, с СБП без комиссии",
      "Мультифункциональное приложение",
      "Круглосуточная поддержка",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/a41db186-978c-40ee-8bf6-89dfd2a31300.png",
    link: "https://go.leadgid.ru/aff_c?aff_id=143535&offer_id=6432&p=10705&erid=LjN8KDq59",
  },
  {
    id: 6,
    badge: "Сертификат 1500 ₽",
    badgeColor: "bg-blue-500/20 text-blue-400",
    title: "Газпромбанк — Дебетовая карта «МИР» + сертификат на выбор 1500₽ ЗЯ, Лента, Озон, ВБ",
    description: "",
    features: [
      "Бесплатное обслуживание",
      "Кэшбэк у партнёров до 20%",
      "Улучшенные возможности карты с Газпром Бонус «Плюс»: карта выпускается с подключённым сервисом",
      "Возможность дополнительно выпустить платёжный стикер и оплачивать покупки в одно касание",
      "Оплата с Gazprom Pay Смартфоном в одно касание или онлайн без ввода реквизитов карты",
      "Оплата услуг ЖКХ без комиссии",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/37302ca3-c0d0-4f7e-8627-2671bb8de281.png",
    link: "https://rfnd.io/t/vh3g3/?pid=1859&erid=2SDnjcoEjZT",
  },
  {
    id: 7,
    badge: "13% годовых",
    badgeColor: "bg-purple-500/20 text-purple-400",
    title: "Уралсиб Банк — Дебетовая карта «Прибыль»",
    description: "",
    features: [
      "Возможность бесплатного обслуживания",
      "Кэшбэк до 3%",
      "Бесплатные переводы до 100 000 ₽ и платежи за ЖКХ, мобильную связь, интернет, штрафы ГИБДД и другие госуслуги",
      "Снятие суммы от 3000 ₽ бесплатно в любом банкомате",
      "Получение неименной карты в день обращения",
      "Для всех клиентов банка доход на фактический ежедневный остаток денежных средств — 13% годовых",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/ab3476c4-6712-45ba-a32c-745aeb0406cc.jpg",
    link: "https://t.fincpanetwork.ru/click/91093/582/?erid=2W5zFHDQrk9",
  },
  {
    id: 8,
    badge: "до 10 000 ₽/мес.",
    badgeColor: "bg-amber-500/20 text-amber-400",
    title: "Фора-Банк — Дебетовая карта МИР «Всё включено»",
    description: "Дебетовая карта «Всё включено» от Фора-Банка — это повышенный кэшбэк в сезонных категориях и у партнёров, который выплачивается рублями на счёт до 10 000 ₽/мес., а также скидки до 40%.",
    features: [
      "5% на сезонные категории",
      "До 10 000 ₽/мес. кэшбэк рублями",
      "Скидки до 40% у партнёров",
      "Бесплатная доставка карты",
    ],
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/0db28e36-5b4a-44f3-aa13-aef51f6a5f7a.png",
    link: "https://rfnd.io/t/w7dkb/?pid=473&erid=2SDnjboQugc",
  },
]

type Offer = {
  id: number
  badge: string
  badgeColor: string
  title: string
  description: string
  features: string[]
  image: string
  link: string
}

function CardOffer({ offer }: { offer: Offer }) {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col hover:border-violet-500/40 transition-colors">
      <div className="mb-4 rounded-xl overflow-hidden">
        <img src={offer.image} alt={offer.title} className="w-full object-cover" />
      </div>

      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-base font-semibold text-white leading-snug">{offer.title}</h3>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ${offer.badgeColor}`}>{offer.badge}</span>
      </div>

      {offer.description && (
        <p className="text-sm text-gray-400 mb-4">{offer.description}</p>
      )}

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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