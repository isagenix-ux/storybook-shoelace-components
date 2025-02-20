import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/radio/radio.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

const meta = {
  title: 'Shoelace/Forms/Radio Group',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-radio-group 
      label=${args.label}
      help-text=${args.helpText || ''}
      name=${args.name || 'radio'}
      value=${args.value}
      size=${args.size || 'medium'}
      ?required=${args.required}
    >
      ${args.useButtons 
        ? html`
          <sl-radio-button value="1">Option 1</sl-radio-button>
          <sl-radio-button value="2" ?disabled=${args.hasDisabled}>Option 2</sl-radio-button>
          <sl-radio-button value="3">Option 3</sl-radio-button>
        `
        : html`
          <sl-radio value="1">Option 1</sl-radio>
          <sl-radio value="2" ?disabled=${args.hasDisabled}>Option 2</sl-radio>
          <sl-radio value="3">Option 3</sl-radio>
        `
      }
    </sl-radio-group>
  `,
  argTypes: {
    label: { 
      control: 'text',
      description: 'The radio group label'
    },
    helpText: {
      control: 'text',
      description: 'Help text for the radio group'
    },
    value: {
      control: 'select',
      options: ['1', '2', '3'],
      description: 'The selected value'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the radio buttons'
    },
    required: {
      control: 'boolean',
      description: 'Makes the radio group required'
    },
    useButtons: {
      control: 'boolean',
      description: 'Use radio buttons instead of radios'
    },
    hasDisabled: {
      control: 'boolean',
      description: 'Shows a disabled option'
    }
  }
};

export default meta;

// Basic radio group
export const Basic = {
  args: {
    label: 'Select an option',
    value: '1'
  }
};

// With help text
export const WithHelpText = {
  args: {
    label: 'Select an option',
    helpText: 'Choose the most appropriate option.',
    value: '1'
  }
};

// Radio buttons
export const RadioButtons = {
  args: {
    label: 'Select an option',
    value: '1',
    useButtons: true
  }
};

// Disabled option
export const DisabledOption = {
  args: {
    label: 'Select an option',
    value: '1',
    hasDisabled: true
  }
};

// Sizes
export const Sizes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <sl-radio-group label="Small" size="small" value="1">
        <sl-radio value="1">Option 1</sl-radio>
        <sl-radio value="2">Option 2</sl-radio>
        <sl-radio value="3">Option 3</sl-radio>
      </sl-radio-group>

      <sl-radio-group label="Medium" size="medium" value="1">
        <sl-radio value="1">Option 1</sl-radio>
        <sl-radio value="2">Option 2</sl-radio>
        <sl-radio value="3">Option 3</sl-radio>
      </sl-radio-group>

      <sl-radio-group label="Large" size="large" value="1">
        <sl-radio value="1">Option 1</sl-radio>
        <sl-radio value="2">Option 2</sl-radio>
        <sl-radio value="3">Option 3</sl-radio>
      </sl-radio-group>
    </div>
  `
};

// Validation
export const Validation = {
  render: () => html`
    <form class="validation">
      <sl-radio-group label="Select an option" name="option" required>
        <sl-radio value="1">Option 1</sl-radio>
        <sl-radio value="2">Option 2</sl-radio>
        <sl-radio value="3">Option 3</sl-radio>
      </sl-radio-group>
      <br>
      <sl-button type="submit" variant="primary">Submit</sl-button>
    </form>
  `
}; 