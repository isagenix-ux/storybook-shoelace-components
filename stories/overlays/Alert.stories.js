import { html } from 'lit';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  falCircleInfo, 
  falCircleCheck, 
  falCircleExclamation, 
  falTriangleExclamation 
} from '@fortawesome/pro-light-svg-icons';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

library.add(
  falCircleInfo,
  falCircleCheck,
  falCircleExclamation,
  falTriangleExclamation
);

const meta = {
  title: 'Shoelace/Overlays/Alert',
  tags: ['autodocs'],
  render: (args) => {
    // Create a container element that will persist
    const container = document.createElement('div');
    
    // Render the alert into the container
    const alert = document.createElement('sl-alert');
    alert.variant = args.variant || 'primary';
    alert.open = true;
    alert.closable = args.closable;
    alert.duration = args.duration;
    alert.countdown = args.countdown || '';
    
    if (args.icon) {
      const icon = document.createElement('sl-icon');
      icon.slot = 'icon';
      icon.library = 'fa';
      icon.name = getIconForVariant(args.variant);
      alert.appendChild(icon);
    }
    
    if (args.hasHeader) {
      const header = document.createElement('strong');
      header.textContent = args.header;
      alert.appendChild(header);
      alert.appendChild(document.createElement('br'));
    }
    
    alert.appendChild(document.createTextNode(args.content));
    container.appendChild(alert);
    
    return container;
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger']
    },
    closable: { control: 'boolean' },
    duration: { control: 'number' },
    countdown: { 
      control: 'select',
      options: ['', 'rtl', 'ltr']
    },
    icon: { control: 'boolean' },
    hasHeader: { control: 'boolean' },
    header: { control: 'text' },
    content: { control: 'text' }
  }
};

function getIconForVariant(variant) {
  switch (variant) {
    case 'primary':
      return 'fa-light fa-circle-info';
    case 'success':
      return 'fa-light fa-circle-check';
    case 'warning':
      return 'fa-light fa-circle-exclamation';
    case 'danger':
      return 'fa-light fa-triangle-exclamation';
    default:
      return 'fa-light fa-circle-info';
  }
}

export default meta;

// Basic alert
export const Basic = {
  args: {
    content: 'This is a standard alert. You can customize its content and even the icon.',
    icon: true,
    variant: 'primary'
  }
};

// Variants with Font Awesome icons
export const Primary = {
  args: {
    variant: 'primary',
    hasHeader: true,
    header: 'This is super informative',
    content: 'You can tell by how pretty the alert is.',
    icon: true
  }
};

export const Success = {
  args: {
    variant: 'success',
    hasHeader: true,
    header: 'Your changes have been saved',
    content: 'You can safely exit the app now.',
    icon: true
  }
};

export const Warning = {
  args: {
    variant: 'warning',
    hasHeader: true,
    header: 'Your session has ended',
    content: 'Please login again to continue.',
    icon: true
  }
};

export const Danger = {
  args: {
    variant: 'danger',
    hasHeader: true,
    header: 'Your account has been deleted',
    content: 'We\'re very sorry to see you go!',
    icon: true
  }
};

// Closable alert
export const Closable = {
  args: {
    closable: true,
    content: 'You can close this alert any time!',
    icon: true
  }
};

// Without icon
export const WithoutIcon = {
  args: {
    content: 'Nothing fancy here, just a simple alert.'
  }
};

// With duration
export const WithDuration = {
  args: {
    closable: true,
    duration: 3000,
    content: 'This alert will automatically hide itself after three seconds, unless you interact with it.',
    icon: true
  }
};

// With countdown
export const WithCountdown = {
  args: {
    closable: true,
    duration: 10000,
    countdown: 'rtl',
    content: 'You\'re not stuck, the alert will close after a pretty long duration.',
    icon: true
  }
}; 