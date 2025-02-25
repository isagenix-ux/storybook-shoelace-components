import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Buttons/Button',
  tags: ['autodocs'],
  render: (args) => html`
    <button 
      class="btn ${args.variant ? `btn-${args.variant}` : 'btn-primary'} ${args.size ? `btn-${args.size}` : ''}"
      ?disabled=${args.disabled}
    >
      ${args.label}
    </button>
  `,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link', 'outline-primary', 'outline-secondary'],
      description: 'The button\'s variant.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The button\'s size.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    disabled: { 
      control: 'boolean',
      description: 'Makes the button disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    label: { 
      control: 'text',
      description: 'The button\'s label.',
      table: {
        type: { summary: 'string' }
      }
    }
  }
};

export default meta;

// Basic button with args
export const Basic = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    disabled: false
  }
};

// Variants
export const Variants = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-danger">Danger</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-info">Info</button>
    </div>
  `
};

// Outline Variants
export const OutlineVariants = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <button class="btn btn-outline-primary">Primary</button>
      <button class="btn btn-outline-secondary">Secondary</button>
      <button class="btn btn-outline-success">Success</button>
      <button class="btn btn-outline-danger">Danger</button>
      <button class="btn btn-outline-warning">Warning</button>
      <button class="btn btn-outline-info">Info</button>
    </div>
  `
};

// Sizes
export const Sizes = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
      <button class="btn btn-primary btn-sm">Small</button>
      <button class="btn btn-primary">Medium</button>
      <button class="btn btn-primary btn-lg">Large</button>
    </div>
  `
};

// Disabled
export const Disabled = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <button class="btn btn-primary" disabled>Primary</button>
      <button class="btn btn-secondary" disabled>Secondary</button>
      <button class="btn btn-link" disabled>Link</button>
    </div>
  `
}; 