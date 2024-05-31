import {join} from "path";
import {defineConfig} from "vite";

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
