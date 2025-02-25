import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Buttons/Button Group',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="btn-group" role="group" aria-label="Basic example">
      ${args.buttons.map(label => html`
        <button type="button" class="btn btn-${args.variant || 'primary'}">${label}</button>
      `)}
    </div>
  `,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      description: 'The button group variant'
    },
    buttons: {
      control: 'array',
      description: 'Array of button labels'
    }
  }
};

export default meta;

// Basic button group
export const Basic = {
  args: {
    variant: 'primary',
    buttons: ['Left', 'Middle', 'Right']
  }
};

// Toolbar example
export const Toolbar = {
  render: () => html`
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group me-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-primary">1</button>
        <button type="button" class="btn btn-primary">2</button>
        <button type="button" class="btn btn-primary">3</button>
        <button type="button" class="btn btn-primary">4</button>
      </div>
      <div class="btn-group me-2" role="group" aria-label="Second group">
        <button type="button" class="btn btn-secondary">5</button>
        <button type="button" class="btn btn-secondary">6</button>
        <button type="button" class="btn btn-secondary">7</button>
      </div>
      <div class="btn-group" role="group" aria-label="Third group">
        <button type="button" class="btn btn-info">8</button>
      </div>
    </div>
  `
};

// Sizing
export const Sizes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Middle</button>
        <button type="button" class="btn btn-primary">Right</button>
      </div>
      
      <div class="btn-group" role="group" aria-label="Default button group">
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Middle</button>
        <button type="button" class="btn btn-primary">Right</button>
      </div>
      
      <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Middle</button>
        <button type="button" class="btn btn-primary">Right</button>
      </div>
    </div>
  `
};

// Vertical variation
export const Vertical = {
  render: () => html`
    <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
      <button type="button" class="btn btn-primary">Button</button>
      <button type="button" class="btn btn-primary">Button</button>
      <button type="button" class="btn btn-primary">Button</button>
    </div>
  `
}; 