import { html } from 'lit';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faUser, faCog, faBell, faEnvelope, faHeart, faStar, faCheck, faXmark, faCircleInfo } from '@fortawesome/pro-light-svg-icons';

// Add icons to the library
library.add(faHouse, faUser, faCog, faBell, faEnvelope, faHeart, faStar, faCheck, faXmark, faCircleInfo);

const meta = {
  title: 'Foundations/Icons',
  tags: ['autodocs']
};

export default meta;

const IconDisplay = ({ name, iconDef }) => {
  const iconHtml = icon(iconDef).html;
  return html`
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
        ${html([iconHtml])}
      </div>
      <div style="
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      ">
        <div style="font-weight: 600;">${name}</div>
        <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif; font-size: 0.875rem;">
          ${iconDef.iconName}
        </div>
      </div>
    </div>
  `;
};

export const CommonIcons = {
  render: () => html`
    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    ">
      ${IconDisplay({ name: 'House', iconDef: faHouse })}
      ${IconDisplay({ name: 'User', iconDef: faUser })}
      ${IconDisplay({ name: 'Settings', iconDef: faCog })}
      ${IconDisplay({ name: 'Bell', iconDef: faBell })}
      ${IconDisplay({ name: 'Email', iconDef: faEnvelope })}
      ${IconDisplay({ name: 'Heart', iconDef: faHeart })}
      ${IconDisplay({ name: 'Star', iconDef: faStar })}
      ${IconDisplay({ name: 'Check', iconDef: faCheck })}
      ${IconDisplay({ name: 'Close', iconDef: faXmark })}
      ${IconDisplay({ name: 'Info', iconDef: faCircleInfo })}
    </div>
  `
};

export const UsageExample = {
  render: () => {
    const houseHtml = icon(faHouse).html;
    const infoHtml = icon(faCircleInfo).html;
    const starHtml = icon(faStar).html;
    
    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h3 style="margin-bottom: 1rem;">Button with Icon</h3>
          <sl-button>
            ${html([houseHtml])}
            Home
          </sl-button>
        </div>

        <div>
          <h3 style="margin-bottom: 1rem;">Text with Icon</h3>
          <p>
            ${html([infoHtml])}
            This is an informational message
          </p>
        </div>

        <div>
          <h3 style="margin-bottom: 1rem;">Icon Sizes</h3>
          <div style="display: flex; align-items: center; gap: 2rem;">
            <div style="font-size: 1rem;">${html([starHtml])}</div>
            <div style="font-size: 1.5rem;">${html([starHtml])}</div>
            <div style="font-size: 2rem;">${html([starHtml])}</div>
            <div style="font-size: 2.5rem;">${html([starHtml])}</div>
          </div>
        </div>
      </div>
    `;
  }
}; 