export const validateFn = (data: any, validationErrors: object[]) => {
  const errors: any = {};
  validationErrors.forEach((validation: any) => {
    if (!validation.callback(data)) {
      errors[validation.field] = validation.text;
    }
  });

  return errors;
};

export function debounce(this: any, func: Function, timeout = 300) {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}