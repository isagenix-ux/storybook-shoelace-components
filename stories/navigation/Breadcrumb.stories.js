import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js';
import '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

const meta = {
  title: 'Shoelace/Navigation/Breadcrumb',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-breadcrumb>
      ${args.separator ? html`
        <sl-icon name=${args.separator} slot="separator"></sl-icon>
      ` : ''}
      ${args.items.map(item => html`
        <sl-breadcrumb-item href=${item.href || ''}>
          ${item.prefix ? html`
            <sl-icon slot="prefix" name=${item.prefix}></sl-icon>
          ` : ''}
          ${item.label}
          ${item.suffix ? html`
            <sl-icon slot="suffix" name=${item.suffix}></sl-icon>
          ` : ''}
        </sl-breadcrumb-item>
      `)}
    </sl-breadcrumb>
  `,
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items'
    },
    separator: {
      control: 'text',
      description: 'Icon name for the separator'
    }
  }
};

export default meta;

// Basic breadcrumb
export const Basic = {
  args: {
    items: [
      { label: 'Catalog' },
      { label: 'Clothing' },
      { label: "Women's" },
      { label: 'Shirts & Tops' }
    ]
  }
};

// With links
export const WithLinks = {
  args: {
    items: [
      { label: 'Homepage', href: 'https://example.com/home' },
      { label: 'Our Services', href: 'https://example.com/services' },
      { label: 'Digital Media', href: 'https://example.com/digital' },
      { label: 'Web Design', href: 'https://example.com/web-design' }
    ]
  }
};

// Custom separators
export const CustomSeparators = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-breadcrumb>
        <sl-icon name="dot" slot="separator"></sl-icon>
        <sl-breadcrumb-item>First</sl-breadcrumb-item>
        <sl-breadcrumb-item>Second</sl-breadcrumb-item>
        <sl-breadcrumb-item>Third</sl-breadcrumb-item>
      </sl-breadcrumb>

      <sl-breadcrumb>
        <sl-icon name="arrow-right" slot="separator"></sl-icon>
        <sl-breadcrumb-item>First</sl-breadcrumb-item>
        <sl-breadcrumb-item>Second</sl-breadcrumb-item>
        <sl-breadcrumb-item>Third</sl-breadcrumb-item>
      </sl-breadcrumb>

      <sl-breadcrumb>
        <span slot="separator">/</span>
        <sl-breadcrumb-item>First</sl-breadcrumb-item>
        <sl-breadcrumb-item>Second</sl-breadcrumb-item>
        <sl-breadcrumb-item>Third</sl-breadcrumb-item>
      </sl-breadcrumb>
    </div>
  `
};

// With prefixes
export const WithPrefixes = {
  args: {
    items: [
      { label: 'Home', prefix: 'house' },
      { label: 'Articles' },
      { label: 'Traveling' }
    ]
  }
};

// With suffixes
export const WithSuffixes = {
  args: {
    items: [
      { label: 'Documents' },
      { label: 'Policies' },
      { label: 'Security', suffix: 'shield-lock' }
    ]
  }
};

// With dropdown
export const WithDropdown = {
  render: () => html`
    <sl-breadcrumb>
      <sl-breadcrumb-item>Homepage</sl-breadcrumb-item>
      <sl-breadcrumb-item>
        <sl-dropdown>
          <sl-button slot="trigger" size="small" circle>
            <sl-icon label="More options" name="three-dots"></sl-icon>
          </sl-button>
          <sl-menu>
            <sl-menu-item type="checkbox" checked>Web Design</sl-menu-item>
            <sl-menu-item type="checkbox">Web Development</sl-menu-item>
            <sl-menu-item type="checkbox">Marketing</sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      </sl-breadcrumb-item>
      <sl-breadcrumb-item>Our Services</sl-breadcrumb-item>
      <sl-breadcrumb-item>Digital Media</sl-breadcrumb-item>
    </sl-breadcrumb>
  `
}; 