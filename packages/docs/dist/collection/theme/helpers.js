export const getTransition = ({ transitions }, selectors, duration, easing) => `${selectors} ${transitions.duration[duration] / 1000}s ${transitions.easing[easing]}`;
