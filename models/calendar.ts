import {
  TileClassNameFunc,
  TileDisabledFunc,
  Value,
} from "react-calendar/dist/cjs/shared/types";

export type CalendarProps = {
  tileDisabled: TileDisabledFunc;
  tileClassName: TileClassNameFunc;
  value: Value;
  onChange?: (value: Value, event: React.MouseEvent<HTMLButtonElement>) => void;
};
