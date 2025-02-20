import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/card/card.js';

const meta = {
  title: 'Components/Countdown',
  tags: ['autodocs'],
  render: (args) => html`
    <div style="display: flex; justify-content: space-between; align-items: center; max-width: 800px;">
      <div class="weekly-info">
        <h2>Weekly Information</h2>
        <p>Your weekly commission details and updates go here.</p>
      </div>

      <div class="countdown-container" style="text-align: right;">
        <h3 style="margin: 0; font-size: 16px; color: #666;">Commission week ends in:</h3>
        <div style="font-size: 48px; font-weight: bold; line-height: 1;">
          ${args.days}:${args.hours}:${args.minutes}
        </div>
        <div style="display: flex; gap: 20px; justify-content: flex-end; color: #666;">
          <span style="width: 65px">DAYS</span>
          <span style="width: 65px">HOURS</span>
          <span style="width: 65px">MINUTES</span>
        </div>
        <div style="margin-top: 8px; color: #666; font-size: 14px;">
          Pacific Time (Los Angeles): ${args.currentTime}
        </div>
      </div>
    </div>
  `,
  argTypes: {
    days: { control: 'text' },
    hours: { control: 'text' },
    minutes: { control: 'text' },
    currentTime: { control: 'text' }
  }
};

export default meta;

export const Default = {
  args: {
    days: '04',
    hours: '08',
    minutes: '32',
    currentTime: 'Feb-09-2025 6:40 PM'
  }
};

export const AlmostDone = {
  args: {
    days: '00',
    hours: '02',
    minutes: '15',
    currentTime: 'Feb-09-2025 6:40 PM'
  }
}; 