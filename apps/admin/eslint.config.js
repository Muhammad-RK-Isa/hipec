import baseConfig, { restrictEnvAccess } from "@hipec/eslint-config/base";
import reactConfig from "@hipec/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [ "build/**" ],
  },
  ...baseConfig,
  ...reactConfig,
  ...restrictEnvAccess,
];
