const nodes = [
  {
    id: '1',
    label: 'HTTP Trigger',
    icon: 'Public',
    iconbgColor: '#ffc061',
    config: {
      byId: {
        formTitleLabel: {
          id: 'formTitleLabel',
          type: 'Label',
          passthroughProps: {
            text: 'Sandbox URL',
            variant: 'subtitle1',
          },
          styleFromProps: {
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
          },
        },
        urlLabel: {
          id: 'urlLabel',
          type: 'Label',
          passthroughProps: {
            text: 'URL',
            variant: 'subtitle2',
          },
          styleFromProps: {
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
          },
        },
        urlTextField: {
          id: 'urlTextField',
          type: 'TextField',
          defaultValue: '',
          passthroughProps: {
            value: '',
            placeholder: 'url',
          },
          validations: {
            min: 6,
            required: true,
          },
          styleFromProps: {
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
          },
        },
        fieldGroup1: {
          id: 'fieldGroup1',
          type: 'FieldGroup',
          passthroughProps: {
            childrenAllIds: ['cancelButton', 'submitButton'],
          },
          styleFromProps: {
            display: 'flex',
            justifyContent: 'end',
            margin: '0.5rem',
          },
        },
        cancelButton: {
          id: 'cancelButton',
          type: 'Button',
          passthroughProps: {
            variant: 'outlined',
            text: 'Cancel',
            type: 'cancel',
            clickHandlerName: 'cancelButtonHandler',
          },
          styleFromProps: {
            marginRight: '0.5rem',
          },
        },
        submitButton: {
          id: 'submitButton',
          type: 'Button',
          passthroughProps: {
            variant: 'contained',
            text: 'Save',
            type: 'submit',
          },
          styleFromProps: {
            backgroundColor: '#4f46e5',
          },
        },
      },
      allIds: ['formTitleLabel', 'urlLabel', 'urlTextField', 'fieldGroup1'],
    },
    connections: [],
    children: [],
    position: {},
    size: {},
    type: 'default',
    isGroup: false,
  },
  {
    id: '2',
    label: 'Signup Page',
    icon: 'AdminPanelSettings',
    iconbgColor: '#7b61ff',
    config: {
      byId: {
        formTitleLabel: {
          id: 'formTitleLabel',
          type: 'Label',
          passthroughProps: {
            text: 'signup page',
            variant: 'subtitle1',
          },
          styleFromProps: {
            paddingRight: '0.5rem',
            paddingLeft: '0.5rem',
          },
        },
        pageTitleLabel: {
          id: 'pageTitleLabel',
          type: 'Label',
          passthroughProps: {
            text: 'Page Title',
            variant: 'subtitle1',
          },
          styleFromProps: {
            paddingRight: '0.5rem',
            paddingLeft: '0.5rem',
          },
        },
        pageTitleTextField: {
          id: 'pageTitleTextField',
          type: 'TextField',
          defaultValue: '',
          passthroughProps: {
            value: '',
            placeholder: 'page title',
          },
          validations: {
            required: true,
          },
          styleFromProps: {
            padding: '0.5rem',
          },
        },
        subheadingLabel: {
          id: 'subheadingLabel',
          type: 'Label',
          passthroughProps: {
            text: 'Subheading',
            variant: 'subtitle1',
          },
          styleFromProps: {
            paddingRight: '0.5rem',
            paddingLeft: '0.5rem',
          },
        },
        subheadingTextField: {
          id: 'subheadingTextField',
          type: 'TextField',
          defaultValue: '',
          passthroughProps: {
            value: '',
            placeholder: 'subheading',
          },
          validations: {
            required: true,
          },
          styleFromProps: {
            padding: '0.5rem',
          },
        },
        brandLogoLabel: {
          id: 'brandLogoLabel',
          type: 'Label',
          passthroughProps: {
            text: 'Brand Logo',
            variant: 'subtitle1',
          },
          styleFromProps: {
            paddingRight: '0.5rem',
            paddingLeft: '0.5rem',
          },
        },
        brandLogoFileUpload: {
          id: 'brandLogoFileUpload',
          type: 'FileUpload',
          defaultValue: '',
          passthroughProps: {
            text: 'Click to Upload',
            placeholder: 'subheading',
            icon: 'FileUpload',
          },
          validations: {
            required: true,
          },
          styleFromProps: {
            width: 'fit-content',
            color: 'black',
          },
        },
        emailInputLabel: {
          id: 'emailInputLabel',
          type: 'Label',
          passthroughProps: {
            text: 'Email Input Title',
            variant: 'subtitle1',
          },
          styleFromProps: {
            paddingRight: '0.5rem',
            paddingLeft: '0.5rem',
          },
        },
        emailInputTitle: {
          id: 'emailInputTitle',
          type: 'TextField',
          defaultValue: '',
          passthroughProps: {
            value: '',
            placeholder: 'Email Input Title',
          },
          validations: {
            required: true,
          },
          styleFromProps: {
            padding: '0.5rem',
          },
        },
        emailPlaceholderLabel: {
          id: 'emailPlaceholderLabel',
          type: 'Label',
          passthroughProps: {
            text: 'Email Input Placeholder',
            variant: 'subtitle1',
          },
          styleFromProps: {
            paddingRight: '0.5rem',
            paddingLeft: '0.5rem',
          },
        },
        emailPlaceholderTextField: {
          id: 'emailPlaceholderTextField',
          type: 'TextField',
          defaultValue: '',
          passthroughProps: {
            value: '',
            placeholder: 'Email Input Placeholder',
          },
          validations: {
            required: true,
          },
          styleFromProps: {
            padding: '0.5rem',
          },
        },
        submitBtnTextLabel: {
          id: 'submitBtnTextLabel',
          type: 'Label',
          passthroughProps: {
            text: 'Submit Button Text',
            variant: 'subtitle1',
          },
          styleFromProps: {
            paddingRight: '0.5rem',
            paddingLeft: '0.5rem',
          },
        },
        ctaTextField: {
          id: 'ctaTextField',
          type: 'TextField',
          defaultValue: '',
          passthroughProps: {
            value: '',
            placeholder: 'CTA text',
          },
          validations: {
            required: true,
          },
          styleFromProps: {
            padding: '0.5rem',
          },
        },
        fieldGroup1: {
          id: 'fieldGroup1',
          type: 'FieldGroup',
          passthroughProps: {
            childrenAllIds: ['cancelButton', 'submitButton'],
          },
          styleFromProps: {
            display: 'flex',
            justifyContent: 'end',
            margin: '0.5rem',
          },
        },
        cancelButton: {
          id: 'cancelButton',
          type: 'Button',
          passthroughProps: {
            variant: 'outlined',
            text: 'Cancel',
            type: 'cancel',
            clickHandlerName: 'cancelButtonHandler',
          },
          styleFromProps: {
            marginRight: '0.5rem',
          },
        },
        submitButton: {
          id: 'submitButton',
          type: 'Button',
          passthroughProps: {
            variant: 'contained',
            text: 'Save',
            type: 'submit',
          },
          styleFromProps: {
            backgroundColor: '#4f46e5',
          },
        },
      },
      allIds: [
        'formTitleLabel',
        'pageTitleLabel',
        'pageTitleTextField',
        'subheadingLabel',
        'subheadingTextField',
        'brandLogoLabel',
        'brandLogoFileUpload',
        'emailInputLabel',
        'emailInputTitle',
        'emailPlaceholderLabel',
        'emailPlaceholderTextField',
        'submitBtnTextLabel',
        'ctaTextField',
        'fieldGroup1',
      ],
    },
    connections: [],
    children: [],
    position: {},
    size: {},
    type: 'default',
    isGroup: false,
  },
  {
    id: '3',
    label: 'Redirect User',
    icon: 'NearMe',
    iconbgColor: '#ec6b5e',
    config: {
      byId: {
        formTitleLabel: {
          id: 'formTitleLabel',
          type: 'Label',
          passthroughProps: {
            text: 'Redirect URL',
            variant: 'subtitle1',
          },
          styleFromProps: {
            paddingRight: '0.5rem',
            paddingLeft: '0.5rem',
          },
        },
        urlLabel: {
          id: 'urlLabel',
          type: 'Label',
          passthroughProps: {
            text: 'URL',
            variant: 'subtitle2',
          },
          styleFromProps: {
            paddingRight: '0.5rem',
            paddingLeft: '0.5rem',
          },
        },
        urlTextField: {
          id: 'urlTextField',
          type: 'TextField',
          defaultValue: '',
          passthroughProps: {
            value: '',
            placeholder: 'https://',
          },
          validations: {
            required: true,
          },
          styleFromProps: {
            padding: '0.5rem',
          },
        },
        fieldGroup1: {
          id: 'fieldGroup1',
          type: 'FieldGroup',
          passthroughProps: {
            childrenAllIds: ['cancelButton', 'submitButton'],
          },
          styleFromProps: {
            display: 'flex',
            justifyContent: 'end',
            margin: '0.5rem',
          },
        },
        cancelButton: {
          id: 'cancelButton',
          type: 'Button',
          passthroughProps: {
            variant: 'outlined',
            text: 'Cancel',
            type: 'cancel',
            clickHandlerName: 'cancelButtonHandler',
          },
          styleFromProps: {
            marginRight: '0.5rem',
          },
        },
        submitButton: {
          id: 'submitButton',
          type: 'Button',
          passthroughProps: {
            variant: 'contained',
            text: 'Save',
            type: 'submit',
          },
          styleFromProps: {
            backgroundColor: '#4f46e5',
          },
        },
      },
      allIds: ['formTitleLabel', 'urlLabel', 'urlTextField', 'fieldGroup1'],
    },
    connections: [],
    children: [],
    position: {},
    size: {},
    type: 'default',
    isGroup: false,
  },
];

module.exports = nodes;
