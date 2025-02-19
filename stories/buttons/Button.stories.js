import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta = {
  title: 'Shoelace/Buttons/Button',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      ?pill=${args.pill}
      ?circle=${args.circle}
      style=${args.style || ''}
    >
      ${args.prefix ? html`<sl-icon slot="prefix" name=${args.prefix}></sl-icon>` : ''}
      ${args.circle ? html`<sl-icon name=${args.icon}></sl-icon>` : args.label}
      ${args.suffix ? html`<sl-icon slot="suffix" name=${args.suffix}></sl-icon>` : ''}
    </sl-button>
  `,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'text'],
      description: 'The button\'s variant.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
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
    loading: { 
      control: 'boolean',
      description: 'Shows a loading spinner.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    pill: { 
      control: 'boolean',
      description: 'Makes the button pill-shaped.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    circle: { 
      control: 'boolean',
      description: 'Makes the button circular.',
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
    },
    prefix: { 
      control: 'text',
      description: 'Icon to show before the label.',
      table: {
        type: { summary: 'string' }
      }
    },
    suffix: { 
      control: 'text',
      description: 'Icon to show after the label.',
      table: {
        type: { summary: 'string' }
      }
    },
    icon: { 
      control: 'text',
      description: 'Icon to show in circle buttons.',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  args: {
    variant: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    pill: false,
    circle: false,
    label: 'Button'
  },
  parameters: {
    docs: {
      description: {
        component: 'Buttons represent actions that are available to the user.'
      }
    }
  }
};

export default meta;

// Variants
export const Variants = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <sl-button variant="primary">Primary</sl-button>
      <sl-button variant="default">Secondary</sl-button>
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

// Pill Buttons
export const Pill = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
      <sl-button size="small" pill>Small</sl-button>
      <sl-button size="medium" pill>Medium</sl-button>
      <sl-button size="large" pill>Large</sl-button>
    </div>
  `
};

// Circle Buttons
export const Circle = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
      <sl-button variant="default" size="small" circle>
        <sl-icon name="gear"></sl-icon>
      </sl-button>
      <sl-button variant="default" size="medium" circle>
        <sl-icon name="gear"></sl-icon>
      </sl-button>
      <sl-button variant="default" size="large" circle>
        <sl-icon name="gear"></sl-icon>
      </sl-button>
    </div>
  `
};

// Text Buttons
export const Text = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
      <sl-button variant="text" size="small">Text</sl-button>
      <sl-button variant="text">Text</sl-button>
      <sl-button variant="text" size="large">Text</sl-button>
    </div>
  `
};

// Buttons with Icons
export const WithIcons = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <sl-button>
        <sl-icon slot="prefix" name="gear"></sl-icon>
        Settings
      </sl-button>
      <sl-button>
        <sl-icon slot="suffix" name="arrow-counterclockwise"></sl-icon>
        Refresh
      </sl-button>
      <sl-button>
        <sl-icon slot="prefix" name="link-45deg"></sl-icon>
        <sl-icon slot="suffix" name="box-arrow-up-right"></sl-icon>
        Open
      </sl-button>
    </div>
  `
};

// Loading
export const Loading = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <sl-button variant="primary" ?loading=${true}>Primary</sl-button>
      <sl-button variant="default" ?loading=${true}>Secondary</sl-button>
    </div>
  `
};

// Disabled
export const Disabled = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <sl-button variant="primary" disabled>Primary</sl-button>
      <sl-button variant="default" disabled>Secondary</sl-button>
    </div>
  `
};

// Custom Width
export const CustomWidth = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-button size="small" style="width: 100%;">Small</sl-button>
      <sl-button size="medium" style="width: 100%;">Medium</sl-button>
      <sl-button size="large" style="width: 100%;">Large</sl-button>
    </div>
  `
}; 