// prettier-ignore
export const PROFILE_FORM_PARAMS = {
  "id": {
    "type": "string",
    "controlType": "text",
    "disabled": true,
    "hidden": true
  },
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
    "disabled": false

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
      }, {
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
  }
};
