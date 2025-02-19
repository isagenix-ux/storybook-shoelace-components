import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta = {
  title: 'Shoelace/Forms/Checkbox',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-checkbox
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      ?indeterminate=${args.indeterminate}
      ?required=${args.required}
      size=${args.size}
      help-text=${args.helpText || ''}
    >
      ${args.label}
    </sl-checkbox>
  `,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The checkbox\'s size.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      }
    },
    checked: { 
      control: 'boolean',
      description: 'Draws the checkbox in a checked state.'
    },
    disabled: { 
      control: 'boolean',
      description: 'Disables the checkbox.'
    },
    indeterminate: { 
      control: 'boolean',
      description: 'Draws the checkbox in an indeterminate state.'
    },
    required: { 
      control: 'boolean',
      description: 'Makes the checkbox a required field.'
    },
    label: { 
      control: 'text',
      description: 'The checkbox label.'
    },
    helpText: { 
      control: 'text',
      description: 'The help text below the checkbox.'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Checkboxes allow the user to toggle an option on or off.'
      }
    }
  }
};

export default meta;

// Basic checkbox
export const Basic = {
  args: {
    label: 'Checkbox'
  }
};

// Checked
export const Checked = {
  args: {
    label: 'Checked',
    checked: true
  }
};

// Indeterminate
export const Indeterminate = {
  args: {
    label: 'Indeterminate',
    indeterminate: true
  }
};

// Disabled
export const Disabled = {
  args: {
    label: 'Disabled',
    disabled: true
  }
};

// Sizes
export const Sizes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-checkbox size="small">Small</sl-checkbox>
      <sl-checkbox size="medium">Medium</sl-checkbox>
      <sl-checkbox size="large">Large</sl-checkbox>
    </div>
  `
};

// With Help Text
export const WithHelpText = {
  args: {
    label: 'Checkbox',
    helpText: 'This is the help text for this checkbox.'
  }
};

// Custom Validation
export const CustomValidation = {
  render: () => html`
    <form>
      <sl-checkbox required>Check me</sl-checkbox>
      <br><br>
      <sl-button type="submit" variant="primary">Submit</sl-button>
    </form>
  `
}; 