import React, {useState} from "react";
import {
    Button,
    ButtonText,
    HStack,
    Heading,
    VStack,
} from "@gluestack-ui/themed";

export default function ElevatorSection() {
    const [isElevator, setIsElevator] = useState<number | null>(null);

    function onPressElevator(index: number) {
        setIsElevator(index);
    }

    return (
        <VStack space="sm">
            <Heading>엘레베이터</Heading>

            <HStack space="sm" w={"$full"}>
                <Button
                    size="xl"
                    variant="outline"
                    flex={1}
                    borderColor={isElevator === 0 ? "$blue400" : "$trueGray400"}
                    bgColor={isElevator === 0 ? "$blue100" : "transparent"}
                    onPress={() => onPressElevator(0)}>
                    <ButtonText
                        color={isElevator === 0 ? "$blue600" : "$trueGray400"}>
                        있음
                    </ButtonText>
                </Button>

                <Button
                    size="xl"
                    variant="outline"
                    flex={1}
                    borderColor={isElevator === 1 ? "$blue400" : "$trueGray400"}
                    bgColor={isElevator === 1 ? "$blue100" : "transparent"}
                    onPress={() => onPressElevator(1)}>
                    <ButtonText
                        color={isElevator === 1 ? "$blue600" : "$trueGray400"}>
                        없음
                    </ButtonText>
                </Button>
            </HStack>
        </VStack>
    );
}
