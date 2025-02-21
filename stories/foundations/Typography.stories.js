import { html } from 'lit';

const meta = {
  title: 'Foundations/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Typography system using Nunito Sans as the primary font family.'
      }
    }
  }
};

export default meta;

// Headings
export const Headings = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; font-family: 'Nunito Sans', sans-serif;">
      <div>
        <h1 style="margin: 0; font-size: 54px;">Heading 1</h1>
        <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">54px</div>
      </div>
      <div>
        <h2 style="margin: 0; font-size: 48px;">Heading 2</h2>
        <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">48px</div>
      </div>
      <div>
        <h3 style="margin: 0; font-size: 32px;">Heading 3</h3>
        <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">32px</div>
      </div>
      <div>
        <h4 style="margin: 0; font-size: 24px;">Heading 4</h4>
        <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">24px</div>
      </div>
      <div>
        <h5 style="margin: 0; font-size: 21px;">Heading 5</h5>
        <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">21px</div>
      </div>
      <div>
        <h6 style="margin: 0; font-size: 18px;">Heading 6</h6>
        <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">18px</div>
      </div>
    </div>
  `
};

// Text Styles
export const TextStyles = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; font-family: 'Nunito Sans', sans-serif; font-size: 16px;">
      <div>
        <div style="font-weight: 300;">Light Text (300)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 300</div>
      </div>
      <div>
        <div style="font-weight: 400;">Regular Text (400)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 400</div>
      </div>
      <div>
        <div style="font-weight: 600;">Semi-bold Text (600)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 600</div>
      </div>
      <div>
        <div style="font-weight: 700;">Bold Text (700)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 700</div>
      </div>
    </div>
  `
};

// Font Sizes
export const FontSizes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <div style="font-size: var(--sl-font-size-2x-small);">2x-Small Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-2x-small</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-x-small);">X-Small Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-x-small</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-small);">Small Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-small</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-medium);">Medium Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-medium</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-large);">Large Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-large</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-x-large);">X-Large Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-x-large</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-2x-large);">2x-Large Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-2x-large</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-3x-large);">3x-Large Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-3x-large</div>
      </div>
    </div>
  `
};

// Text Examples
export const TextExamples = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; font-family: 'Nunito Sans', sans-serif;">
      <div>
        <h3 style="font-size: 32px;">Body Text</h3>
        <p style="font-size: 16px; margin: 0;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div>
        <h3 style="font-size: 32px;">Inline Text Styles</h3>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 16px;">
          <p style="margin: 0;"><strong>Strong text</strong> - font-weight: 700</p>
          <p style="margin: 0;"><em>Emphasized text</em> - font-style: italic</p>
          <p style="margin: 0;"><u>Underlined text</u> - text-decoration: underline</p>
          <p style="margin: 0;"><code style="font-family: 'Nunito Sans', sans-serif;">Monospace text</code> - font-family: Nunito Sans</p>
          <p style="margin: 0;"><small>Small text</small> - font-size: smaller</p>
          <p style="margin: 0;"><mark>Highlighted text</mark> - background-color: yellow</p>
        </div>
      </div>

      <div>
        <h3 style="font-size: 32px;">Lists</h3>
        <div style="display: flex; gap: 4rem; font-size: 16px;">
          <div>
            <h4 style="font-size: 24px;">Unordered List</h4>
            <ul>
              <li>List item one</li>
              <li>List item two</li>
              <li>List item three</li>
            </ul>
          </div>
          <div>
            <h4 style="font-size: 24px;">Ordered List</h4>
            <ol>
              <li>List item one</li>
              <li>List item two</li>
              <li>List item three</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  `
}; 