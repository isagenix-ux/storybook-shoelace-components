import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta = {
  title: 'Shoelace/Data Display/Details',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-details
      summary=${args.summary}
      ?open=${args.open}
      ?disabled=${args.disabled}
    >
      ${args.customIcons ? html`
        <sl-icon name="plus-square" slot="expand-icon"></sl-icon>
        <sl-icon name="dash-square" slot="collapse-icon"></sl-icon>
      ` : ''}
      ${args.content}
    </sl-details>
  `,
  argTypes: {
    summary: {
      control: 'text',
      description: 'The summary to show in the header'
    },
    open: {
      control: 'boolean',
      description: 'Indicates whether the details is open'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the details so it can\'t be toggled'
    },
    customIcons: {
      control: 'boolean',
      description: 'Use custom expand/collapse icons'
    },
    content: {
      control: 'text',
      description: 'The details content'
    }
  }
};

export default meta;

// Basic details
export const Basic = {
  args: {
    summary: 'Toggle Me',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
};

// Open by default
export const OpenByDefault = {
  args: {
    summary: 'Toggle Me',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    open: true
  }
};

// Disabled
export const Disabled = {
  args: {
    summary: 'Disabled',
    content: 'This content cannot be shown because the details element is disabled.',
    disabled: true
  }
};

// Custom Icons
export const CustomIcons = {
  args: {
    summary: 'Toggle Me',
    content: 'This details element uses custom expand and collapse icons.',
    customIcons: true
  }
};

// Details Group
export const DetailsGroup = {
  render: () => {
    // Handle showing only one details at a time
    const handleShow = (event) => {
      if (event.target.tagName.toLowerCase() === 'sl-details') {
        const details = event.target.parentElement.querySelectorAll('sl-details');
        details.forEach(d => {
          d.open = d === event.target;
        });
      }
    };

    return html`
      <div @sl-show=${handleShow} style="display: flex; flex-direction: column; gap: var(--sl-spacing-2x-small);">
        <sl-details summary="First" open>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </sl-details>

        <sl-details summary="Second">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </sl-details>

        <sl-details summary="Third">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </sl-details>
      </div>
    `;
  }
}; 