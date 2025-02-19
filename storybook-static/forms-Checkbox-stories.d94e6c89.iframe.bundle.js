/*! For license information please see forms-Checkbox-stories.d94e6c89.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[22],{"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GI7VDIWX.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>defaultValue});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),defaultValue=(propertyName="value")=>(proto,key)=>{const ctor=proto.constructor,attributeChangedCallback=ctor.prototype.attributeChangedCallback;ctor.prototype.attributeChangedCallback=function(name,old,value){var _a;const options=ctor.getPropertyOptions(propertyName);if(name===("string"==typeof options.attribute?options.attribute:propertyName)){const converter=options.converter||lit__WEBPACK_IMPORTED_MODULE_0__.W3,newValue=("function"==typeof converter?converter:null!=(_a=null==converter?void 0:converter.fromAttribute)?_a:lit__WEBPACK_IMPORTED_MODULE_0__.W3.fromAttribute)(value,options.type);this[propertyName]!==newValue&&(this[key]=newValue)}attributeChangedCallback.call(this,name,old,value)}}},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SI4ACBFK.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>form_control_styles_default});var form_control_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`},"./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js").B.define("sl-icon");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js")},"./node_modules/lit/directives/live.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>l});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js"),directive_helpers=__webpack_require__("./node_modules/lit-html/directive-helpers.js");const l=(0,directive.u$)(class extends directive.WL{constructor(r){if(super(r),r.type!==directive.OA.PROPERTY&&r.type!==directive.OA.ATTRIBUTE&&r.type!==directive.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,directive_helpers.Rt)(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t]){if(t===lit_html.c0||t===lit_html.s6)return t;const o=i.element,l=i.name;if(i.type===directive.OA.PROPERTY){if(t===o[l])return lit_html.c0}else if(i.type===directive.OA.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(l))return lit_html.c0}else if(i.type===directive.OA.ATTRIBUTE&&o.getAttribute(l)===t+"")return lit_html.c0;return(0,directive_helpers.mY)(i),t}})},"./stories/forms/Checkbox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Checked:()=>Checked,CustomValidation:()=>CustomValidation,Disabled:()=>Disabled,Indeterminate:()=>Indeterminate,Sizes:()=>Sizes,WithHelpText:()=>WithHelpText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),checkbox_styles_default=lit.AH`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,chunk_GI7VDIWX=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GI7VDIWX.js"),chunk_SI4ACBFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SI4ACBFK.js"),chunk_3RPBFEDE=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3RPBFEDE.js"),chunk_NYIIDP5N=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js"),chunk_4GJTAPTW=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),live=__webpack_require__("./node_modules/lit/directives/live.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_AHFQSUH3_SlCheckbox=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.formControlController=new chunk_3RPBFEDE.Ud(this,{value:control=>control.checked?control.value||"on":void 0,defaultValue:control=>control.defaultChecked,setValue:(control,checked)=>control.checked=checked}),this.hasSlotController=new chunk_NYIIDP5N.X(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(event){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(event)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(options){this.input.focus(options)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(message){this.input.setCustomValidity(message),this.formControlController.updateValidity()}render(){const hasHelpTextSlot=this.hasSlotController.test("help-text"),hasHelpText=!!this.helpText||!!hasHelpTextSlot;return lit.qy`
      <div
        class=${(0,class_map.H)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":hasHelpText})}
      >
        <label
          part="base"
          class=${(0,class_map.H)({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${(0,if_defined.J)(this.value)}
            .indeterminate=${(0,live.V)(this.indeterminate)}
            .checked=${(0,live.V)(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?lit.qy`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?lit.qy`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${hasHelpText?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};chunk_AHFQSUH3_SlCheckbox.styles=[chunk_TUVJKY7S.$,chunk_SI4ACBFK.I,checkbox_styles_default],chunk_AHFQSUH3_SlCheckbox.dependencies={"sl-icon":chunk_4GJTAPTW.B},(0,chunk_KAW7D32O.Cc)([(0,decorators.P)('input[type="checkbox"]')],chunk_AHFQSUH3_SlCheckbox.prototype,"input",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_AHFQSUH3_SlCheckbox.prototype,"hasFocus",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_AHFQSUH3_SlCheckbox.prototype,"title",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_AHFQSUH3_SlCheckbox.prototype,"name",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_AHFQSUH3_SlCheckbox.prototype,"value",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_AHFQSUH3_SlCheckbox.prototype,"size",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_AHFQSUH3_SlCheckbox.prototype,"disabled",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_AHFQSUH3_SlCheckbox.prototype,"checked",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_AHFQSUH3_SlCheckbox.prototype,"indeterminate",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GI7VDIWX.J)("checked")],chunk_AHFQSUH3_SlCheckbox.prototype,"defaultChecked",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_AHFQSUH3_SlCheckbox.prototype,"form",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_AHFQSUH3_SlCheckbox.prototype,"required",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"help-text"})],chunk_AHFQSUH3_SlCheckbox.prototype,"helpText",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("disabled",{waitUntilFirstUpdate:!0})],chunk_AHFQSUH3_SlCheckbox.prototype,"handleDisabledChange",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],chunk_AHFQSUH3_SlCheckbox.prototype,"handleStateChange",1);chunk_AHFQSUH3_SlCheckbox.define("sl-checkbox");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/button/button.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js");const Checkbox_stories={title:"Shoelace/Forms/Checkbox",tags:["autodocs"],render:args=>lit.qy`
    <sl-checkbox
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      ?indeterminate=${args.indeterminate}
      ?required=${args.required}
      size=${args.size}
      help-text=${args.helpText||""}
    >
      ${args.label}
    </sl-checkbox>
  `,argTypes:{size:{control:"select",options:["small","medium","large"],description:"The checkbox's size.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},checked:{control:"boolean",description:"Draws the checkbox in a checked state."},disabled:{control:"boolean",description:"Disables the checkbox."},indeterminate:{control:"boolean",description:"Draws the checkbox in an indeterminate state."},required:{control:"boolean",description:"Makes the checkbox a required field."},label:{control:"text",description:"The checkbox label."},helpText:{control:"text",description:"The help text below the checkbox."}},parameters:{docs:{description:{component:"Checkboxes allow the user to toggle an option on or off."}}}},Basic={args:{label:"Checkbox"}},Checked={args:{label:"Checked",checked:!0}},Indeterminate={args:{label:"Indeterminate",indeterminate:!0}},Disabled={args:{label:"Disabled",disabled:!0}},Sizes={render:()=>lit.qy`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-checkbox size="small">Small</sl-checkbox>
      <sl-checkbox size="medium">Medium</sl-checkbox>
      <sl-checkbox size="large">Large</sl-checkbox>
    </div>
  `},WithHelpText={args:{label:"Checkbox",helpText:"This is the help text for this checkbox."}},CustomValidation={render:()=>lit.qy`
    <form>
      <sl-checkbox required>Check me</sl-checkbox>
      <br><br>
      <sl-button type="submit" variant="primary">Submit</sl-button>
    </form>
  `},__namedExportsOrder=["Basic","Checked","Indeterminate","Disabled","Sizes","WithHelpText","CustomValidation"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Checkbox'\n  }\n}",...Basic.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Checked',\n    checked: true\n  }\n}",...Checked.parameters?.docs?.source}}},Indeterminate.parameters={...Indeterminate.parameters,docs:{...Indeterminate.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Indeterminate',\n    indeterminate: true\n  }\n}",...Indeterminate.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      <sl-checkbox size="small">Small</sl-checkbox>\n      <sl-checkbox size="medium">Medium</sl-checkbox>\n      <sl-checkbox size="large">Large</sl-checkbox>\n    </div>\n  `\n}',...Sizes.parameters?.docs?.source}}},WithHelpText.parameters={...WithHelpText.parameters,docs:{...WithHelpText.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Checkbox',\n    helpText: 'This is the help text for this checkbox.'\n  }\n}",...WithHelpText.parameters?.docs?.source}}},CustomValidation.parameters={...CustomValidation.parameters,docs:{...CustomValidation.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <form>\n      <sl-checkbox required>Check me</sl-checkbox>\n      <br><br>\n      <sl-button type="submit" variant="primary">Submit</sl-button>\n    </form>\n  `\n}',...CustomValidation.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=forms-Checkbox-stories.d94e6c89.iframe.bundle.js.map