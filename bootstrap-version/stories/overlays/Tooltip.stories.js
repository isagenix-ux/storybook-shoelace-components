import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Overlays/Tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Bootstrap tooltips must be initialized with JavaScript. This story uses the data-bs-toggle="tooltip" attribute.'
      }
    }
  },
  render: (args) => html`
    <div class="d-flex align-items-center justify-content-center p-4">
      <button 
        type="button" 
        class="btn btn-secondary"
        data-bs-toggle="tooltip"
        data-bs-placement=${args.placement}
        title=${args.content}
      >
        ${args.buttonText}
      </button>
    </div>
  `,
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The tooltip placement'
    },
    content: {
      control: 'text',
      description: 'The tooltip content'
    },
    buttonText: {
      control: 'text',
      description: 'The button text'
    }
  }
};

export default meta;

// Basic Tooltip
export const Basic = {
  args: {
    placement: 'top',
    content: 'Tooltip content',
    buttonText: 'Hover me'
  }
};

// Placements
export const Placements = {
  render: () => html`
    <div class="d-flex flex-column gap-3 align-items-center p-4">
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
        Tooltip on top
      </button>
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
        Tooltip on right
      </button>
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
        Tooltip on bottom
      </button>
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
        Tooltip on left
      </button>
    </div>
  `
};

// With HTML Content
export const WithHtml = {
  render: () => html`
    <div class="d-flex align-items-center justify-content-center p-4">
      <button 
        type="button" 
        class="btn btn-secondary"
        data-bs-toggle="tooltip"
        data-bs-html="true"
        title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
      >
        Tooltip with HTML
      </button>
    </div>
  `
};

// On Different Elements
export const OnDifferentElements = {
  render: () => html`
    <div class="d-flex gap-3 align-items-center justify-content-center p-4">
      <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" title="Tooltip on button">
        Button with tooltip
      </button>
      
      <a href="#" data-bs-toggle="tooltip" title="Tooltip on link">Link with tooltip</a>
      
      <span class="badge bg-secondary" data-bs-toggle="tooltip" title="Tooltip on badge">
        Badge with tooltip
      </span>
      
      <input 
        type="text" 
        class="form-control" 
        style="width: 200px;" 
        data-bs-toggle="tooltip" 
        title="Tooltip on input"
        placeholder="Input with tooltip"
      >
    </div>
  `
};

// Disabled Elements
export const DisabledElements = {
  render: () => html`
    <div class="d-flex gap-3 align-items-center justify-content-center p-4">
      <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
        <button class="btn btn-primary" type="button" disabled>Disabled button</button>
      </span>
      
      <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
        <button class="btn btn-secondary" type="button" disabled>Disabled button</button>
      </span>
    </div>
  `
}; 