"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[443],{"./packages/react/src/components/Checkbox/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Invalid:()=>Invalid,Labelled:()=>Labelled,Unlabelled:()=>Unlabelled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist_import=__webpack_require__("./node_modules/@react-aria/checkbox/dist/import.mjs"),utils_dist_import=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),toggle_dist_import=__webpack_require__("./node_modules/react-stately/node_modules/@react-stately/toggle/dist/import.mjs"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),Icon=__webpack_require__("./packages/react/src/components/Icon/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=(0,react.forwardRef)((function CheckboxInner({invalid=!1,...props},ref){const ariaCheckboxProps=(0,react.useMemo)((()=>({...props,isInValid:invalid,isSelected:props.checked,defaultSelected:props.defaultChecked,validationState:invalid?"invalid":"valid","aria-label":"children"in props?void 0:props.label,isDisabled:props.disabled})),[invalid,props]),state=(0,toggle_dist_import.l)(ariaCheckboxProps),objectRef=(0,utils_dist_import.B3)(ref),{inputProps}=(0,dist_import.O)(ariaCheckboxProps,state,objectRef),isDisabled=(props.disabled??!1)||(props.readonly??!1);return(0,jsx_runtime.jsxs)(InputRoot,{"aria-disabled":isDisabled,className:props.className,children:[(0,jsx_runtime.jsxs)(CheckboxRoot,{children:[(0,jsx_runtime.jsx)(CheckboxInput,{type:"checkbox",...inputProps}),(0,jsx_runtime.jsx)(CheckboxInputOverlay,{"aria-hidden":!0,checked:inputProps.checked,children:(0,jsx_runtime.jsx)(Icon.Z,{name:"24/Check",unsafeNonGuidelineScale:2/3})})]}),"children"in props&&(0,jsx_runtime.jsx)(InputLabel,{children:props.children})]})})),components_Checkbox=(0,react.memo)(Checkbox),hiddenCss=styled_components_browser_esm.iv`
  visibility: hidden;
`,InputRoot=styled_components_browser_esm.ZP.label`
  position: relative;
  display: flex;

  cursor: pointer;
  ${index_esm.t0} {
    cursor: default;
  }

  gap: 4px;
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
`,CheckboxRoot=styled_components_browser_esm.ZP.div`
  position: relative;
`,CheckboxInput=styled_components_browser_esm.ZP.input`
  &[type='checkbox'] {
    appearance: none;
    display: block;
    cursor: pointer;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    transition: 0.2s box-shadow, 0.2s background-color;

    &:checked {
      background-color: var(--charcoal-brand);

      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        &:hover {
          background-color: var(--charcoal-brand-hover);
        }
        &:active {
          background-color: var(--charcoal-brand-press);
        }
      }
    }

    &:not(:disabled):not([aria-disabled]),
    &[aria-disabled='false'] {
      &:focus,
      &:active {
        outline: none;
        box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
        &:not(:focus-visible) {
          outline: none;
        }
      }
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
      }
      &[aria-invalid='true'] {
        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
      }
    }

    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: var(--charcoal-text4);
    }
  }
`,CheckboxInputOverlay=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: var(--charcoal-text5);

  ${({checked})=>!0!==checked&&hiddenCss};
`,InputLabel=styled_components_browser_esm.ZP.div`
  color: var(--charcoal-text2);
  font-size: 14px;
  /** checkbox の height が 20px なのでcheckbox と text が揃っているように見せるために行ボックスの高さを 20px にしている */
  line-height: 20px;
`;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((isSelected: boolean) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"packages/react/src/components/Checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"Checkbox",component:components_Checkbox},Labelled=props=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{style:{marginBottom:"1em"},children:(0,jsx_runtime.jsx)(components_Checkbox,{...props,name:"labelled",label:"label",onBlur:(0,dist.aD)("blur"),onClick:(0,dist.aD)("click"),onChange:(0,dist.aD)("change"),onFocus:(0,dist.aD)("focus"),children:"同意する"})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(components_Checkbox,{...props,name:"labelled",label:"label",onBlur:(0,dist.aD)("blur"),onClick:(0,dist.aD)("click"),onChange:(0,dist.aD)("change"),onFocus:(0,dist.aD)("focus"),children:(0,jsx_runtime.jsx)("span",{style:{width:200,display:"block"},children:"同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する"})})})]});Labelled.displayName="Labelled",Labelled.args={checked:!1,defaultChecked:!1,disabled:!1,readonly:!1,invalid:!1};const Invalid=props=>(0,jsx_runtime.jsx)(components_Checkbox,{...props,name:"labelled",label:"label",invalid:!0,onBlur:(0,dist.aD)("blur"),onClick:(0,dist.aD)("click"),onChange:(0,dist.aD)("change"),onFocus:(0,dist.aD)("focus"),children:"同意する"});Invalid.displayName="Invalid",Invalid.args={checked:!1,defaultChecked:!1,disabled:!1,readonly:!1};const Unlabelled=props=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(components_Checkbox,{...props,name:"unlabelled",label:"label",onBlur:(0,dist.aD)("blur"),onClick:(0,dist.aD)("click"),onChange:(0,dist.aD)("change"),onFocus:(0,dist.aD)("focus")})});Unlabelled.displayName="Unlabelled",Unlabelled.args={checked:!1,defaultChecked:!1,disabled:!1,readonly:!1,invalid:!1},Labelled.parameters={...Labelled.parameters,docs:{...Labelled.parameters?.docs,source:{originalSource:"props => {\n  return <div>\n      <div style={{\n      marginBottom: '1em'\n    }}>\n        <Checkbox {...props} name=\"labelled\" label=\"label\" onBlur={action('blur')} onClick={action('click')} onChange={action('change')} onFocus={action('focus')}>\n          同意する\n        </Checkbox>\n      </div>\n\n      <div>\n        <Checkbox {...props} name=\"labelled\" label=\"label\" onBlur={action('blur')} onClick={action('click')} onChange={action('change')} onFocus={action('focus')}>\n          <span style={{\n          width: 200,\n          display: 'block'\n        }}>\n            同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する\n          </span>\n        </Checkbox>\n      </div>\n    </div>;\n}",...Labelled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"props => {\n  return <Checkbox {...props} name=\"labelled\" label=\"label\" invalid onBlur={action('blur')} onClick={action('click')} onChange={action('change')} onFocus={action('focus')}>\n      同意する\n    </Checkbox>;\n}",...Invalid.parameters?.docs?.source}}},Unlabelled.parameters={...Unlabelled.parameters,docs:{...Unlabelled.parameters?.docs,source:{originalSource:"props => {\n  return <div>\n      <Checkbox {...props} name=\"unlabelled\" label=\"label\" onBlur={action('blur')} onClick={action('click')} onChange={action('change')} onFocus={action('focus')} />\n    </div>;\n}",...Unlabelled.parameters?.docs?.source}}};const __namedExportsOrder=["Labelled","Invalid","Unlabelled"]},"./packages/react/src/components/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./packages/icons/dist/index.esm.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Icon=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function IconInner({name,scale,unsafeNonGuidelineScale,className,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pixiv-icon",{ref,name,scale,"unsafe-non-guideline-scale":unsafeNonGuidelineScale,class:className,...rest})})),__WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{unsafeNonGuidelineScale:{defaultValue:null,description:"",name:"unsafeNonGuidelineScale",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"16/Add"'},{value:'"16/Archive"'},{value:'"16/ArrowDown"'},{value:'"16/Artwork"'},{value:'"16/Back"'},{value:'"16/Book"'},{value:'"16/BookmarkOff"'},{value:'"16/BookmarkOn"'},{value:'"16/Check"'},{value:'"16/Comment"'},{value:'"16/Dot"'},{value:'"16/Error"'},{value:'"16/Filter"'},{value:'"16/ImageResponse"'},{value:'"16/Info"'},{value:'"16/Like"'},{value:'"16/Menu"'},{value:'"16/More"'},{value:'"16/Nextworks"'},{value:'"16/Pencil"'},{value:'"16/Question"'},{value:'"16/Ranking"'},{value:'"16/Remove"'},{value:'"16/Search"'},{value:'"16/Smile"'},{value:'"16/Speaker"'},{value:'"16/View"'},{value:'"24/Add"'},{value:'"24/AddImage"'},{value:'"24/AddModel"'},{value:'"24/AddPeople"'},{value:'"24/AddRubi"'},{value:'"24/AddText"'},{value:'"24/Alart"'},{value:'"24/Announcement"'},{value:'"24/Ar"'},{value:'"24/Archive"'},{value:'"24/ArrowDown"'},{value:'"24/ArrowUp"'},{value:'"24/Binet"'},{value:'"24/Body"'},{value:'"24/BodyEdit"'},{value:'"24/Book"'},{value:'"24/BringBackward"'},{value:'"24/BringForward"'},{value:'"24/Calendar"'},{value:'"24/Camera"'},{value:'"24/CameraVideo"'},{value:'"24/ChangeCharactor"'},{value:'"24/ChatBot"'},{value:'"24/Check"'},{value:'"24/ChromaticAberration"'},{value:'"24/Close"'},{value:'"24/Codes"'},{value:'"24/Collapse"'},{value:'"24/CommentFill"'},{value:'"24/CommentOutline"'},{value:'"24/Contest"'},{value:'"24/Contrast"'},{value:'"24/Description"'},{value:'"24/DeviceRotation"'},{value:'"24/Discovery"'},{value:'"24/Dot"'},{value:'"24/DotAlt"'},{value:'"24/Down"'},{value:'"24/DownloadAlt"'},{value:'"24/Duplicate"'},{value:'"24/Dust"'},{value:'"24/Emoji"'},{value:'"24/Error"'},{value:'"24/ErrorOctagon"'},{value:'"24/Events"'},{value:'"24/Expand"'},{value:'"24/FaceEdit"'},{value:'"24/Fashion"'},{value:'"24/Feed"'},{value:'"24/File"'},{value:'"24/Filter"'},{value:'"24/Flare"'},{value:'"24/FormatAlignCenter"'},{value:'"24/FormatAlignLeft"'},{value:'"24/FormatAlignRight"'},{value:'"24/FormatColorFill"'},{value:'"24/FormatColorFillNoColor"'},{value:'"24/FormatFontFamily"'},{value:'"24/FormatFontSize"'},{value:'"24/FormatLetterSpacing"'},{value:'"24/FormatLineSpacing"'},{value:'"24/Fov"'},{value:'"24/FrameEffect"'},{value:'"24/FrameSize"'},{value:'"24/Gift"'},{value:'"24/Glow"'},{value:'"24/Groups"'},{value:'"24/HairEdit"'},{value:'"24/Hashtag"'},{value:'"24/Hide"'},{value:'"24/Home"'},{value:'"24/Hue"'},{value:'"24/Idea"'},{value:'"24/Image"'},{value:'"24/ImageAlt"'},{value:'"24/ImageHidden"'},{value:'"24/ImageReplace"'},{value:'"24/Images"'},{value:'"24/ImgContain"'},{value:'"24/ImgCover"'},{value:'"24/Index"'},{value:'"24/Info"'},{value:'"24/Invalid"'},{value:'"24/Invoice"'},{value:'"24/ItemRemove"'},{value:'"24/LatestWorks"'},{value:'"24/LikeOff"'},{value:'"24/LikeOn"'},{value:'"24/Link"'},{value:'"24/List"'},{value:'"24/LockLock"'},{value:'"24/LockUnlock"'},{value:'"24/Logout"'},{value:'"24/Manga"'},{value:'"24/Menu"'},{value:'"24/Message"'},{value:'"24/Microphone"'},{value:'"24/MobilePhone"'},{value:'"24/Move1"'},{value:'"24/Next"'},{value:'"24/NoImage"'},{value:'"24/Notification"'},{value:'"24/NotificationOff"'},{value:'"24/Novels"'},{value:'"24/OpenInNew"'},{value:'"24/Options"'},{value:'"24/OptionsAlt"'},{value:'"24/Overlay"'},{value:'"24/Palette"'},{value:'"24/Pause"'},{value:'"24/PauseAlt"'},{value:'"24/Pencil"'},{value:'"24/PencilDraw"'},{value:'"24/PencilLive"'},{value:'"24/PencilText"'},{value:'"24/Person"'},{value:'"24/Play"'},{value:'"24/Pose"'},{value:'"24/Prev"'},{value:'"24/Projects"'},{value:'"24/PullDown"'},{value:'"24/PullUp"'},{value:'"24/Question"'},{value:'"24/QuestionOutline"'},{value:'"24/Ranking"'},{value:'"24/ReadHorizontalLeft"'},{value:'"24/ReadHorizontalRight"'},{value:'"24/ReadVertical"'},{value:'"24/Reload"'},{value:'"24/ReloadLoop"'},{value:'"24/Reorder"'},{value:'"24/Roll"'},{value:'"24/Rotate90DegreesC"'},{value:'"24/Rotate90DegreesCc"'},{value:'"24/RotateRight"'},{value:'"24/Saturation"'},{value:'"24/Save"'},{value:'"24/Search"'},{value:'"24/Send"'},{value:'"24/Services"'},{value:'"24/Set"'},{value:'"24/Settings"'},{value:'"24/ShareAndroid"'},{value:'"24/ShareIos"'},{value:'"24/Shopping"'},{value:'"24/Show"'},{value:'"24/ShowOutline"'},{value:'"24/Shutter"'},{value:'"24/Star"'},{value:'"24/Subtract"'},{value:'"24/Sun"'},{value:'"24/Temperature"'},{value:'"24/Text"'},{value:'"24/Trash"'},{value:'"24/TrashAlt"'},{value:'"24/Up"'},{value:'"24/Upload"'},{value:'"24/UploadAlt"'},{value:'"24/Usagi"'},{value:'"24/UsagiAlt"'},{value:'"24/Users"'},{value:'"24/Video"'},{value:'"24/ViewGrid2Columns"'},{value:'"24/ViewGrid3Columns"'},{value:'"24/ViewList"'},{value:'"24/Warning"'},{value:'"32/BookmarkOff"'},{value:'"32/BookmarkOn"'},{value:'"32/Camera"'},{value:'"32/Close"'},{value:'"32/Collapse"'},{value:'"32/CommentOff"'},{value:'"32/CommentOn"'},{value:'"32/Delete"'},{value:'"32/Dot"'},{value:'"32/Edit"'},{value:'"32/Expand"'},{value:'"32/Gift"'},{value:'"32/Home"'},{value:'"32/HorizontalWriting"'},{value:'"32/Index"'},{value:'"32/LikeOff"'},{value:'"32/LikeOn"'},{value:'"32/LikeOnPrivate"'},{value:'"32/Message"'},{value:'"32/Next"'},{value:'"32/Notification"'},{value:'"32/NotificationOff"'},{value:'"32/NovelViewerSettings"'},{value:'"32/Pan"'},{value:'"32/Prev"'},{value:'"32/PullDown"'},{value:'"32/PullUp"'},{value:'"32/ReadHorizontalLeft"'},{value:'"32/ReadHorizontalRight"'},{value:'"32/ReadVertical"'},{value:'"32/RollHorizontal"'},{value:'"32/RollVertical"'},{value:'"32/SansSerif"'},{value:'"32/Serif"'},{value:'"32/ShareAndroid"'},{value:'"32/ShareIos"'},{value:'"32/Shopping"'},{value:'"32/Upload"'},{value:'"32/User"'},{value:'"32/VerticalWriting"'},{value:'"32/ZoomIn"'},{value:'"Inline/Add"'},{value:'"Inline/BookmarkOff"'},{value:'"Inline/BookmarkOn"'},{value:'"Inline/Breadcrumbs"'},{value:'"Inline/Check"'},{value:'"Inline/Comment"'},{value:'"Inline/ContextMenu"'},{value:'"Inline/External"'},{value:'"Inline/Filter"'},{value:'"Inline/Folder"'},{value:'"Inline/ImageResponse"'},{value:'"Inline/Images"'},{value:'"Inline/Like"'},{value:'"Inline/LikeOff"'},{value:'"Inline/List"'},{value:'"Inline/Location"'},{value:'"Inline/Lock"'},{value:'"Inline/More"'},{value:'"Inline/Nextworks"'},{value:'"Inline/OpenInNew"'},{value:'"Inline/Pencil"'},{value:'"Inline/Remove"'},{value:'"Inline/Smile"'},{value:'"Inline/SmileOn"'},{value:'"Inline/Users"'},{value:'"Inline/View"'},{value:'"Inline/ViewOutline"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"packages/react/src/components/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=react-src-components-Checkbox-index-story.e6ab4951.iframe.bundle.js.map