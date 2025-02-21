"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[939],{"./stories/foundations/Typography.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FontSizes:()=>FontSizes,Headings:()=>Headings,TextExamples:()=>TextExamples,TextStyles:()=>TextStyles,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Foundations/Typography",tags:["autodocs"],parameters:{docs:{description:{component:"Typography system using Nunito Sans as the primary font family."}}}},Headings={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <h1 style="margin: 0;">Heading 1</h1>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">2.5rem (40px)</div>
      </div>
      <div>
        <h2 style="margin: 0;">Heading 2</h2>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">2rem (32px)</div>
      </div>
      <div>
        <h3 style="margin: 0;">Heading 3</h3>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1.75rem (28px)</div>
      </div>
      <div>
        <h4 style="margin: 0;">Heading 4</h4>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1.5rem (24px)</div>
      </div>
      <div>
        <h5 style="margin: 0;">Heading 5</h5>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1.25rem (20px)</div>
      </div>
      <div>
        <h6 style="margin: 0;">Heading 6</h6>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1rem (16px)</div>
      </div>
    </div>
  `},TextStyles={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <div style="font-weight: 300;">Light Text (300)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 300</div>
      </div>
      <div>
        <div style="font-weight: 400;">Regular Text (400)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 400</div>
      </div>
      <div>
        <div style="font-weight: 600;">Semi-bold Text (600)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 600</div>
      </div>
      <div>
        <div style="font-weight: 700;">Bold Text (700)</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 700</div>
      </div>
    </div>
  `},FontSizes={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <div style="font-size: var(--sl-font-size-2x-small);">2x-Small Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-2x-small</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-x-small);">X-Small Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-x-small</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-small);">Small Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-small</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-medium);">Medium Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-medium</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-large);">Large Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-large</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-x-large);">X-Large Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-x-large</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-2x-large);">2x-Large Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-2x-large</div>
      </div>
      <div>
        <div style="font-size: var(--sl-font-size-3x-large);">3x-Large Text</div>
        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-3x-large</div>
      </div>
    </div>
  `},TextExamples={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3>Body Text</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div>
        <h3>Inline Text Styles</h3>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <p><strong>Strong text</strong> - font-weight: 700</p>
          <p><em>Emphasized text</em> - font-style: italic</p>
          <p><u>Underlined text</u> - text-decoration: underline</p>
          <p><code>Monospace text</code> - font-family: monospace</p>
          <p><small>Small text</small> - font-size: smaller</p>
          <p><mark>Highlighted text</mark> - background-color: yellow</p>
        </div>
      </div>

      <div>
        <h3>Lists</h3>
        <div style="display: flex; gap: 4rem;">
          <div>
            <h4>Unordered List</h4>
            <ul>
              <li>List item one</li>
              <li>List item two</li>
              <li>List item three</li>
            </ul>
          </div>
          <div>
            <h4>Ordered List</h4>
            <ol>
              <li>List item one</li>
              <li>List item two</li>
              <li>List item three</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  `},__namedExportsOrder=["Headings","TextStyles","FontSizes","TextExamples"];Headings.parameters={...Headings.parameters,docs:{...Headings.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      <div>\n        <h1 style="margin: 0;">Heading 1</h1>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">2.5rem (40px)</div>\n      </div>\n      <div>\n        <h2 style="margin: 0;">Heading 2</h2>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">2rem (32px)</div>\n      </div>\n      <div>\n        <h3 style="margin: 0;">Heading 3</h3>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1.75rem (28px)</div>\n      </div>\n      <div>\n        <h4 style="margin: 0;">Heading 4</h4>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1.5rem (24px)</div>\n      </div>\n      <div>\n        <h5 style="margin: 0;">Heading 5</h5>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1.25rem (20px)</div>\n      </div>\n      <div>\n        <h6 style="margin: 0;">Heading 6</h6>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">1rem (16px)</div>\n      </div>\n    </div>\n  `\n}',...Headings.parameters?.docs?.source}}},TextStyles.parameters={...TextStyles.parameters,docs:{...TextStyles.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      <div>\n        <div style="font-weight: 300;">Light Text (300)</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 300</div>\n      </div>\n      <div>\n        <div style="font-weight: 400;">Regular Text (400)</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 400</div>\n      </div>\n      <div>\n        <div style="font-weight: 600;">Semi-bold Text (600)</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 600</div>\n      </div>\n      <div>\n        <div style="font-weight: 700;">Bold Text (700)</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">font-weight: 700</div>\n      </div>\n    </div>\n  `\n}',...TextStyles.parameters?.docs?.source}}},FontSizes.parameters={...FontSizes.parameters,docs:{...FontSizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      <div>\n        <div style="font-size: var(--sl-font-size-2x-small);">2x-Small Text</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-2x-small</div>\n      </div>\n      <div>\n        <div style="font-size: var(--sl-font-size-x-small);">X-Small Text</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-x-small</div>\n      </div>\n      <div>\n        <div style="font-size: var(--sl-font-size-small);">Small Text</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-small</div>\n      </div>\n      <div>\n        <div style="font-size: var(--sl-font-size-medium);">Medium Text</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-medium</div>\n      </div>\n      <div>\n        <div style="font-size: var(--sl-font-size-large);">Large Text</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-large</div>\n      </div>\n      <div>\n        <div style="font-size: var(--sl-font-size-x-large);">X-Large Text</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-x-large</div>\n      </div>\n      <div>\n        <div style="font-size: var(--sl-font-size-2x-large);">2x-Large Text</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-2x-large</div>\n      </div>\n      <div>\n        <div style="font-size: var(--sl-font-size-3x-large);">3x-Large Text</div>\n        <div style="color: var(--sl-color-neutral-500); font-family: monospace;">--sl-font-size-3x-large</div>\n      </div>\n    </div>\n  `\n}',...FontSizes.parameters?.docs?.source}}},TextExamples.parameters={...TextExamples.parameters,docs:{...TextExamples.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 2rem;">\n      <div>\n        <h3>Body Text</h3>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        </p>\n      </div>\n\n      <div>\n        <h3>Inline Text Styles</h3>\n        <div style="display: flex; flex-direction: column; gap: 0.5rem;">\n          <p><strong>Strong text</strong> - font-weight: 700</p>\n          <p><em>Emphasized text</em> - font-style: italic</p>\n          <p><u>Underlined text</u> - text-decoration: underline</p>\n          <p><code>Monospace text</code> - font-family: monospace</p>\n          <p><small>Small text</small> - font-size: smaller</p>\n          <p><mark>Highlighted text</mark> - background-color: yellow</p>\n        </div>\n      </div>\n\n      <div>\n        <h3>Lists</h3>\n        <div style="display: flex; gap: 4rem;">\n          <div>\n            <h4>Unordered List</h4>\n            <ul>\n              <li>List item one</li>\n              <li>List item two</li>\n              <li>List item three</li>\n            </ul>\n          </div>\n          <div>\n            <h4>Ordered List</h4>\n            <ol>\n              <li>List item one</li>\n              <li>List item two</li>\n              <li>List item three</li>\n            </ol>\n          </div>\n        </div>\n      </div>\n    </div>\n  `\n}',...TextExamples.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=foundations-Typography-stories.51192762.iframe.bundle.js.map