"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[4804],{"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./packages/react/src/components/Switch/SwitchInput/index.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".charcoal-switch-input {\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: inline-flex;\n  position: relative;\n  box-sizing: border-box;\n  width: 28px;\n  border: 2px solid transparent;\n\n  transition-property: background-color, box-shadow;\n  transition-duration: 0.2s;\n\n  outline: none;\n  border-radius: 16px;\n  height: 16px;\n  margin: 0;\n  background-color: var(--charcoal-text4);\n}\n\n.charcoal-switch-input:disabled,\n.charcoal-switch-input[readonly] {\n  opacity: 0.32;\n  cursor: default;\n}\n\n.charcoal-switch-input::after {\n  content: '';\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  transform: translateX(0);\n  transition: transform 0.2s;\n  border-radius: 1024px;\n  background-color: var(--charcoal-text5);\n}\n\n.charcoal-switch-input:checked::after {\n  transform: translateX(12px);\n  transition: transform 0.2s;\n}\n\n.charcoal-switch-input:checked {\n  background-color: var(--charcoal-brand);\n}\n\n.charcoal-switch-input:not(:disabled):hover {\n  background-color: var(--charcoal-text4-hover);\n}\n\n.charcoal-switch-input:not(:disabled):active {\n  background-color: var(--charcoal-text4-press);\n}\n\n.charcoal-switch-input:not(:disabled):focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n.charcoal-switch-input:not(:disabled):focus-visible {\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n.charcoal-switch-input:not(:disabled):focus:not(:focus-visible) {\n  box-shadow: none;\n}\n\n.charcoal-switch-input:not(:disabled)::after:hover {\n  background-color: var(--charcoal-text5-hover);\n}\n\n.charcoal-switch-input:not(:disabled)::after:active {\n  background-color: var(--charcoal-text5-press);\n}\n\n.charcoal-switch-input:not(:disabled):checked:hover {\n  background-color: var(--charcoal-brand-hover);\n}\n\n.charcoal-switch-input:not(:disabled):checked:active {\n  background-color: var(--charcoal-brand-press);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Switch/SwitchInput/index.css"],names:[],mappings:"AAAA;EACE,eAAe;EACf,wBAAgB;KAAhB,qBAAgB;UAAhB,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,6BAA6B;;EAE7B,iDAAiD;EACjD,yBAAyB;;EAEzB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,uCAAuC;AACzC;;AAEA;;EAEE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,0BAA0B;EAC1B,qBAAqB;EACrB,uCAAuC;AACzC;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,6CAA6C;AAC/C;AACA;EACE,6CAA6C;AAC/C;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;AAC/C",sourcesContent:[".charcoal-switch-input {\n  cursor: pointer;\n  appearance: none;\n  display: inline-flex;\n  position: relative;\n  box-sizing: border-box;\n  width: 28px;\n  border: 2px solid transparent;\n\n  transition-property: background-color, box-shadow;\n  transition-duration: 0.2s;\n\n  outline: none;\n  border-radius: 16px;\n  height: 16px;\n  margin: 0;\n  background-color: var(--charcoal-text4);\n}\n\n.charcoal-switch-input:disabled,\n.charcoal-switch-input[readonly] {\n  opacity: 0.32;\n  cursor: default;\n}\n\n.charcoal-switch-input::after {\n  content: '';\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  transform: translateX(0);\n  transition: transform 0.2s;\n  border-radius: 1024px;\n  background-color: var(--charcoal-text5);\n}\n\n.charcoal-switch-input:checked::after {\n  transform: translateX(12px);\n  transition: transform 0.2s;\n}\n\n.charcoal-switch-input:checked {\n  background-color: var(--charcoal-brand);\n}\n\n.charcoal-switch-input:not(:disabled):hover {\n  background-color: var(--charcoal-text4-hover);\n}\n\n.charcoal-switch-input:not(:disabled):active {\n  background-color: var(--charcoal-text4-press);\n}\n\n.charcoal-switch-input:not(:disabled):focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n.charcoal-switch-input:not(:disabled):focus-visible {\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n.charcoal-switch-input:not(:disabled):focus:not(:focus-visible) {\n  box-shadow: none;\n}\n\n.charcoal-switch-input:not(:disabled)::after:hover {\n  background-color: var(--charcoal-text5-hover);\n}\n\n.charcoal-switch-input:not(:disabled)::after:active {\n  background-color: var(--charcoal-text5-press);\n}\n\n.charcoal-switch-input:not(:disabled):checked:hover {\n  background-color: var(--charcoal-brand-hover);\n}\n\n.charcoal-switch-input:not(:disabled):checked:active {\n  background-color: var(--charcoal-brand-press);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./packages/react/src/components/Switch/index.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".charcoal-switch__label {\n  display: inline-grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  cursor: pointer;\n  outline: 0;\n  gap: 4px;\n}\n\n.charcoal-switch__label[aria-disabled='true'] {\n  opacity: 0.32;\n  cursor: default;\n}\n\n.charcoal-switch__label[aria-disabled='true'] > input {\n  opacity: 1;\n}\n\n.charcoal-switch__label_div {\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--charcoal-text2);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Switch/index.css"],names:[],mappings:"AAAA;EACE,oBAAoB;EACpB,+BAA+B;EAC/B,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,4BAA4B;AAC9B",sourcesContent:[".charcoal-switch__label {\n  display: inline-grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  cursor: pointer;\n  outline: 0;\n  gap: 4px;\n}\n\n.charcoal-switch__label[aria-disabled='true'] {\n  opacity: 0.32;\n  cursor: default;\n}\n\n.charcoal-switch__label[aria-disabled='true'] > input {\n  opacity: 1;\n}\n\n.charcoal-switch__label_div {\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--charcoal-text2);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./packages/react/src/_lib/useClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>useClassNames});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useClassNames(){for(var _len=arguments.length,classNames=new Array(_len),_key=0;_key<_len;_key++)classNames[_key]=arguments[_key];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return classNames.filter((function(v){return v})).join(" ")}),[classNames])}},"./packages/react/src/components/Switch/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_components_Switch});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Switch=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./packages/react/src/components/Switch/index.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Switch.Z,options);Switch.Z&&Switch.Z.locals&&Switch.Z.locals;var react=__webpack_require__("./node_modules/react/index.js"),dist_import=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),SwitchInput=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./packages/react/src/components/Switch/SwitchInput/index.css"),SwitchInput_options={};SwitchInput_options.styleTagTransform=styleTagTransform_default(),SwitchInput_options.setAttributes=setAttributesWithoutAttributes_default(),SwitchInput_options.insert=insertBySelector_default().bind(null,"head"),SwitchInput_options.domAPI=styleDomAPI_default(),SwitchInput_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SwitchInput.Z,SwitchInput_options);SwitchInput.Z&&SwitchInput.Z.locals&&SwitchInput.Z.locals;var useClassNames=__webpack_require__("./packages/react/src/_lib/useClassNames.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SwitchInput_SwitchInput=(0,react.forwardRef)((function SwitchInput(_param,ref){var onChange=_param.onChange,className=_param.className,props=_object_without_properties(_param,["onChange","className"]),handleChange=(0,react.useCallback)((function(e){var el=e.currentTarget;null==onChange||onChange(el.checked)}),[onChange]),classNames=(0,useClassNames.o)("charcoal-switch-input",className);return(0,jsx_runtime.jsx)("input",function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref,className:classNames,type:"checkbox",onChange:handleChange},props))}));const components_Switch_SwitchInput=SwitchInput_SwitchInput;SwitchInput_SwitchInput.__docgenInfo={description:"",methods:[],displayName:"SwitchInput"};var SwitchWithLabel=react.memo((function SwitchWithLabel(param){var children=param.children,className=param.className,disabled=param.disabled,id=param.id,input=param.input,classNames=(0,useClassNames.o)("charcoal-switch__label",className);return(0,jsx_runtime.jsxs)("label",{htmlFor:id,className:classNames,"aria-disabled":disabled,children:[input,(0,jsx_runtime.jsx)("div",{className:"charcoal-switch__label_div",children})]})}));function Switch_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function Switch_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function Switch_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}SwitchWithLabel.__docgenInfo={description:"",methods:[],displayName:"SwitchWithLabel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},input:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var Switch_Switch=(0,react.forwardRef)((function Switch(_param,ref){var children=_param.children,onChange=_param.onChange,disabled=_param.disabled,className=_param.className,id=_param.id,props=Switch_object_without_properties(_param,["children","onChange","disabled","className","id"]),htmlId=(0,dist_import.Me)(id),noChildren=void 0===children,input=(0,jsx_runtime.jsx)(components_Switch_SwitchInput,_object_spread_props(function Switch_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Switch_define_property(target,key,source[key])}))}return target}({},props),{disabled,className:noChildren?className:void 0,id:htmlId,onChange,ref,role:"switch",type:"checkbox"}));return noChildren?input:(0,jsx_runtime.jsx)(SwitchWithLabel,{className,disabled,id:htmlId,input,children})}));const src_components_Switch=(0,react.memo)(Switch_Switch);Switch_Switch.__docgenInfo={description:"",methods:[],displayName:"Switch"}},"./packages/react/src/components/Switch/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,Label:()=>Label,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/Switch/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={title:"react/Switch",component:___WEBPACK_IMPORTED_MODULE_2__.Z,parameters:{layout:"centered"}};var Default={argTypes:{checked:{type:"boolean"},children:{type:"string"},disabled:{type:"boolean"}},render:function Render(args){var _args_checked,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),checked=_useState[0],setChecked=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,_object_spread_props(_object_spread({},args),{name:"name",onChange:function(v){setChecked(v)},checked:null!==(_args_checked=args.checked)&&void 0!==_args_checked?_args_checked:checked}))})}},Checked={render:function Render(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),2),checked=_useState[0],setChecked=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{name:"name",label:"checked",onChange:function(v){setChecked(v)},checked})})}},Label={render:function Render(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),checked=_useState[0],setChecked=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{name:"label",checked,onChange:setChecked,children:"Label"})})}},Disabled={render:function Render(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),checked=_useState[0],setChecked=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{name:"disabled",checked,onChange:setChecked,disabled:!0,children:"Label"})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    checked: {\n      type: 'boolean'\n    },\n    children: {\n      type: 'string'\n    },\n    disabled: {\n      type: 'boolean'\n    }\n  },\n  render: function Render(args) {\n    const [checked, setChecked] = useState(false);\n    return <div>\n        <Switch {...args} name=\"name\" onChange={v => {\n        setChecked(v);\n      }} checked={args.checked ?? checked} />\n      </div>;\n  }\n}",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    const [checked, setChecked] = useState(true);\n    return <div>\n        <Switch name="name" label="checked" onChange={v => {\n        setChecked(v);\n      }} checked={checked} />\n      </div>;\n  }\n}',...Checked.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    const [checked, setChecked] = useState(false);\n    return <div>\n        <Switch name="label" checked={checked} onChange={setChecked}>\n          Label\n        </Switch>\n      </div>;\n  }\n}',...Label.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    const [checked, setChecked] = useState(false);\n    return <div>\n        <Switch name="disabled" checked={checked} onChange={setChecked} disabled>\n          Label\n        </Switch>\n      </div>;\n  }\n}',...Disabled.parameters?.docs?.source}}}}}]);