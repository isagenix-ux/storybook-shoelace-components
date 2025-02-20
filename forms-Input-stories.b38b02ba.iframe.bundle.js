"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[223],{"./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js").B.define("sl-icon");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js")},"./stories/forms/Input.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Clearable:()=>Clearable,Disabled:()=>Disabled,Filled:()=>Filled,FormValidation:()=>FormValidation,InputTypes:()=>InputTypes,PasswordToggle:()=>PasswordToggle,Pill:()=>Pill,PrefixAndSuffix:()=>PrefixAndSuffix,Sizes:()=>Sizes,WithHelpText:()=>WithHelpText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/input/input.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/button/button.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Shoelace/Forms/Input",tags:["autodocs"],render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <sl-input
      type=${args.type||"text"}
      label=${args.label||""}
      help-text=${args.helpText||""}
      placeholder=${args.placeholder||""}
      size=${args.size||"medium"}
      ?clearable=${args.clearable}
      ?filled=${args.filled}
      ?pill=${args.pill}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?password-toggle=${args.passwordToggle}
      value=${args.value||""}
      style="max-width: 300px;"
    >
      ${args.prefix?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
        <sl-icon name="house" slot="prefix"></sl-icon>
      `:""}
      ${args.suffix?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
        <sl-icon name="chat" slot="suffix"></sl-icon>
      `:""}
    </sl-input>
  `,argTypes:{type:{control:"select",options:["text","email","number","password","search","tel","url","date"],description:"The type of input"},label:{control:"text",description:"The input label"},helpText:{control:"text",description:"Help text for the input"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"The input value"},size:{control:"select",options:["small","medium","large"],description:"The input size"},clearable:{control:"boolean",description:"Makes the input clearable"},filled:{control:"boolean",description:"Draws a filled input"},pill:{control:"boolean",description:"Draws a pill-style input"},disabled:{control:"boolean",description:"Disables the input"},required:{control:"boolean",description:"Makes the input required"},passwordToggle:{control:"boolean",description:"Adds a password toggle button"},prefix:{control:"boolean",description:"Shows a prefix icon"},suffix:{control:"boolean",description:"Shows a suffix icon"}}},Basic={args:{label:"Label",placeholder:"Type something"}},WithHelpText={args:{label:"Label",helpText:"This is the help text that provides additional information.",placeholder:"Type something"}},Clearable={args:{label:"Clearable",placeholder:"Type something",clearable:!0}},PasswordToggle={args:{type:"password",label:"Password",passwordToggle:!0,placeholder:"Type your password"}},Filled={args:{label:"Label",placeholder:"Type something",filled:!0}},Disabled={args:{label:"Label",placeholder:"Type something",disabled:!0}},Sizes={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input size="small" placeholder="Small" style="max-width: 300px;"></sl-input>
      <sl-input size="medium" placeholder="Medium" style="max-width: 300px;"></sl-input>
      <sl-input size="large" placeholder="Large" style="max-width: 300px;"></sl-input>
    </div>
  `},Pill={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input size="small" placeholder="Small" pill style="max-width: 300px;"></sl-input>
      <sl-input size="medium" placeholder="Medium" pill style="max-width: 300px;"></sl-input>
      <sl-input size="large" placeholder="Large" pill style="max-width: 300px;"></sl-input>
    </div>
  `},InputTypes={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input type="email" placeholder="Email" style="max-width: 300px;"></sl-input>
      <sl-input type="number" placeholder="Number" style="max-width: 300px;"></sl-input>
      <sl-input type="date" placeholder="Date" style="max-width: 300px;"></sl-input>
    </div>
  `},PrefixAndSuffix={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input size="small" placeholder="Small" style="max-width: 300px;">
        <sl-icon name="house" slot="prefix"></sl-icon>
        <sl-icon name="chat" slot="suffix"></sl-icon>
      </sl-input>
      
      <sl-input size="medium" placeholder="Medium" style="max-width: 300px;">
        <sl-icon name="house" slot="prefix"></sl-icon>
        <sl-icon name="chat" slot="suffix"></sl-icon>
      </sl-input>
      
      <sl-input size="large" placeholder="Large" style="max-width: 300px;">
        <sl-icon name="house" slot="prefix"></sl-icon>
        <sl-icon name="chat" slot="suffix"></sl-icon>
      </sl-input>
    </div>
  `},FormValidation={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <form class="validation-example">
      <sl-input 
        label="Email" 
        type="email" 
        placeholder="you@example.com" 
        required
        pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
        style="max-width: 300px;"
      ></sl-input>
      <br>
      <sl-button type="submit" variant="primary">Submit</sl-button>
    </form>
  `},__namedExportsOrder=["Basic","WithHelpText","Clearable","PasswordToggle","Filled","Disabled","Sizes","Pill","InputTypes","PrefixAndSuffix","FormValidation"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    placeholder: 'Type something'\n  }\n}",...Basic.parameters?.docs?.source}}},WithHelpText.parameters={...WithHelpText.parameters,docs:{...WithHelpText.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    helpText: 'This is the help text that provides additional information.',\n    placeholder: 'Type something'\n  }\n}",...WithHelpText.parameters?.docs?.source}}},Clearable.parameters={...Clearable.parameters,docs:{...Clearable.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Clearable',\n    placeholder: 'Type something',\n    clearable: true\n  }\n}",...Clearable.parameters?.docs?.source}}},PasswordToggle.parameters={...PasswordToggle.parameters,docs:{...PasswordToggle.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'password',\n    label: 'Password',\n    passwordToggle: true,\n    placeholder: 'Type your password'\n  }\n}",...PasswordToggle.parameters?.docs?.source}}},Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    placeholder: 'Type something',\n    filled: true\n  }\n}",...Filled.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    placeholder: 'Type something',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      <sl-input size="small" placeholder="Small" style="max-width: 300px;"></sl-input>\n      <sl-input size="medium" placeholder="Medium" style="max-width: 300px;"></sl-input>\n      <sl-input size="large" placeholder="Large" style="max-width: 300px;"></sl-input>\n    </div>\n  `\n}',...Sizes.parameters?.docs?.source}}},Pill.parameters={...Pill.parameters,docs:{...Pill.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      <sl-input size="small" placeholder="Small" pill style="max-width: 300px;"></sl-input>\n      <sl-input size="medium" placeholder="Medium" pill style="max-width: 300px;"></sl-input>\n      <sl-input size="large" placeholder="Large" pill style="max-width: 300px;"></sl-input>\n    </div>\n  `\n}',...Pill.parameters?.docs?.source}}},InputTypes.parameters={...InputTypes.parameters,docs:{...InputTypes.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      <sl-input type="email" placeholder="Email" style="max-width: 300px;"></sl-input>\n      <sl-input type="number" placeholder="Number" style="max-width: 300px;"></sl-input>\n      <sl-input type="date" placeholder="Date" style="max-width: 300px;"></sl-input>\n    </div>\n  `\n}',...InputTypes.parameters?.docs?.source}}},PrefixAndSuffix.parameters={...PrefixAndSuffix.parameters,docs:{...PrefixAndSuffix.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      <sl-input size="small" placeholder="Small" style="max-width: 300px;">\n        <sl-icon name="house" slot="prefix"></sl-icon>\n        <sl-icon name="chat" slot="suffix"></sl-icon>\n      </sl-input>\n      \n      <sl-input size="medium" placeholder="Medium" style="max-width: 300px;">\n        <sl-icon name="house" slot="prefix"></sl-icon>\n        <sl-icon name="chat" slot="suffix"></sl-icon>\n      </sl-input>\n      \n      <sl-input size="large" placeholder="Large" style="max-width: 300px;">\n        <sl-icon name="house" slot="prefix"></sl-icon>\n        <sl-icon name="chat" slot="suffix"></sl-icon>\n      </sl-input>\n    </div>\n  `\n}',...PrefixAndSuffix.parameters?.docs?.source}}},FormValidation.parameters={...FormValidation.parameters,docs:{...FormValidation.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <form class="validation-example">\n      <sl-input \n        label="Email" \n        type="email" \n        placeholder="you@example.com" \n        required\n        pattern="[^@]+@[^@]+\\.[a-zA-Z]{2,}"\n        style="max-width: 300px;"\n      ></sl-input>\n      <br>\n      <sl-button type="submit" variant="primary">Submit</sl-button>\n    </form>\n  `\n}',...FormValidation.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=forms-Input-stories.b38b02ba.iframe.bundle.js.map