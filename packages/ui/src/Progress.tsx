import {createContext, useContext, useState} from "react";
import {
  ThemeableStack,
  View,
  XStack,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";

const Context = createContext<{width: number}>({
  width: 0,
});

const ProgressContext = createStyledContext({
  variant: "determinate",
  value: 0,
});

const Frame = styled(XStack, {
  name: "ProgressFrame",
  context: ProgressContext,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: 4,
  maxHeight: 4,
  position: "relative",
});

const FrameHOC = Frame.styleable((props, ref) => {
  const [width, setWidth] = useState<number>(0);

  return (
    <Context.Provider value={{width}}>
      <Frame
        {...props}
        ref={ref}
        onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
      />
    </Context.Provider>
  );
});

const Track = styled(ThemeableStack, {
  name: "ProgressTrack",
  context: ProgressContext,
  backgroundColor: "$primaryContainer",
  height: 4,
  animateOnly: ["width"],
  animation: "slow",
  flexDirection: "row",
  borderRadius: "$shape.corner_full",
  fg: 1,
});

const Indicator = styled(ThemeableStack, {
  name: "ProgressIndicator",
  context: ProgressContext,
  height: 4,
  backgroundColor: "$primary",
  animateOnly: ["width"],
  animation: "slow",
  borderRadius: "$shape.corner_full",
  mr: 4,
  position: "absolute",
  left: 0,
  bottom: 0,
  zIndex: 10,
});

const IndicatorHOC = Indicator.styleable((props, ref) => {
  // Unsure as to why tamagui isn't accepting types
  const {value} = useContext(ProgressContext as any) as any as {value: number};
  const width = useContext(Context)?.width;

  // If the value is greater than 1, we need to clamp it to 1
  const displayWidth = Math.min(width * value, width);

  return <Indicator {...props} ref={ref} width={displayWidth} />;
});

const Target = styled(View, {
  name: "ProgressTarget",
  context: ProgressContext,
  width: 4,
  height: 4,
  borderRadius: 100,
  backgroundColor: "$primary",
});

export const Progress = withStaticProperties(FrameHOC, {
  Props: ProgressContext.Provider,
  Track,
  Indicator: IndicatorHOC,
  Target,
});
