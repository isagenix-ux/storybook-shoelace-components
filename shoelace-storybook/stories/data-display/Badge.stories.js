import { html } from 'lit';

export default {
  title: 'Shoelace/shoelace-storybook/Data Display/Badge',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-badge
      variant=${args.variant}
      ?pill=${args.pill}
      ?pulse=${args.pulse}
    >
      ${args.content}
    </sl-badge>
  `,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger']
    },
    pill: { control: 'boolean' },
    pulse: { control: 'boolean' },
    content: { control: 'text' }
  }
};

export const Primary = {
  args: {
    variant: 'primary',
    content: 'Badge'
  }
};

export const Pill = {
  args: {
    variant: 'primary',
    pill: true,
    content: 'Badge'
  }
};

export const Pulse = {
  args: {
    variant: 'danger',
    pulse: true,
    content: '4'
  }
}; 