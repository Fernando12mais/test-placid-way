import ReactCalendar from "react-calendar";
import styles from "./calendar.module.css";

import { CalendarProps } from "react-calendar/dist/cjs/Calendar";

export default function Calendar(props: CalendarProps) {
  return <ReactCalendar {...props} />;
}
