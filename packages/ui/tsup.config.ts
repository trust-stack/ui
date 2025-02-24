import {defineConfig} from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts?(x)", "!src/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  splitting: true,
  outDir: "dist",
  clean: true,
  minify: false,
  external: ["react", "react-native"],
});
