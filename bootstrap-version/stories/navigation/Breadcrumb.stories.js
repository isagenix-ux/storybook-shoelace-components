import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Navigation/Breadcrumb',
  tags: ['autodocs'],
  render: (args) => html`
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb ${args.divider === 'arrows' ? 'breadcrumb-arrows' : ''}">
        ${args.items.map((item, index) => html`
          <li 
            class="breadcrumb-item ${item.active ? 'active' : ''}" 
            ${item.active ? 'aria-current="page"' : ''}
          >
            ${item.active ? html`
              ${item.text}
            ` : html`
              <a href=${item.href}>${item.text}</a>
            `}
          </li>
        `)}
      </ol>
    </nav>
  `,
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items with text, href, and active properties'
    },
    divider: {
      control: 'select',
      options: ['default', 'arrows'],
      description: 'Style of the divider between items'
    }
  }
};

export default meta;

// Basic Breadcrumb
export const Basic = {
  args: {
    items: [
      { text: 'Home', href: '#' },
      { text: 'Library', href: '#' },
      { text: 'Data', active: true }
    ]
  }
};

// With Custom Divider
export const CustomDivider = {
  render: () => html`
    <style>
      .breadcrumb-custom-divider .breadcrumb-item + .breadcrumb-item::before {
        content: ">";
      }
    </style>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-custom-divider">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
  `
};

// With Arrows
export const WithArrows = {
  render: () => html`
    <style>
      .breadcrumb-arrows .breadcrumb-item + .breadcrumb-item::before {
        content: "→";
      }
    </style>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-arrows">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
  `
};

// With Icons
export const WithIcons = {
  render: () => html`
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" class="d-flex align-items-center">
            <i class="bi bi-house-door me-1"></i>
            Home
          </a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" class="d-flex align-items-center">
            <i class="bi bi-book me-1"></i>
            Library
          </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <i class="bi bi-file-text me-1"></i>
          Data
        </li>
      </ol>
    </nav>
  `
};

// Dark Background
export const DarkBackground = {
  render: () => html`
    <nav aria-label="breadcrumb" style="background-color: #343a40; padding: 0.75rem;">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="#" class="text-light">Home</a></li>
        <li class="breadcrumb-item"><a href="#" class="text-light">Library</a></li>
        <li class="breadcrumb-item active text-light" aria-current="page">Data</li>
      </ol>
    </nav>
  `
};

// Multiple Levels
export const MultipleLevels = {
  args: {
    items: [
      { text: 'Home', href: '#' },
      { text: 'Library', href: '#' },
      { text: 'Data', href: '#' },
      { text: 'Analysis', href: '#' },
      { text: 'Results', active: true }
    ]
  }
}; 