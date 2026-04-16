import { Link } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, CheckCircle2, FileText, Clock, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"

const offers = [
  {
    id: 1,
    bank: "Альфа-Банк",
    badge: "Бесплатно",
    badgeColor: "bg-violet-500/20 text-violet-400",
    title: "Альфа-Банк — Регистрация бизнеса и РКО",
    description: "Бесплатно. Без госпошлины и оплаты за электронную подпись.",
    features: [
      "Полностью онлайн. Всё удалённо, даже подпись и отправка документов в ФНС. Юрист не потребуется",
      "Сделаем всё сами. Полный пакет документов для регистрации ИП",
      "Бесплатно откроем расчётный счёт",
      "Бесплатная бухгалтерия",
      "300 000 ₽ бонусы на развитие — подарки от партнёров Альфа-Банка после открытия счёта",
      "Круглосуточные платежи",
      "До 5% кэшбэк за бизнес-расходы по карте",
      "Платим деньги за любые действия по счёту",
    ],
    color: "bg-red-600",
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/cbbb7203-3b10-4558-8ec5-1418d51b2f49.png",
    link: "https://go.leadgid.ru/aff_c?aff_id=143535&offer_id=5827&p=10583&erid=2W5zFHq9R76",
  },
  {
    id: 2,
    bank: "ВТБ",
    badge: "0 руб.",
    badgeColor: "bg-blue-500/20 text-blue-400",
    title: "ВТБ — Регистрация бизнеса",
    description: "Всё для старта бизнеса за 0 ₽. Обслуживание до 12 месяцев — бесплатно.",
    features: [
      "Открытие счёта — БЕСПЛАТНО / 0 руб.",
      "Надёжный банк с государственной поддержкой (сохранность средств бизнеса даже в самых нестабильных условиях)",
      "Удобный мобильный и интернет-банк — БЕСПЛАТНО, управляйте бизнесом с любого устройства",
      "КЭП для бизнеса — БЕСПЛАТНО при открытии счёта",
      "Широкая сеть отделений по работе с бизнесом в шаговой доступности",
      "Удалённое открытие счёта, с услугой выездного сервиса",
      "Для ИП переводы на свой счёт физ. лица — без лимитов, без комиссий",
      "Обслуживание счёта для бизнеса до 12 мес. — 0 руб.",
      "Поддержка 24/7",
    ],
    color: "bg-blue-600",
    image: "https://cdn.poehali.dev/projects/7f11e639-bdf9-4f98-a1b1-579e441c19f9/bucket/a8389f30-eaf9-4529-9b63-64ff4bf73760.jpg",
    link: "https://go.leadgid.ru/aff_c?aff_id=143535&offer_id=6610&p=10705&erid=LjN8K1SPC",
  },
]

export default function IpPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Назад на главную
        </Link>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-3 py-1 mb-4">
            <FileText className="h-3.5 w-3.5 text-violet-400" />
            <span className="text-xs text-violet-400 font-medium">Оформление ИП</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Выберите предложение для открытия ИП</h1>
          <p className="text-gray-400 text-lg">Регистрация бесплатно, онлайн, без визита в налоговую — выберите банк с лучшими условиями для вашего бизнеса</p>
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
                <Button
                  asChild
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                >
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
            { icon: Clock, title: "За 1 день", desc: "Регистрация ИП проходит в течение одного рабочего дня" },
            { icon: Shield, title: "Без рисков", desc: "Проверяем документы перед подачей — отказы исключены" },
            { icon: Zap, title: "Полностью онлайн", desc: "Не нужно ехать в налоговую или МФЦ — всё дистанционно" },
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