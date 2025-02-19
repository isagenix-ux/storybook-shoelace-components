"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[802],{"./stories/overlays/Dialog.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Complex:()=>Complex,CustomWidth:()=>CustomWidth,Scrolling:()=>Scrolling,WithAutofocus:()=>WithAutofocus,WithHeaderActions:()=>WithHeaderActions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/dialog/dialog.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/button/button.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon-button/icon-button.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/input/input.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/rating/rating.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Shoelace/Overlays/Dialog",tags:["autodocs"],render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <div style="min-height: 300px; position: relative;">
        <sl-dialog 
          label=${args.label}
          ?no-header=${args.noHeader}
          style=${args.customWidth?"--width: 50vw;":""}
        >
          ${args.headerActions?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <sl-icon-button
              slot="header-actions"
              name="box-arrow-up-right"
              label="Open in new window"
            ></sl-icon-button>
          `:""}

          ${args.content}
          
          <div slot="footer">
            ${"string"==typeof args.footer?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<sl-button variant="primary" @click=${e=>{e.target.closest("sl-dialog").hide()}}>Close</sl-button>`:args.footer}
          </div>
        </sl-dialog>

        <sl-button @click=${e=>{e.target.parentElement.querySelector("sl-dialog").show()}}>Open Dialog</sl-button>
      </div>
    `,argTypes:{label:{control:"text",description:"The dialog title",table:{type:{summary:"string"},defaultValue:{summary:"Dialog"}}},noHeader:{control:"boolean",description:"Removes the header. This will also remove the default close button.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},content:{control:"text",description:"The dialog content",table:{type:{summary:"string | TemplateResult"}}},headerActions:{control:"boolean",description:"Shows additional actions in the header",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},customWidth:{control:"boolean",description:"Sets a custom width for the dialog",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},footer:{control:"text"}},parameters:{docs:{description:{component:'\n          Dialogs, sometimes called "modals", appear above the page and require the user\'s immediate attention.\n          \n          Use dialogs for:\n          - Displaying important information\n          - Getting confirmation before a destructive action\n          - Complex forms or settings that deserve their own page\n        '},canvas:{sourceState:"hidden"}},layout:"padded",controls:{sort:"requiredFirst"}}},Basic={args:{label:"Dialog",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},CustomWidth={args:{label:"Dialog",content:"This dialog is wider than the default.",customWidth:!0}},WithHeaderActions={args:{label:"Dialog",headerActions:!0,content:"This dialog has an additional action in the header."}},Scrolling={args:{label:"Dialog",content:lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <div style="height: 150vh; border: dashed 2px var(--sl-color-neutral-200); padding: 0 1rem;">
        <p>Scroll down and give it a try! 👇</p>
      </div>
    `}},WithAutofocus={args:{label:"Dialog",content:lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <sl-input autofocus placeholder="I will have focus when the dialog is opened"></sl-input>
    `}},Complex={args:{label:"Dialog",content:lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <sl-rating></sl-rating>
      <br><br>
      This is a more complex dialog that demonstrates some of the advanced features and components working together.
      <br><br>
      <sl-input placeholder="Type something"></sl-input>
    `,footer:lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <sl-button variant="neutral" @click=${e=>e.target.closest("sl-dialog").hide()}>Cancel</sl-button>
      <sl-button variant="primary" @click=${e=>e.target.closest("sl-dialog").hide()}>Save</sl-button>
    `}},__namedExportsOrder=["Basic","CustomWidth","WithHeaderActions","Scrolling","WithAutofocus","Complex"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'\n  }\n}",...Basic.parameters?.docs?.source}}},CustomWidth.parameters={...CustomWidth.parameters,docs:{...CustomWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    content: 'This dialog is wider than the default.',\n    customWidth: true\n  }\n}",...CustomWidth.parameters?.docs?.source}}},WithHeaderActions.parameters={...WithHeaderActions.parameters,docs:{...WithHeaderActions.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    headerActions: true,\n    content: 'This dialog has an additional action in the header.'\n  }\n}",...WithHeaderActions.parameters?.docs?.source}}},Scrolling.parameters={...Scrolling.parameters,docs:{...Scrolling.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    content: html`\n      <div style=\"height: 150vh; border: dashed 2px var(--sl-color-neutral-200); padding: 0 1rem;\">\n        <p>Scroll down and give it a try! 👇</p>\n      </div>\n    `\n  }\n}",...Scrolling.parameters?.docs?.source}}},WithAutofocus.parameters={...WithAutofocus.parameters,docs:{...WithAutofocus.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    content: html`\n      <sl-input autofocus placeholder=\"I will have focus when the dialog is opened\"></sl-input>\n    `\n  }\n}",...WithAutofocus.parameters?.docs?.source}}},Complex.parameters={...Complex.parameters,docs:{...Complex.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    content: html`\n      <sl-rating></sl-rating>\n      <br><br>\n      This is a more complex dialog that demonstrates some of the advanced features and components working together.\n      <br><br>\n      <sl-input placeholder=\"Type something\"></sl-input>\n    `,\n    footer: html`\n      <sl-button variant=\"neutral\" @click=${e => e.target.closest('sl-dialog').hide()}>Cancel</sl-button>\n      <sl-button variant=\"primary\" @click=${e => e.target.closest('sl-dialog').hide()}>Save</sl-button>\n    `\n  }\n}",...Complex.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=overlays-Dialog-stories.76cebcb5.iframe.bundle.js.map