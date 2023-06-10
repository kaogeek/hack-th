import { cardBuilder } from '../design-system/card'

interface ProjectProps {
  project: {
    title: string
    description: string
    tags: string[]
  }
}

export const Project = ({ project: {title, description, tags} }: ProjectProps) => {
  const element = cardBuilder(card => {
    card.title(title)

    card.description(description)

    tags.forEach(tag =>
      card.tag({
        label: tag,
        to: 'https://google.com',
      })
    )
  })

  console.log(element)

  return element
}
