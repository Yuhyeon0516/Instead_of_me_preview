import React from "react";
import {Box, HStack, Heading, Text, VStack} from "@gluestack-ui/themed";
import {IMenuItem} from "./type";

export default function MenuItem({title, price, description}: IMenuItem) {
    return (
        <HStack
            py={20}
            borderBottomColor="$trueGray300"
            borderBottomWidth={1}
            alignItems="center">
            <VStack flex={1}>
                <Heading size="md">{title}</Heading>
                <Heading>{price}</Heading>
                <Text>{description}</Text>
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
