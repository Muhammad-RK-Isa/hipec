import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import baseConfig from "@hipec/tailwind-config/web"

const config: Config = {
  content: [...baseConfig.content, "../../packages/ui/src/**/*.{ts, tsx}"],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
};
export default config;