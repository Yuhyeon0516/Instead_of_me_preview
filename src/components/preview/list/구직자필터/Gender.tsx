import React, {useState} from "react";
import {
    Button,
    ButtonText,
    HStack,
    Heading,
    VStack,
} from "@gluestack-ui/themed";

export default function Gender() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    function onPressButton(index: number) {
        setSelectedIndex(index);
    }

    return (
        <VStack space="sm">
            <Heading size="md">성별</Heading>
            <HStack w={"$full"} space="md">
                <Button
                    variant="outline"
                    size="md"
                    flex={1}
                    borderColor={
                        selectedIndex === 0 ? "$blue500" : "$trueGray400"
                    }
                    bgColor={selectedIndex === 0 ? "$blue100" : "transparent"}
                    onPress={() => onPressButton(0)}>
                    <ButtonText
                        color={
                            selectedIndex === 0 ? "$blue500" : "$trueGray500"
                        }>
                        성별 무관
                    </ButtonText>
                </Button>
                <Button
                    variant="outline"
                    size="md"
                    flex={1}
                    borderColor={
                        selectedIndex === 1 ? "$blue500" : "$trueGray400"
                    }
                    bgColor={selectedIndex === 1 ? "$blue100" : "transparent"}
                    onPress={() => onPressButton(1)}>
                    <ButtonText
                        color={
                            selectedIndex === 1 ? "$blue500" : "$trueGray500"
                        }>
                        여성
                    </ButtonText>
                </Button>
                <Button
                    variant="outline"
                    size="md"
                    flex={1}
                    borderColor={
                        selectedIndex === 2 ? "$blue500" : "$trueGray400"
                    }
                    bgColor={selectedIndex === 2 ? "$blue100" : "transparent"}
                    onPress={() => onPressButton(2)}>
                    <ButtonText
                        color={
                            selectedIndex === 2 ? "$blue500" : "$trueGray500"
                        }>
                        남성
                    </ButtonText>
                </Button>
            </HStack>
        </VStack>
    );
}
