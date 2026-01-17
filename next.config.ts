import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	compiler: {
		// optionnel pour SWC, réduire transpilation
	},
	experimental: {
		esmExternals: true, // moins de polyfills
	},
};

export default nextConfig;
