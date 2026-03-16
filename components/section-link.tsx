"use client"

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react"

type SectionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: `#${string}`
  children: ReactNode
  offset?: number
}

export function SectionLink({
  href,
  children,
  offset = 96,
  onClick,
  ...props
}: SectionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const targetId = href.slice(1)
    const target = document.getElementById(targetId)

    if (!target) {
      onClick?.(event)
      return
    }

    const top = target.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    })

    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`)
    onClick?.(event)
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
