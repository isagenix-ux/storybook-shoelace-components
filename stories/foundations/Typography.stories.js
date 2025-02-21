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
    <div style="display: flex; flex-direction: column; gap: 2rem; font-family: 'Nunito Sans', sans-serif;">
      <div>
        <h3 style="font-size: 32px; margin-bottom: 1rem;">Heading 1 - 64px</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <h1 style="margin: 0; font-size: 64px; font-weight: 300;">Heading 1 Light</h1>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 300</div>
          </div>
          <div>
            <h1 style="margin: 0; font-size: 64px; font-weight: 400;">Heading 1 Regular</h1>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 400</div>
          </div>
          <div>
            <h1 style="margin: 0; font-size: 64px; font-weight: 600;">Heading 1 Semi-bold</h1>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 600</div>
          </div>
          <div>
            <h1 style="margin: 0; font-size: 64px; font-weight: 700;">Heading 1 Bold</h1>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 700</div>
          </div>
        </div>
      </div>

      <div>
        <h3 style="font-size: 32px; margin-bottom: 1rem;">Heading 2 - 48px</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <h2 style="margin: 0; font-size: 48px; font-weight: 300;">Heading 2 Light</h2>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 300</div>
          </div>
          <div>
            <h2 style="margin: 0; font-size: 48px; font-weight: 400;">Heading 2 Regular</h2>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 400</div>
          </div>
          <div>
            <h2 style="margin: 0; font-size: 48px; font-weight: 600;">Heading 2 Semi-bold</h2>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 600</div>
          </div>
          <div>
            <h2 style="margin: 0; font-size: 48px; font-weight: 700;">Heading 2 Bold</h2>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 700</div>
          </div>
        </div>
      </div>

      <div>
        <h3 style="font-size: 32px; margin-bottom: 1rem;">Heading 3 - 32px</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <h3 style="margin: 0; font-size: 32px; font-weight: 300;">Heading 3 Light</h3>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 300</div>
          </div>
          <div>
            <h3 style="margin: 0; font-size: 32px; font-weight: 400;">Heading 3 Regular</h3>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 400</div>
          </div>
          <div>
            <h3 style="margin: 0; font-size: 32px; font-weight: 600;">Heading 3 Semi-bold</h3>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 600</div>
          </div>
          <div>
            <h3 style="margin: 0; font-size: 32px; font-weight: 700;">Heading 3 Bold</h3>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 700</div>
          </div>
        </div>
      </div>

      <div>
        <h3 style="font-size: 32px; margin-bottom: 1rem;">Heading 4 - 24px</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <h4 style="margin: 0; font-size: 24px; font-weight: 300;">Heading 4 Light</h4>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 300</div>
          </div>
          <div>
            <h4 style="margin: 0; font-size: 24px; font-weight: 400;">Heading 4 Regular</h4>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 400</div>
          </div>
          <div>
            <h4 style="margin: 0; font-size: 24px; font-weight: 600;">Heading 4 Semi-bold</h4>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 600</div>
          </div>
          <div>
            <h4 style="margin: 0; font-size: 24px; font-weight: 700;">Heading 4 Bold</h4>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 700</div>
          </div>
        </div>
      </div>

      <div>
        <h3 style="font-size: 32px; margin-bottom: 1rem;">Heading 5 - 21px</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <h5 style="margin: 0; font-size: 21px; font-weight: 300;">Heading 5 Light</h5>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 300</div>
          </div>
          <div>
            <h5 style="margin: 0; font-size: 21px; font-weight: 400;">Heading 5 Regular</h5>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 400</div>
          </div>
          <div>
            <h5 style="margin: 0; font-size: 21px; font-weight: 600;">Heading 5 Semi-bold</h5>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 600</div>
          </div>
          <div>
            <h5 style="margin: 0; font-size: 21px; font-weight: 700;">Heading 5 Bold</h5>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 700</div>
          </div>
        </div>
      </div>

      <div>
        <h3 style="font-size: 32px; margin-bottom: 1rem;">Heading 6 - 18px</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <h6 style="margin: 0; font-size: 18px; font-weight: 300;">Heading 6 Light</h6>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 300</div>
          </div>
          <div>
            <h6 style="margin: 0; font-size: 18px; font-weight: 400;">Heading 6 Regular</h6>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 400</div>
          </div>
          <div>
            <h6 style="margin: 0; font-size: 18px; font-weight: 600;">Heading 6 Semi-bold</h6>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 600</div>
          </div>
          <div>
            <h6 style="margin: 0; font-size: 18px; font-weight: 700;">Heading 6 Bold</h6>
            <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif;">font-weight: 700</div>
          </div>
        </div>
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