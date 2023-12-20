import React, {useState} from "react";
import {
    Box,
    Button,
    ButtonIcon,
    ButtonText,
    HStack,
    Heading,
} from "@gluestack-ui/themed";
import dayjs from "dayjs";
import {Clock3} from "lucide-react-native";
// import DatePicker from "react-native-date-picker";

export default function Time() {
    // const [startDate, setStartDate] = useState<Date | null>(null);
    // const [startOpen, setStartOpen] = useState(false);
    const [startDate, _] = useState<Date | null>(null);
    const [__, setStartOpen] = useState(false);

    // const [endDate, setEndDate] = useState<Date | null>(null);
    // const [endOpen, setEndOpen] = useState(false);
    const [endDate, ___] = useState<Date | null>(null);
    const [____, setEndOpen] = useState(false);

    function onPressStartDate() {
        setStartOpen(true);
    }

    function onPressEndDate() {
        setEndOpen(true);
    }

    return (
        <>
            <Box gap={10}>
                <Heading size="md">시간</Heading>
                <HStack w={"$full"} space="md">
                    <Button
                        flex={1}
                        variant="outline"
                        borderColor="$trueGray400"
                        onPress={onPressStartDate}>
                        <ButtonText flex={1} color="black">
                            {startDate !== null
                                ? dayjs(startDate).format("HH:mm").toString()
                                : "-- : --"}
                        </ButtonText>
                        <ButtonIcon as={Clock3} color="black" />
                    </Button>
                    <Button
                        flex={1}
                        variant="outline"
                        borderColor="$trueGray400"
                        onPress={onPressEndDate}>
                        <ButtonText flex={1} color="black">
                            {endDate !== null
                                ? dayjs(endDate).format("HH:mm").toString()
                                : "-- : --"}
                        </ButtonText>
                        <ButtonIcon as={Clock3} color="black" />
                    </Button>
                </HStack>
            </Box>
            {/* <DatePicker
                modal
                open={startOpen}
                date={startDate ?? new Date()}
                locale="ko-KR"
                mode="time"
                onConfirm={date => {
                    setStartOpen(false);
                    setStartDate(date);
                }}
                onCancel={() => {
                    setStartOpen(false);
                }}
            />
            <DatePicker
                modal
                open={endOpen}
                date={endDate ?? new Date()}
                locale="ko-KR"
                mode="time"
                onConfirm={date => {
                    setEndOpen(false);
                    setEndDate(date);
                }}
                onCancel={() => {
                    setEndOpen(false);
                }}
            /> */}
        </>
    );
}
