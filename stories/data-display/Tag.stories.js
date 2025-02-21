import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

const meta = {
  title: 'Shoelace/Data Display/Tag',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-tag
      variant=${args.variant || 'neutral'}
      size=${args.size || 'medium'}
      ?pill=${args.pill}
      ?removable=${args.removable}
      @sl-remove=${args.onRemove}
    >
      ${args.content}
    </sl-tag>
  `,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
      description: 'The tag\'s theme variant'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The tag\'s size'
    },
    pill: {
      control: 'boolean',
      description: 'Draws a pill-style tag with rounded edges'
    },
    removable: {
      control: 'boolean',
      description: 'Makes the tag removable and shows a remove button'
    },
    content: {
      control: 'text',
      description: 'The tag\'s content'
    }
  }
};

export default meta;

// Basic tags with variants
export const Variants = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <sl-tag variant="primary">Primary</sl-tag>
      <sl-tag variant="success">Success</sl-tag>
      <sl-tag variant="neutral">Neutral</sl-tag>
      <sl-tag variant="warning">Warning</sl-tag>
      <sl-tag variant="danger">Danger</sl-tag>
    </div>
  `
};

// Sizes
export const Sizes = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
      <sl-tag size="small">Small</sl-tag>
      <sl-tag size="medium">Medium</sl-tag>
      <sl-tag size="large">Large</sl-tag>
    </div>
  `
};

// Pill
export const Pills = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
      <sl-tag size="small" pill>Small</sl-tag>
      <sl-tag size="medium" pill>Medium</sl-tag>
      <sl-tag size="large" pill>Large</sl-tag>
    </div>
  `
};

// Removable
export const Removable = {
  render: () => {
    const handleRemove = (event) => {
      const tag = event.target;
      tag.style.opacity = '0';
      setTimeout(() => tag.style.opacity = '1', 2000);
    };

    return html`
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
        <sl-tag size="small" removable @sl-remove=${handleRemove}>Small</sl-tag>
        <sl-tag size="medium" removable @sl-remove=${handleRemove}>Medium</sl-tag>
        <sl-tag size="large" removable @sl-remove=${handleRemove}>Large</sl-tag>
      </div>
      <style>
        sl-tag {
          transition: var(--sl-transition-medium) opacity;
        }
      </style>
    `;
  }
};

// With custom colors
export const CustomColors = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <sl-tag style="background: var(--sl-color-primary-100); color: var(--sl-color-primary-800); border-color: var(--sl-color-primary-200);">
        Custom
      </sl-tag>
      <sl-tag style="background: var(--sl-color-success-100); color: var(--sl-color-success-800); border-color: var(--sl-color-success-200);">
        Custom
      </sl-tag>
    </div>
  `
};

// With icons
export const WithIcons = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <sl-tag variant="primary">
        <sl-icon slot="prefix" name="tag"></sl-icon>
        Label
      </sl-tag>
      <sl-tag variant="success">
        <sl-icon slot="prefix" name="check2-circle"></sl-icon>
        Success
      </sl-tag>
      <sl-tag variant="warning">
        <sl-icon slot="prefix" name="exclamation-triangle"></sl-icon>
        Warning
      </sl-tag>
      <sl-tag variant="danger">
        <sl-icon slot="prefix" name="exclamation-octagon"></sl-icon>
        Danger
      </sl-tag>
    </div>
  `
}; 