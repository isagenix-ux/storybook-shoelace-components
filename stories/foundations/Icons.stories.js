import { html } from 'lit';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faUser, faCog, faBell, faEnvelope, faHeart, faStar, faCheck, faXmark, faCircleInfo } from '@fortawesome/pro-light-svg-icons';

// Add icons to the library
library.add(
  faHouse,
  faUser,
  faCog,
  faBell,
  faEnvelope,
  faHeart,
  faStar,
  faCheck,
  faXmark,
  faCircleInfo
);

const meta = {
  title: 'Foundations/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Font Awesome Pro Light icons used throughout the application.'
      }
    }
  }
};

export default meta;

const IconDisplay = ({ name, icon }) => html`
  <div style="
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid var(--sl-color-neutral-200);
    border-radius: 4px;
  ">
    <div style="
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <i class="fa-light ${icon}" style="font-size: 1.5rem;"></i>
    </div>
    <div style="
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    ">
      <div style="font-weight: 600;">${name}</div>
      <div style="color: var(--sl-color-neutral-500); font-family: monospace; font-size: 0.875rem;">
        ${icon}
      </div>
    </div>
  </div>
`;

// Common Icons
export const CommonIcons = {
  render: () => html`
    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    ">
      ${IconDisplay({ name: 'House', icon: 'fa-house' })}
      ${IconDisplay({ name: 'User', icon: 'fa-user' })}
      ${IconDisplay({ name: 'Settings', icon: 'fa-cog' })}
      ${IconDisplay({ name: 'Bell', icon: 'fa-bell' })}
      ${IconDisplay({ name: 'Email', icon: 'fa-envelope' })}
      ${IconDisplay({ name: 'Heart', icon: 'fa-heart' })}
      ${IconDisplay({ name: 'Star', icon: 'fa-star' })}
      ${IconDisplay({ name: 'Check', icon: 'fa-check' })}
      ${IconDisplay({ name: 'Close', icon: 'fa-xmark' })}
      ${IconDisplay({ name: 'Info', icon: 'fa-circle-info' })}
    </div>
  `
};

// Usage Example
export const UsageExample = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">Button with Icon</h3>
        <sl-button>
          <i class="fa-light fa-house"></i>
          Home
        </sl-button>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Text with Icon</h3>
        <p>
          <i class="fa-light fa-circle-info"></i>
          This is an informational message
        </p>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Icon Sizes</h3>
        <div style="display: flex; align-items: center; gap: 2rem;">
          <i class="fa-light fa-star" style="font-size: 1rem;"></i>
          <i class="fa-light fa-star" style="font-size: 1.5rem;"></i>
          <i class="fa-light fa-star" style="font-size: 2rem;"></i>
          <i class="fa-light fa-star" style="font-size: 2.5rem;"></i>
        </div>
      </div>
    </div>
  `
}; 