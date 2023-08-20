const {
  validationTypeToFnMapping,
  validationTypeToErrorMapping,
} = require('./addCustomValidations');

const validateData = (config, formData) => {
  let everythingIsValid = true;
  let nonValidFieldIdsWithMsg = {};
  const { allIds = [], byId } = config;
  try {
    allIds.map((fieldId) => {
      if (byId[fieldId].validations) {
        const validationKeys = Object.keys(byId[fieldId].validations);
        validationKeys.map((validationName) => {
          const isInputValid = validationTypeToFnMapping[validationName](
            byId[fieldId].validations[validationName],
            formData[fieldId]
          );
          if (isInputValid) {
            // continue;
          } else {
            everythingIsValid = false;
            nonValidFieldIdsWithMsg[fieldId] =
              validationTypeToErrorMapping[validationName] ||
              'something is wrong';
          }
        });
      }
    });
    return { everythingIsValid, nonValidFieldIdsWithMsg };
  } catch (error) {
    console.log('🚀 ~ file: index.js:41 ~ validateData ~ error:', error);
  }
  //   return false;
  return { everythingIsValid, nonValidFieldIdsWithMsg };
};

module.exports = validateData;
