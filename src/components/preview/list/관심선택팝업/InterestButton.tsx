import {Button, ButtonText} from "@gluestack-ui/themed";
import React, {useState} from "react";

export default function InterestButton({title}: {title: string}) {
    const [selectedButton, setSelectedButton] = useState(false);

    function onPressButton() {
        setSelectedButton(prev => !prev);
    }

    return (
        <Button
            variant="outline"
            borderColor={selectedButton ? "$blue300" : "$trueGray400"}
            bgColor={selectedButton ? "$blue500" : "transparent"}
            onPress={onPressButton}>
            <ButtonText color={selectedButton ? "white" : "$trueGray400"}>
                {title}
            </ButtonText>
        </Button>
    );
}
