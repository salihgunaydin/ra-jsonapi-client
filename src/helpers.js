/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
export const getValue = (object, path) => path
  .replace(/\[/g, '.')
  .replace(/\]/g, '.')
  .split('.')
  .reduce((o, k) => (o || {})[k], object);
