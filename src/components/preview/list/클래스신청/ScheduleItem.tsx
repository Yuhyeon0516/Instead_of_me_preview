import React from "react";
import {IScheduleItem} from "./type";
import {
    Box,
    CircleIcon,
    Radio,
    RadioIcon,
    RadioIndicator,
    RadioLabel,
} from "@gluestack-ui/themed";

export default function ScheduleItem({label}: IScheduleItem) {
    return (
        <Box
            px={20}
            py={15}
            borderWidth={1}
            borderColor="$trueGray400"
            borderRadius={10}>
            <Radio value={label}>
                <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} size="xs" />
                </RadioIndicator>
                <RadioLabel color="black" fontWeight="bold" fontSize={18}>
                    {label}
                </RadioLabel>
            </Radio>
        </Box>
    );
}
