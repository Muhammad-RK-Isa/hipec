import baseConfig, { restrictEnvAccess } from "@hipec/eslint-config/base";
import nextjsConfig from "@hipec/eslint-config/nextjs";
import reactConfig from "@hipec/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [ ".next/**" ],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
