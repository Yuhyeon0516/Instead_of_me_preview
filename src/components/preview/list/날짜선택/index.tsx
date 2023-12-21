import {SafeAreaView} from "react-native";
import React, {useState} from "react";
import Header from "../common/Header";
import {Box, HStack, Heading, Image, VStack} from "@gluestack-ui/themed";
// import CalendarSection from "./CalendarSection";
import dayjs from "dayjs";

export default function SelectDate() {
    // const [selectedDate, setSelectedDate] = useState(
    //     dayjs(new Date()).format("YYYY-MM-DD").toString(),
    // );
    const [selectedDate, _] = useState(
        dayjs(new Date()).format("YYYY-MM-DD").toString(),
    );

    // function onPressDate(date: string) {
    //     setSelectedDate(date);
    // }

    return (
        <SafeAreaView>
            <Header title="날짜 선택" />
            <VStack px={20} py={30}>
                <Box>
                    <Heading size="xl">
                        <Heading color="$blue600" size="xl">
                            이용날짜
                        </Heading>
                        를
                    </Heading>
                    <Heading size="xl">선택해주세요.</Heading>
                </Box>

                <HStack
                    w={"$full"}
                    p={10}
                    my={30}
                    borderWidth={1}
                    borderColor="$trueGray400"
                    borderRadius={10}>
                    <Heading size="sm" flex={1}>
                        이용날짜
                    </Heading>

                    <Heading size="sm" color="$blue600">
                        {dayjs(selectedDate)
                            .format("YYYY년 MM월 DD일")
                            .toString()}
                    </Heading>
                </HStack>

                {/* <CalendarSection
                    selectedDate={selectedDate}
                    onPressDate={onPressDate}
                /> */}

                <Image
                    source={require("./assets/calendar.png")}
                    w={"100%"}
                    h={350}
                />
            </VStack>
        </SafeAreaView>
    );
}
