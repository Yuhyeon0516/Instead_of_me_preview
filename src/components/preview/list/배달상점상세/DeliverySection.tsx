import React from "react";
import {HStack, Heading, VStack} from "@gluestack-ui/themed";

export default function DeliverySection() {
    return (
        <VStack py={20}>
            <Heading>매장 정보</Heading>

            <HStack mt={15}>
                <Heading w={100} size="sm" color="$trueGray400">
                    배달비
                </Heading>
                <Heading size="sm" color="black">
                    무료배달
                </Heading>
            </HStack>

            <HStack mt={5}>
                <Heading w={100} size="sm" color="$trueGray400">
                    최소주문
                </Heading>
                <Heading size="sm" color="black">
                    12,000원
                </Heading>
            </HStack>
        </VStack>
    );
}
