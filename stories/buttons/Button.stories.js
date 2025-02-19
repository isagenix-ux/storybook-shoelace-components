import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta = {
  title: 'Shoelace/Buttons/Button',
  tags: ['autodocs'],
  component: 'sl-button',
  render: (args) => html`
    <sl-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
    >
      ${args.label}
    </sl-button>
  `,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'The button\'s variant.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'secondary' }
      }
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The button\'s size.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
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
  },
  args: {
    variant: 'secondary',
    size: 'medium',
    disabled: false,
    label: 'Button'
  }
};

export default meta;

// Basic button with args
export const Basic = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
    disabled: false
  }
};

// Variants
export const Variants = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <sl-button variant="primary">Primary</sl-button>
      <sl-button variant="secondary">Secondary</sl-button>
      <sl-button variant="text">Text</sl-button>
    </div>
  `
};

// Sizes
export const Sizes = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
      <sl-button size="small">Small</sl-button>
      <sl-button size="medium">Medium</sl-button>
      <sl-button size="large">Large</sl-button>
    </div>
  `
};

// Disabled
export const Disabled = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <sl-button variant="primary" disabled>Primary</sl-button>
      <sl-button variant="secondary" disabled>Secondary</sl-button>
      <sl-button variant="text" disabled>Text</sl-button>
    </div>
  `
}; 