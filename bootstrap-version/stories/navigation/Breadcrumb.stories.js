import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Navigation/Breadcrumb',
  tags: ['autodocs'],
  component: 'nav',
  render: (args) => html`
    <style>
      .breadcrumb-item a {
        color: var(--turquoise-500);
      }
      .breadcrumb-item a:hover {
        color: var(--turquoise-700);
        text-decoration: none;
      }
    </style>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        ${args.items.map((item, index) => html`
          <li class="breadcrumb-item ${index === args.items.length - 1 ? 'active' : ''}" 
              ${index === args.items.length - 1 ? 'aria-current="page"' : ''}>
            ${index === args.items.length - 1 ? item : html`<a href="#">${item}</a>`}
          </li>
        `)}
      </ol>
    </nav>
  `,
  argTypes: {
    items: {
      control: 'array',
      description: 'Array of breadcrumb items'
    }
  }
};

export default meta;

export const Default = {
  args: {
    items: ['Home', 'Library', 'Data']
  }
};

export const WithIcons = {
  render: () => html`
    <style>
      .breadcrumb-item a {
        color: var(--turquoise-500);
      }
      .breadcrumb-item a:hover {
        color: var(--turquoise-700);
        text-decoration: none;
      }
    </style>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i> Home</a></li>
        <li class="breadcrumb-item"><a href="#"><i class="fas fa-book"></i> Library</a></li>
        <li class="breadcrumb-item active" aria-current="page"><i class="fas fa-database"></i> Data</li>
      </ol>
    </nav>
  `
}; 