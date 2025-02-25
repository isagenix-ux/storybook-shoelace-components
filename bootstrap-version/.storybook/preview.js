import { html } from 'lit';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { styles as colorStyles } from '../stories/foundations/colors.js';

window.jQuery = window.$ = $;

const styleElement = document.createElement('style');
styleElement.textContent = colorStyles;
document.head.appendChild(styleElement);

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
    layout: 'padded',
    docs: {
      story: {
        height: '300px',
        scrollable: true
      }
    }
  },
  decorators: [
    (story) => {
      // Initialize Bootstrap components after render
      requestAnimationFrame(() => {
        // Clean up existing modals and backdrops
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
        const existingModals = document.querySelectorAll('.modal');
        existingModals.forEach(modal => {
          const modalInstance = $(modal).data('bs.modal');
          if (modalInstance) {
            modalInstance.dispose();
          }
        });

        // Initialize new modals
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => $(modal).modal());

        // Initialize tooltips
        const tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
        $(tooltips).tooltip();

        // Initialize toasts
        const toasts = document.querySelectorAll('.toast');
        $(toasts).toast('show');
      });

      return html`
        <div class="story-wrapper" style="padding: 1rem; overflow-y: auto;">
          ${story()}
        </div>
      `;
    },
  ],
};

export default preview; 