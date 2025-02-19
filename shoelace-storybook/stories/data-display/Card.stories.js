import { html } from 'lit';

export default {
  title: 'Shoelace/shoelace-storybook/Data Display/Card',
  tags: ['autodocs'],
  render: (args) => html`
    <sl-card
      style="max-width: 300px"
      ?hasHeader=${args.hasHeader}
      ?hasFooter=${args.hasFooter}
    >
      ${args.hasHeader ? html`
        <div slot="header">
          ${args.headerContent}
        </div>
      ` : ''}

      ${args.content}

      ${args.hasFooter ? html`
        <div slot="footer">
          ${args.footerContent}
        </div>
      ` : ''}
    </sl-card>
  `,
  argTypes: {
    hasHeader: { control: 'boolean' },
    hasFooter: { control: 'boolean' },
    headerContent: { control: 'text' },
    content: { control: 'text' },
    footerContent: { control: 'text' }
  }
};

export const Basic = {
  args: {
    content: 'This is a basic card with only content.'
  }
};

export const WithHeaderAndFooter = {
  args: {
    hasHeader: true,
    hasFooter: true,
    headerContent: 'Card Header',
    content: 'This is the main content of the card.',
    footerContent: 'Card Footer'
  }
};

export const Complex = {
  render: () => html`
    <sl-card style="max-width: 300px">
      <img 
        slot="image" 
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      >
      <strong>Kitten</strong><br>
      A cute little kitten.
      <div slot="footer">
        <sl-button variant="primary">Adopt</sl-button>
        <sl-button variant="default">More Info</sl-button>
      </div>
    </sl-card>
  `
}; 