import {
    ActionsheetItem,
    ActionsheetItemText,
    ChevronDownIcon,
    Heading,
    Select,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicator,
    SelectDragIndicatorWrapper,
    SelectIcon,
    SelectInput,
    SelectPortal,
    SelectTrigger,
    VStack,
} from "@gluestack-ui/themed";
import React, {useState} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function SquareFootageSection() {
    const [selectedItem, setSelectedItem] = useState("");
    const [showActionSheet, setShowActionSheet] = useState(false);
    const safeInset = useSafeAreaInsets();

    function handleOpen() {
        setShowActionSheet(true);
    }

    function handleClose() {
        setShowActionSheet(false);
    }

    function onPressItem(squareFootage: string) {
        setSelectedItem(squareFootage);
        handleClose();
    }

    return (
        <VStack space="sm">
            <Heading>평수</Heading>

            <Select closeOnOverlayClick={true} onClose={handleClose}>
                <SelectTrigger
                    variant="outline"
                    size="xl"
                    w={"100%"}
                    h={60}
                    onPress={handleOpen}
                    bgColor="white">
                    <SelectInput
                        flex={1}
                        pointerEvents="none"
                        fontSize={18}
                        placeholder={"평수를 선택해주세요."}
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
                        <ActionsheetItem
                            onPress={() => onPressItem("10평 미만")}>
                            <ActionsheetItemText fontSize={18} color="black">
                                10평 미만
                            </ActionsheetItemText>
                        </ActionsheetItem>
                        <ActionsheetItem onPress={() => onPressItem("10~20평")}>
                            <ActionsheetItemText fontSize={18} color="black">
                                10~20평
                            </ActionsheetItemText>
                        </ActionsheetItem>
                    </SelectContent>
                </SelectPortal>
            </Select>
        </VStack>
    );
}
