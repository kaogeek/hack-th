import { Meta, StoryObj } from '@storybook/react'

import { cardBuilder } from '@hackth/react'

const meta: Meta = {
  title: 'Components/Card',
  args: {
    title: 'Budgeting',
    description: 'แอบมองเธอเพียงผู้เดียวก่อนโตแล้วจะเป็นคนพิเศษงมุ้แตกระเบิดจนไป ฉันคิดถึงความรู้สึกของเรามาเต้นไป',
    tags: [
      {
        label: 'api',
        to: 'https://creatorsgarten.org'
      },
      {
        label: 'in-progress',
        to: 'https://creatorsgarten.org'
      },
    ]
  },
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    tags: { control: 'object' }
  },
}
export default meta

export const Primary: StoryObj = {
  render: (args) => {
    // @ts-ignore
    const { title, description, tags } = args

    return cardBuilder(card => {
      card.title(title)
      card.description(description)
      
      tags.forEach(tag => card.tag(tag))
    })
  },
};
