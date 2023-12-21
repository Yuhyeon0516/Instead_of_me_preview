import React from "react";
import {IReviewItem} from "./type";
import {Box, HStack, Heading, Text, VStack} from "@gluestack-ui/themed";

export default function ReviewItem({title, description, date}: IReviewItem) {
    return (
        <HStack
            p={15}
            borderWidth={1}
            borderColor="$trueGray400"
            borderRadius={10}
            alignItems="center"
            space="md">
            <VStack flex={1}>
                <Heading size="sm">{title}</Heading>
                <Text mt={5}>
                    {description.length > 15
                        ? description.slice(0, 15) + "..."
                        : description}
                </Text>
                <Text mt={15}>{date}</Text>
            </VStack>

            <Box
                w={100}
                h={100}
                borderRadius={10}
                bgColor="$trueGray200"
                alignItems="center"
                justifyContent="center">
                <Heading color="$trueGray500">Image</Heading>
            </Box>
        </HStack>
    );
}
