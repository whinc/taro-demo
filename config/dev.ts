import type { UserConfigExport } from "@tarojs/cli";
export default {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {},
  h5: {},
  compiler: {
    type: "webpack5",
    prebundle: {
      exclude: ["@nutui/nutui-react-taro", "@nutui/icons-react-taro"],
    },
  },
} satisfies UserConfigExport;
