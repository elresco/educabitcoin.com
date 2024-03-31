import mdx from "@next/mdx"
 
await import("./src/env.js")

const withMdx = mdx()

/** @type {import("next").NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  pageExtensions: ["mdx", "ts", "tsx"],
}

export default withMdx(config)
