  import { html } from 'lit';

  export default {
    title: 'Shoelace/shoelace-storybook/Forms/Input',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-input
      type=${args.type}
      size=${args.size}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
      ?required=${args.required}
      ?clearable=${args.clearable}
      placeholder=${args.placeholder}
      label=${args.label}
      help-text=${args.helpText}
      value=${args.value}
    >
      ${args.prefix ? html`<sl-icon slot="prefix" name=${args.prefix}></sl-icon>` : ''}
      ${args.suffix ? html`<sl-icon slot="suffix" name=${args.suffix}></sl-icon>` : ''}
    </sl-input>
  `,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'date', 'search']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
    clearable: { control: 'boolean' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    helpText: { control: 'text' },
    value: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' }
  }
};

export const Text = {
  args: {
    type: 'text',
    label: 'Label',
    placeholder: 'Type something',
    helpText: 'This is a help text'
  }
};

export const WithIcons = {
  args: {
    type: 'search',
    placeholder: 'Search',
    clearable: true,
    prefix: 'search'
  }
}; 