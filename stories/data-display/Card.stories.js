import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';

const meta = {
  title: 'Shoelace/Data Display/Card',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-card
      style="max-width: 300px"
      class=${args.className || ''}
    >
      ${args.image ? html`
        <img
          slot="image"
          src=${args.image}
          alt=${args.imageAlt || ''}
        />
      ` : ''}
      
      ${args.header ? html`
        <div slot="header">
          ${args.header}
          ${args.headerAction ? html`
            <sl-icon-button name="gear" label="Settings"></sl-icon-button>
          ` : ''}
        </div>
      ` : ''}

      ${args.content}

      ${args.footer ? html`
        <div slot="footer">
          ${args.footer}
        </div>
      ` : ''}
    </sl-card>
  `,
  argTypes: {
    className: { control: 'text' },
    image: { control: 'text' },
    imageAlt: { control: 'text' },
    header: { control: 'text' },
    headerAction: { control: 'boolean' },
    content: { control: 'text' },
    footer: { control: 'text' }
  }
};

export default meta;

// Basic card
export const Basic = {
  args: {
    content: 'This is just a basic card. No image, no header, and no footer. Just your content.'
  }
};

// Card with header
export const WithHeader = {
  render: () => html`
    <sl-card style="max-width: 300px">
      <div slot="header" style="display: flex; align-items: center; justify-content: space-between;">
        Header Title
        <sl-icon-button name="gear" label="Settings"></sl-icon-button>
      </div>
      This card has a header. You can put all sorts of things in it!
    </sl-card>
  `
};

// Card with footer
export const WithFooter = {
  render: () => html`
    <sl-card style="max-width: 300px">
      This card has a footer. You can put all sorts of things in it!
      <div slot="footer" style="display: flex; justify-content: space-between; align-items: center;">
        <sl-rating></sl-rating>
        <sl-button variant="primary">Preview</sl-button>
      </div>
    </sl-card>
  `
};

// Card with image
export const WithImage = {
  args: {
    image: 'https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    imageAlt: 'A kitten walks towards camera on top of pallet.',
    content: 'This is a kitten, but not just any kitten. This kitten likes walking along pallets.'
  }
};

// Complex card example
export const Complex = {
  render: () => html`
    <sl-card style="max-width: 300px">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <strong>Mittens</strong><br />
      This kitten is as cute as he is playful. Bring him home today!<br />
      <small style="color: var(--sl-color-neutral-500)">6 weeks old</small>
      <div slot="footer" style="display: flex; justify-content: space-between; align-items: center;">
        <sl-button variant="primary" pill>More Info</sl-button>
        <sl-rating></sl-rating>
      </div>
    </sl-card>
  `
}; 