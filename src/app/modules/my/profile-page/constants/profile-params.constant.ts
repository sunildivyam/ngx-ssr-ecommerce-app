/**
 * Profile params are usally taken from firebase remote config
 * And should be saved to user-profiles tables
 */

// prettier-ignore
export const PROFILE_FORM_PARAMS = {
  "id": {
    "type": "string",
    "controlType": "text",
    "disabled": true,
    "hidden": true
  },
  "gender": {
    "type": "string",
    "controlType": "radio",
    "value": "",
    "label": "Gender",
    "placeholder": "",
    "helpText": "",
    "syncValidators": [{ "name": "required" }],
    "asyncValidators": [],
    "list": [
      {
        "key": "Male",
        "value": "Male"
      },
      {
        "key": "Female",
        "value": "Female"
      }
    ],
    "disabled": false
  },
  "dob": {
    "type": "string",
    "controlType": "date",
    "value": "",
    "label": "Birth date",
    "placeholder": "Birth date",
    "helpText": "",
    "syncValidators": [
      { "name": "trimSpacesValidator" },
      { "name": "maxLength", "params": [100] },
      { "name": "dateValidator" }
    ],
    "asyncValidators": [],
    "list": [],
    "disabled": false
  },
  "bio": {
    "type": "string",
    "controlType": "textarea",
    "value": "",
    "label": "Bio",
    "placeholder": "Profile overview",
    "helpText": "",
    "syncValidators": [
      { "name": "trimSpacesValidator" },
      { "name": "maxLength", "params": [300] }
    ],
    "asyncValidators": [],
    "list": [],
    "disabled": false
  },
  "defaultAddressId": {
    "type": "string",
    "controlType": "text",
    "value": "",
    "label": "Default Address",
    "placeholder": "Default address",
    "helpText": "",
    "syncValidators": [
      { "name": "required" },
      { "name": "trimSpacesValidator" },
      { "name": "maxLength", "params": [100] }
    ],
    "asyncValidators": [],
    "list": [],
    "actionBtn": "Choose",
    "disabled": false
  },
  "createTime": {
    "type": "string",
    "controlType": "text",
    "disabled": true,
    "hidden": true
  },
  "updateTime": {
    "type": "string",
    "controlType": "text",
    "disabled": true,
    "hidden": true
  }
};
