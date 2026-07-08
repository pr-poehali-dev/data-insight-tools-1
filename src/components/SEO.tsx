import { useEffect } from "react"

interface SEOProps {
  title: string
  description: string
  keywords: string
  path: string
}

const SITE_NAME = "Magnitka Prime"
const BASE_URL = "https://magnitkaprime.poehali.app"

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

export function SEO({ title, description, keywords, path }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    document.title = fullTitle

    setMeta("description", description)
    setMeta("keywords", keywords)

    setMeta("og:title", fullTitle, "property")
    setMeta("og:description", description, "property")
    setMeta("og:url", `${BASE_URL}${path}`, "property")
    setMeta("og:type", "website", "property")

    setMeta("twitter:card", "summary_large_image")
    setMeta("twitter:title", fullTitle)
    setMeta("twitter:description", description)

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", `${BASE_URL}${path}`)
  }, [title, description, keywords, path])

  return null
}
