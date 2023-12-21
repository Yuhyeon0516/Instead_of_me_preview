import {Button, ButtonText} from "@gluestack-ui/themed";
import React from "react";
import {ITopTabItem} from "./type";

export default function TopTabItem({
    title,
    isSelected,
    onPressTabItem,
}: ITopTabItem) {
    return (
        <Button
            size="lg"
            variant="link"
            px={5}
            py={10}
            borderBottomColor="black"
            borderBottomWidth={isSelected ? 2 : 0}
            flex={1}
            onPress={onPressTabItem}>
            <ButtonText
                color={isSelected ? "black" : "$trueGray400"}
                textDecorationLine="none">
                {title}
            </ButtonText>
        </Button>
    );
}
