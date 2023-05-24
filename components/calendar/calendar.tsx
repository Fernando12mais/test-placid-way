import ReactCalendar from "react-calendar";
import styles from "./calendar.module.css";
import { CalendarProps } from "@/models/calendar";

export default function Calendar(props: CalendarProps) {
  return <ReactCalendar {...props} />;
}
