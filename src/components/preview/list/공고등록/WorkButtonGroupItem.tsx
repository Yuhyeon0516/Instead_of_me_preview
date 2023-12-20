import React from "react";
import {IWorkButtonGroupItem} from "./type";
import {Button, ButtonText} from "@gluestack-ui/themed";

export default function WorkButtonGroupItem({
    label,
    isSelected,
    onPressButton,
}: IWorkButtonGroupItem) {
    return (
        <Button
            variant="outline"
            borderColor={isSelected ? "$blue500" : "$trueGray300"}
            bgColor={isSelected ? "$blue500" : "transparent"}
            onPress={onPressButton}>
            <ButtonText color={isSelected ? "white" : "$trueGray500"}>
                {label}
            </ButtonText>
        </Button>
    );
}
