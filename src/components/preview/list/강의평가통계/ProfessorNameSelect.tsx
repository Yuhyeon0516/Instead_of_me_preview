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

export default function ProfessorNameSelect() {
    const safeInset = useSafeAreaInsets();

    return (
        <Select
            flex={1}
            defaultValue="홍길동"
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
                    <SelectItem label="홍길동" value="홍길동" />
                    <SelectItem label="김철수" value="김철수" />
                    <SelectItem label="김우리" value="김우리" />
                    <SelectItem label="박혁거세" value="박혁거세" />
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}
