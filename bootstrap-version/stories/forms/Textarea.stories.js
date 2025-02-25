import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Forms/Textarea',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="mb-3">
      ${args.label ? html`
        <label class="form-label">${args.label}</label>
      ` : ''}
      <textarea
        class="form-control ${args.isValid ? 'is-valid' : ''} ${args.isInvalid ? 'is-invalid' : ''}"
        rows=${args.rows || 3}
        placeholder=${args.placeholder || ''}
        ?disabled=${args.disabled}
        ?readonly=${args.readonly}
      >${args.value || ''}</textarea>
      ${args.helpText ? html`
        <div class="form-text">${args.helpText}</div>
      ` : ''}
      ${args.isValid ? html`
        <div class="valid-feedback">Looks good!</div>
      ` : ''}
      ${args.isInvalid ? html`
        <div class="invalid-feedback">Please enter a valid message.</div>
      ` : ''}
    </div>
  `,
  argTypes: {
    label: {
      control: 'text',
      description: 'Textarea label'
    },
    value: {
      control: 'text',
      description: 'Textarea content'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    readonly: {
      control: 'boolean',
      description: 'Readonly state'
    },
    helpText: {
      control: 'text',
      description: 'Help text below the textarea'
    },
    isValid: {
      control: 'boolean',
      description: 'Valid state'
    },
    isInvalid: {
      control: 'boolean',
      description: 'Invalid state'
    }
  }
};

export default meta;

// Basic textarea
export const Basic = {
  args: {
    label: 'Example textarea',
    placeholder: 'Type your message here...',
    helpText: 'Enter your message in the textarea above',
    rows: 3
  }
};

// States
export const States = {
  render: () => html`
    <div class="vstack gap-4">
      <div class="mb-3">
        <label class="form-label">Default textarea</label>
        <textarea class="form-control" rows="3" placeholder="Default textarea"></textarea>
      </div>

      <div class="mb-3">
        <label class="form-label">Disabled textarea</label>
        <textarea class="form-control" rows="3" disabled>Disabled textarea</textarea>
      </div>

      <div class="mb-3">
        <label class="form-label">Readonly textarea</label>
        <textarea class="form-control" rows="3" readonly>Readonly textarea</textarea>
      </div>

      <div class="mb-3">
        <label class="form-label">Valid textarea</label>
        <textarea class="form-control is-valid" rows="3">Valid textarea</textarea>
        <div class="valid-feedback">Looks good!</div>
      </div>

      <div class="mb-3">
        <label class="form-label">Invalid textarea</label>
        <textarea class="form-control is-invalid" rows="3">Invalid textarea</textarea>
        <div class="invalid-feedback">Please enter a valid message.</div>
      </div>
    </div>
  `
};

// Sizes
export const Sizes = {
  render: () => html`
    <div class="vstack gap-4">
      <div class="mb-3">
        <label class="form-label">Small textarea</label>
        <textarea class="form-control form-control-sm" rows="3" placeholder="Small textarea"></textarea>
      </div>

      <div class="mb-3">
        <label class="form-label">Default textarea</label>
        <textarea class="form-control" rows="3" placeholder="Default textarea"></textarea>
      </div>

      <div class="mb-3">
        <label class="form-label">Large textarea</label>
        <textarea class="form-control form-control-lg" rows="3" placeholder="Large textarea"></textarea>
      </div>
    </div>
  `
};

// Auto-growing textarea
export const AutoGrowing = {
  render: () => html`
    <div class="mb-3">
      <label class="form-label">Auto-growing textarea</label>
      <textarea 
        class="form-control" 
        placeholder="Start typing to see the textarea grow..."
        style="min-height: 100px;"
        @input=${(e) => {
          e.target.style.height = 'auto';
          e.target.style.height = e.target.scrollHeight + 'px';
        }}
      ></textarea>
    </div>
  `
};

// With character counter
export const WithCounter = {
  render: () => {
    const maxLength = 100;
    return html`
      <div class="mb-3">
        <label class="form-label">Textarea with character counter</label>
        <textarea 
          class="form-control" 
          maxlength=${maxLength}
          rows="3"
          @input=${(e) => {
            const counter = e.target.parentElement.querySelector('.character-counter');
            counter.textContent = `${e.target.value.length}/${maxLength}`;
          }}
        ></textarea>
        <div class="d-flex justify-content-end">
          <small class="character-counter text-muted">0/${maxLength}</small>
        </div>
      </div>
    `;
  }
}; 