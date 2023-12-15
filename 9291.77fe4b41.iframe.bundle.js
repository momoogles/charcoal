"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[9291],{"./node_modules/@react-aria/dialog/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>$40df3f8667284809$export$d55e7ee900f34e93});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),_react_aria_focus__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_aria_overlays__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-aria/overlays/dist/import.mjs");function $40df3f8667284809$export$d55e7ee900f34e93(props,ref){let{role="dialog"}=props,titleId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mp)();titleId=props["aria-label"]?void 0:titleId;let isRefocusing=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(ref.current&&!ref.current.contains(document.activeElement)){(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_2__.ex)(ref.current);let timeout=setTimeout((()=>{document.activeElement===ref.current&&(isRefocusing.current=!0,ref.current.blur(),(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_2__.ex)(ref.current),isRefocusing.current=!1)}),500);return()=>{clearTimeout(timeout)}}}),[ref]),(0,_react_aria_overlays__WEBPACK_IMPORTED_MODULE_3__.Bq)(),{dialogProps:{...(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.zL)(props,{labelable:!0}),role,tabIndex:-1,"aria-labelledby":props["aria-labelledby"]||titleId,onBlur:e=>{isRefocusing.current&&e.stopPropagation()}},titleProps:{id:titleId}}}},"./node_modules/@react-aria/textfield/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>$2d73ec29415bd339$export$712718f7aec83d5});var dist_import=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs");function $d191a55c9702f145$export$8467354a121f1b9f(props){let{id,label,"aria-labelledby":ariaLabelledby,"aria-label":ariaLabel,labelElementType="label"}=props;id=(0,dist_import.Me)(id);let labelId=(0,dist_import.Me)(),labelProps={};return label?(ariaLabelledby=ariaLabelledby?`${ariaLabelledby} ${labelId}`:labelId,labelProps={id:labelId,htmlFor:"label"===labelElementType?id:void 0}):ariaLabelledby||ariaLabel||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps,fieldProps:(0,dist_import.bE)({id,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby})}}function $2baaea4c71418dea$export$294aa081a6c6f55d(props){let{description,errorMessage,validationState}=props,{labelProps,fieldProps}=$d191a55c9702f145$export$8467354a121f1b9f(props),descriptionId=(0,dist_import.mp)([Boolean(description),Boolean(errorMessage),validationState]),errorMessageId=(0,dist_import.mp)([Boolean(description),Boolean(errorMessage),validationState]);return fieldProps=(0,dist_import.dG)(fieldProps,{"aria-describedby":[descriptionId,errorMessageId,props["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps,fieldProps,descriptionProps:{id:descriptionId},errorMessageProps:{id:errorMessageId}}}var focus_dist_import=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs");__webpack_require__("./node_modules/react/index.js");function $2d73ec29415bd339$export$712718f7aec83d5(props,ref){let{inputElementType="input",isDisabled=!1,isRequired=!1,isReadOnly=!1,validationState,type="text",onChange=()=>{}}=props,{focusableProps}=(0,focus_dist_import.kc)(props,ref),{labelProps,fieldProps,descriptionProps,errorMessageProps}=$2baaea4c71418dea$export$294aa081a6c6f55d(props),domProps=(0,dist_import.zL)(props,{labelable:!0});const inputOnlyProps={type,pattern:props.pattern};return{labelProps,inputProps:(0,dist_import.dG)(domProps,"input"===inputElementType&&inputOnlyProps,{disabled:isDisabled,readOnly:isReadOnly,"aria-required":isRequired||void 0,"aria-invalid":"invalid"===validationState||void 0,"aria-errormessage":props["aria-errormessage"],"aria-activedescendant":props["aria-activedescendant"],"aria-autocomplete":props["aria-autocomplete"],"aria-haspopup":props["aria-haspopup"],value:props.value,defaultValue:props.value?void 0:props.defaultValue,onChange:e=>onChange(e.target.value),autoComplete:props.autoComplete,maxLength:props.maxLength,minLength:props.minLength,name:props.name,placeholder:props.placeholder,inputMode:props.inputMode,onCopy:props.onCopy,onCut:props.onCut,onPaste:props.onPaste,onCompositionEnd:props.onCompositionEnd,onCompositionStart:props.onCompositionStart,onCompositionUpdate:props.onCompositionUpdate,onSelect:props.onSelect,onBeforeInput:props.onBeforeInput,onInput:props.onInput,...focusableProps,...fieldProps}),descriptionProps,errorMessageProps}}},"./node_modules/@react-stately/overlays/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>$fc909762b330b746$export$61c6a8c84e605fb6});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_stately_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs");function $fc909762b330b746$export$61c6a8c84e605fb6(props){let[isOpen,setOpen]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.zk)(props.isOpen,props.defaultOpen||!1,props.onOpenChange);const open=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setOpen(!0)}),[setOpen]),close=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setOpen(!1)}),[setOpen]),toggle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setOpen(!isOpen)}),[setOpen,isOpen]);return{isOpen,setOpen,open,close,toggle}}},"./node_modules/@react-stately/utils/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zk:()=>$458b0a5536c1a7cf$export$40bfa8c7b0832715});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value,defaultValue,onChange){let[stateValue,setStateValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value||defaultValue),isControlledRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0!==value),isControlled=void 0!==value;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let wasControlled=isControlledRef.current;wasControlled!==isControlled&&console.warn(`WARN: A component changed from ${wasControlled?"controlled":"uncontrolled"} to ${isControlled?"controlled":"uncontrolled"}.`),isControlledRef.current=isControlled}),[isControlled]);let currentValue=isControlled?value:stateValue,setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((value,...args)=>{let onChangeCaller=(value,...onChangeArgs)=>{onChange&&(Object.is(currentValue,value)||onChange(value,...onChangeArgs)),isControlled||(currentValue=value)};if("function"==typeof value){console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),setStateValue(((oldValue,...functionArgs)=>{let interceptedValue=value(isControlled?currentValue:oldValue,...functionArgs);return onChangeCaller(interceptedValue,...args),isControlled?oldValue:interceptedValue}))}else isControlled||setStateValue(value),onChangeCaller(value,...args)}),[isControlled,currentValue,onChange]);return[currentValue,setValue]}}}]);