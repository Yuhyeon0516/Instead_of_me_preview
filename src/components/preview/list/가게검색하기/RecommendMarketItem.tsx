import {Box, Heading, VStack} from "@gluestack-ui/themed";
import React from "react";

export default function RecommendMarketItem() {
    return (
        <VStack space="xs">
            <Box
                w={150}
                h={150}
                borderRadius={10}
                alignItems="center"
                justifyContent="center"
                bgColor="$trueGray200">
                <Heading color="$trueGray500">Image</Heading>
            </Box>

            <Heading size="md">Instead of me</Heading>
            <Heading size="xs" color="$trueGray400">
                개발 전문
            </Heading>
        </VStack>
    );
}
