import React from "react";
import {IMarketItem} from "./type";
import {Box, HStack, Heading, Icon, VStack} from "@gluestack-ui/themed";
import {Star} from "lucide-react-native";

export default function MarketItem({
    title,
    score,
    reviewCount,
    distance,
    deliveryPrice,
}: IMarketItem) {
    return (
        <VStack>
            <Box
                w={180}
                h={180}
                bgColor="$trueGray200"
                borderRadius={10}
                alignItems="center"
                justifyContent="center">
                <Heading color="$trueGray600">Image</Heading>
            </Box>

            <VStack px={5} mt={15}>
                <Heading size="md" color="black">
                    {title}
                </Heading>

                <HStack alignItems="center" space="xs">
                    <Icon as={Star} color="$yellow400" />

                    <Heading size="sm" color="$trueGray400">
                        {score}({reviewCount}), {distance}
                    </Heading>
                </HStack>
                <Heading size="sm" color="$trueGray400">
                    {deliveryPrice}
                </Heading>
            </VStack>
        </VStack>
    );
}
