import { html } from 'lit';

export default {
  title: 'Shoelace/shoelace-storybook/Forms/Checkbox',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-checkbox
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?indeterminate=${args.indeterminate}
      size=${args.size}
    >
      ${args.label}
    </sl-checkbox>
  `,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    label: { control: 'text' }
  }
};

export const Basic = {
  args: {
    label: 'Checkbox'
  }
};

export const Checked = {
  args: {
    label: 'Checked',
    checked: true
  }
};

export const Indeterminate = {
  args: {
    label: 'Indeterminate',
    indeterminate: true
  }
};

export const Disabled = {
  args: {
    label: 'Disabled',
    disabled: true
  }
};

export const Sizes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-checkbox size="small">Small</sl-checkbox>
      <sl-checkbox size="medium">Medium</sl-checkbox>
      <sl-checkbox size="large">Large</sl-checkbox>
    </div>
  `
}; 