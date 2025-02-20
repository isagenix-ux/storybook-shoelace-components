"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[317],{"./stories/forms/Select.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Clearable:()=>Clearable,Disabled:()=>Disabled,Filled:()=>Filled,Multiple:()=>Multiple,Pill:()=>Pill,Sizes:()=>Sizes,WithGroups:()=>WithGroups,WithHelpText:()=>WithHelpText,WithPrefix:()=>WithPrefix,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/select/select.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/option/option.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/divider/divider.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Shoelace/Forms/Select",tags:["autodocs"],render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <sl-select
      label=${args.label||""}
      help-text=${args.helpText||""}
      placeholder=${args.placeholder||""}
      size=${args.size||"medium"}
      ?multiple=${args.multiple}
      ?clearable=${args.clearable}
      ?filled=${args.filled}
      ?pill=${args.pill}
      ?disabled=${args.disabled}
      value=${args.value||""}
      placement=${args.placement||"bottom"}
    >
      ${args.prefix?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
        <sl-icon name="house" slot="prefix"></sl-icon>
      `:""}
      
      ${args.hasGroups?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
        <small>Section 1</small>
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
        <sl-divider></sl-divider>
        <small>Section 2</small>
        <sl-option value="option-4">Option 4</sl-option>
        <sl-option value="option-5">Option 5</sl-option>
        <sl-option value="option-6">Option 6</sl-option>
      `:lit__WEBPACK_IMPORTED_MODULE_0__.qy`
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
        <sl-option value="option-4">Option 4</sl-option>
      `}
    </sl-select>
  `,argTypes:{label:{control:"text",description:"The select label"},helpText:{control:"text",description:"Help text for the select"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"The current value"},size:{control:"select",options:["small","medium","large"],description:"The select size"},multiple:{control:"boolean",description:"Allows multiple options to be selected"},clearable:{control:"boolean",description:"Makes the select clearable"},filled:{control:"boolean",description:"Draws a filled select"},pill:{control:"boolean",description:"Draws a pill-style select"},disabled:{control:"boolean",description:"Disables the select"},placement:{control:"select",options:["top","bottom"],description:"Preferred placement of the select dropdown"},prefix:{control:"boolean",description:"Shows a prefix icon"},hasGroups:{control:"boolean",description:"Shows grouped options"}}},Basic={args:{label:"Select one",placeholder:"Choose an option"}},WithHelpText={args:{label:"Experience",helpText:"Please tell us your skill level.",placeholder:"Choose an option"}},Clearable={args:{label:"Clearable",placeholder:"Choose an option",clearable:!0,value:"option-1"}},Multiple={args:{label:"Select Multiple",placeholder:"Choose options",multiple:!0,clearable:!0}},Filled={args:{label:"Filled Select",placeholder:"Choose an option",filled:!0}},Pill={args:{label:"Pill Select",placeholder:"Choose an option",pill:!0}},Disabled={args:{label:"Disabled",placeholder:"Choose an option",disabled:!0}},Sizes={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-select size="small" placeholder="Small">
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
      </sl-select>

      <sl-select size="medium" placeholder="Medium">
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
      </sl-select>

      <sl-select size="large" placeholder="Large">
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
      </sl-select>
    </div>
  `},WithGroups={args:{label:"Grouped Options",placeholder:"Choose an option",hasGroups:!0}},WithPrefix={args:{label:"Select with Prefix",placeholder:"Choose an option",prefix:!0}},__namedExportsOrder=["Basic","WithHelpText","Clearable","Multiple","Filled","Pill","Disabled","Sizes","WithGroups","WithPrefix"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Select one',\n    placeholder: 'Choose an option'\n  }\n}",...Basic.parameters?.docs?.source}}},WithHelpText.parameters={...WithHelpText.parameters,docs:{...WithHelpText.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Experience',\n    helpText: 'Please tell us your skill level.',\n    placeholder: 'Choose an option'\n  }\n}",...WithHelpText.parameters?.docs?.source}}},Clearable.parameters={...Clearable.parameters,docs:{...Clearable.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Clearable',\n    placeholder: 'Choose an option',\n    clearable: true,\n    value: 'option-1'\n  }\n}",...Clearable.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Select Multiple',\n    placeholder: 'Choose options',\n    multiple: true,\n    clearable: true\n  }\n}",...Multiple.parameters?.docs?.source}}},Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Filled Select',\n    placeholder: 'Choose an option',\n    filled: true\n  }\n}",...Filled.parameters?.docs?.source}}},Pill.parameters={...Pill.parameters,docs:{...Pill.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Pill Select',\n    placeholder: 'Choose an option',\n    pill: true\n  }\n}",...Pill.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled',\n    placeholder: 'Choose an option',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      <sl-select size="small" placeholder="Small">\n        <sl-option value="option-1">Option 1</sl-option>\n        <sl-option value="option-2">Option 2</sl-option>\n        <sl-option value="option-3">Option 3</sl-option>\n      </sl-select>\n\n      <sl-select size="medium" placeholder="Medium">\n        <sl-option value="option-1">Option 1</sl-option>\n        <sl-option value="option-2">Option 2</sl-option>\n        <sl-option value="option-3">Option 3</sl-option>\n      </sl-select>\n\n      <sl-select size="large" placeholder="Large">\n        <sl-option value="option-1">Option 1</sl-option>\n        <sl-option value="option-2">Option 2</sl-option>\n        <sl-option value="option-3">Option 3</sl-option>\n      </sl-select>\n    </div>\n  `\n}',...Sizes.parameters?.docs?.source}}},WithGroups.parameters={...WithGroups.parameters,docs:{...WithGroups.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Grouped Options',\n    placeholder: 'Choose an option',\n    hasGroups: true\n  }\n}",...WithGroups.parameters?.docs?.source}}},WithPrefix.parameters={...WithPrefix.parameters,docs:{...WithPrefix.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Select with Prefix',\n    placeholder: 'Choose an option',\n    prefix: true\n  }\n}",...WithPrefix.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=forms-Select-stories.fdc68d49.iframe.bundle.js.map