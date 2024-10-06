/// <reference types="@hipec/eslint-config/types.d.ts" />

import baseConfig from "@hipec/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
];
