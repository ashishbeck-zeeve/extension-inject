"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Copyright 2019-2021 @axia-js/extension-inject authors & contributors
// SPDX-License-Identifier: Apache-2.0
const extension = typeof chrome !== 'undefined' ? chrome : typeof browser !== 'undefined' ? browser : null;
var _default = extension;
exports.default = _default;