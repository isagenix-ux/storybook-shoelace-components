import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Buttons/Button',
  tags: ['autodocs'],
  component: 'button',
  render: (args) => html`
    <style>
      .btn {
        text-transform: uppercase;
      }
      .btn-primary {
        background-color: var(--turquoise-500);
        border-color: var(--turquoise-500);
      }
      .btn-primary:hover {
        background-color: var(--turquoise-700);
        border-color: var(--turquoise-700);
      }
      .btn-text {
        color: var(--turquoise-500);
        background: none;
        border: none;
        padding: 0.375rem 0.75rem;
      }
      .btn-text:hover {
        color: var(--turquoise-700);
      }
      .btn-secondary {
        background-color: white;
        color: var(--granite-800);
        border-color: var(--granite-800);
      }
      .btn-secondary:hover {
        background-color: var(--granite-100);
        color: var(--granite-800);
        border-color: var(--granite-800);
      }
      .btn-lg {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
      }
      .btn-sm {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      }
    </style>
    <button 
      type="button" 
      class="btn ${args.variant === 'Primary' ? 'btn-primary' : 
                  args.variant === 'Secondary' ? 'btn-outline-secondary btn-secondary' : 
                  'btn-text'} ${args.size === 'large' ? 'btn-lg' : 
                               args.size === 'small' ? 'btn-sm' : ''}"
    >
      ${args.label}
    </button>
  `,
  argTypes: {
    variant: {
      control: 'select',
      options: ['Primary', 'Secondary', 'Text'],
      description: 'Button variant'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size'
    },
    label: { 
      control: 'text',
      description: 'Button text (will be displayed in uppercase)'
    }
  }
};

export default meta;

// Size Variants
export const Large = {
  args: {
    variant: 'Primary',
    size: 'large',
    label: 'Large Button'
  }
};

export const Medium = {
  args: {
    variant: 'Primary',
    size: 'medium',
    label: 'Medium Button'
  }
};

export const Small = {
  args: {
    variant: 'Primary',
    size: 'small',
    label: 'Small Button'
  }
};

// All Sizes
export const AllSizes = {
  render: () => html`
    <style>
      .btn {
        text-transform: uppercase;
      }
      .btn-primary {
        background-color: var(--turquoise-500);
        border-color: var(--turquoise-500);
      }
      .btn-primary:hover {
        background-color: var(--turquoise-700);
        border-color: var(--turquoise-700);
      }
      .btn-lg {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
      }
      .btn-sm {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      }
      .button-container {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    </style>
    <div class="button-container">
      <button type="button" class="btn btn-primary btn-lg">Large Button</button>
      <button type="button" class="btn btn-primary">Medium Button</button>
      <button type="button" class="btn btn-primary btn-sm">Small Button</button>
    </div>
  `
};

// Keep existing variant stories
export const Primary = {
  args: {
    variant: 'Primary',
    size: 'medium',
    label: 'Primary Button'
  }
};

export const Secondary = {
  args: {
    variant: 'Secondary',
    size: 'medium',
    label: 'Secondary Button'
  }
};

export const Text = {
  args: {
    variant: 'Text',
    size: 'medium',
    label: 'Text Button'
  }
};

// All Variants
export const AllVariants = {
  render: () => html`
    <style>
      .btn {
        text-transform: uppercase;
      }
      .btn-primary {
        background-color: var(--turquoise-500);
        border-color: var(--turquoise-500);
      }
      .btn-primary:hover {
        background-color: var(--turquoise-700);
        border-color: var(--turquoise-700);
      }
      .btn-text {
        color: var(--turquoise-500);
        background: none;
        border: none;
        padding: 0.375rem 0.75rem;
      }
      .btn-text:hover {
        color: var(--turquoise-700);
      }
      .btn-secondary {
        background-color: white;
        color: var(--granite-800);
        border-color: var(--granite-800);
      }
      .btn-secondary:hover {
        background-color: var(--granite-100);
        color: var(--granite-800);
        border-color: var(--granite-800);
      }
      .button-container {
        display: flex;
        gap: 1rem;
      }
    </style>
    <div class="button-container">
      <button type="button" class="btn btn-primary">Primary Button</button>
      <button type="button" class="btn btn-outline-secondary btn-secondary">Secondary Button</button>
      <button type="button" class="btn btn-text">Text Button</button>
    </div>
  `
}; 