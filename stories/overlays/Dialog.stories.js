import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';

const meta = {
  title: 'Shoelace/Overlays/Dialog',
  tags: ['autodocs'],
  render: (args) => {
    const handleOpen = (e) => {
      const dialog = e.target.parentElement.querySelector('sl-dialog');
      dialog.show();
    };

    const handleClose = (e) => {
      const dialog = e.target.closest('sl-dialog');
      dialog.hide();
    };

    // Add a container with minimum height
    return html`
      <div style="min-height: 300px; position: relative;">
        <sl-dialog 
          label=${args.label}
          ?no-header=${args.noHeader}
          style=${args.customWidth ? '--width: 50vw;' : ''}
        >
          ${args.headerActions ? html`
            <sl-icon-button
              slot="header-actions"
              name="box-arrow-up-right"
              label="Open in new window"
            ></sl-icon-button>
          ` : ''}

          ${args.content}
          
          <div slot="footer">
            ${typeof args.footer === 'string' 
              ? html`<sl-button variant="primary" @click=${handleClose}>Close</sl-button>`
              : args.footer
            }
          </div>
        </sl-dialog>

        <sl-button @click=${handleOpen}>Open Dialog</sl-button>
      </div>
    `;
  },
  argTypes: {
    label: { 
      control: 'text',
      description: 'The dialog title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Dialog' }
      }
    },
    noHeader: { 
      control: 'boolean',
      description: 'Removes the header. This will also remove the default close button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    content: { 
      control: 'text',
      description: 'The dialog content',
      table: {
        type: { summary: 'string | TemplateResult' }
      }
    },
    headerActions: { 
      control: 'boolean',
      description: 'Shows additional actions in the header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    customWidth: { 
      control: 'boolean',
      description: 'Sets a custom width for the dialog',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    footer: { control: 'text' }
  },
  parameters: {
    docs: {
      description: {
        component: `
          Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.
          
          Use dialogs for:
          - Displaying important information
          - Getting confirmation before a destructive action
          - Complex forms or settings that deserve their own page
        `
      },
      canvas: {
        sourceState: 'hidden'
      }
    },
    layout: 'padded',
    controls: { 
      sort: 'requiredFirst'
    }
  }
};

export default meta;

// Basic dialog
export const Basic = {
  args: {
    label: 'Dialog',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
};

// Custom width
export const CustomWidth = {
  args: {
    label: 'Dialog',
    content: 'This dialog is wider than the default.',
    customWidth: true
  }
};

// With header actions
export const WithHeaderActions = {
  args: {
    label: 'Dialog',
    headerActions: true,
    content: 'This dialog has an additional action in the header.'
  }
};

// Scrolling dialog
export const Scrolling = {
  args: {
    label: 'Dialog',
    content: html`
      <div style="height: 150vh; border: dashed 2px var(--sl-color-neutral-200); padding: 0 1rem;">
        <p>Scroll down and give it a try! 👇</p>
      </div>
    `
  }
};

// With autofocus
export const WithAutofocus = {
  args: {
    label: 'Dialog',
    content: html`
      <sl-input autofocus placeholder="I will have focus when the dialog is opened"></sl-input>
    `
  }
};

// Complex example
export const Complex = {
  args: {
    label: 'Dialog',
    content: html`
      <sl-rating></sl-rating>
      <br><br>
      This is a more complex dialog that demonstrates some of the advanced features and components working together.
      <br><br>
      <sl-input placeholder="Type something"></sl-input>
    `,
    footer: html`
      <sl-button variant="neutral" @click=${(e) => e.target.closest('sl-dialog').hide()}>Cancel</sl-button>
      <sl-button variant="primary" @click=${(e) => e.target.closest('sl-dialog').hide()}>Save</sl-button>
    `
  }
}; 