import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Forms/Checkbox',
  tags: ['autodocs'],
  component: 'div',
  render: (args) => html`
    <div class="custom-control custom-checkbox">
      <input 
        type="checkbox" 
        class="custom-control-input" 
        id="customCheck1"
        ?checked=${args.checked}
        ?disabled=${args.disabled}
      >
      <label class="custom-control-label" for="customCheck1">${args.label}</label>
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
    label: 'Default checkbox',
    checked: false,
    disabled: false
  }
};

export const Checked = {
  args: {
    label: 'Checked checkbox',
    checked: true,
    disabled: false
  }
};

export const Disabled = {
  args: {
    label: 'Disabled checkbox',
    checked: false,
    disabled: true
  }
};

// Basic checkbox
export const Basic = {
  args: {
    label: 'Check me out',
    checked: false,
    helpText: 'This is a basic checkbox example'
  }
};

// States
export const States = {
  render: () => html`
    <div class="vstack gap-4">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" checked>
        <label class="form-check-label">
          Checked checkbox
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" disabled>
        <label class="form-check-label">
          Disabled checkbox
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" checked disabled>
        <label class="form-check-label">
          Disabled checked checkbox
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input is-valid" type="checkbox" checked>
        <label class="form-check-label">
          Valid checkbox
        </label>
        <div class="valid-feedback">Looks good!</div>
      </div>

      <div class="form-check">
        <input class="form-check-input is-invalid" type="checkbox">
        <label class="form-check-label">
          Invalid checkbox
        </label>
        <div class="invalid-feedback">Please check this checkbox.</div>
      </div>
    </div>
  `
};

// Inline checkboxes
export const Inline = {
  render: () => html`
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
      <label class="form-check-label" for="inlineCheckbox1">1</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
      <label class="form-check-label" for="inlineCheckbox2">2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
      <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
    </div>
  `
};

// Switch style
export const Switches = {
  render: () => html`
    <div class="vstack gap-4">
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox</label>
      </div>
      
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
        <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox</label>
      </div>
      
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
        <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox</label>
      </div>
    </div>
  `
};

// Button style checkboxes
export const ButtonStyle = {
  render: () => html`
    <div class="vstack gap-4">
      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
        <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

        <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
        <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

        <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
        <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
      </div>
    </div>
  `
}; 