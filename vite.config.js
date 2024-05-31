import {defineConfig} from "vite";
import {join} from "path";

export default defineConfig({
  assetsInclude: ["**/*.md"],
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), "node_modules/$1"),
      },
    ],
  },
});
