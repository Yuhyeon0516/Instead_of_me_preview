import React, {useState} from "react";
import {SafeAreaView, ScrollView} from "react-native";
import Header from "../common/Header";
import {
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetContent,
    ActionsheetDragIndicator,
    ActionsheetDragIndicatorWrapper,
    ActionsheetItem,
    ActionsheetItemText,
    Box,
    Button,
    ButtonText,
    Divider,
    HStack,
    Heading,
    Input,
    InputField,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function ReserveSpace() {
    const [showActionSheet, setShowActionSheet] = useState(false);
    const safeAreaInset = useSafeAreaInsets();

    function handleActionSheetOpen() {
        setShowActionSheet(true);
    }

    function handleActionSheetClose() {
        setShowActionSheet(false);
    }

    return (
        <SafeAreaView>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header title="공간 예약" />
                <VStack px={20} py={30} space="2xl">
                    <VStack space="xs" px={5}>
                        <Heading
                            size="sm"
                            color="$blue600"
                            bgColor="$blue100"
                            w={70}
                            textAlign="center">
                            시간 예약
                        </Heading>
                        <Heading>Concept Studio</Heading>
                    </VStack>

                    <VStack space="xs" px={5}>
                        <Heading size="sm" color="$trueGray500">
                            비밀의 방
                        </Heading>
                        <VStack
                            borderWidth={1}
                            borderColor="$trueGray500"
                            borderRadius={15}
                            p={20}
                            space="md">
                            <HStack>
                                <VStack flex={1}>
                                    <Heading size="sm" color="$trueGray500">
                                        예약날짜
                                    </Heading>
                                    <Heading>12.18(월)</Heading>
                                </VStack>

                                <VStack flex={1}>
                                    <Heading size="sm" color="$trueGray500">
                                        예약인원
                                    </Heading>
                                    <Heading>1명</Heading>
                                </VStack>
                            </HStack>

                            <VStack>
                                <Heading size="sm" color="$trueGray500">
                                    예약시간
                                </Heading>
                                <Heading>22시~0시, 2시간</Heading>
                            </VStack>

                            <Divider />

                            <VStack space="sm">
                                <Heading size="sm" color="$trueGray500">
                                    예약자 정보
                                </Heading>
                                <Heading size="md">홍길동</Heading>
                                <Heading size="sm">010-1234-5678</Heading>
                            </VStack>
                        </VStack>
                    </VStack>

                    <VStack space="xs">
                        <Heading size="sm">쿠폰</Heading>
                        <HStack space="md" h={50}>
                            <Box
                                flex={1}
                                bgColor="$trueGray100"
                                py={15}
                                px={10}
                                borderRadius={10}
                                borderWidth={1}
                                borderColor="$trueGray400">
                                <Text color="$black">사용 가능 쿠폰 1장</Text>
                            </Box>
                            <Button
                                flex={1}
                                variant="outline"
                                size="xl"
                                height={"$full"}
                                onPress={handleActionSheetOpen}>
                                <ButtonText fontWeight="$bold">
                                    쿠폰 선택
                                </ButtonText>
                            </Button>
                        </HStack>
                    </VStack>

                    <VStack space="xs">
                        <Heading size="sm">포인트 사용</Heading>
                        <HStack space="md" h={50}>
                            <Input
                                variant="outline"
                                size="md"
                                flex={1.15}
                                borderRadius={10}
                                height={"$full"}>
                                <InputField
                                    keyboardType="number-pad"
                                    defaultValue="0"
                                />
                            </Input>

                            <Button
                                flex={1}
                                variant="outline"
                                size="xl"
                                height={"$full"}>
                                <ButtonText fontWeight="$bold">
                                    모두 사용
                                </ButtonText>
                            </Button>
                        </HStack>
                        <Heading size="xs" color="$trueGray400">
                            보유 포인트: 0
                        </Heading>
                    </VStack>

                    <VStack space="md">
                        <Heading size="md">결제 정보</Heading>

                        <Divider />

                        <HStack>
                            <Heading size="md" flex={1}>
                                예약 금액(2시간)
                            </Heading>
                            <Heading size="md">12,000원</Heading>
                        </HStack>

                        <HStack>
                            <Heading size="md" flex={1}>
                                할인 금액
                            </Heading>
                            <Heading size="md">9,000원</Heading>
                        </HStack>

                        <Divider />

                        <HStack>
                            <Heading size="md" flex={1}>
                                결제 금액
                            </Heading>
                            <Heading size="md">3,000원</Heading>
                        </HStack>
                    </VStack>
                </VStack>
                <Button size="xl" mx={10}>
                    <ButtonText>예약하기</ButtonText>
                </Button>
            </ScrollView>

            <Actionsheet
                isOpen={showActionSheet}
                onClose={handleActionSheetClose}
                zIndex={999}>
                <ActionsheetBackdrop onPress={handleActionSheetClose} />
                <ActionsheetContent pb={safeAreaInset.bottom} zIndex={999}>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <ActionsheetItem onPress={handleActionSheetClose}>
                        <ActionsheetItemText>
                            회원가입 축하 9,000원 할인 쿠폰
                        </ActionsheetItemText>
                    </ActionsheetItem>
                </ActionsheetContent>
            </Actionsheet>
        </SafeAreaView>
    );
}
