import type { ReactNode } from "react";

type CardTag = {
  label: string
  to: string
}

type ButtonEvent = {
  label: string
  type: 'event'
  onClick(): void
}

type ButtonLink = {
  label: string
  type: 'link'
  to: string
}

type CardButton = ButtonEvent | ButtonLink

interface Builder {
  title(label: string): void
  description(label: string): void
  tag(tag: CardTag): void
  button(button: CardButton): void
}

type BuildCardFn = (card: Builder) => void

export const cardBuilder = (buildCard: BuildCardFn): ReactNode => {
  let title: string | undefined
  let description: string | undefined
  let tags: CardTag[] = []
  let buttons: CardButton[] = []

  buildCard({
    title(label) {
      if (title) throw new Error('why call title twice i sus')
      title = label
    },
    description(label) {
      if (description) throw new Error('why call description twice i sus')
      description = label
    },
    tag(tag) {
      tags.push(tag)
    },
    button(button) {
      buttons.push(button)
    },
  })

  return <div>{title}</div>
}
