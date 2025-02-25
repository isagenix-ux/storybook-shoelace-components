import { html } from 'lit';

// Define color tokens
export const colors = {
  theme: {
    primary: '#00778B',
    success: '#62a752',
    warning: '#edab3a',
    error: '#a0272b',
  },
  granite: {
    100: '#F6F6F6',  // 246, 246, 246
    200: '#EDEEEE',   // 237, 238, 238
    500: '#D4D5D5',  // 212, 213, 213
    700: '#727677',  // 114, 118, 119
    800: '#54585A',  // 84, 88, 90
    900: '#303030'   // 48, 48, 48
  },
  turquoise: {
    100: '#F2F8F9',  // 242, 248, 249
    150: '#E0EEF1',  // 224, 238, 241
    200: '#BFDDE2',  // 191, 221, 226
    300: '#4099A8',  // 64, 153, 168
    500: '#00778B',  // 0, 119, 139
    700: '#0C5F6F',  // 12, 95, 111
    800: '#0C5F6F',  // 12, 95, 111
    900: '#003038'   // 0, 48, 56
  }
};

const meta = {
  title: 'Bootstrap/Foundations/Colors',
  tags: ['autodocs'],
  component: 'div',
  parameters: {
    docs: {
      description: {
        component: 'Color system used to create meaning and visual hierarchy in the interface.'
      }
    }
  }
};

export default meta;

// Theme Colors
export const ThemeColors = {
  render: () => html`
    <style>
      .color-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
      }
      .color-item {
        border: 1px solid #dee2e6;
        border-radius: 4px;
        overflow: hidden;
      }
      .color-preview {
        height: 100px;
        width: 100%;
      }
      .color-info {
        padding: 1rem;
      }
      .color-name {
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      .color-value {
        font-family: monospace;
        color: #6c757d;
      }
      .color-rgb {
        font-family: monospace;
        color: #6c757d;
        font-size: 0.875rem;
      }
    </style>
    <div class="color-grid">
      ${Object.entries(colors.theme).map(([name, value]) => html`
        <div class="color-item">
          <div class="color-preview" style="background-color: ${value}"></div>
          <div class="color-info">
            <div class="color-name">${name}</div>
            <div class="color-value">${value}</div>
          </div>
        </div>
      `)}
    </div>
  `
};

// Granite Scale
export const GraniteScale = {
  render: () => html`
    <style>
      .color-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
      }
      .color-item {
        border: 1px solid #dee2e6;
        border-radius: 4px;
        overflow: hidden;
      }
      .color-preview {
        height: 100px;
        width: 100%;
      }
      .color-info {
        padding: 1rem;
      }
      .color-name {
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      .color-value {
        font-family: monospace;
        color: #6c757d;
      }
    </style>
    <div class="color-grid">
      ${Object.entries(colors.granite).map(([name, value]) => html`
        <div class="color-item">
          <div class="color-preview" style="background-color: ${value}"></div>
          <div class="color-info">
            <div class="color-name">Granite ${name}</div>
            <div class="color-value">${value}</div>
          </div>
        </div>
      `)}
    </div>
  `
};

// Turquoise Scale
export const TurquoiseScale = {
  render: () => html`
    <style>
      .color-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
      }
      .color-item {
        border: 1px solid #dee2e6;
        border-radius: 4px;
        overflow: hidden;
      }
      .color-preview {
        height: 100px;
        width: 100%;
      }
      .color-info {
        padding: 1rem;
      }
      .color-name {
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      .color-value {
        font-family: monospace;
        color: #6c757d;
      }
    </style>
    <div class="color-grid">
      ${Object.entries(colors.turquoise).map(([name, value]) => html`
        <div class="color-item">
          <div class="color-preview" style="background-color: ${value}"></div>
          <div class="color-info">
            <div class="color-name">Turquoise ${name}</div>
            <div class="color-value">${value}</div>
          </div>
        </div>
      `)}
    </div>
  `
}; 