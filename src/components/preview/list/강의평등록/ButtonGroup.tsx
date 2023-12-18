import React, {useState} from "react";
import {Button, ButtonText, HStack} from "@gluestack-ui/themed";

export default function ButtonGroup() {
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
        undefined,
    );

    function onPressButton(index: number) {
        if (selectedIndex === index) {
            setSelectedIndex(undefined);
        } else {
            setSelectedIndex(index);
        }
    }

    return (
        <HStack space="sm">
            <Button
                w={70}
                variant={selectedIndex === 0 ? "solid" : "outline"}
                borderColor={"$trueGray300"}
                onPress={() => onPressButton(0)}>
                <ButtonText
                    color={selectedIndex === 0 ? "white" : "$trueGray500"}>
                    많음
                </ButtonText>
            </Button>
            <Button
                w={70}
                variant={selectedIndex === 1 ? "solid" : "outline"}
                borderColor={"$trueGray300"}
                onPress={() => onPressButton(1)}>
                <ButtonText
                    color={selectedIndex === 1 ? "white" : "$trueGray500"}>
                    보통
                </ButtonText>
            </Button>
            <Button
                w={70}
                variant={selectedIndex === 2 ? "solid" : "outline"}
                borderColor={"$trueGray300"}
                onPress={() => onPressButton(2)}>
                <ButtonText
                    color={selectedIndex === 2 ? "white" : "$trueGray500"}>
                    없음
                </ButtonText>
            </Button>
        </HStack>
    );
}
