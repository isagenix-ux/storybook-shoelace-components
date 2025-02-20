import { html } from 'lit';

// Import Shoelace components
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

function getIconForVariant(variant) {
  switch (variant) {
    case 'primary':
      return 'circle-info';
    case 'success':
      return 'circle-check';
    case 'warning':
      return 'circle-exclamation';
    case 'danger':
      return 'triangle-exclamation';
    default:
      return 'circle-info';
  }
}

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
      icon.library = 'fa-light';
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

export default meta;

// Basic alert
export const Basic = {
  args: {
    content: 'This is a standard alert. You can customize its content and even the icon.',
    icon: true,
    variant: 'primary'
  }
};

// Variants
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
    icon: true,
    variant: 'primary'
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