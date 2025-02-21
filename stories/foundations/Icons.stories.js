import { html } from 'lit';

// Navigation Icons
import angleDownIcon from '../assets/icons/angle-down.svg';
import angleLeftIcon from '../assets/icons/angle-left.svg';
import angleRightIcon from '../assets/icons/angle-right.svg';
import angleUpIcon from '../assets/icons/angle-up.svg';
import arrowDownIcon from '../assets/icons/arrow-down.svg';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';
import arrowUpIcon from '../assets/icons/arrow-up.svg';
import arrowDownLongIcon from '../assets/icons/arrow-down-long.svg';
import arrowLeftLongIcon from '../assets/icons/arrow-left-long.svg';
import arrowRightLongIcon from '../assets/icons/arrow-right-long.svg';
import arrowUpLongIcon from '../assets/icons/arrow-up-long.svg';
import arrowUpRightSquareIcon from '../assets/icons/arrow-up-right-from-square.svg';
import caretDownIcon from '../assets/icons/caret-down.svg';
import caretLeftIcon from '../assets/icons/caret-left.svg';
import caretRightIcon from '../assets/icons/caret-right.svg';
import caretUpIcon from '../assets/icons/caret-up.svg';
import chevronDownIcon from '../assets/icons/chevron-down.svg';
import chevronLeftIcon from '../assets/icons/chevron-left.svg';
import chevronRightIcon from '../assets/icons/chevron-right.svg';
import chevronUpIcon from '../assets/icons/chevron-up.svg';

// Circle Navigation Icons
import circleArrowDownIcon from '../assets/icons/circle-arrow-down.svg';
import circleArrowLeftIcon from '../assets/icons/circle-arrow-left.svg';
import circleArrowRightIcon from '../assets/icons/circle-arrow-right.svg';
import circleArrowUpIcon from '../assets/icons/circle-arrow-up.svg';
import circleChevronDownIcon from '../assets/icons/circle-chevron-down.svg';
import circleChevronLeftIcon from '../assets/icons/circle-chevron-left.svg';
import circleChevronRightIcon from '../assets/icons/circle-chevron-right.svg';
import circleChevronUpIcon from '../assets/icons/circle-chevron-up.svg';

// Interface Icons
import barsIcon from '../assets/icons/bars.svg';
import checkIcon from '../assets/icons/check.svg';
import circleIcon from '../assets/icons/circle.svg';
import copyIcon from '../assets/icons/copy.svg';
import ellipsisIcon from '../assets/icons/ellipsis.svg';
import ellipsisVerticalIcon from '../assets/icons/ellipsis-vertical.svg';
import eyeIcon from '../assets/icons/eye.svg';
import eyeSlashIcon from '../assets/icons/eye-slash.svg';
import filterIcon from '../assets/icons/filter.svg';
import gearIcon from '../assets/icons/gear.svg';
import gearComplexIcon from '../assets/icons/gear-complex.svg';
import linkIcon from '../assets/icons/link.svg';
import listIcon from '../assets/icons/list.svg';
import magnifyingGlassIcon from '../assets/icons/magnifying-glass.svg';
import minusIcon from '../assets/icons/minus.svg';

// Status Icons
import circleCheckIcon from '../assets/icons/circle-check.svg';
import circleExclamationIcon from '../assets/icons/circle-exclamation.svg';
import circleInfoIcon from '../assets/icons/circle-info.svg';
import circleNotchIcon from '../assets/icons/circle-notch.svg';
import circlePlayIcon from '../assets/icons/circle-play.svg';
import circlePlusIcon from '../assets/icons/circle-plus.svg';
import arrowsRotateReverseIcon from '../assets/icons/arrows-rotate-reverse.svg';

// Communication Icons
import addressCardIcon from '../assets/icons/address-card.svg';
import bellIcon from '../assets/icons/bell.svg';
import bookmarkIcon from '../assets/icons/bookmark.svg';
import commentsIcon from '../assets/icons/comments.svg';
import envelopeIcon from '../assets/icons/envelope.svg';
import messageIcon from '../assets/icons/message.svg';
import megaphoneIcon from '../assets/icons/megaphone.svg';

// Shopping Icons
import basketShoppingSimpleIcon from '../assets/icons/basket-shopping-simple.svg';
import cartCircleExclamationIcon from '../assets/icons/cart-circle-exclamation.svg';
import cartCirclePlusIcon from '../assets/icons/cart-circle-plus.svg';
import cartPlusIcon from '../assets/icons/cart-plus.svg';
import cartShoppingIcon from '../assets/icons/cart-shopping.svg';
import cartShoppingFastIcon from '../assets/icons/cart-shopping-fast.svg';

// Business Icons
import awardIcon from '../assets/icons/award.svg';
import badgeCheckIcon from '../assets/icons/badge-check.svg';
import boxIcon from '../assets/icons/box.svg';
import boxOpenIcon from '../assets/icons/box-open.svg';
import briefcaseIcon from '../assets/icons/briefcase.svg';
import browserIcon from '../assets/icons/browser.svg';
import calendarIcon from '../assets/icons/calendar.svg';
import chartLineIcon from '../assets/icons/chart-line.svg';
import creditCardIcon from '../assets/icons/credit-card.svg';
import filePdfIcon from '../assets/icons/file-pdf.svg';
import medalIcon from '../assets/icons/medal.svg';

// Location Icons
import houseIcon from '../assets/icons/house.svg';
import houseBlankIcon from '../assets/icons/house-blank.svg';
import locationDotIcon from '../assets/icons/location-dot.svg';
import locationPinIcon from '../assets/icons/location-pin.svg';

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
        ${IconDisplay({ name: 'Arrow Down', icon: arrowDownIcon })}
        ${IconDisplay({ name: 'Arrow Left', icon: arrowLeftIcon })}
        ${IconDisplay({ name: 'Arrow Right', icon: arrowRightIcon })}
        ${IconDisplay({ name: 'Arrow Up', icon: arrowUpIcon })}
        ${IconDisplay({ name: 'Arrow Down Long', icon: arrowDownLongIcon })}
        ${IconDisplay({ name: 'Arrow Left Long', icon: arrowLeftLongIcon })}
        ${IconDisplay({ name: 'Arrow Right Long', icon: arrowRightLongIcon })}
        ${IconDisplay({ name: 'Arrow Up Long', icon: arrowUpLongIcon })}
        ${IconDisplay({ name: 'Arrow Up Right Square', icon: arrowUpRightSquareIcon })}
        ${IconDisplay({ name: 'Caret Down', icon: caretDownIcon })}
        ${IconDisplay({ name: 'Caret Left', icon: caretLeftIcon })}
        ${IconDisplay({ name: 'Caret Right', icon: caretRightIcon })}
        ${IconDisplay({ name: 'Caret Up', icon: caretUpIcon })}
        ${IconDisplay({ name: 'Chevron Down', icon: chevronDownIcon })}
        ${IconDisplay({ name: 'Chevron Left', icon: chevronLeftIcon })}
        ${IconDisplay({ name: 'Chevron Right', icon: chevronRightIcon })}
        ${IconDisplay({ name: 'Chevron Up', icon: chevronUpIcon })}
      `
    })}

    ${IconSection({
      title: 'Circle Navigation',
      icons: html`
        ${IconDisplay({ name: 'Circle Arrow Down', icon: circleArrowDownIcon })}
        ${IconDisplay({ name: 'Circle Arrow Left', icon: circleArrowLeftIcon })}
        ${IconDisplay({ name: 'Circle Arrow Right', icon: circleArrowRightIcon })}
        ${IconDisplay({ name: 'Circle Arrow Up', icon: circleArrowUpIcon })}
        ${IconDisplay({ name: 'Circle Chevron Down', icon: circleChevronDownIcon })}
        ${IconDisplay({ name: 'Circle Chevron Left', icon: circleChevronLeftIcon })}
        ${IconDisplay({ name: 'Circle Chevron Right', icon: circleChevronRightIcon })}
        ${IconDisplay({ name: 'Circle Chevron Up', icon: circleChevronUpIcon })}
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
        ${IconDisplay({ name: 'Search', icon: magnifyingGlassIcon })}
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
          <img src=${magnifyingGlassIcon} alt="Search" style="width: 1em; height: 1em; margin-right: 0.5em;" />
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