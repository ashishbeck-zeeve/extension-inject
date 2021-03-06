"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectExtension = injectExtension;

// Copyright 2019-2021 @axia-js/extension-inject authors & contributors
// SPDX-License-Identifier: Apache-2.0
// It is recommended to always use the function below to shield the extension and dapp from
// any future changes. The exposed interface will manage access between the 2 environments,
// be it via window (current), postMessage (under consideration) or any other mechanism
function injectExtension(enable, {
  name,
  version
}) {
  // small helper with the typescript types, just cast window
  const windowInject = window; // don't clobber the existing object, we will add it (or create as needed)

  windowInject.injectedWeb3 = windowInject.injectedWeb3 || {}; // add our enable function

  windowInject.injectedWeb3[name] = {
    enable: origin => enable(origin),
    version
  };
}