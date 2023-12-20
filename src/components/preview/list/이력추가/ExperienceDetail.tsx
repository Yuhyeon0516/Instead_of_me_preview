import {
    Button,
    ButtonText,
    HStack,
    Heading,
    Input,
    InputField,
    VStack,
} from "@gluestack-ui/themed";
import dayjs from "dayjs";
import React, {useState} from "react";
// import DatePicker from "react-native-date-picker";

export default function ExperienceDetail() {
    const [description, setDescription] = useState("");

    const [startDate, setStartDate] = useState(new Date());
    const [startOpen, setStartOpen] = useState(false);

    const [endDate, setEndDate] = useState(new Date());
    const [endOpen, setEndOpen] = useState(false);

    function onPressReset() {
        setDescription("");
        setStartDate(new Date());
        setEndDate(new Date());
    }

    console.log(startOpen, endOpen); // web용 임시

    return (
        <VStack px={15} py={30}>
            <HStack alignItems="center">
                <Heading size="md" flex={1}>
                    경험내용
                </Heading>

                <Button
                    variant="outline"
                    size="xs"
                    borderColor="$trueGray400"
                    onPress={onPressReset}>
                    <ButtonText color="$trueGray500">초기화</ButtonText>
                </Button>
            </HStack>

            <VStack py={20} space="md">
                <Heading size="md">내용</Heading>
                <Input>
                    <InputField
                        placeholder="예시 : IOM"
                        value={description}
                        onChangeText={setDescription}
                    />
                </Input>
            </VStack>

            <HStack py={10} space="md">
                <VStack flex={1} space="sm">
                    <Heading size="sm" color="$trueGray500">
                        시작
                    </Heading>
                    <Button
                        variant="outline"
                        onPress={() => setStartOpen(true)}>
                        <ButtonText>
                            {dayjs(startDate).format("YYYY.MM.DD").toString()}
                        </ButtonText>
                    </Button>
                    {/* <DatePicker
                        modal
                        open={startOpen}
                        date={startDate}
                        locale="ko-KR"
                        mode="date"
                        onConfirm={date => {
                            setStartOpen(false);
                            setStartDate(date);
                        }}
                        onCancel={() => {
                            setStartOpen(false);
                        }}
                    /> */}
                </VStack>
                <VStack flex={1} space="sm">
                    <Heading size="sm" color="$trueGray500">
                        종료
                    </Heading>
                    <Button variant="outline" onPress={() => setEndOpen(true)}>
                        <ButtonText>
                            {dayjs(endDate).format("YYYY.MM.DD").toString()}
                        </ButtonText>
                    </Button>
                    {/* <DatePicker
                        modal
                        open={endOpen}
                        date={endDate}
                        locale="ko-KR"
                        mode="date"
                        onConfirm={date => {
                            setEndOpen(false);
                            setEndDate(date);
                        }}
                        onCancel={() => {
                            setEndOpen(false);
                        }}
                    /> */}
                </VStack>
            </HStack>
        </VStack>
    );
}
