import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Components/Collapse',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Bootstrap\'s collapse component allows you to toggle content visibility on your pages.'
      }
    }
  },
  render: (args) => html`
    <div>
      <button 
        class="btn btn-primary" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseExample" 
        aria-expanded="false" 
        aria-controls="collapseExample"
      >
        ${args.buttonText}
      </button>
      <div class="collapse ${args.show ? 'show' : ''}" id="collapseExample">
        <div class="card card-body mt-2">
          ${args.content}
        </div>
      </div>
    </div>
  `,
  argTypes: {
    buttonText: { control: 'text' },
    content: { control: 'text' },
    show: { control: 'boolean' }
  }
};

export default meta;

// Basic Collapse
export const Basic = {
  args: {
    buttonText: 'Toggle Content',
    content: 'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.',
    show: false
  }
};

// Multiple Targets
export const MultipleTargets = {
  render: () => html`
    <div>
      <p>
        <button 
          class="btn btn-primary" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target=".multi-collapse" 
          aria-expanded="false"
        >
          Toggle both elements
        </button>
      </p>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              First collapsible element. You can show or hide this independently or together with the second element.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
              Second collapsible element. This can be toggled independently or together with the first element.
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};

// Accordion Example
export const Accordion = {
  render: () => html`
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button 
            class="accordion-button" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#collapseOne" 
            aria-expanded="true" 
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div 
          id="collapseOne" 
          class="accordion-collapse collapse show" 
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button 
            class="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#collapseTwo" 
            aria-expanded="false" 
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div 
          id="collapseTwo" 
          class="accordion-collapse collapse" 
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button 
            class="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#collapseThree" 
            aria-expanded="false" 
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div 
          id="collapseThree" 
          class="accordion-collapse collapse" 
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  `
};

// Horizontal Collapse
export const HorizontalCollapse = {
  render: () => html`
    <div>
      <button 
        class="btn btn-primary" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseWidthExample" 
        aria-expanded="false" 
        aria-controls="collapseWidthExample"
      >
        Toggle width collapse
      </button>
      <div style="min-height: 120px;">
        <div class="collapse collapse-horizontal" id="collapseWidthExample">
          <div class="card card-body mt-2" style="width: 300px;">
            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
          </div>
        </div>
      </div>
    </div>
  `
};

// With Custom Styles
export const CustomStyles = {
  render: () => html`
    <style>
      .custom-collapse {
        transition: all 0.5s ease;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      .custom-collapse.show {
        background: #f8f9fa;
      }
      .custom-collapse .card-body {
        padding: 1.5rem;
      }
    </style>
    <button 
      class="btn btn-outline-primary" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#customCollapse" 
      aria-expanded="false"
    >
      Custom Styled Collapse
    </button>
    <div class="collapse custom-collapse mt-2" id="customCollapse">
      <div class="card-body">
        This collapse element has custom styling with a smooth transition, rounded corners, and a subtle shadow effect.
      </div>
    </div>
  `
}; 