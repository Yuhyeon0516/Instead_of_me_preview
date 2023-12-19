import {SafeAreaView, ScrollView} from "react-native";
import React, {useState} from "react";
import Header from "../common/Header";
import {
    Box,
    Button,
    ButtonText,
    Divider,
    HStack,
    Heading,
    Textarea,
    TextareaInput,
    VStack,
} from "@gluestack-ui/themed";
import PaymentMethod from "./PaymentMethod";
import TimerText from "./TimerText";

export default function SpaceReservationPayment() {
    const [othersSelected, setOthersSelected] = useState(false);

    function onPressOthers() {
        setOthersSelected(prev => !prev);
    }

    return (
        <SafeAreaView>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header title="IOM 댄스 연습실" />
                <VStack>
                    <HStack
                        alignItems="center"
                        space="md"
                        bgColor="$blue50"
                        w={"$full"}
                        h={70}
                        justifyContent="center">
                        <Box
                            bgColor="$blue100"
                            px={10}
                            py={5}
                            borderRadius={20}>
                            <TimerText />
                        </Box>
                        <Heading size="sm">
                            5분간 예약 찜! 시간 내에 예약을 완료해주세요.
                        </Heading>
                    </HStack>

                    <VStack space="md" px={15} mt={30}>
                        <Heading>예약 정보</Heading>

                        <Heading size="sm">
                            12/19(수) · 오후 6~8시(2시간) · 201호
                        </Heading>

                        <Button
                            alignSelf="center"
                            w={200}
                            h={50}
                            borderRadius={20}
                            variant={othersSelected ? "solid" : "outline"}
                            onPress={onPressOthers}>
                            <ButtonText>다른 사람이 방문해요.</ButtonText>
                        </Button>
                    </VStack>

                    <Divider my={30} />

                    <VStack space="md" px={15} pb={40}>
                        <Heading>요청사항</Heading>

                        <Textarea size="md">
                            <TextareaInput placeholder="원하는 요청사항을 입력해주세요." />
                        </Textarea>
                    </VStack>

                    <Divider p={5} bgColor="$trueGray100" />

                    <HStack px={15} py={20}>
                        <Heading flex={1}>총 결제 금액</Heading>
                        <Heading color="$blue600">60,000원</Heading>
                    </HStack>

                    <Divider p={5} bgColor="$trueGray100" />

                    <PaymentMethod />
                </VStack>

                <Button mx={10} size="xl">
                    <ButtonText>60,000원 결제하기</ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}
