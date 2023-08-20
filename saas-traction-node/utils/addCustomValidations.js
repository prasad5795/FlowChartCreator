const minLengthCheck = (length, value) => {
  return value && value.length >= length;
};

const checkRequired = (flag, value) => {
  if (value) {
    return true;
  } else {
    return false;
  }
};

const validationTypeToFnMapping = {
  required: checkRequired,
  min: minLengthCheck,
};

const validationTypeToErrorMapping = {
  min: `minimum length does not match`,
  required: `Missing Field`,
};

module.exports = { validationTypeToFnMapping, validationTypeToErrorMapping };
