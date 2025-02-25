import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Data Display/Table',
  tags: ['autodocs'],
  render: (args) => html`
    <table class="table ${args.striped ? 'table-striped' : ''} 
                        ${args.bordered ? 'table-bordered' : ''} 
                        ${args.hover ? 'table-hover' : ''} 
                        ${args.small ? 'table-sm' : ''}">
      ${args.header ? html`
        <thead class=${args.darkHeader ? 'table-dark' : ''}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
      ` : ''}
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  `,
  argTypes: {
    striped: { control: 'boolean' },
    bordered: { control: 'boolean' },
    hover: { control: 'boolean' },
    small: { control: 'boolean' },
    header: { control: 'boolean' },
    darkHeader: { control: 'boolean' }
  }
};

export default meta;

// Basic Table
export const Basic = {
  args: {
    header: true
  }
};

// Striped Table
export const Striped = {
  args: {
    header: true,
    striped: true
  }
};

// Bordered Table
export const Bordered = {
  args: {
    header: true,
    bordered: true
  }
};

// Hover Table
export const Hover = {
  args: {
    header: true,
    hover: true
  }
};

// Small Table
export const Small = {
  args: {
    header: true,
    small: true
  }
};

// Dark Header Table
export const DarkHeader = {
  args: {
    header: true,
    darkHeader: true
  }
};

// Responsive Table
export const Responsive = {
  render: () => html`
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
}; 