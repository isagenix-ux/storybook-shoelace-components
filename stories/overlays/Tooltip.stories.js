import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

const meta = {
  title: 'Shoelace/Overlays/Tooltip',
  tags: ['autodocs'],
  render: (args) => html`
    <div style="min-height: 200px; padding: 50px;">
      <sl-tooltip
        content=${args.content}
        placement=${args.placement || 'top'}
        ?disabled=${args.disabled}
        distance=${args.distance}
        ?open=${args.open}
        skidding=${args.skidding}
        trigger=${args.trigger || 'hover'}
        ?hoist=${args.hoist}
        style=${args.maxWidth ? `--max-width: ${args.maxWidth};` : ''}
      >
        ${args.slot ? html`
          <div slot="content">${args.slot}</div>
        ` : ''}
        <sl-button>${args.buttonText || 'Hover Me'}</sl-button>
      </sl-tooltip>
    </div>
  `,
  argTypes: {
    content: {
      control: 'text',
      description: 'The tooltip content'
    },
    placement: {
      control: 'select',
      options: [
        'top', 'top-start', 'top-end',
        'right', 'right-start', 'right-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end'
      ],
      description: 'The preferred placement of the tooltip'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the tooltip'
    },
    distance: {
      control: 'number',
      description: 'The distance in pixels from which to offset the tooltip away from its target'
    },
    open: {
      control: 'boolean',
      description: 'Indicates whether or not the tooltip is open'
    },
    skidding: {
      control: 'number',
      description: 'The distance in pixels from which to offset the tooltip along its target'
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus', 'manual'],
      description: 'Controls how the tooltip is triggered'
    },
    hoist: {
      control: 'boolean',
      description: 'Enable this option to prevent the tooltip from being clipped'
    },
    maxWidth: {
      control: 'text',
      description: 'The maximum width of the tooltip'
    },
    buttonText: {
      control: 'text',
      description: 'The text of the button that triggers the tooltip'
    },
    slot: {
      control: 'text',
      description: 'HTML content for the tooltip'
    }
  }
};

export default meta;

// Basic tooltip
export const Basic = {
  args: {
    content: 'This is a tooltip'
  }
};

// Placement examples
export const Placement = {
  render: () => html`
    <div class="tooltip-placement-example" style="padding: 100px;">
      <div class="tooltip-placement-example-row">
        <sl-tooltip content="top-start" placement="top-start">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="top" placement="top">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="top-end" placement="top-end">
          <sl-button></sl-button>
        </sl-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <sl-tooltip content="left-start" placement="left-start">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="right-start" placement="right-start">
          <sl-button></sl-button>
        </sl-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <sl-tooltip content="left" placement="left">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="right" placement="right">
          <sl-button></sl-button>
        </sl-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <sl-tooltip content="left-end" placement="left-end">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="right-end" placement="right-end">
          <sl-button></sl-button>
        </sl-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <sl-tooltip content="bottom-start" placement="bottom-start">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="bottom" placement="bottom">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="bottom-end" placement="bottom-end">
          <sl-button></sl-button>
        </sl-tooltip>
      </div>
    </div>

    <style>
      .tooltip-placement-example {
        width: 250px;
      }

      .tooltip-placement-example-row {
        margin-bottom: 1rem;
      }

      .tooltip-placement-example-row:after {
        content: '';
        display: table;
        clear: both;
      }

      .tooltip-placement-example sl-button {
        float: left;
        width: 2.5rem;
        margin-right: 0.25rem;
        margin-bottom: 0.25rem;
      }

      .tooltip-placement-example-row:nth-child(1) sl-tooltip:first-child sl-button,
      .tooltip-placement-example-row:nth-child(5) sl-tooltip:first-child sl-button {
        margin-left: calc(40px + 0.25rem);
      }

      .tooltip-placement-example-row:nth-child(2) sl-tooltip:nth-child(2) sl-button,
      .tooltip-placement-example-row:nth-child(3) sl-tooltip:nth-child(2) sl-button,
      .tooltip-placement-example-row:nth-child(4) sl-tooltip:nth-child(2) sl-button {
        margin-left: calc((40px * 3) + (0.25rem * 3));
      }
    </style>
  `
};

// Click trigger
export const ClickTrigger = {
  args: {
    content: 'Click again to dismiss',
    trigger: 'click',
    buttonText: 'Click to Toggle'
  }
};

// Manual trigger
export const ManualTrigger = {
  render: () => {
    const handleToggle = (e) => {
      const tooltip = e.target.nextElementSibling;
      tooltip.open = !tooltip.open;
    };

    return html`
      <div style="display: flex; gap: 4rem; padding: 50px;">
        <sl-button @click=${handleToggle}>Toggle Manually</sl-button>
        <sl-tooltip content="This is a tooltip" trigger="manual">
          <sl-icon-button name="gear" label="Settings"></sl-icon-button>
        </sl-tooltip>
      </div>
    `;
  }
};

// Remove arrow
export const NoArrow = {
  args: {
    content: 'This is a tooltip',
    buttonText: 'No Arrow',
    maxWidth: '0'  // This removes the arrow
  }
};

// HTML in tooltips
export const HtmlContent = {
  args: {
    buttonText: 'Hover me',
    slot: html`I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!`
  }
};

// Custom width
export const CustomWidth = {
  args: {
    content: 'This tooltip will wrap after only 80 pixels.',
    maxWidth: '80px'
  }
};

// Hoisting
export const Hoisting = {
  render: () => html`
    <div style="border: solid 2px var(--sl-panel-border-color); overflow: hidden; padding: 50px; position: relative;">
      <sl-tooltip content="This is a tooltip">
        <sl-button>No Hoist</sl-button>
      </sl-tooltip>

      <sl-tooltip content="This is a tooltip" hoist>
        <sl-button>Hoist</sl-button>
      </sl-tooltip>
    </div>
  `
}; 