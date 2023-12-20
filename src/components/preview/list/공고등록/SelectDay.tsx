import {Box, HStack, Heading} from "@gluestack-ui/themed";
import React from "react";
import DayItem from "./DayItem";

export default function SelectDay() {
    return (
        <Box gap={15}>
            <Heading size="md">요일</Heading>
            <HStack w={"$full"} justifyContent="space-between" px={10}>
                {["월", "화", "수", "목", "금", "토", "일"].map(
                    (item, index) => (
                        <DayItem day={item} key={index} />
                    ),
                )}
            </HStack>
        </Box>
    );
}
