import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Forms/Input',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="mb-3">
      ${args.label ? html`
        <label class="form-label">${args.label}</label>
      ` : ''}
      <input 
        type=${args.type || 'text'}
        class="form-control ${args.size ? `form-control-${args.size}` : ''} ${args.isValid ? 'is-valid' : ''} ${args.isInvalid ? 'is-invalid' : ''}"
        placeholder=${args.placeholder || ''}
        ?disabled=${args.disabled}
        ?readonly=${args.readonly}
        value=${args.value || ''}
      />
      ${args.helpText ? html`
        <div class="form-text">${args.helpText}</div>
      ` : ''}
      ${args.isValid ? html`
        <div class="valid-feedback">Looks good!</div>
      ` : ''}
      ${args.isInvalid ? html`
        <div class="invalid-feedback">Please provide a valid value.</div>
      ` : ''}
    </div>
  `,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date'],
      description: 'Input type'
    },
    label: {
      control: 'text',
      description: 'Input label'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    value: {
      control: 'text',
      description: 'Input value'
    },
    helpText: {
      control: 'text',
      description: 'Help text below the input'
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
      description: 'Input size'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    readonly: {
      control: 'boolean',
      description: 'Readonly state'
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

// Basic input
export const Basic = {
  args: {
    label: 'Example label',
    placeholder: 'Type something...',
    helpText: 'Some help text goes here'
  }
};

// Input types
export const Types = {
  render: () => html`
    <div class="vstack gap-4">
      <div class="mb-3">
        <label class="form-label">Text input</label>
        <input type="text" class="form-control" placeholder="Text input">
      </div>
      
      <div class="mb-3">
        <label class="form-label">Email input</label>
        <input type="email" class="form-control" placeholder="name@example.com">
      </div>
      
      <div class="mb-3">
        <label class="form-label">Password input</label>
        <input type="password" class="form-control" placeholder="Password">
      </div>
      
      <div class="mb-3">
        <label class="form-label">Number input</label>
        <input type="number" class="form-control">
      </div>
      
      <div class="mb-3">
        <label class="form-label">Date input</label>
        <input type="date" class="form-control">
      </div>
    </div>
  `
};

// Sizing
export const Sizes = {
  render: () => html`
    <div class="vstack gap-4">
      <input class="form-control form-control-lg" type="text" placeholder="Large input">
      <input class="form-control" type="text" placeholder="Default input">
      <input class="form-control form-control-sm" type="text" placeholder="Small input">
    </div>
  `
};

// States
export const States = {
  render: () => html`
    <div class="vstack gap-4">
      <div class="mb-3">
        <label class="form-label">Disabled input</label>
        <input class="form-control" type="text" placeholder="Disabled input" disabled>
      </div>
      
      <div class="mb-3">
        <label class="form-label">Readonly input</label>
        <input class="form-control" type="text" value="Readonly input" readonly>
      </div>
      
      <div class="mb-3">
        <label class="form-label">Valid input</label>
        <input class="form-control is-valid" type="text">
        <div class="valid-feedback">Looks good!</div>
      </div>
      
      <div class="mb-3">
        <label class="form-label">Invalid input</label>
        <input class="form-control is-invalid" type="text">
        <div class="invalid-feedback">Please provide a valid value.</div>
      </div>
    </div>
  `
};

// Input with icon
export const WithIcon = {
  render: () => html`
    <div class="input-group mb-3">
      <span class="input-group-text">@</span>
      <input type="text" class="form-control" placeholder="Username">
    </div>
  `
}; 