import {
    ActionsheetItem,
    ActionsheetItemText,
    ChevronDownIcon,
    Select,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicator,
    SelectDragIndicatorWrapper,
    SelectIcon,
    SelectInput,
    SelectPortal,
    SelectTrigger,
} from "@gluestack-ui/themed";
import React, {useState} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function LocationSelector() {
    const [selectedItem, setSelectedItem] = useState("");
    const [showActionSheet, setShowActionSheet] = useState(false);
    const safeInset = useSafeAreaInsets();

    function handleOpen() {
        setShowActionSheet(true);
    }

    function handleClose() {
        setShowActionSheet(false);
    }

    function onPressItem(selectedBank: string) {
        setSelectedItem(selectedBank);
        handleClose();
    }

    return (
        <Select closeOnOverlayClick={true} onClose={handleClose}>
            <SelectTrigger
                variant="outline"
                size="xl"
                w={"100%"}
                onPress={handleOpen}
                bgColor="white">
                <SelectInput
                    flex={1}
                    pointerEvents="none"
                    fontSize={18}
                    placeholder={"교육 지역을 선택해주세요."}
                    value={selectedItem}
                    color="black"
                    fontWeight="$bold"
                    px={20}
                />
                <SelectIcon
                    mr={10}
                    as={ChevronDownIcon}
                    color="black"
                    size="xl"
                />
            </SelectTrigger>
            <SelectPortal isOpen={showActionSheet}>
                <SelectBackdrop />
                <SelectContent pb={safeInset.bottom}>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <ActionsheetItem onPress={() => onPressItem("서울")}>
                        <ActionsheetItemText fontSize={18}>
                            서울
                        </ActionsheetItemText>
                    </ActionsheetItem>
                    <ActionsheetItem onPress={() => onPressItem("경기도")}>
                        <ActionsheetItemText fontSize={18}>
                            경기도
                        </ActionsheetItemText>
                    </ActionsheetItem>
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}
