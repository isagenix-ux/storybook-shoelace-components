import { html } from 'lit';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

// Import Shoelace styles
import '@shoelace-style/shoelace/dist/themes/light.css';

// Set the base path for Shoelace assets
setBasePath('/shoelace');

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => html`
      <style>
        .story-wrapper {
          font-family: 'Nunito Sans', sans-serif;
        }
        
        /* Override Shoelace's default font and colors */
        :root {
          --sl-font-sans: 'Nunito Sans', sans-serif;
          --sl-font-serif: 'Nunito Sans', sans-serif;
          --sl-font-mono: monospace;

          /* Primary colors */
          --sl-color-primary-50: #F2F8F9;
          --sl-color-primary-100: #E0EEF1;
          --sl-color-primary-200: #BFDDE2;
          --sl-color-primary-300: #4099A8;
          --sl-color-primary-400: #1F8A9C;
          --sl-color-primary-500: #00778B;
          --sl-color-primary-600: #00778B;
          --sl-color-primary-700: #0C5F6F;
          --sl-color-primary-800: #0C5F6F;
          --sl-color-primary-900: #003038;
          --sl-color-primary-950: #002128;

          /* Neutral colors */
          --sl-color-neutral-50: #F6F6F6;
          --sl-color-neutral-100: #EDEEE;
          --sl-color-neutral-200: #D4D5D5;
          --sl-color-neutral-300: #B6B8B9;
          --sl-color-neutral-400: #949697;
          --sl-color-neutral-500: #727677;
          --sl-color-neutral-600: #54585A;
          --sl-color-neutral-700: #3F4244;
          --sl-color-neutral-800: #303030;
          --sl-color-neutral-900: #1C1D1D;
          --sl-color-neutral-950: #0F0F0F;
        }

        /* Checkbox overrides */
        sl-checkbox {
          --sl-input-border-width: 2px;
          --sl-toggle-size: 1rem;
          --sl-spacing-3x-small: 0.125rem;
        }

        sl-checkbox::part(base) {
          display: inline-flex;
          align-items: center;
          font-family: var(--sl-font-sans);
          font-size: var(--sl-font-size-medium);
          font-weight: var(--sl-font-weight-normal);
          color: var(--sl-color-neutral-700);
          vertical-align: middle;
          cursor: pointer;
        }

        sl-checkbox::part(control) {
          flex: 0 0 auto;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: var(--sl-toggle-size);
          height: var(--sl-toggle-size);
          border: solid var(--sl-input-border-width) var(--sl-color-neutral-300);
          border-radius: 2px;
          background-color: var(--sl-color-neutral-0);
          color: var(--sl-color-neutral-0);
          transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
        }

        sl-checkbox[checked]::part(control) {
          background-color: #0C5F6F;
          border-color: #0C5F6F;
        }

        sl-checkbox[indeterminate]::part(control) {
          background-color: #0C5F6F;
          border-color: #0C5F6F;
        }

        sl-checkbox::part(label) {
          line-height: var(--sl-toggle-size);
          margin-inline-start: 0.5em;
          user-select: none;
        }

        /* Size modifiers */
        sl-checkbox[size='small'] {
          --sl-toggle-size: 0.875rem;
        }

        sl-checkbox[size='medium'] {
          --sl-toggle-size: 1rem;
        }

        sl-checkbox[size='large'] {
          --sl-toggle-size: 1.25rem;
        }

        /* Button overrides */
        sl-button::part(base) {
          /* Primary button colors */
          --sl-button-primary-background-color: #00778B;  /* Turquoise 500 */
          --sl-button-primary-border-color: #00778B;      /* Turquoise 500 */
          --sl-button-primary-hover-background-color: #0C5F6F;  /* Turquoise 700 */
          --sl-button-primary-hover-border-color: #0C5F6F;      /* Turquoise 700 */

          /* Secondary button colors */
          --sl-button-default-background-color: transparent;
          --sl-button-default-border-color: var(--sl-color-neutral-300);
          --sl-button-default-hover-background-color: #F6F6F6;  /* Granite 100 */
          --sl-button-default-hover-border-color: var(--sl-color-neutral-300);  /* Keep original border */
          --sl-button-default-hover-color: inherit;  /* Keep original text color */
        }
      </style>
      <div class="sl-theme-light story-wrapper">
        ${story()}
      </div>
    `,
  ],
};

export default preview;
