import type { ReactElement } from 'react'

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

export const cardBuilder = (buildCard: BuildCardFn): ReactElement => {
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

  return (
    <div className="border border-black p-6 rounded space-y-2">
      {title && <h1 className="font-medium text-xl">{title}</h1>}
      {description && <p>{description}</p>}
      {(tags.length !== 0 || buttons.length !== 0) && (
        <div className="pt-2 space-y-2">
          {tags.length !== 0 && (
            <div className="flex flex-wrap space-x-2">
              {tags.map(tag => (
                <span className="border border-black rounded-full px-2 text-sm">#{tag.label}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
