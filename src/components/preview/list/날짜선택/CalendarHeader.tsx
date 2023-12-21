import React from "react";
import {ICalendarHeader} from "./type";
import {Heading, VStack} from "@gluestack-ui/themed";
import dayjs from "dayjs";

export default function CalendarHeader({date}: ICalendarHeader) {
    return (
        <VStack alignItems="center">
            <Heading size="sm">
                {dayjs(date?.toDate()).format("YYYY년").toString()}
            </Heading>
            <Heading>{dayjs(date?.toDate()).format("MM월").toString()}</Heading>
        </VStack>
    );
}
