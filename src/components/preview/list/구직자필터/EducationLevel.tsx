import React, {useState} from "react";
import {
    Button,
    ButtonText,
    HStack,
    Heading,
    Input,
    InputField,
    VStack,
} from "@gluestack-ui/themed";

export default function EducationLevel() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    function onPressButton(index: number) {
        setSelectedIndex(index);
    }

    return (
        <VStack space="md">
            <Heading>최종학력</Heading>
            <HStack w={"$full"} space="md">
                <Input flex={8} size="sm">
                    <InputField />
                </Input>

                <Button
                    variant="outline"
                    size="sm"
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
                        이상
                    </ButtonText>
                </Button>

                <Button
                    variant="outline"
                    size="sm"
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
                        이하
                    </ButtonText>
                </Button>
            </HStack>
        </VStack>
    );
}
