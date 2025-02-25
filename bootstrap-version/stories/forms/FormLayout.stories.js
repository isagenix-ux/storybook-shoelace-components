import { html } from 'lit';

const meta = {
  title: 'Bootstrap/Forms/Form Layout',
  tags: ['autodocs']
};

export default meta;

// Basic Form
export const BasicForm = {
  render: () => html`
    <form>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" placeholder="name@example.com">
        <div class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" placeholder="Password">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="rememberMe">
        <label class="form-check-label" for="rememberMe">Remember me</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `
};

// Horizontal Form
export const HorizontalForm = {
  render: () => html`
    <form>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" placeholder="name@example.com">
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" placeholder="Password">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-10 offset-sm-2">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="rememberMeHorizontal">
            <label class="form-check-label" for="rememberMeHorizontal">
              Remember me
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-10 offset-sm-2">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </div>
    </form>
  `
};

// Inline Form
export const InlineForm = {
  render: () => html`
    <form class="row row-cols-lg-auto g-3 align-items-center">
      <div class="col-12">
        <label class="visually-hidden">Email</label>
        <div class="input-group">
          <div class="input-group-text">@</div>
          <input type="text" class="form-control" placeholder="Username">
        </div>
      </div>

      <div class="col-12">
        <label class="visually-hidden">Password</label>
        <input type="password" class="form-control" placeholder="Password">
      </div>

      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="rememberMeInline">
          <label class="form-check-label" for="rememberMeInline">
            Remember me
          </label>
        </div>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  `
};

// Form Grid
export const FormGrid = {
  render: () => html`
    <form class="row g-3">
      <div class="col-md-6">
        <label class="form-label">First Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-md-6">
        <label class="form-label">Last Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-12">
        <label class="form-label">Address</label>
        <input type="text" class="form-control" placeholder="1234 Main St">
      </div>
      <div class="col-12">
        <label class="form-label">Address 2</label>
        <input type="text" class="form-control" placeholder="Apartment, studio, or floor">
      </div>
      <div class="col-md-6">
        <label class="form-label">City</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-md-4">
        <label class="form-label">State</label>
        <select class="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-2">
        <label class="form-label">Zip</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form>
  `
};

// Floating Labels
export const FloatingLabels = {
  render: () => html`
    <form>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating mb-3">
        <select class="form-select" id="floatingSelect">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Works with selects</label>
      </div>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Comments</label>
      </div>
    </form>
  `
};

// Input Groups
export const InputGroups = {
  render: () => html`
    <div class="vstack gap-4">
      <div class="input-group mb-3">
        <span class="input-group-text">@</span>
        <input type="text" class="form-control" placeholder="Username">
      </div>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Amount">
        <span class="input-group-text">.00</span>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input type="text" class="form-control" placeholder="Amount">
        <span class="input-group-text">.00</span>
      </div>

      <div class="input-group">
        <span class="input-group-text">Message</span>
        <textarea class="form-control" aria-label="Message"></textarea>
      </div>
    </div>
  `
};

// Validation Form
export const ValidationForm = {
  render: () => html`
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <label class="form-label">First name</label>
        <input type="text" class="form-control" required>
        <div class="valid-feedback">
          Looks good!
        </div>
        <div class="invalid-feedback">
          Please enter your first name.
        </div>
      </div>
      <div class="col-md-4">
        <label class="form-label">Last name</label>
        <input type="text" class="form-control" required>
        <div class="valid-feedback">
          Looks good!
        </div>
        <div class="invalid-feedback">
          Please enter your last name.
        </div>
      </div>
      <div class="col-md-4">
        <label class="form-label">Email</label>
        <div class="input-group has-validation">
          <span class="input-group-text">@</span>
          <input type="email" class="form-control" required>
          <div class="invalid-feedback">
            Please enter a valid email.
          </div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  `
}; 