"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[256],{"./stories/data-display/Avatar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Image:()=>Image,Initials:()=>Initials,Shapes:()=>Shapes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Shoelace/Data Display/Avatar",tags:["autodocs"],render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <sl-avatar
      image=${args.image}
      label=${args.label}
      shape=${args.shape}
      size=${args.size}
      ?initials=${args.initials}
    >
      ${args.initials?args.label:""}
    </sl-avatar>
  `,argTypes:{image:{control:"text"},label:{control:"text"},shape:{control:"select",options:["circle","square","rounded"]},size:{control:"select",options:["small","medium","large"]},initials:{control:"boolean"}}},Image={args:{image:"https://avatars.githubusercontent.com/u/334891",label:"User avatar"}},Initials={args:{label:"SL",initials:!0}},Shapes={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; gap: 1rem;">
      <sl-avatar shape="square" label="SQ">SQ</sl-avatar>
      <sl-avatar shape="rounded" label="RO">RO</sl-avatar>
      <sl-avatar shape="circle" label="CI">CI</sl-avatar>
    </div>
  `},__namedExportsOrder=["Image","Initials","Shapes"];Image.parameters={...Image.parameters,docs:{...Image.parameters?.docs,source:{originalSource:"{\n  args: {\n    image: 'https://avatars.githubusercontent.com/u/334891',\n    label: 'User avatar'\n  }\n}",...Image.parameters?.docs?.source}}},Initials.parameters={...Initials.parameters,docs:{...Initials.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'SL',\n    initials: true\n  }\n}",...Initials.parameters?.docs?.source}}},Shapes.parameters={...Shapes.parameters,docs:{...Shapes.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; gap: 1rem;">\n      <sl-avatar shape="square" label="SQ">SQ</sl-avatar>\n      <sl-avatar shape="rounded" label="RO">RO</sl-avatar>\n      <sl-avatar shape="circle" label="CI">CI</sl-avatar>\n    </div>\n  `\n}',...Shapes.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=data-display-Avatar-stories.f5442625.iframe.bundle.js.map