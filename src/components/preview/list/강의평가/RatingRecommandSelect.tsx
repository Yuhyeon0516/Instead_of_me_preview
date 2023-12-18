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

export default function RatingRecommandSelect() {
    const safeInset = useSafeAreaInsets();

    return (
        <Select flex={1.5} defaultValue="추천 높은순">
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
                    <SelectItem label="평점 높은순" value="평점 높은순" />
                    <SelectItem label="평점 낮은순" value="평점 낮은순" />
                    <SelectItem label="추천 높은순" value="추천 높은순" />
                    <SelectItem label="추천 낮은순" value="추천 낮은순" />
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}
