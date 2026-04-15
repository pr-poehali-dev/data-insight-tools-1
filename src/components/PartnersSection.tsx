import { useEffect, useRef } from "react"

const partners = [
  {
    name: "Тинькофф",
    bg: "bg-yellow-400",
    text: "text-black",
    label: "Т",
  },
  {
    name: "ВТБ",
    bg: "bg-blue-600",
    text: "text-white",
    label: "ВТБ",
  },
  {
    name: "Альфа-Банк",
    bg: "bg-red-600",
    text: "text-white",
    label: "А",
  },
  {
    name: "Газпромбанк",
    bg: "bg-blue-800",
    text: "text-white",
    label: "Г",
  },
  {
    name: "Уралсиб",
    bg: "bg-purple-700",
    text: "text-white",
    label: "УС",
  },
  {
    name: "МТС Банк",
    bg: "bg-red-500",
    text: "text-white",
    label: "МТС",
  },
  {
    name: "УБРиР",
    bg: "bg-gradient-to-br from-blue-500 to-red-500",
    text: "text-white",
    label: "УБ",
  },
  {
    name: "Локо Банк",
    bg: "bg-teal-600",
    text: "text-white",
    label: "Л",
  },
  {
    name: "ПСБ",
    bg: "bg-orange-600",
    text: "text-white",
    label: "ПСБ",
  },
]

const doubled = [...partners, ...partners]

export function PartnersSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let animId: number
    let pos = 0
    const speed = 0.5
    const singleWidth = track.scrollWidth / 2

    function animate() {
      pos += speed
      if (pos >= singleWidth) pos = 0
      if (track) track.style.transform = `translateX(-${pos}px)`
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section className="py-8 overflow-hidden">
      <div className="relative">
        <div
          ref={trackRef}
          className="flex items-center gap-8 w-max"
          style={{ willChange: "transform" }}
        >
          {doubled.map((p, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <div className={`h-8 w-8 rounded-full ${p.bg} flex items-center justify-center flex-shrink-0`}>
                <span className={`text-[10px] font-bold ${p.text}`}>{p.label}</span>
              </div>
              <span className="text-sm font-medium text-gray-400 whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
