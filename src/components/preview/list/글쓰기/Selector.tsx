import React, {useState} from "react";
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
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface ISelector {
    actionItems: string[];
    placeholder: string;
}

export default function Selector({actionItems, placeholder}: ISelector) {
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
        <Select>
            <SelectTrigger variant="outline" size="xl" onPress={handleOpen}>
                <SelectInput
                    flex={1}
                    pointerEvents="none"
                    fontSize={18}
                    placeholder={placeholder}
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
                <SelectBackdrop onPress={handleClose} />
                <SelectContent pb={safeInset.bottom}>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    {actionItems.map((actionItem, index) => {
                        return (
                            <ActionsheetItem
                                onPress={() => onPressItem(actionItem)}
                                key={index}>
                                <ActionsheetItemText fontSize={18}>
                                    {actionItem}
                                </ActionsheetItemText>
                            </ActionsheetItem>
                        );
                    })}
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}
