"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[531],{"./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js").B.define("sl-icon");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js")},"./stories/buttons/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Circle:()=>Circle,CustomWidth:()=>CustomWidth,Disabled:()=>Disabled,Loading:()=>Loading,Pill:()=>Pill,Sizes:()=>Sizes,Text:()=>Text,Variants:()=>Variants,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/button/button.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Shoelace/Buttons/Button",tags:["autodocs"],render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <sl-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      ?pill=${args.pill}
      ?circle=${args.circle}
      style=${args.style||""}
    >
      ${args.prefix?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<sl-icon slot="prefix" name=${args.prefix}></sl-icon>`:""}
      ${args.circle?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<sl-icon name=${args.icon}></sl-icon>`:args.label}
      ${args.suffix?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<sl-icon slot="suffix" name=${args.suffix}></sl-icon>`:""}
    </sl-button>
  `,argTypes:{variant:{control:"select",options:["default","primary","text"],description:"The button's variant.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:"select",options:["small","medium","large"],description:"The button's size.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},disabled:{control:"boolean"},loading:{control:"boolean",description:"Shows a loading spinner.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},pill:{control:"boolean"},circle:{control:"boolean"},prefix:{control:"text"},suffix:{control:"text"},icon:{control:"text"},label:{control:"text"},style:{control:"text"}},parameters:{docs:{description:{component:"Buttons represent actions that are available to the user."}}}},Variants={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <sl-button variant="primary">Primary</sl-button>
      <sl-button variant="default">Secondary</sl-button>
    </div>
  `},Sizes={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
      <sl-button size="small">Small</sl-button>
      <sl-button size="medium">Medium</sl-button>
      <sl-button size="large">Large</sl-button>
    </div>
  `},Pill={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
      <sl-button size="small" pill>Small</sl-button>
      <sl-button size="medium" pill>Medium</sl-button>
      <sl-button size="large" pill>Large</sl-button>
    </div>
  `},Circle={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
      <sl-button variant="default" size="small" circle>
        <sl-icon name="gear"></sl-icon>
      </sl-button>
      <sl-button variant="default" size="medium" circle>
        <sl-icon name="gear"></sl-icon>
      </sl-button>
      <sl-button variant="default" size="large" circle>
        <sl-icon name="gear"></sl-icon>
      </sl-button>
    </div>
  `},Text={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
      <sl-button variant="text" size="small">Text</sl-button>
      <sl-button variant="text">Text</sl-button>
      <sl-button variant="text" size="large">Text</sl-button>
    </div>
  `},WithIcons={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <sl-button>
        <sl-icon slot="prefix" name="gear"></sl-icon>
        Settings
      </sl-button>
      <sl-button>
        <sl-icon slot="suffix" name="arrow-counterclockwise"></sl-icon>
        Refresh
      </sl-button>
      <sl-button>
        <sl-icon slot="prefix" name="link-45deg"></sl-icon>
        <sl-icon slot="suffix" name="box-arrow-up-right"></sl-icon>
        Open
      </sl-button>
    </div>
  `},Loading={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <sl-button variant="primary" ?loading=${!0}>Primary</sl-button>
      <sl-button variant="default" ?loading=${!0}>Secondary</sl-button>
    </div>
  `},Disabled={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <sl-button variant="primary" disabled>Primary</sl-button>
      <sl-button variant="default" disabled>Secondary</sl-button>
    </div>
  `},CustomWidth={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-button size="small" style="width: 100%;">Small</sl-button>
      <sl-button size="medium" style="width: 100%;">Medium</sl-button>
      <sl-button size="large" style="width: 100%;">Large</sl-button>
    </div>
  `},__namedExportsOrder=["Variants","Sizes","Pill","Circle","Text","WithIcons","Loading","Disabled","CustomWidth"];Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">\n      <sl-button variant="primary">Primary</sl-button>\n      <sl-button variant="default">Secondary</sl-button>\n    </div>\n  `\n}',...Variants.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">\n      <sl-button size="small">Small</sl-button>\n      <sl-button size="medium">Medium</sl-button>\n      <sl-button size="large">Large</sl-button>\n    </div>\n  `\n}',...Sizes.parameters?.docs?.source}}},Pill.parameters={...Pill.parameters,docs:{...Pill.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">\n      <sl-button size="small" pill>Small</sl-button>\n      <sl-button size="medium" pill>Medium</sl-button>\n      <sl-button size="large" pill>Large</sl-button>\n    </div>\n  `\n}',...Pill.parameters?.docs?.source}}},Circle.parameters={...Circle.parameters,docs:{...Circle.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">\n      <sl-button variant="default" size="small" circle>\n        <sl-icon name="gear"></sl-icon>\n      </sl-button>\n      <sl-button variant="default" size="medium" circle>\n        <sl-icon name="gear"></sl-icon>\n      </sl-button>\n      <sl-button variant="default" size="large" circle>\n        <sl-icon name="gear"></sl-icon>\n      </sl-button>\n    </div>\n  `\n}',...Circle.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">\n      <sl-button variant="text" size="small">Text</sl-button>\n      <sl-button variant="text">Text</sl-button>\n      <sl-button variant="text" size="large">Text</sl-button>\n    </div>\n  `\n}',...Text.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">\n      <sl-button>\n        <sl-icon slot="prefix" name="gear"></sl-icon>\n        Settings\n      </sl-button>\n      <sl-button>\n        <sl-icon slot="suffix" name="arrow-counterclockwise"></sl-icon>\n        Refresh\n      </sl-button>\n      <sl-button>\n        <sl-icon slot="prefix" name="link-45deg"></sl-icon>\n        <sl-icon slot="suffix" name="box-arrow-up-right"></sl-icon>\n        Open\n      </sl-button>\n    </div>\n  `\n}',...WithIcons.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">\n      <sl-button variant="primary" ?loading=${true}>Primary</sl-button>\n      <sl-button variant="default" ?loading=${true}>Secondary</sl-button>\n    </div>\n  `\n}',...Loading.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">\n      <sl-button variant="primary" disabled>Primary</sl-button>\n      <sl-button variant="default" disabled>Secondary</sl-button>\n    </div>\n  `\n}',...Disabled.parameters?.docs?.source}}},CustomWidth.parameters={...CustomWidth.parameters,docs:{...CustomWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      <sl-button size="small" style="width: 100%;">Small</sl-button>\n      <sl-button size="medium" style="width: 100%;">Medium</sl-button>\n      <sl-button size="large" style="width: 100%;">Large</sl-button>\n    </div>\n  `\n}',...CustomWidth.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=buttons-Button-stories.46c87f7d.iframe.bundle.js.map