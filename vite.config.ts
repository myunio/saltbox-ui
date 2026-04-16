import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "saltbox",
    },
    rollupOptions: {
      external: ["vue", "@nuxt/ui"],
    },
  },
})
