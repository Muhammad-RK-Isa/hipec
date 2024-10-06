// import { createJiti } from "jiti";
// import { fileURLToPath } from "url";

// // Import env files to validate at build time. Use jiti so we can load .ts files in here.
// createJiti( fileURLToPath( import.meta.url ) )( "./src/env" );

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  transpilePackages: [ "@hipec/ui" ],

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
