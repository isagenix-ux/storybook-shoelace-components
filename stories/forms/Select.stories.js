import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';

const meta = {
  title: 'Shoelace/Forms/Select',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-select
      label=${args.label || ''}
      help-text=${args.helpText || ''}
      placeholder=${args.placeholder || ''}
      size=${args.size || 'medium'}
      ?multiple=${args.multiple}
      ?clearable=${args.clearable}
      ?filled=${args.filled}
      ?pill=${args.pill}
      ?disabled=${args.disabled}
      ?required=${args.required}
      value=${args.value || ''}
      placement=${args.placement || 'bottom'}
      style=${args.style || ''}
    >
      ${args.prefix ? html`
        <sl-icon name="house" slot="prefix"></sl-icon>
      ` : ''}
      
      ${args.suffix ? html`
        <sl-badge slot="suffix">New</sl-badge>
      ` : ''}

      ${args.hasGroups ? html`
        <small>Section 1</small>
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
        <sl-divider></sl-divider>
        <small>Section 2</small>
        <sl-option value="option-4">Option 4</sl-option>
        <sl-option value="option-5">Option 5</sl-option>
        <sl-option value="option-6">Option 6</sl-option>
      ` : html`
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
        <sl-option value="option-4">Option 4</sl-option>
      `}
    </sl-select>
  `,
  argTypes: {
    label: { 
      control: 'text',
      description: 'The select label'
    },
    helpText: {
      control: 'text',
      description: 'Help text for the select'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    value: {
      control: 'text',
      description: 'The current value'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The select size'
    },
    multiple: {
      control: 'boolean',
      description: 'Allows multiple options to be selected'
    },
    clearable: {
      control: 'boolean',
      description: 'Makes the select clearable'
    },
    filled: {
      control: 'boolean',
      description: 'Draws a filled select'
    },
    pill: {
      control: 'boolean',
      description: 'Draws a pill-style select'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select'
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Preferred placement of the select dropdown'
    },
    prefix: {
      control: 'boolean',
      description: 'Shows a prefix icon'
    },
    hasGroups: {
      control: 'boolean',
      description: 'Shows grouped options'
    },
    required: {
      control: 'boolean',
      description: 'Makes the select required'
    },
    suffix: {
      control: 'boolean',
      description: 'Shows a suffix element'
    },
    style: {
      control: 'text',
      description: 'Additional styles'
    }
  }
};

export default meta;

// Basic select with standard width
export const Basic = {
  args: {
    label: 'Select one',
    placeholder: 'Choose an option',
    style: 'max-width: 300px;'
  }
};

// With help text
export const WithHelpText = {
  args: {
    label: 'Experience',
    helpText: 'Please tell us your skill level.',
    placeholder: 'Choose an option',
    style: 'max-width: 300px;'
  }
};

// Multiple with initial values
export const Multiple = {
  args: {
    label: 'Select Multiple',
    placeholder: 'Choose options',
    multiple: true,
    clearable: true,
    value: 'option-1 option-2',
    style: 'max-width: 300px;'
  }
};

// Required validation
export const Required = {
  render: () => html`
    <form class="validation-example">
      <sl-select label="Select one" required style="max-width: 300px;">
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
      </sl-select>
      <br>
      <sl-button type="submit" variant="primary">Submit</sl-button>
    </form>
  `
};

// Prefix and Suffix
export const WithPrefixAndSuffix = {
  args: {
    label: 'Select with Prefix & Suffix',
    placeholder: 'Choose an option',
    prefix: true,
    suffix: true,
    style: 'max-width: 300px;'
  }
};

// Clearable
export const Clearable = {
  args: {
    label: 'Clearable',
    placeholder: 'Choose an option',
    clearable: true,
    value: 'option-1'
  }
};

// Filled
export const Filled = {
  args: {
    label: 'Filled Select',
    placeholder: 'Choose an option',
    filled: true
  }
};

// Pill
export const Pill = {
  args: {
    label: 'Pill Select',
    placeholder: 'Choose an option',
    pill: true
  }
};

// Disabled
export const Disabled = {
  args: {
    label: 'Disabled',
    placeholder: 'Choose an option',
    disabled: true
  }
};

// Sizes
export const Sizes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-select size="small" placeholder="Small">
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
      </sl-select>

      <sl-select size="medium" placeholder="Medium">
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
      </sl-select>

      <sl-select size="large" placeholder="Large">
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
      </sl-select>
    </div>
  `
};

// With Groups
export const WithGroups = {
  args: {
    label: 'Grouped Options',
    placeholder: 'Choose an option',
    hasGroups: true
  }
};

// With Prefix
export const WithPrefix = {
  args: {
    label: 'Select with Prefix',
    placeholder: 'Choose an option',
    prefix: true
  }
}; 