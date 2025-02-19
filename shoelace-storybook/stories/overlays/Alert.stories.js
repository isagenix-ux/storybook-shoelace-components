import { html } from 'lit';

export default {
  title: 'Shoelace/shoelace-storybook/Overlays/Alert',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-alert
      variant=${args.variant}
      ?open=${args.open}
      ?closable=${args.closable}
      duration=${args.duration}
    >
      ${args.prefix ? html`<sl-icon slot="icon" name=${args.prefix}></sl-icon>` : ''}
      ${args.content}
    </sl-alert>
  `,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger']
    },
    open: { control: 'boolean' },
    closable: { control: 'boolean' },
    duration: { control: 'number' },
    prefix: { control: 'text' },
    content: { control: 'text' }
  }
};

export const Primary = {
  args: {
    variant: 'primary',
    open: true,
    closable: true,
    content: 'This is a primary alert.',
    prefix: 'info-circle'
  }
};

export const Success = {
  args: {
    variant: 'success',
    open: true,
    closable: true,
    content: 'This is a success alert.',
    prefix: 'check2-circle'
  }
}; 