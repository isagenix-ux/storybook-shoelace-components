import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

const meta = {
  title: 'Shoelace/Overlays/Drawer',
  tags: ['autodocs'],
  render: (args) => {
    const handleOpen = (e) => {
      const drawer = e.target.parentElement.querySelector('sl-drawer');
      drawer.show();
    };

    const handleClose = (e) => {
      const drawer = e.target.closest('sl-drawer');
      drawer.hide();
    };

    return html`
      <div style="min-height: 300px; position: relative;">
        <sl-drawer 
          label=${args.label}
          placement=${args.placement}
          ?contained=${args.contained}
          ?no-header=${args.noHeader}
          style=${args.customSize ? '--size: 50vw;' : ''}
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
            <sl-button variant="primary" @click=${handleClose}>Close</sl-button>
          </div>
        </sl-drawer>

        <sl-button @click=${handleOpen}>Open Drawer</sl-button>
      </div>
    `;
  },
  argTypes: {
    label: { 
      control: 'text',
      description: 'The drawer title'
    },
    placement: {
      control: 'select',
      options: ['top', 'end', 'bottom', 'start'],
      description: 'The direction from which the drawer will open'
    },
    contained: {
      control: 'boolean',
      description: 'Makes the drawer slide out of its parent element instead of the viewport'
    },
    noHeader: {
      control: 'boolean',
      description: 'Removes the header'
    },
    content: {
      control: 'text',
      description: 'The drawer content'
    },
    headerActions: {
      control: 'boolean',
      description: 'Shows additional actions in the header'
    },
    customSize: {
      control: 'boolean',
      description: 'Sets a custom size for the drawer'
    }
  }
};

export default meta;

// Basic drawer
export const Basic = {
  args: {
    label: 'Drawer',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    placement: 'end'
  }
};

// Slide in from start
export const SlideFromStart = {
  args: {
    label: 'Drawer',
    content: 'This drawer slides in from the start.',
    placement: 'start'
  }
};

// Slide in from top
export const SlideFromTop = {
  args: {
    label: 'Drawer',
    content: 'This drawer slides in from the top.',
    placement: 'top'
  }
};

// Slide in from bottom
export const SlideFromBottom = {
  args: {
    label: 'Drawer',
    content: 'This drawer slides in from the bottom.',
    placement: 'bottom'
  }
};

// Custom size
export const CustomSize = {
  args: {
    label: 'Drawer',
    content: 'This drawer is always 50% of the viewport.',
    customSize: true
  }
};

// With header actions
export const WithHeaderActions = {
  args: {
    label: 'Drawer',
    headerActions: true,
    content: 'This drawer has an additional action in the header.'
  }
};

// Contained drawer
export const Contained = {
  render: () => html`
    <div style="position: relative; border: solid 2px var(--sl-panel-border-color); height: 300px; padding: 1rem; margin-bottom: 1rem;">
      The drawer will be contained to this box.

      <sl-drawer label="Drawer" contained style="--size: 50%;">
        This drawer is contained to its parent element.
        <sl-button slot="footer" variant="primary">Close</sl-button>
      </sl-drawer>

      <sl-button>Toggle Drawer</sl-button>
    </div>
  `
}; 