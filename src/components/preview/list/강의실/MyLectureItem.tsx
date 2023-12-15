import React from "react";
import {ILectureItem} from "./type";
import {
    Box,
    Button,
    ButtonText,
    HStack,
    Heading,
    Text,
    VStack,
} from "@gluestack-ui/themed";

export default function MyLectureItem({
    num,
    numBg,
    subjectName,
    professorName,
}: ILectureItem) {
    return (
        <HStack alignItems="center" gap={10}>
            <Box
                w={60}
                h={60}
                alignItems="center"
                justifyContent="center"
                borderRadius={"$full"}
                backgroundColor={numBg}>
                <Text color="white" fontSize={18} fontWeight="$extrabold">
                    {num}
                </Text>
            </Box>
            <VStack flex={1}>
                <Heading size="md">{subjectName}</Heading>
                <Text>{professorName}</Text>
            </VStack>
            <Button
                size="sm"
                variant="outline"
                borderColor="$trueGray100"
                backgroundColor="$trueGray100">
                <ButtonText color="$trueGray500">대화</ButtonText>
            </Button>
        </HStack>
    );
}
