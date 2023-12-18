import React, {useState} from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import {HStack, Heading, Pressable, Text, VStack} from "@gluestack-ui/themed";
import VerticalSpacer from "../common/VerticalSpacer";

dayjs.locale("ko");

export default function Calendar() {
    const [selectedIndex, setSelectedIndex] = useState(6);
    const days = [
        dayjs().subtract(6, "days"),
        dayjs().subtract(5, "days"),
        dayjs().subtract(4, "days"),
        dayjs().subtract(3, "days"),
        dayjs().subtract(2, "days"),
        dayjs().subtract(1, "days"),
        dayjs(),
    ];

    function onPressDay(index: number) {
        setSelectedIndex(index);
    }

    return (
        <VStack w={"$full"} alignItems="center" py={20}>
            <Heading>
                {dayjs(days[selectedIndex])
                    .format("MM월 DD일 (ddd)")
                    .toString()}
            </Heading>
            <VerticalSpacer height={20} />
            <HStack w={"$full"} px={30} justifyContent="space-between">
                {days.map((day, index) => {
                    return (
                        <VStack alignItems="center" space="sm" key={index}>
                            <Text
                                color="black"
                                fontSize={14}
                                fontWeight="$medium">
                                {dayjs(day).format("ddd").toString()}
                            </Text>
                            <Pressable
                                w={35}
                                h={35}
                                alignItems="center"
                                justifyContent="center"
                                backgroundColor={
                                    selectedIndex === index
                                        ? "black"
                                        : "transparent"
                                }
                                borderRadius={"$full"}
                                onPress={() => onPressDay(index)}>
                                <Text
                                    fontSize={18}
                                    fontWeight="$bold"
                                    color={
                                        selectedIndex === index
                                            ? "white"
                                            : "black"
                                    }>
                                    {dayjs(day).format("D").toString()}
                                </Text>
                            </Pressable>
                        </VStack>
                    );
                })}
            </HStack>
        </VStack>
    );
}
