// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";function m(m){return 0===m||t(m)||s(m)?m:m>0?e(m+i(m*m+1)):-e(-m+i(m*m+1))}export{m as default};
//# sourceMappingURL=index.mjs.map
