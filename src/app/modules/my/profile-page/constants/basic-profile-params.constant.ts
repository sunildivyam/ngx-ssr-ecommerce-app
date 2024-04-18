/**
 * Basic Profile params that can be updated to users table
 */

// prettier-ignore
export const BASIC_PROFILE_FORM_PARAMS = {
  "displayName": {
    "type": "string",
    "controlType": "text",
    "value": "",
    "label": "Display Name",
    "placeholder": "Display Name",
    "helpText": "",
    "syncValidators": [
      { "name": "required" },
      { "name": "trimSpacesValidator" },
      { "name": "maxLength", "params": [100] }
    ],
    "asyncValidators": [],
    "list": [],
    "actionBtn": "Change",
    "disabled": false
  },
  "email": {
    "type": "string",
    "controlType": "email",
    "value": "",
    "label": "Email",
    "placeholder": "Email",
    "helpText": "",
    "syncValidators": [
      { "name": "required" },
      { "name": "email" },
      { "name": "trimSpacesValidator" },
      { "name": "maxLength", "params": [100] }
    ],
    "asyncValidators": [],
    "list": [],
    "actionBtn": "Change",
    "disabled": false
  },
  "phone": {
    "type": "string",
    "controlType": "text",
    "value": "",
    "label": "Mobile phone",
    "placeholder": "Mobile number",
    "helpText": "(do not prefix country code)",
    "syncValidators": [
      { "name": "required" },
      { "name": "trimSpacesValidator" },
      { "name": "indiaMobileValidator" }
    ],
    "asyncValidators": [],
    "list": [],
    "actionBtn": "Change",
    "disabled": false
  },
  "photoUrl": {
    "type": "string",
    "controlType": "text",
    "value": "",
    "label": "Profle Photo",
    "placeholder": "Profile Photo",
    "helpText": "",
    "syncValidators": [
      { "name": "trimSpacesValidator" },
      { "name": "maxLength", "params": [500] }
    ],
    "asyncValidators": [],
    "list": [],
    "actionBtn": "Change",
    "readonly": true,
    "disabled": false
  },
  "photoUrlImage": {
    "type": "Object",
    "controlType": "image",
    "value": null,
    "label": "Profile Photo",
    "placeholder": "Profile Photo",
    "helpText": "",
    "syncValidators": [],
    "asyncValidators": [{name: 'ImageValidatorService', imageDimsName: 'profileImageDimensions'}],
    "list": [],
    "actionBtn": "Upload",
    "disabled": false,
    "hidden": true
  }
};
