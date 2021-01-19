if (
  typeof window !== 'undefined' &&
  typeof window.Audio !== 'undefined' &&
  typeof require !== 'undefined'
) {
  // tslint:disable-next-line:no-var-requires
  require('web-animations-js');
}

export default () => {};
