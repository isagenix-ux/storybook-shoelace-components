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
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <h1 style="margin: 0;">Heading 1</h1>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">2.5rem (40px)</div>
      </div>
      <div>
        <h2 style="margin: 0;">Heading 2</h2>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">2rem (32px)</div>
      </div>
      <div>
        <h3 style="margin: 0;">Heading 3</h3>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1.75rem (28px)</div>
      </div>
      <div>
        <h4 style="margin: 0;">Heading 4</h4>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1.5rem (24px)</div>
      </div>
      <div>
        <h5 style="margin: 0;">Heading 5</h5>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1.25rem (20px)</div>
      </div>
      <div>
        <h6 style="margin: 0;">Heading 6</h6>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1rem (16px)</div>
      </div>
    </div>
  `
};

// Text Styles
export const TextStyles = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <div style="font-weight: 300;">Light Text (300)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 300</div>
      </div>
      <div>
        <div style="font-weight: 400;">Regular Text (400)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 400</div>
      </div>
      <div>
        <div style="font-weight: 600;">Semi-bold Text (600)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 600</div>
      </div>
      <div>
        <div style="font-weight: 700;">Bold Text (700)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 700</div>
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
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3>Body Text</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div>
        <h3>Inline Text Styles</h3>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <p><strong>Strong text</strong> - font-weight: 700</p>
          <p><em>Emphasized text</em> - font-style: italic</p>
          <p><u>Underlined text</u> - text-decoration: underline</p>
          <p><code>Monospace text</code> - font-family: monospace</p>
          <p><small>Small text</small> - font-size: smaller</p>
          <p><mark>Highlighted text</mark> - background-color: yellow</p>
        </div>
      </div>

      <div>
        <h3>Lists</h3>
        <div style="display: flex; gap: 4rem;">
          <div>
            <h4>Unordered List</h4>
            <ul>
              <li>List item one</li>
              <li>List item two</li>
              <li>List item three</li>
            </ul>
          </div>
          <div>
            <h4>Ordered List</h4>
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