import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, CheckCircle2, FileText, Shield, Clock, Users, Mail, Zap } from "lucide-react"
import { Header } from "@/components/Header"

const sections = [
  {
    icon: FileText,
    title: "Как мы работаем",
    items: [
      "Вы оставляете заявку или выбираете продукт на сайте",
      "Наш специалист связывается с вами в течение 15 минут",
      "Подбираем оптимальное предложение под ваши задачи",
      "Сопровождаем на всех этапах оформления",
      "Помогаем с документами и ответами на вопросы банка",
    ],
  },
  {
    icon: Shield,
    title: "Наши гарантии",
    items: [
      "Сервис полностью бесплатен для клиентов",
      "Работаем только с лицензированными банками РФ",
      "Не передаём ваши данные третьим лицам",
      "Конфиденциальность всех персональных данных",
      "Не берём предоплату — только результат",
    ],
  },
  {
    icon: Clock,
    title: "Сроки оформления",
    items: [
      "Регистрация ИП: от 1 рабочего дня",
      "Открытие расчётного счёта: от 1 часа",
      "Выпуск дебетовой карты: мгновенно онлайн",
      "Одобрение кредитной карты: от 2 минут",
      "Доставка карты курьером: 1–3 рабочих дня",
    ],
  },
  {
    icon: Users,
    title: "Кому подходит",
    items: [
      "Начинающим предпринимателям, открывающим первое ИП",
      "Физическим лицам, желающим выбрать выгодную карту",
      "Владельцам бизнеса в поиске лучших банковских условий",
      "Тем, кто хочет сэкономить время на сравнении предложений",
      "Клиентам, которым нужна помощь с документами",
    ],
  },
]

const faq = [
  {
    q: "Сколько стоит ваш сервис?",
    a: "Наш сервис абсолютно бесплатен для клиентов. Мы получаем вознаграждение от банков-партнёров за успешное оформление продуктов.",
  },
  {
    q: "Насколько безопасно передавать вам данные?",
    a: "Мы работаем строго в рамках законодательства РФ о персональных данных. Ваши данные передаются только выбранному банку и нигде больше не используются.",
  },
  {
    q: "Что если банк откажет?",
    a: "В случае отказа мы предложим альтернативные банки с более мягкими требованиями или поможем устранить причину отказа.",
  },
  {
    q: "Можно ли оформить ИП, если я живу не в Москве?",
    a: "Да, мы работаем по всей России. Регистрация ИП и открытие счёта происходят полностью онлайн без привязки к региону.",
  },
  {
    q: "Как быстро с нами свяжутся?",
    a: "Наши специалисты перезванивают в течение 15 минут в рабочие часы (пн–пт 9:00–20:00, сб 10:00–17:00).",
  },
]

export default function UsloviyaPage() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".anim-card")
    if (!cards) return
    cards.forEach((card, i) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(32px)"
      card.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.style.opacity = "1"
          card.style.transform = "translateY(0)"
        })
      })
    })
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Назад на главную
        </Link>

        <div className="flex items-center gap-2 mb-6">
          <Zap className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="text-white font-semibold text-lg">Лучшие условия для оформления</span>
        </div>

        <div className="mb-10 anim-card" style={{opacity:0}}>
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-3 py-1 mb-4">
            <Shield className="h-3.5 w-3.5 text-violet-400" />
            <span className="text-xs text-violet-400 font-medium">Условия работы</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Условия и как мы работаем</h1>
          <p className="text-gray-400 text-lg">Прозрачные условия сотрудничества, гарантии и ответы на частые вопросы</p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {sections.map(({ icon: Icon, title, items }) => (
            <div key={title} className="anim-card rounded-2xl bg-[#141414] border border-[#262626] p-6" style={{opacity:0}}>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                  <Icon className="h-5 w-5 text-violet-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">{title}</h2>
              </div>
              <div className="space-y-3">
                {items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Частые вопросы</h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="rounded-xl bg-[#141414] border border-[#262626] p-5">
                <p className="text-sm font-semibold text-white mb-2">{item.q}</p>
                <p className="text-sm text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#141414] border border-violet-500/20 p-6">
          <h2 className="text-lg font-bold text-white mb-2">Остались вопросы?</h2>
          <p className="text-sm text-gray-400 mb-5">Свяжитесь с нами — ответим быстро и по существу</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-[#1a1a1a] border border-[#262626] px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                <Mail className="h-4 w-4 text-violet-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-white">ymiiva555@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 text-center text-sm text-gray-400">
        От оформления ИП до подбора выгодной карты —{" "}
        <span className="font-medium text-white">ваш личный финансовый помощник.</span>
      </footer>
    </main>
  )
}