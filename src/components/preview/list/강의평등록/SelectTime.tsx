import React from "react";
import {
    ChevronDownIcon,
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
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function SelectTime() {
    const safeInset = useSafeAreaInsets();

    return (
        <Select>
            <SelectTrigger variant="outline" size="lg">
                <SelectInput
                    pointerEvents="none"
                    placeholder="수강 학기 선택"
                    style={{zIndex: -10}}
                />
                <SelectIcon mr={10} as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop />
                <SelectContent pb={safeInset.bottom}>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="1학기" value="1학기" />
                    <SelectItem label="2학기" value="2학기" />
                    <SelectItem label="계절학기" value="계절학기" />
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}
