import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Data Display/Card',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="card" style="width: ${args.width || '18rem'}">
      ${args.image ? html`
        <img src=${args.image} class="card-img-top" alt=${args.imageAlt || ''}>
      ` : ''}
      ${args.header ? html`
        <div class="card-header">${args.header}</div>
      ` : ''}
      <div class="card-body">
        ${args.title ? html`<h5 class="card-title">${args.title}</h5>` : ''}
        ${args.subtitle ? html`<h6 class="card-subtitle mb-2 text-muted">${args.subtitle}</h6>` : ''}
        <p class="card-text">${args.content}</p>
        ${args.actions ? html`
          <a href="#" class="btn btn-primary">Go somewhere</a>
        ` : ''}
      </div>
      ${args.footer ? html`
        <div class="card-footer text-muted">${args.footer}</div>
      ` : ''}
    </div>
  `,
  argTypes: {
    width: { control: 'text' },
    image: { control: 'text' },
    imageAlt: { control: 'text' },
    header: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    content: { control: 'text' },
    footer: { control: 'text' },
    actions: { control: 'boolean' }
  }
};

export default meta;

// Basic Card
export const Basic = {
  args: {
    title: 'Card title',
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    actions: true
  }
};

// Card with Image
export const WithImage = {
  args: {
    image: 'https://picsum.photos/300/200',
    imageAlt: 'Sample image',
    title: 'Card title',
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    actions: true
  }
};

// Card with Header
export const WithHeader = {
  args: {
    header: 'Featured',
    title: 'Special title treatment',
    content: 'With supporting text below as a natural lead-in to additional content.',
    actions: true
  }
};

// Card with Footer
export const WithFooter = {
  args: {
    title: 'Card title',
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    actions: true,
    footer: '2 days ago'
  }
};

// Card Grid
export const CardGrid = {
  render: () => html`
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100">
          <img src="https://picsum.photos/300/200?random=1" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://picsum.photos/300/200?random=2" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a short card.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://picsum.photos/300/200?random=3" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div>
  `
};

// Card with List Groups
export const WithListGroup = {
  render: () => html`
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Featured
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
    </div>
  `
}; 