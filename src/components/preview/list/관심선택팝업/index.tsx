import {SafeAreaView} from "react-native";
import React, {useState} from "react";
import {
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetContent,
    ActionsheetDragIndicator,
    ActionsheetDragIndicatorWrapper,
    Button,
    ButtonText,
    HStack,
    Heading,
    VStack,
} from "@gluestack-ui/themed";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import InterestButton from "./InterestButton";

export default function InterestPopup() {
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
            <Button onPress={handleActionSheetOpen}>
                <ButtonText>Show Popup</ButtonText>
            </Button>
            <Actionsheet
                isOpen={showActionSheet}
                onClose={handleActionSheetClose}
                zIndex={999}>
                <ActionsheetBackdrop onPress={handleActionSheetClose} />
                <ActionsheetContent pb={safeAreaInset.bottom} zIndex={999}>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <VStack space="md">
                        <Heading>관심 선택</Heading>
                        <Heading color="$blue400" size="sm">
                            선택한 관심사에 따라 추천이 바뀌어요!
                        </Heading>
                        <VStack space="md">
                            <Heading size="sm">애정</Heading>
                            <VStack space="sm">
                                <HStack space="sm">
                                    <InterestButton title="재회" />
                                    <InterestButton title="결혼생활" />
                                    <InterestButton title="속마음" />
                                    <InterestButton title="궁합" />
                                </HStack>
                                <HStack space="sm">
                                    <InterestButton title="이혼" />
                                    <InterestButton title="바람 · 외도" />
                                </HStack>
                            </VStack>
                        </VStack>

                        <VStack space="md">
                            <Heading size="sm">진로</Heading>
                            <VStack space="sm">
                                <HStack space="sm">
                                    <InterestButton title="직장" />
                                    <InterestButton title="시험" />
                                    <InterestButton title="입시 · 전략" />
                                    <InterestButton title="취업" />
                                </HStack>
                                <HStack space="sm">
                                    <InterestButton title="이직" />
                                    <InterestButton title="진로 · 적성" />
                                </HStack>
                            </VStack>
                        </VStack>

                        <VStack space="md">
                            <Heading size="sm">자산</Heading>
                            <VStack space="sm">
                                <HStack space="sm">
                                    <InterestButton title="사업" />
                                    <InterestButton title="투자" />
                                    <InterestButton title="부동산" />
                                </HStack>
                            </VStack>
                        </VStack>

                        <Button size="lg">
                            <ButtonText>선택 완료</ButtonText>
                        </Button>
                    </VStack>
                </ActionsheetContent>
            </Actionsheet>
        </SafeAreaView>
    );
}
