import {
    ActionsheetItem,
    ActionsheetItemText,
    ChevronDownIcon,
    Icon,
    Image,
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

export default function BankSelect() {
    const [bank, setBank] = useState("");
    const [showActionSheet, setShowActionSheet] = useState(false);
    const safeInset = useSafeAreaInsets();

    function handleOpen() {
        setShowActionSheet(true);
    }

    function handleClose() {
        setShowActionSheet(false);
    }

    function onPressItem(selectedBank: string) {
        setBank(selectedBank);
        handleClose();
    }

    return (
        <Select flex={1}>
            <SelectTrigger variant="outline" size="xl" onPress={handleOpen}>
                <SelectInput
                    flex={1}
                    pointerEvents="none"
                    fontSize={14}
                    placeholder="은행 선택"
                    value={bank}
                />
                <SelectIcon mr={10}>
                    <Icon as={ChevronDownIcon} color="black" />
                </SelectIcon>
            </SelectTrigger>
            <SelectPortal isOpen={showActionSheet}>
                <SelectBackdrop onPress={handleClose} />
                <SelectContent pb={safeInset.bottom}>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <ActionsheetItem onPress={() => onPressItem("새마을금고")}>
                        <Image
                            objectFit="fill"
                            w={40}
                            h={40}
                            source={{
                                uri: "https://cdn.imweb.me/upload/S201902145c64d2eea5da0/5cbe5ef61e8d6.png",
                            }}
                            alt="새마을금고"
                        />
                        <ActionsheetItemText fontSize={18}>
                            새마을금고
                        </ActionsheetItemText>
                    </ActionsheetItem>
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}
