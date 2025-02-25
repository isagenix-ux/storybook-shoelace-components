import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Layout/Grid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Bootstrap\'s grid system uses a series of containers, rows, and columns to layout and align content. It\'s built with flexbox and is fully responsive.'
      }
    }
  }
};

export default meta;

// Basic Grid
export const Basic = {
  render: () => html`
    <style>
      .grid-example .row > div {
        padding: 1rem;
        background-color: rgba(39,41,43,0.03);
        border: 1px solid rgba(39,41,43,0.1);
      }
    </style>
    <div class="container grid-example">
      <div class="row">
        <div class="col-sm">
          One of three columns
        </div>
        <div class="col-sm">
          One of three columns
        </div>
        <div class="col-sm">
          One of three columns
        </div>
      </div>
    </div>
  `
};

// Equal Width Multi-line
export const EqualWidthMultiLine = {
  render: () => html`
    <style>
      .grid-example .row > div {
        padding: 1rem;
        background-color: rgba(39,41,43,0.03);
        border: 1px solid rgba(39,41,43,0.1);
        margin-bottom: 1rem;
      }
    </style>
    <div class="container grid-example">
      <div class="row">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="w-100"></div>
        <div class="col">Column</div>
        <div class="col">Column</div>
      </div>
    </div>
  `
};

// Setting Column Width
export const VariableWidth = {
  render: () => html`
    <style>
      .grid-example .row > div {
        padding: 1rem;
        background-color: rgba(39,41,43,0.03);
        border: 1px solid rgba(39,41,43,0.1);
        margin-bottom: 1rem;
      }
    </style>
    <div class="container grid-example">
      <div class="row">
        <div class="col">1 of 3</div>
        <div class="col-6">2 of 3 (wider)</div>
        <div class="col">3 of 3</div>
      </div>
      <div class="row">
        <div class="col">1 of 3</div>
        <div class="col-5">2 of 3 (wider)</div>
        <div class="col">3 of 3</div>
      </div>
    </div>
  `
};

// Responsive Classes
export const ResponsiveClasses = {
  render: () => html`
    <style>
      .grid-example .row > div {
        padding: 1rem;
        background-color: rgba(39,41,43,0.03);
        border: 1px solid rgba(39,41,43,0.1);
        margin-bottom: 1rem;
      }
    </style>
    <div class="container grid-example">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <div class="row">
        <div class="col-md-8">.col-md-8</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>

      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <div class="row">
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>

      <!-- Columns are always 50% wide, on mobile and desktop -->
      <div class="row">
        <div class="col-6">.col-6</div>
        <div class="col-6">.col-6</div>
      </div>
    </div>
  `
};

// Alignment
export const Alignment = {
  render: () => html`
    <style>
      .grid-example .row {
        min-height: 10rem;
        background-color: rgba(39,41,43,0.03);
        margin-bottom: 1rem;
      }
      .grid-example .row > div {
        padding: 1rem;
        background-color: rgba(39,41,43,0.03);
        border: 1px solid rgba(39,41,43,0.1);
      }
    </style>
    <div class="container grid-example">
      <h6>Vertical Alignment</h6>
      <div class="row align-items-start">
        <div class="col">start</div>
        <div class="col">start</div>
        <div class="col">start</div>
      </div>
      <div class="row align-items-center">
        <div class="col">center</div>
        <div class="col">center</div>
        <div class="col">center</div>
      </div>
      <div class="row align-items-end">
        <div class="col">end</div>
        <div class="col">end</div>
        <div class="col">end</div>
      </div>

      <h6 class="mt-4">Horizontal Alignment</h6>
      <div class="row justify-content-start">
        <div class="col-4">start</div>
        <div class="col-4">start</div>
      </div>
      <div class="row justify-content-center">
        <div class="col-4">center</div>
        <div class="col-4">center</div>
      </div>
      <div class="row justify-content-end">
        <div class="col-4">end</div>
        <div class="col-4">end</div>
      </div>
      <div class="row justify-content-around">
        <div class="col-4">around</div>
        <div class="col-4">around</div>
      </div>
      <div class="row justify-content-between">
        <div class="col-4">between</div>
        <div class="col-4">between</div>
      </div>
    </div>
  `
};

// Nesting
export const Nesting = {
  render: () => html`
    <style>
      .grid-example .row > div {
        padding: 1rem;
        background-color: rgba(39,41,43,0.03);
        border: 1px solid rgba(39,41,43,0.1);
      }
      .grid-example .row .row > div {
        background-color: rgba(39,41,43,0.06);
        border: 1px solid rgba(39,41,43,0.2);
      }
    </style>
    <div class="container grid-example">
      <div class="row">
        <div class="col-sm-9">
          Level 1: .col-sm-9
          <div class="row">
            <div class="col-8 col-sm-6">
              Level 2: .col-8 .col-sm-6
            </div>
            <div class="col-4 col-sm-6">
              Level 2: .col-4 .col-sm-6
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}; 