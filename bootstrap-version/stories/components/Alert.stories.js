import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Components/Alert',
  tags: ['autodocs'],
  component: 'div',
  render: (args) => html`
    <style>
      .alert-primary {
        background-color: var(--turquoise-100);
        border-color: var(--turquoise-500);
        color: var(--turquoise-700);
      }
      .alert-primary .alert-link {
        color: var(--turquoise-700);
      }
      .alert-secondary {
        background-color: var(--granite-100);
        border-color: var(--granite-500);
        color: var(--granite-800);
      }
      .alert-secondary .alert-link {
        color: var(--granite-800);
      }
      .alert-success {
        background-color: #d4edda;
        border-color: var(--bs-success);
        color: #155724;
      }
      .alert-danger {
        background-color: #f8d7da;
        border-color: var(--bs-error);
        color: #721c24;
      }
      .alert-warning {
        background-color: #fff3cd;
        border-color: var(--bs-warning);
        color: #856404;
      }
      .alert-info {
        background-color: #d1ecf1;
        border-color: var(--turquoise-500);
        color: #0c5460;
      }
    </style>
    <div 
      class="alert ${args.variant ? `alert-${args.variant}` : ''} ${args.dismissible ? 'alert-dismissible fade show' : ''}" 
      role="alert"
    >
      ${args.dismissible ? html`
        <button type="button" class="close" data-dismiss="alert">
          <span>&times;</span>
        </button>
      ` : ''}
      ${args.heading ? html`<h4 class="alert-heading">${args.heading}</h4>` : ''}
      ${args.content}
      ${args.additionalContent ? html`
        <hr>
        <p class="mb-0">${args.additionalContent}</p>
      ` : ''}
    </div>
  `,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      description: 'Alert variant'
    },
    content: {
      control: 'text',
      description: 'Alert content'
    },
    heading: {
      control: 'text',
      description: 'Optional alert heading'
    },
    additionalContent: {
      control: 'text',
      description: 'Optional additional content below a divider'
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed'
    }
  }
};

export default meta;

// Basic Alert
export const Primary = {
  args: {
    variant: 'primary',
    content: 'A simple primary alert—check it out!'
  }
};

export const Secondary = {
  args: {
    variant: 'secondary',
    content: 'A simple secondary alert—check it out!'
  }
};

// With Heading and Additional Content
export const WithAdditionalContent = {
  args: {
    variant: 'primary',
    heading: 'Well done!',
    content: 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
    additionalContent: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.'
  }
};

// Dismissible Alert
export const Dismissible = {
  args: {
    variant: 'primary',
    content: 'Holy guacamole! You should check in on some of those fields below.',
    dismissible: true
  }
};

// Add new variant examples
export const Success = {
  args: {
    variant: 'success',
    content: 'A simple success alert—check it out!'
  }
};

export const Danger = {
  args: {
    variant: 'danger',
    content: 'A simple danger alert—check it out!'
  }
};

export const Warning = {
  args: {
    variant: 'warning',
    content: 'A simple warning alert—check it out!'
  }
};

export const Info = {
  args: {
    variant: 'info',
    content: 'A simple info alert—check it out!'
  }
};

// Update AllVariants to include all variants
export const AllVariants = {
  render: () => html`
    <style>
      .alert-primary {
        background-color: var(--turquoise-100);
        border-color: var(--turquoise-500);
        color: var(--turquoise-700);
      }
      .alert-primary .alert-link {
        color: var(--turquoise-700);
      }
      .alert-secondary {
        background-color: var(--granite-100);
        border-color: var(--granite-500);
        color: var(--granite-800);
      }
      .alert-secondary .alert-link {
        color: var(--granite-800);
      }
      .alert-success {
        background-color: #d4edda;
        border-color: var(--bs-success);
        color: #155724;
      }
      .alert-danger {
        background-color: #f8d7da;
        border-color: var(--bs-error);
        color: #721c24;
      }
      .alert-warning {
        background-color: #fff3cd;
        border-color: var(--bs-warning);
        color: #856404;
      }
      .alert-info {
        background-color: #d1ecf1;
        border-color: var(--turquoise-500);
        color: #0c5460;
      }
      .alert-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    </style>
    <div class="alert-container">
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <div class="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
      <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
      <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
      <div class="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
      <div class="alert alert-info" role="alert">
        A simple info alert—check it out!
      </div>
    </div>
  `
}; 