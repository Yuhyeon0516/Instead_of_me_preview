import React from "react";
import {
    CheckIcon,
    Checkbox,
    CheckboxIcon,
    CheckboxIndicator,
    CheckboxLabel,
} from "@gluestack-ui/themed";
import {ICheckBoxItem} from "./type";

export default function CheckBoxItem({label}: ICheckBoxItem) {
    return (
        <Checkbox
            size="md"
            value="check"
            aria-label={label}
            alignItems="center">
            <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel color="black" fontWeight="$medium">
                {label}
            </CheckboxLabel>
        </Checkbox>
    );
}
