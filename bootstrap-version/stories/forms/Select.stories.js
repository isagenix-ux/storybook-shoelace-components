import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Forms/Select',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="mb-3">
      ${args.label ? html`
        <label class="form-label">${args.label}</label>
      ` : ''}
      <select 
        class="form-select ${args.size ? `form-select-${args.size}` : ''} ${args.isValid ? 'is-valid' : ''} ${args.isInvalid ? 'is-invalid' : ''}"
        ?disabled=${args.disabled}
        ?multiple=${args.multiple}
        size=${args.visibleOptions || ''}
      >
        ${args.options.map(option => html`
          <option value=${option.value} ?selected=${option.selected}>${option.label}</option>
        `)}
      </select>
      ${args.helpText ? html`
        <div class="form-text">${args.helpText}</div>
      ` : ''}
      ${args.isValid ? html`
        <div class="valid-feedback">Looks good!</div>
      ` : ''}
      ${args.isInvalid ? html`
        <div class="invalid-feedback">Please select a valid option.</div>
      ` : ''}
    </div>
  `,
  argTypes: {
    label: {
      control: 'text',
      description: 'Select label'
    },
    options: {
      control: 'object',
      description: 'Array of option objects with value, label, and selected properties'
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
      description: 'Select size'
    },
    multiple: {
      control: 'boolean',
      description: 'Multiple selection'
    },
    visibleOptions: {
      control: 'number',
      description: 'Number of visible options when multiple is true'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    helpText: {
      control: 'text',
      description: 'Help text below the select'
    },
    isValid: {
      control: 'boolean',
      description: 'Valid state'
    },
    isInvalid: {
      control: 'boolean',
      description: 'Invalid state'
    }
  }
};

export default meta;

// Basic select
export const Basic = {
  args: {
    label: 'Example select',
    options: [
      { value: '', label: 'Choose an option', selected: true },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ],
    helpText: 'Choose from the list of options'
  }
};

// Multiple select
export const Multiple = {
  args: {
    label: 'Multiple select',
    multiple: true,
    visibleOptions: 3,
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2', selected: true },
      { value: '3', label: 'Option 3' },
      { value: '4', label: 'Option 4', selected: true },
      { value: '5', label: 'Option 5' }
    ]
  }
};

// Sizing
export const Sizes = {
  render: () => html`
    <div class="vstack gap-4">
      <select class="form-select form-select-lg">
        <option selected>Large select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>

      <select class="form-select">
        <option selected>Default select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>

      <select class="form-select form-select-sm">
        <option selected>Small select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
  `
};

// States
export const States = {
  render: () => html`
    <div class="vstack gap-4">
      <div class="mb-3">
        <label class="form-label">Disabled select</label>
        <select class="form-select" disabled>
          <option>Disabled select</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Valid select</label>
        <select class="form-select is-valid">
          <option selected>Valid select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <div class="valid-feedback">Looks good!</div>
      </div>

      <div class="mb-3">
        <label class="form-label">Invalid select</label>
        <select class="form-select is-invalid">
          <option selected>Invalid select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <div class="invalid-feedback">Please select a valid option.</div>
      </div>
    </div>
  `
};

// With option groups
export const WithGroups = {
  render: () => html`
    <select class="form-select">
      <option selected>Choose an option</option>
      <optgroup label="Group 1">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </optgroup>
      <optgroup label="Group 2">
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </optgroup>
    </select>
  `
}; 