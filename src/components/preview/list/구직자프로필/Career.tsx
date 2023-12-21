import React from "react";
import {HStack, Heading, VStack} from "@gluestack-ui/themed";

export default function Career() {
    return (
        <VStack px={15} py={20}>
            <HStack alignItems="center" space="xs">
                <Heading>경력</Heading>
                <Heading color="$blue500">0개</Heading>
            </HStack>
        </VStack>
    );
}
