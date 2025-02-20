import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/menu-label/menu-label.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

const meta = {
  title: 'Shoelace/Navigation/Menu',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-menu style="max-width: 200px;">
      ${args.hasLabels ? html`
        <sl-menu-label>Edit</sl-menu-label>
      ` : ''}
      <sl-menu-item value="undo">Undo</sl-menu-item>
      <sl-menu-item value="redo">Redo</sl-menu-item>
      <sl-divider></sl-divider>
      <sl-menu-item value="cut">Cut</sl-menu-item>
      <sl-menu-item value="copy">Copy</sl-menu-item>
      <sl-menu-item value="paste">Paste</sl-menu-item>
      ${args.hasDisabled ? html`
        <sl-menu-item value="delete" disabled>Delete</sl-menu-item>
      ` : html`
        <sl-menu-item value="delete">Delete</sl-menu-item>
      `}
    </sl-menu>
  `,
  argTypes: {
    hasLabels: {
      control: 'boolean',
      description: 'Shows menu labels'
    },
    hasDisabled: {
      control: 'boolean',
      description: 'Shows disabled items'
    }
  }
};

export default meta;

// Basic menu
export const Basic = {
  args: {}
};

// Menu with labels
export const WithLabels = {
  args: {
    hasLabels: true
  }
};

// Menu with disabled items
export const WithDisabledItems = {
  args: {
    hasDisabled: true
  }
};

// Menu in dropdown
export const InDropdown = {
  render: () => html`
    <sl-dropdown>
      <sl-button slot="trigger" caret>Edit</sl-button>
      <sl-menu>
        <sl-menu-item value="cut">Cut</sl-menu-item>
        <sl-menu-item value="copy">Copy</sl-menu-item>
        <sl-menu-item value="paste">Paste</sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  `
};

// Menu with submenus
export const WithSubmenus = {
  render: () => html`
    <sl-menu style="max-width: 200px;">
      <sl-menu-item value="undo">Undo</sl-menu-item>
      <sl-menu-item value="redo">Redo</sl-menu-item>
      <sl-divider></sl-divider>
      <sl-menu-item value="cut">Cut</sl-menu-item>
      <sl-menu-item value="copy">Copy</sl-menu-item>
      <sl-menu-item value="paste">Paste</sl-menu-item>
      <sl-divider></sl-divider>
      <sl-menu-item>
        Find
        <sl-menu slot="submenu">
          <sl-menu-item value="find">Find…</sl-menu-item>
          <sl-menu-item value="find-previous">Find Next</sl-menu-item>
          <sl-menu-item value="find-next">Find Previous</sl-menu-item>
        </sl-menu>
      </sl-menu-item>
      <sl-menu-item>
        Transformations
        <sl-menu slot="submenu">
          <sl-menu-item value="uppercase">Make uppercase</sl-menu-item>
          <sl-menu-item value="lowercase">Make lowercase</sl-menu-item>
          <sl-menu-item value="capitalize">Capitalize</sl-menu-item>
        </sl-menu>
      </sl-menu-item>
    </sl-menu>
  `
};

// Menu with selection handling
export const WithSelection = {
  render: () => {
    const handleSelect = (event) => {
      const item = event.detail.item;
      console.log(`Selected item: ${item.value}`);
    };

    return html`
      <sl-menu style="max-width: 200px;" @sl-select=${handleSelect}>
        <sl-menu-item value="cut">Cut</sl-menu-item>
        <sl-menu-item value="copy">Copy</sl-menu-item>
        <sl-menu-item value="paste">Paste</sl-menu-item>
      </sl-menu>
    `;
  }
}; 