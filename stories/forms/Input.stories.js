import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

const meta = {
  title: 'Shoelace/Forms/Input',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-input
      type=${args.type || 'text'}
      label=${args.label || ''}
      help-text=${args.helpText || ''}
      placeholder=${args.placeholder || ''}
      size=${args.size || 'medium'}
      ?clearable=${args.clearable}
      ?filled=${args.filled}
      ?pill=${args.pill}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?password-toggle=${args.passwordToggle}
      value=${args.value || ''}
      style="max-width: 300px;"
    >
      ${args.prefix ? html`
        <sl-icon name="house" slot="prefix"></sl-icon>
      ` : ''}
      ${args.suffix ? html`
        <sl-icon name="chat" slot="suffix"></sl-icon>
      ` : ''}
    </sl-input>
  `,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'password', 'search', 'tel', 'url', 'date'],
      description: 'The type of input'
    },
    label: {
      control: 'text',
      description: 'The input label'
    },
    helpText: {
      control: 'text',
      description: 'Help text for the input'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    value: {
      control: 'text',
      description: 'The input value'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The input size'
    },
    clearable: {
      control: 'boolean',
      description: 'Makes the input clearable'
    },
    filled: {
      control: 'boolean',
      description: 'Draws a filled input'
    },
    pill: {
      control: 'boolean',
      description: 'Draws a pill-style input'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input'
    },
    required: {
      control: 'boolean',
      description: 'Makes the input required'
    },
    passwordToggle: {
      control: 'boolean',
      description: 'Adds a password toggle button'
    },
    prefix: {
      control: 'boolean',
      description: 'Shows a prefix icon'
    },
    suffix: {
      control: 'boolean',
      description: 'Shows a suffix icon'
    }
  }
};

export default meta;

// Basic input
export const Basic = {
  args: {
    label: 'Label',
    placeholder: 'Type something'
  }
};

// Help text
export const WithHelpText = {
  args: {
    label: 'Label',
    helpText: 'This is the help text that provides additional information.',
    placeholder: 'Type something'
  }
};

// Clearable
export const Clearable = {
  args: {
    label: 'Clearable',
    placeholder: 'Type something',
    clearable: true
  }
};

// Password Toggle
export const PasswordToggle = {
  args: {
    type: 'password',
    label: 'Password',
    passwordToggle: true,
    placeholder: 'Type your password'
  }
};

// Filled
export const Filled = {
  args: {
    label: 'Label',
    placeholder: 'Type something',
    filled: true
  }
};

// Disabled
export const Disabled = {
  args: {
    label: 'Label',
    placeholder: 'Type something',
    disabled: true
  }
};

// Sizes
export const Sizes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input size="small" placeholder="Small" style="max-width: 300px;"></sl-input>
      <sl-input size="medium" placeholder="Medium" style="max-width: 300px;"></sl-input>
      <sl-input size="large" placeholder="Large" style="max-width: 300px;"></sl-input>
    </div>
  `
};

// Pill
export const Pill = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input size="small" placeholder="Small" pill style="max-width: 300px;"></sl-input>
      <sl-input size="medium" placeholder="Medium" pill style="max-width: 300px;"></sl-input>
      <sl-input size="large" placeholder="Large" pill style="max-width: 300px;"></sl-input>
    </div>
  `
};

// Input Types
export const InputTypes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input type="email" placeholder="Email" style="max-width: 300px;"></sl-input>
      <sl-input type="number" placeholder="Number" style="max-width: 300px;"></sl-input>
      <sl-input type="date" placeholder="Date" style="max-width: 300px;"></sl-input>
    </div>
  `
};

// Prefix & Suffix Icons
export const PrefixAndSuffix = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input size="small" placeholder="Small" style="max-width: 300px;">
        <sl-icon name="house" slot="prefix"></sl-icon>
        <sl-icon name="chat" slot="suffix"></sl-icon>
      </sl-input>
      
      <sl-input size="medium" placeholder="Medium" style="max-width: 300px;">
        <sl-icon name="house" slot="prefix"></sl-icon>
        <sl-icon name="chat" slot="suffix"></sl-icon>
      </sl-input>
      
      <sl-input size="large" placeholder="Large" style="max-width: 300px;">
        <sl-icon name="house" slot="prefix"></sl-icon>
        <sl-icon name="chat" slot="suffix"></sl-icon>
      </sl-input>
    </div>
  `
};

// Form Validation
export const FormValidation = {
  render: () => html`
    <form class="validation-example">
      <sl-input 
        label="Email" 
        type="email" 
        placeholder="you@example.com" 
        required
        pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
        style="max-width: 300px;"
      ></sl-input>
      <br>
      <sl-button type="submit" variant="primary">Submit</sl-button>
    </form>
  `
}; 