import { html } from 'lit';

export default {
  title: 'Shoelace/shoelace-storybook/Data Display/Avatar',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-avatar
      image=${args.image}
      label=${args.label}
      shape=${args.shape}
      size=${args.size}
      ?initials=${args.initials}
    >
      ${args.initials ? args.label : ''}
    </sl-avatar>
  `,
  argTypes: {
    image: { control: 'text' },
    label: { control: 'text' },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    initials: { control: 'boolean' }
  }
};

export const Image = {
  args: {
    image: 'https://avatars.githubusercontent.com/u/334891',
    label: 'User avatar'
  }
};

export const Initials = {
  args: {
    label: 'SL',
    initials: true
  }
};

export const Shapes = {
  render: () => html`
    <div style="display: flex; gap: 1rem;">
      <sl-avatar shape="square" label="SQ">SQ</sl-avatar>
      <sl-avatar shape="rounded" label="RO">RO</sl-avatar>
      <sl-avatar shape="circle" label="CI">CI</sl-avatar>
    </div>
  `
}; 