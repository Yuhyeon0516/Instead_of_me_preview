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
import React from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function ScoreSelect() {
    const safeInset = useSafeAreaInsets();

    return (
        <Select flex={1} defaultValue="전체">
            <SelectTrigger variant="outline" size="sm">
                <SelectInput
                    pointerEvents="none"
                    fontSize={14}
                    color="black"
                    fontWeight="$medium"
                />
                <SelectIcon as={ChevronDownIcon} color="black" mr={10} />
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop />
                <SelectContent pb={safeInset.bottom}>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="전체" value="전체" />
                    <SelectItem label="5점" value="5점" />
                    <SelectItem label="4점" value="4점" />
                    <SelectItem label="3점" value="3점" />
                    <SelectItem label="2점" value="2점" />
                    <SelectItem label="1점" value="1점" />
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}
