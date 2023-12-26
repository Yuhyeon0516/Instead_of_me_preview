import React from "react";
import {ISellerItem} from "./type";
import {Box, HStack, Heading, Icon, Text, VStack} from "@gluestack-ui/themed";
import {ImageIcon} from "lucide-react-native";

export default function SellerItem({
    name,
    location,
    daysAgo,
    imageCount,
    description,
}: ISellerItem) {
    return (
        <HStack
            px={20}
            py={25}
            borderBottomColor="$trueGray300"
            borderBottomWidth={1}
            space="lg"
            alignItems="center">
            <Box
                w={80}
                h={80}
                bgColor="$trueGray200"
                borderRadius={"$full"}
                alignItems="center"
                justifyContent="center">
                <Heading color="$trueGray500">Image</Heading>
            </Box>

            <VStack>
                <Heading size="md">{name}</Heading>
                <HStack alignItems="center">
                    <Heading size="xs" color="$trueGray400" mr={10}>
                        {location} · {daysAgo}
                    </Heading>

                    <Icon as={ImageIcon} color="$trueGray400" mr={3} />

                    <Heading size="xs" color="$trueGray500">
                        {imageCount}
                    </Heading>
                </HStack>

                <Text fontSize={14} color="black" mt={5}>
                    {description}
                </Text>
            </VStack>
        </HStack>
    );
}
