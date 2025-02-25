import { html } from 'lit';
import { colors } from '../foundations/Colors.stories';  // Import colors

const meta = {
  title: 'Bootstrap/Components/Button',
  tags: ['autodocs'],
  component: 'button',
  render: (args) => html`
    <button 
      type="button" 
      class="btn btn-${args.variant}"
      style="background-color: ${args.customColor || ''}"
    >
      ${args.label}
    </button>
  `,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(colors.theme),
      description: 'Button variant'
    },
    label: { control: 'text' },
    customColor: { control: 'color' }
  }
};

export default meta;

// ... rest of your button stories 