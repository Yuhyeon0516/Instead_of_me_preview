import {Button, ButtonText} from "@gluestack-ui/themed";
import React, {useState} from "react";
import {IFilterListItemButton} from "./type";

export default function FilterListItemButton({label}: IFilterListItemButton) {
    const [selected, setSelected] = useState(false);

    function onPressButton() {
        setSelected(prev => !prev);
    }

    return (
        <Button
            variant={selected ? "solid" : "outline"}
            mr={15}
            mb={15}
            borderRadius={10}
            size="sm"
            borderColor="$trueGray400"
            onPress={onPressButton}>
            <ButtonText color={selected ? "white" : "$trueGray400"}>
                {label}
            </ButtonText>
        </Button>
    );
}
