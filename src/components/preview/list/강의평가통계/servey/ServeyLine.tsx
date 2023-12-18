import React from "react";
import {Box, HStack, Text} from "@gluestack-ui/themed";

interface IServeyLine {
    title: string;
    percent: number;
    isBlack: boolean;
}

export default function ServeyLine({title, percent, isBlack}: IServeyLine) {
    return (
        <HStack alignItems="center">
            <Box flex={1} position="relative" px={10}>
                <Text color="black" fontSize={14} fontWeight="$bold">
                    {title}
                </Text>
                <Box
                    borderTopRightRadius={10}
                    borderBottomRightRadius={10}
                    position="absolute"
                    top={0}
                    left={0}
                    w={`${percent}%`}
                    h={"$full"}
                    zIndex={-1}
                    backgroundColor={isBlack ? "$green200" : "$trueGray200"}
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
