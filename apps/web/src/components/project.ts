import { cardBuilder } from '@hackth/react'

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
    
    tags.forEach(tag =>
      card.tag({
        label: tag,
        to: 'https://google.com',
      })
    )
    card.title(title)
    card.description(description)

  })
