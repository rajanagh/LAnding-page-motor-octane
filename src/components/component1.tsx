import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type Component1Type = {
  uNDER?: string;
  l?: string;

  /** Style props */
  component1Position?: Property.Position;
  component1BorderRadius?: Property.BorderRadius;
  component1BackgroundColor?: Property.BackgroundColor;
  component1Top?: Property.Top;
  component1Left?: Property.Left;
};

const Component1: FunctionComponent<Component1Type> = ({
  uNDER,
  l,
  component1Position,
  component1BorderRadius,
  component1BackgroundColor,
  component1Top,
  component1Left,
}) => {
  const component1Style: CSS.Properties = useMemo(() => {
    return {
      position: component1Position,
      borderRadius: component1BorderRadius,
      backgroundColor: component1BackgroundColor,
      top: component1Top,
      left: component1Left,
    };
  }, [
    component1Position,
    component1BorderRadius,
    component1BackgroundColor,
    component1Top,
    component1Left,
  ]);

  return (
    <div
      className="relative rounded-lg bg-firebrick-100 w-[140px] overflow-hidden flex flex-row py-2.5 px-[38px] box-border items-center justify-center text-left text-lg text-seashell-100 font-armstrong"
      style={component1Style}
    >
      <div className="relative">
        <span>{uNDER}</span>
        <span className="text-xl">{` `}</span>
        <span className="text-5xl">{l}</span>
      </div>
    </div>
  );
};

export default Component1;
