import {
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetContent,
    Button,
    ButtonText,
    Heading,
    VStack,
} from "@gluestack-ui/themed";
import React from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {IPopup} from "./type";
import CloseHeader from "../common/CloseHeader";
import PopupButtonItem from "./PopupButtonItem";
import {FlatList} from "react-native";

const buttonList = [
    "매장관리 · 판매",
    "서비스",
    "서빙",
    "주방",
    "단순노무 · 포장 · 물류",
    "배달 · 운송 · 운전",
    "행사 · 스텝 · 미디어",
    "사무 · 회계 · 관리",
    "교육 강사",
    "기타",
];

export default function Popup({
    showActionSheet,
    handleActionSheetClose,
}: IPopup) {
    const safeAreaInset = useSafeAreaInsets();

    return (
        <Actionsheet
            isOpen={showActionSheet}
            onClose={handleActionSheetClose}
            zIndex={999}>
            <ActionsheetBackdrop onPress={handleActionSheetClose} />
            <ActionsheetContent pb={safeAreaInset.bottom} zIndex={999} pt={20}>
                <CloseHeader
                    title="주요업무"
                    onPressClose={handleActionSheetClose}
                />
                <VStack px={20} justifyContent="flex-start" w={"$full"}>
                    <Heading color="$trueGray400" size="xs" my={20}>
                        관련있는 항목은 모두 선택해주세요.
                    </Heading>

                    <FlatList
                        data={buttonList}
                        renderItem={({item}) => (
                            <PopupButtonItem title={item} />
                        )}
                        numColumns={2}
                        columnWrapperStyle={{
                            gap: 20,
                        }}
                        contentContainerStyle={{
                            gap: 20,
                        }}
                    />
                </VStack>
                <Button w={"90%"} mt={20}>
                    <ButtonText>확인</ButtonText>
                </Button>
            </ActionsheetContent>
        </Actionsheet>
    );
}
