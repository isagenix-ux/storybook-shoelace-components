import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Forms/Radio',
  tags: ['autodocs'],
  component: 'div',
  render: (args) => html`
    <div class="custom-control custom-radio">
      <input 
        type="radio" 
        class="custom-control-input" 
        id="customRadio1"
        name="customRadio"
        ?checked=${args.checked}
        ?disabled=${args.disabled}
      >
      <label class="custom-control-label" for="customRadio1">${args.label}</label>
    </div>
  `,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
};

export default meta;

export const Default = {
  args: {
    label: 'Default radio',
    checked: false,
    disabled: false
  }
};

export const Checked = {
  args: {
    label: 'Checked radio',
    checked: true,
    disabled: false
  }
};

export const Disabled = {
  args: {
    label: 'Disabled radio',
    checked: false,
    disabled: true
  }
};

// Basic radio
export const Basic = {
  args: {
    options: [
      { value: '1', label: 'First radio', checked: true },
      { value: '2', label: 'Second radio' },
      { value: '3', label: 'Third radio' }
    ],
    helpText: 'Select one of the options above'
  }
};

// Inline radios
export const Inline = {
  render: () => html`
    <div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
        <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
      </div>
    </div>
  `
};

// States
export const States = {
  render: () => html`
    <div class="vstack gap-4">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="statesRadio1" checked>
        <label class="form-check-label">
          Checked radio
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="statesRadio2" disabled>
        <label class="form-check-label">
          Disabled radio
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input is-valid" type="radio" name="statesRadio3" checked>
        <label class="form-check-label">
          Valid radio
        </label>
        <div class="valid-feedback">Looks good!</div>
      </div>

      <div class="form-check">
        <input class="form-check-input is-invalid" type="radio" name="statesRadio4">
        <label class="form-check-label">
          Invalid radio
        </label>
        <div class="invalid-feedback">Please select this option.</div>
      </div>
    </div>
  `
};

// Button style radios
export const ButtonStyle = {
  render: () => html`
    <div class="vstack gap-4">
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
        <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
      </div>

      <div class="btn-group" role="group" aria-label="Basic radio toggle button group with disabled">
        <input type="radio" class="btn-check" name="btnradio-disabled" id="btnradio4" autocomplete="off" checked disabled>
        <label class="btn btn-outline-primary" for="btnradio4">Disabled Radio 1</label>

        <input type="radio" class="btn-check" name="btnradio-disabled" id="btnradio5" autocomplete="off" disabled>
        <label class="btn btn-outline-primary" for="btnradio5">Disabled Radio 2</label>
      </div>
    </div>
  `
}; 