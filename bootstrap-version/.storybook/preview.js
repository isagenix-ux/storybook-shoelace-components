import { html } from 'lit';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

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
    (story) => {
      // Initialize Bootstrap components after render
      requestAnimationFrame(() => {
        // Initialize all tooltips
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltips.forEach(tooltip => new bootstrap.Tooltip(tooltip));

        // Initialize all toasts
        const toasts = document.querySelectorAll('.toast');
        toasts.forEach(toastEl => {
          const toast = new bootstrap.Toast(toastEl, {
            animation: true,
            autohide: true,
            delay: 5000
          });
          toast.show();
        });
      });

      return html`
        <div class="story-wrapper">
          ${story()}
        </div>
      `;
    },
  ],
};

export default preview; 