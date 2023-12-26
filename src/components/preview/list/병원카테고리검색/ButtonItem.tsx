import React from "react";
import {IButtonItem} from "./type";
import {Button, ButtonText} from "@gluestack-ui/themed";

export default function ButtonItem({
    title,
    isSelected,
    onPressButton,
}: IButtonItem) {
    return (
        <Button
            size="sm"
            variant="outline"
            borderColor={isSelected ? "$blue600" : "$trueGray400"}
            bgColor={isSelected ? "$blue100" : "transparent"}
            onPress={onPressButton}>
            <ButtonText color={isSelected ? "$blue600" : "$trueGray600"}>
                {title}
            </ButtonText>
        </Button>
    );
}
