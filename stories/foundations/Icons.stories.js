import { html } from 'lit';

// Navigation Icons
import angleDownIcon from '../assets/icons/angle-down.svg';
import angleLeftIcon from '../assets/icons/angle-left.svg';
import angleRightIcon from '../assets/icons/angle-right.svg';
import angleUpIcon from '../assets/icons/angle-up.svg';
import chevronDownIcon from '../assets/icons/chevron-down.svg';
import chevronLeftIcon from '../assets/icons/chevron-left.svg';
import chevronRightIcon from '../assets/icons/chevron-right.svg';
import chevronUpIcon from '../assets/icons/chevron-up.svg';

// Action Icons
import checkIcon from '../assets/icons/check.svg';
import copyIcon from '../assets/icons/copy.svg';
import eyeIcon from '../assets/icons/eye.svg';
import eyeSlashIcon from '../assets/icons/eye-slash.svg';
import gearIcon from '../assets/icons/gear.svg';
import filterIcon from '../assets/icons/filter.svg';
import searchIcon from '../assets/icons/magnifying-glass.svg';

// Communication Icons
import bellIcon from '../assets/icons/bell.svg';
import envelopeIcon from '../assets/icons/envelope.svg';
import messageIcon from '../assets/icons/message.svg';
import megaphoneIcon from '../assets/icons/megaphone.svg';
import commentsIcon from '../assets/icons/comments.svg';

// Status Icons
import circleCheckIcon from '../assets/icons/circle-check.svg';
import circleInfoIcon from '../assets/icons/circle-info.svg';
import circleExclamationIcon from '../assets/icons/circle-exclamation.svg';
import circlePlayIcon from '../assets/icons/circle-play.svg';

const meta = {
  title: 'Foundations/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Icon system using Font Awesome Pro Light icons.'
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

const IconSection = ({ title, icons }) => html`
  <div style="margin-bottom: 2rem;">
    <h2 style="margin-bottom: 1rem;">${title}</h2>
    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    ">
      ${icons}
    </div>
  </div>
`;

export const IconGallery = {
  render: () => html`
    ${IconSection({
      title: 'Navigation',
      icons: html`
        ${IconDisplay({ name: 'Angle Down', icon: angleDownIcon })}
        ${IconDisplay({ name: 'Angle Left', icon: angleLeftIcon })}
        ${IconDisplay({ name: 'Angle Right', icon: angleRightIcon })}
        ${IconDisplay({ name: 'Angle Up', icon: angleUpIcon })}
        ${IconDisplay({ name: 'Chevron Down', icon: chevronDownIcon })}
        ${IconDisplay({ name: 'Chevron Left', icon: chevronLeftIcon })}
        ${IconDisplay({ name: 'Chevron Right', icon: chevronRightIcon })}
        ${IconDisplay({ name: 'Chevron Up', icon: chevronUpIcon })}
      `
    })}

    ${IconSection({
      title: 'Actions',
      icons: html`
        ${IconDisplay({ name: 'Check', icon: checkIcon })}
        ${IconDisplay({ name: 'Copy', icon: copyIcon })}
        ${IconDisplay({ name: 'Eye', icon: eyeIcon })}
        ${IconDisplay({ name: 'Eye Slash', icon: eyeSlashIcon })}
        ${IconDisplay({ name: 'Settings', icon: gearIcon })}
        ${IconDisplay({ name: 'Filter', icon: filterIcon })}
        ${IconDisplay({ name: 'Search', icon: searchIcon })}
      `
    })}

    ${IconSection({
      title: 'Communication',
      icons: html`
        ${IconDisplay({ name: 'Bell', icon: bellIcon })}
        ${IconDisplay({ name: 'Envelope', icon: envelopeIcon })}
        ${IconDisplay({ name: 'Message', icon: messageIcon })}
        ${IconDisplay({ name: 'Megaphone', icon: megaphoneIcon })}
        ${IconDisplay({ name: 'Comments', icon: commentsIcon })}
      `
    })}

    ${IconSection({
      title: 'Status',
      icons: html`
        ${IconDisplay({ name: 'Success', icon: circleCheckIcon })}
        ${IconDisplay({ name: 'Info', icon: circleInfoIcon })}
        ${IconDisplay({ name: 'Warning', icon: circleExclamationIcon })}
        ${IconDisplay({ name: 'Play', icon: circlePlayIcon })}
      `
    })}
  `
};

export const UsageExamples = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">Button with Icon</h3>
        <sl-button>
          <img src=${searchIcon} alt="Search" style="width: 1em; height: 1em; margin-right: 0.5em;" />
          Search
        </sl-button>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Status Message</h3>
        <p>
          <img src=${circleInfoIcon} alt="Info" style="width: 1em; height: 1em; margin-right: 0.5em;" />
          This is an informational message
        </p>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Icon Sizes</h3>
        <div style="display: flex; align-items: center; gap: 2rem;">
          <img src=${bellIcon} alt="Bell" style="width: 1rem; height: 1rem;" />
          <img src=${bellIcon} alt="Bell" style="width: 1.5rem; height: 1.5rem;" />
          <img src=${bellIcon} alt="Bell" style="width: 2rem; height: 2rem;" />
          <img src=${bellIcon} alt="Bell" style="width: 2.5rem; height: 2.5rem;" />
        </div>
      </div>
    </div>
  `
}; 