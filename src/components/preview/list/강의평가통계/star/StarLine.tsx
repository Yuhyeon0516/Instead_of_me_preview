import {Box, HStack, StarIcon, Text} from "@gluestack-ui/themed";
import React from "react";

interface IStarLine {
    score: number;
    percent: number;
    isBlack?: boolean;
}

export default function StarLine({score, percent, isBlack = false}: IStarLine) {
    return (
        <HStack gap={15} alignItems="center">
            <HStack gap={5} alignItems="center">
                <StarIcon color="$yellow300" size="md" />
                <Text color="black" fontSize={16} fontWeight="$bold">
                    {score}
                </Text>
            </HStack>
            <Box
                h={10}
                flex={1}
                backgroundColor="$trueGray300"
                borderRadius={15}>
                <Box
                    flex={1}
                    borderRadius={15}
                    h={"$full"}
                    w={`${percent}%`}
                    backgroundColor="$yellow300"
                />
            </Box>
            <Text
                w={50}
                textAlign="left"
                color={isBlack ? "black" : "$trueGray500"}
                fontWeight="$black">
                {percent}%
            </Text>
        </HStack>
    );
}
