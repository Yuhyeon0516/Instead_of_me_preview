import {Box, HStack, Heading, Icon, Text, VStack} from "@gluestack-ui/themed";
import {Star} from "lucide-react-native";
import React from "react";

export default function ProductItem() {
    return (
        <HStack px={20} py={15} space="md">
            <Box
                w={100}
                h={100}
                borderRadius={10}
                bgColor="$trueGray200"
                alignItems="center"
                justifyContent="center">
                <Heading color="$trueGray500">Image</Heading>
            </Box>

            <VStack py={5} space="sm">
                <Heading size="md">정말 잘 짤리는 가위</Heading>
                <HStack space="xs" alignItems="center">
                    <Icon as={Star} color="$yellow400" fill={"$yellow400"} />
                    <Text>4.9(1,234)</Text>
                </HStack>
            </VStack>
        </HStack>
    );
}
