import React, {useState} from "react";
import {
    Button,
    ButtonIcon,
    ButtonText,
    HStack,
    Heading,
    Pressable,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {Check, Plus} from "lucide-react-native";

export default function SelectPersonnel() {
    const [isSelected, setIsSelected] = useState(false);

    function onPressButton() {
        setIsSelected(prev => !prev);
    }

    return (
        <VStack px={15} py={30} space="md">
            <Heading>인원 선택 (필수)</Heading>

            <Pressable onPress={onPressButton}>
                <HStack
                    borderWidth={1}
                    borderColor={isSelected ? "$primary500" : "$trueGray300"}
                    borderRadius={10}
                    alignItems="center"
                    p={15}
                    space="md">
                    <Check
                        size={40}
                        color={isSelected ? "#0077E6" : "lightgray"}
                    />

                    <VStack justifyContent="space-between" flex={1}>
                        <Heading>홍길동</Heading>
                        <Text fontSize={14}>26세 / 1996.05.16</Text>
                    </VStack>

                    <Button
                        variant="outline"
                        borderColor="$trueGray300"
                        size="xs">
                        <ButtonText color="$trueGray500">수정</ButtonText>
                    </Button>
                    <Button
                        variant="outline"
                        borderColor="$trueGray300"
                        size="xs">
                        <ButtonText color="$trueGray500">삭제</ButtonText>
                    </Button>
                </HStack>
            </Pressable>

            <Button
                variant="outline"
                size="sm"
                h={60}
                bgColor="$trueGray100"
                borderWidth={0}
                borderRadius={20}>
                <ButtonIcon as={Plus} color="$trueGray500" mr={5} />
                <ButtonText color="$trueGray500">인원 추가하기</ButtonText>
            </Button>
        </VStack>
    );
}
