import {LocaleConfig} from "react-native-calendars";

export interface ICalendarSection {
    selectedDate: string;
    onPressDate: (date: string) => void;
}

export interface ICalendarHeader {
    date: LocaleConfig | undefined;
}
