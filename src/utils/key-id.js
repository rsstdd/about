// eslint-disable-next-line no-underscore-dangle, no-extra-parens
let idCounter = (typeof window !== "undefined" && window.__ID__) || 0;

const id = () => ++idCounter;

export default id;
