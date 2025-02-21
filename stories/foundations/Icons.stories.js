import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

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
      <sl-icon name=${icon}></sl-icon>
    </div>
    <div style="
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    ">
      <div style="font-weight: 600;">${name}</div>
      <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif; font-size: 0.875rem;">
        ${icon}
      </div>
    </div>
  </div>
`;

export const CommonIcons = {
  render: () => html`
    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    ">
      ${IconDisplay({ name: 'House', icon: 'house' })}
      ${IconDisplay({ name: 'User', icon: 'person' })}
      ${IconDisplay({ name: 'Settings', icon: 'gear' })}
      ${IconDisplay({ name: 'Bell', icon: 'bell' })}
      ${IconDisplay({ name: 'Email', icon: 'envelope' })}
      ${IconDisplay({ name: 'Heart', icon: 'heart' })}
      ${IconDisplay({ name: 'Star', icon: 'star' })}
      ${IconDisplay({ name: 'Check', icon: 'check' })}
      ${IconDisplay({ name: 'Close', icon: 'x-lg' })}
      ${IconDisplay({ name: 'Info', icon: 'info-circle' })}
    </div>
  `
};

export const UsageExample = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">Button with Icon</h3>
        <sl-button>
          <sl-icon name="house"></sl-icon>
          Home
        </sl-button>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Text with Icon</h3>
        <p>
          <sl-icon name="info-circle"></sl-icon>
          This is an informational message
        </p>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Icon Sizes</h3>
        <div style="display: flex; align-items: center; gap: 2rem;">
          <sl-icon name="star" style="font-size: 1rem;"></sl-icon>
          <sl-icon name="star" style="font-size: 1.5rem;"></sl-icon>
          <sl-icon name="star" style="font-size: 2rem;"></sl-icon>
          <sl-icon name="star" style="font-size: 2.5rem;"></sl-icon>
        </div>
      </div>
    </div>
  `
}; 