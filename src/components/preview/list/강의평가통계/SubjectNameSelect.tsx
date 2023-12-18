import {
    ChevronDownIcon,
    Icon,
    Select,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicator,
    SelectDragIndicatorWrapper,
    SelectIcon,
    SelectInput,
    SelectItem,
    SelectPortal,
    SelectTrigger,
} from "@gluestack-ui/themed";
import React from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function SubjectNameSelect() {
    const safeInset = useSafeAreaInsets();

    return (
        <Select
            flex={1}
            defaultValue="수학"
            backgroundColor="$blueGray100"
            borderRadius={15}>
            <SelectTrigger variant="rounded" size="sm">
                <SelectInput
                    pointerEvents="none"
                    fontSize={14}
                    color="black"
                    fontWeight="$medium"
                />
                <SelectIcon mr={10}>
                    <Icon as={ChevronDownIcon} color="black" />
                </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop />
                <SelectContent pb={safeInset.bottom}>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="수학" value="수학" />
                    <SelectItem label="영어" value="영어" />
                    <SelectItem label="과학" value="과학" />
                    <SelectItem label="중국어" value="중국어" />
                    <SelectItem label="일본어" value="일본어" />
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}
