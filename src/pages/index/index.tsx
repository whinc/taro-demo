import { Range } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";

export default function Index() {
  const [visible, setVisible] = useState(true);
  const [value, setValue] = useState(10);

  return (
    <View style={{ marginTop: "100rpx" }}>
      {visible && (
        <Range
          min={0}
          max={100}
          value={value}
          onChange={(v) => setValue(v)}
          onEnd={() => setVisible(false)}
        />
      )}
    </View>
  );
}
