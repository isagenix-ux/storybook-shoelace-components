import { html } from 'lit';

const meta = {
  title: 'Foundations/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The color system consists of semantic colors for UI elements and a set of supporting neutral colors.'
      }
    }
  }
};

export default meta;

const ColorSwatch = ({ name, hex, rgb }) => html`
  <div style="display: flex; align-items: center; margin-bottom: 1rem;">
    <div style="
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${hex};
      margin-right: 1rem;
      border: 1px solid var(--sl-color-neutral-200);
    "></div>
    <div>
      <div style="font-weight: bold;">${name}</div>
      <div style="font-family: monospace; font-size: 0.9em; color: var(--sl-color-neutral-600);">
        ${hex}<br>
        rgb(${rgb})
      </div>
    </div>
  </div>
`;

export const Granite = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem;">
      ${ColorSwatch({ name: 'Granite 100', hex: '#F6F6F6', rgb: '246, 246, 246' })}
      ${ColorSwatch({ name: 'Granite 200', hex: '#EDEEEE', rgb: '237, 238, 238' })}
      ${ColorSwatch({ name: 'Granite 500', hex: '#D4D5D5', rgb: '212, 213, 213' })}
      ${ColorSwatch({ name: 'Granite 700', hex: '#727677', rgb: '114, 118, 119' })}
      ${ColorSwatch({ name: 'Granite 800', hex: '#54585A', rgb: '84, 88, 90' })}
      ${ColorSwatch({ name: 'Granite 900', hex: '#303030', rgb: '48, 48, 48' })}
    </div>
  `
};

export const Turquoise = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem;">
      ${ColorSwatch({ name: 'Turquoise 100', hex: '#F2F8F9', rgb: '242, 248, 249' })}
      ${ColorSwatch({ name: 'Turquoise 150', hex: '#E0EEF1', rgb: '224, 238, 241' })}
      ${ColorSwatch({ name: 'Turquoise 200', hex: '#BFDDE2', rgb: '191, 221, 226' })}
      ${ColorSwatch({ name: 'Turquoise 300', hex: '#4099A8', rgb: '64, 153, 168' })}
      ${ColorSwatch({ name: 'Turquoise 500', hex: '#00778B', rgb: '0, 119, 139' })}
      ${ColorSwatch({ name: 'Turquoise 700', hex: '#0C5F6F', rgb: '12, 95, 111' })}
      ${ColorSwatch({ name: 'Turquoise 800', hex: '#0C5F6F', rgb: '12, 95, 111' })}
      ${ColorSwatch({ name: 'Turquoise 900', hex: '#003038', rgb: '0, 48, 56' })}
    </div>
  `
}; 