import { html } from 'lit';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import '../stories/foundations/colors.css';

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
    layout: 'centered',
  },
  decorators: [
    (story) => {
      // Initialize Bootstrap components after render
      requestAnimationFrame(() => {
        // Clean up existing modals and backdrops
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
        const existingModals = document.querySelectorAll('.modal');
        existingModals.forEach(modal => {
          const modalInstance = bootstrap.Modal.getInstance(modal);
          if (modalInstance) {
            modalInstance.dispose();
          }
        });

        // Initialize new modals
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
          new bootstrap.Modal(modal);
        });

        // Initialize tooltips
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltips.forEach(tooltip => new bootstrap.Tooltip(tooltip));

        // Initialize toasts
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