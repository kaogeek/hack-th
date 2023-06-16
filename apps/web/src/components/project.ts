import { cardBuilder } from '@hackth/design-system-legacy'

interface ProjectProps {
  project: {
    title: string
    description: string
    tags: string[]
  }
}

export const Project = ({
  project: { title, description, tags },
}: ProjectProps) =>
  cardBuilder(card => {
    card.title(title)

    card.description(description)

    tags.forEach(tag =>
      card.tag({
        label: tag,
        to: 'https://google.com',
      })
    )
  })
