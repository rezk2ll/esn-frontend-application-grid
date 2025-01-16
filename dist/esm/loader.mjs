import { a as patchEsm, b as bootstrapLazy } from './index-e06512a6.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["esn-popover",[[1,"esn-popover",{"active":[32],"fadingState":[32],"toggleShowState":[64]}]]],["esn-app-grid",[[1,"esn-app-grid",{"serializedApplications":[1,"serialized-applications"]}]]]], options);
});

export { defineCustomElements };