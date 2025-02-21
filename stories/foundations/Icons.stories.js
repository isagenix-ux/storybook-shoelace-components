import { html } from 'lit';

// Import your SVG icons
import userIcon from '../assets/icons/user.svg';
import bellIcon from '../assets/icons/bell.svg';
import envelopeIcon from '../assets/icons/envelope.svg';
import heartIcon from '../assets/icons/heart.svg';
import starIcon from '../assets/icons/star.svg';
import checkIcon from '../assets/icons/check.svg';
import xmarkIcon from '../assets/icons/xmark.svg';
import infoIcon from '../assets/icons/circle-info.svg';

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
      <img src=${icon} alt=${name} style="width: 1.5rem; height: 1.5rem;" />
    </div>
    <div style="
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    ">
      <div style="font-weight: 600;">${name}</div>
      <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif; font-size: 0.875rem;">
        ${icon.split('/').pop().replace('.svg', '')}
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
      ${IconDisplay({ name: 'User', icon: userIcon })}
      ${IconDisplay({ name: 'Bell', icon: bellIcon })}
      ${IconDisplay({ name: 'Email', icon: envelopeIcon })}
      ${IconDisplay({ name: 'Heart', icon: heartIcon })}
      ${IconDisplay({ name: 'Star', icon: starIcon })}
      ${IconDisplay({ name: 'Check', icon: checkIcon })}
      ${IconDisplay({ name: 'Close', icon: xmarkIcon })}
      ${IconDisplay({ name: 'Info', icon: infoIcon })}
    </div>
  `
};

export const UsageExample = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">Button with Icon</h3>
        <sl-button>
          <img src=${userIcon} alt="User" style="width: 1em; height: 1em; margin-right: 0.5em;" />
          Profile
        </sl-button>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Text with Icon</h3>
        <p>
          <img src=${infoIcon} alt="Info" style="width: 1em; height: 1em; margin-right: 0.5em;" />
          This is an informational message
        </p>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Icon Sizes</h3>
        <div style="display: flex; align-items: center; gap: 2rem;">
          <img src=${starIcon} alt="Star" style="width: 1rem; height: 1rem;" />
          <img src=${starIcon} alt="Star" style="width: 1.5rem; height: 1.5rem;" />
          <img src=${starIcon} alt="Star" style="width: 2rem; height: 2rem;" />
          <img src=${starIcon} alt="Star" style="width: 2.5rem; height: 2.5rem;" />
        </div>
      </div>
    </div>
  `
}; 