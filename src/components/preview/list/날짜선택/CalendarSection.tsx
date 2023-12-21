import React from "react";
import {Calendar, LocaleConfig} from "react-native-calendars";
import {ICalendarSection} from "./type";
import CalendarHeader from "./CalendarHeader";

LocaleConfig.locales.ko = {
    monthNames: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
    ],
    monthNamesShort: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
    ],
    dayNames: ["월", "화", "수", "목", "금", "토", "일"],
    dayNamesShort: ["월", "화", "수", "목", "금", "토", "일"],
};

LocaleConfig.defaultLocale = "ko";

export default function CalendarSection({
    selectedDate,
    onPressDate,
}: ICalendarSection) {
    return (
        <Calendar
            onDayPress={date => {
                onPressDate(date.dateString);
            }}
            renderHeader={date => <CalendarHeader date={date} />}
            theme={{
                backgroundColor: "#ffffff",
                calendarBackground: "#ffffff",
                textSectionTitleColor: "black",
                selectedDayBackgroundColor: "#00adf5",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "black",
                dayTextColor: "black",
                arrowColor: "black",
                arrowStyle: {
                    backgroundColor: "lightgray",
                    borderRadius: 1000,
                    width: 30,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                },
                monthTextColor: "black",
            }}
            markedDates={{
                [selectedDate]: {
                    selected: true,
                    disableTouchEvent: true,
                },
            }}
        />
    );
}
