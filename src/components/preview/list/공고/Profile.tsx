import {Text, Box, HStack, Heading, Icon, VStack} from "@gluestack-ui/themed";
import {MapPin, MoreVertical} from "lucide-react-native";
import React from "react";

export default function Profile() {
    return (
        <HStack px={20} my={20} space="md">
            <Box
                w={100}
                h={100}
                borderRadius={20}
                bgColor="$trueGray200"
                alignItems="center"
                justifyContent="center">
                <Heading color="$trueGray500">Image</Heading>
            </Box>

            <HStack flex={1}>
                <VStack flex={1} justifyContent="space-between" py={5}>
                    <Heading size="sm" color="$trueGray400">
                        소프트웨어 개발 {">"} 웹 개발
                    </Heading>

                    <Heading size="md">Instead of me</Heading>

                    <HStack alignItems="center" space="sm">
                        <Icon as={MapPin} size="md" color="$trueGray400" />
                        <Text>서울특별시 송파구 1-1</Text>
                    </HStack>
                </VStack>

                <Icon as={MoreVertical} size="xl" color="$trueGray400" />
            </HStack>
        </HStack>
    );
}
