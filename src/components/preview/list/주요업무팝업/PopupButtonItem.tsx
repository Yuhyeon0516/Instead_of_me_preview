import {Button, ButtonText} from "@gluestack-ui/themed";
import React, {useState} from "react";

export default function PopupButtonItem({title}: {title: string}) {
    const [isSelected, setIsSelected] = useState(false);

    function onPressButton() {
        setIsSelected(prev => !prev);
    }

    return (
        <Button
            variant="outline"
            flex={1}
            h={50}
            size="sm"
            borderColor={isSelected ? "$blue600" : "$trueGray400"}
            bgColor={isSelected ? "$blue200" : "transparent"}
            onPress={onPressButton}>
            <ButtonText color={isSelected ? "$blue600" : "$trueGray400"}>
                {title}
            </ButtonText>
        </Button>
    );
}
