import {Box, HStack, Heading, VStack} from "@gluestack-ui/themed";
import React from "react";

export default function Profile() {
    return (
        <HStack p={20} space="md">
            <Box
                w={50}
                h={50}
                backgroundColor="$trueGray200"
                borderRadius={"$full"}
            />
            <VStack justifyContent="center">
                <HStack space="xs">
                    <Heading size="xs">먹방</Heading>
                    <Heading size="xs" color="$trueGray300">
                        7시간
                    </Heading>
                </HStack>
                <HStack>
                    <Heading size="xs" color="$trueGray400">
                        회사 · 닉네임
                    </Heading>
                </HStack>
            </VStack>
        </HStack>
    );
}
