import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Overlays/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Bootstrap\'s modal is a powerful, flexible dialog prompt with minimum required functionality and smart defaults.'
      }
    }
  },
  render: (args) => {
    const modalId = `modal-${Math.random().toString(36).substr(2, 9)}`;
    return html`
      <div>
        <!-- Button trigger modal -->
        <button 
          type="button" 
          class="btn btn-primary" 
          data-bs-toggle="modal" 
          data-bs-target="#${modalId}"
        >
          ${args.buttonText || 'Launch modal'}
        </button>

        <!-- Modal -->
        <div 
          class="modal fade" 
          id="${modalId}" 
          tabindex="-1" 
          aria-labelledby="${modalId}-label" 
          aria-hidden="true"
        >
          <div class="modal-dialog ${args.size || ''} ${args.centered ? 'modal-dialog-centered' : ''} ${args.scrollable ? 'modal-dialog-scrollable' : ''}">
            <div class="modal-content">
              ${args.header ? html`
                <div class="modal-header">
                  <h5 class="modal-title" id="${modalId}-label">${args.title}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              ` : ''}
              <div class="modal-body">
                ${args.content}
              </div>
              ${args.footer ? html`
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  },
  argTypes: {
    buttonText: { control: 'text' },
    header: { control: 'boolean' },
    title: { control: 'text' },
    content: { control: 'text' },
    footer: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['', 'modal-sm', 'modal-lg', 'modal-xl'],
      description: 'Modal size'
    },
    centered: { control: 'boolean' },
    scrollable: { control: 'boolean' }
  }
};

export default meta;

// Basic Modal
export const Basic = {
  args: {
    header: true,
    title: 'Modal title',
    content: 'Modal body text goes here.',
    footer: true
  }
};

// Static Backdrop
export const StaticBackdrop = {
  render: () => {
    const modalId = 'staticBackdrop';
    return html`
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">
        Launch static backdrop modal
      </button>

      <!-- Modal -->
      <div 
        class="modal fade" 
        id="${modalId}" 
        data-bs-backdrop="static" 
        data-bs-keyboard="false" 
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Static Backdrop Modal</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              This modal has a static backdrop, meaning it cannot be closed by clicking outside it.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

// Scrolling Long Content
export const ScrollingContent = {
  render: () => html`
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#scrollingModal">
      Launch scrolling modal
    </button>

    <div class="modal fade" id="scrollingModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Scrolling Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum height.</p>
            ${Array(20).fill().map(() => html`
              <p>This is a paragraph of sample text to make the modal content longer.</p>
            `)}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  `
};

// Vertically Centered
export const VerticallyCentered = {
  render: () => html`
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#centeredModal">
      Launch centered modal
    </button>

    <div class="modal fade" id="centeredModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Centered Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>This modal is vertically centered in the viewport.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  `
};

// Different Sizes
export const Sizes = {
  render: () => html`
    <div class="d-flex gap-2">
      <!-- Small modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#smallModal">
        Small modal
      </button>

      <!-- Large modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">
        Large modal
      </button>

      <!-- Extra large modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#extraLargeModal">
        Extra large modal
      </button>
    </div>

    <!-- Small modal -->
    <div class="modal fade" id="smallModal" tabindex="-1">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Small Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Small modal content
          </div>
        </div>
      </div>
    </div>

    <!-- Large modal -->
    <div class="modal fade" id="largeModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Large Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Large modal content
          </div>
        </div>
      </div>
    </div>

    <!-- Extra large modal -->
    <div class="modal fade" id="extraLargeModal" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Extra Large Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Extra large modal content
          </div>
        </div>
      </div>
    </div>
  `
}; 