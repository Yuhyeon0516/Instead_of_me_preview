import React from "react";
import {IChatItem} from "./type";
import {Box, HStack, Heading, Text, VStack} from "@gluestack-ui/themed";

export default function ChatItem({
    name,
    company,
    description,
    time,
    chatCount,
}: IChatItem) {
    return (
        <HStack
            p={20}
            w={"$full"}
            borderBottomColor="$trueGray300"
            borderBottomWidth={1}
            space="md"
            alignItems="center">
            <Box
                w={100}
                h={100}
                bgColor="$trueGray200"
                borderRadius={10}
                alignItems="center"
                justifyContent="center">
                <Heading color="$trueGray600">Image</Heading>
            </Box>

            <VStack flex={1} space="xs" justifyContent="center">
                <HStack w={"$full"} alignItems="center">
                    <Heading size="sm" flex={1}>
                        {name}
                    </Heading>
                    <Heading size="sm" color="$trueGray400">
                        {time}
                    </Heading>
                </HStack>

                <Heading size="sm" color="$trueGray400">
                    {company}
                </Heading>

                <HStack w={"$full"} alignItems="center">
                    <Text fontSize={14} fontWeight="$medium" flex={1}>
                        {description.length > 20
                            ? description.slice(0, 20) + "..."
                            : description}
                    </Text>

                    <Box
                        w={25}
                        h={25}
                        borderRadius={"$full"}
                        bgColor="red"
                        alignItems="center"
                        justifyContent="center">
                        <Text fontSize={14} fontWeight="$bold" color="white">
                            {chatCount}
                        </Text>
                    </Box>
                </HStack>
            </VStack>
        </HStack>
    );
}
