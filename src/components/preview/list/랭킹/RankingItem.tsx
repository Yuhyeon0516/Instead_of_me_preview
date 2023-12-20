import {Box, HStack, Heading, Icon, VStack} from "@gluestack-ui/themed";
import {Star} from "lucide-react-native";
import React from "react";
import {IRankingItem} from "./type";

export default function RankingItem({
    ranking,
    company,
    title,
    score,
}: IRankingItem) {
    return (
        <HStack
            w={"90%"}
            h={150}
            borderWidth={2}
            borderColor="$trueGray300"
            borderRadius={20}
            mb={30}
            alignSelf="center"
            alignItems="center"
            px={20}
            space="xl">
            <Heading color="$blue600">{ranking}</Heading>
            <Box
                w={100}
                h={100}
                borderRadius={20}
                bgColor="$trueGray200"
                alignItems="center"
                justifyContent="center">
                <Heading color="white">Image</Heading>
            </Box>
            <VStack justifyContent="center">
                <Heading color="$trueGray400" size="sm">
                    {company}
                </Heading>

                <Heading>{title}</Heading>

                <HStack space="xs" alignItems="center">
                    <Icon as={Star} color="$yellow500" />
                    <Heading size="sm">{score}</Heading>
                </HStack>
            </VStack>
        </HStack>
    );
}
