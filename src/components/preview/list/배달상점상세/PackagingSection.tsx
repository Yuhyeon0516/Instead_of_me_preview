import React from "react";
import {HStack, Heading, VStack} from "@gluestack-ui/themed";

export default function PackagingSection() {
    return (
        <VStack py={20}>
            <Heading>매장 정보</Heading>

            <HStack mt={15}>
                <Heading w={100} size="sm" color="$trueGray400">
                    포장 할인
                </Heading>
                <Heading size="sm" color="black">
                    2,000원
                </Heading>
            </HStack>
            <HStack mt={5}>
                <Heading w={100} size="sm" color="$trueGray400">
                    최소주문
                </Heading>
                <Heading size="sm" color="black">
                    없음
                </Heading>
            </HStack>
        </VStack>
    );
}
