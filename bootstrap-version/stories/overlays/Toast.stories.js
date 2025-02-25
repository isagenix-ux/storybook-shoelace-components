import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Overlays/Toast',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Bootstrap toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.'
      }
    }
  },
  render: (args) => html`
    <div class="toast-container position-fixed top-0 end-0 p-3">
      <div 
        class="toast ${args.className || ''}" 
        role="alert" 
        aria-live="assertive" 
        aria-atomic="true"
        data-bs-delay=${args.delay}
        data-bs-autohide=${args.autohide}
      >
        ${args.header ? html`
          <div class="toast-header">
            ${args.headerImage ? html`
              <img src=${args.headerImage} class="rounded me-2" alt="" width="20" height="20">
            ` : ''}
            <strong class="me-auto">${args.headerText}</strong>
            ${args.subtitle ? html`<small class="text-muted">${args.subtitle}</small>` : ''}
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        ` : ''}
        <div class="toast-body">
          ${args.content}
        </div>
      </div>
    </div>
  `,
  argTypes: {
    header: { control: 'boolean' },
    headerText: { control: 'text' },
    headerImage: { control: 'text' },
    subtitle: { control: 'text' },
    content: { control: 'text' },
    delay: { control: 'number' },
    autohide: { control: 'boolean' },
    className: { control: 'text' }
  }
};

export default meta;

// Basic Toast
export const Basic = {
  args: {
    content: 'Hello, world! This is a toast message.',
    delay: 5000,
    autohide: true
  }
};

// Toast with Header
export const WithHeader = {
  args: {
    header: true,
    headerText: 'Bootstrap',
    headerImage: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg',
    subtitle: '11 mins ago',
    content: 'Hello, world! This is a toast message.',
    delay: 5000,
    autohide: true
  }
};

// Stacking Toasts
export const StackingToasts = {
  render: () => html`
    <div class="toast-container position-fixed top-0 end-0 p-3">
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">First Toast</strong>
          <small class="text-muted">just now</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          See? Just like this.
        </div>
      </div>

      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Second Toast</strong>
          <small class="text-muted">2 seconds ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Heads up, toasts will stack automatically
        </div>
      </div>
    </div>
  `
};

// Custom Toast Colors
export const CustomColors = {
  render: () => {
    setTimeout(() => {
      const toasts = document.querySelectorAll('.toast');
      toasts.forEach(toastEl => {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
      });
    }, 0);

    return html`
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div class="toast text-bg-primary" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <strong class="me-auto">Primary Toast</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Primary toast message.
          </div>
        </div>

        <div class="toast text-bg-success" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <strong class="me-auto">Success Toast</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Success toast message.
          </div>
        </div>
      </div>
    `;
  }
};

// Toast with Action
export const WithAction = {
  render: () => {
    setTimeout(() => {
      const toast = new bootstrap.Toast(document.querySelector('.toast'));
      toast.show();
    }, 0);

    return html`
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <strong class="me-auto">Action Required</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            <div class="mb-2">Would you like to save your changes?</div>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-primary btn-sm">Save changes</button>
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}; 