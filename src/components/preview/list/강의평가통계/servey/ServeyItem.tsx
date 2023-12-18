import React from "react";
import {HStack, Heading, VStack} from "@gluestack-ui/themed";
import ServeyLine from "./ServeyLine";

interface IServeyItem {
    title: string;
    nonePer: number;
    moderatePer: number;
    manyPer: number;
    isBlackIndex: number;
}

export default function ServeyItem({
    title,
    nonePer,
    moderatePer,
    manyPer,
    isBlackIndex,
}: IServeyItem) {
    return (
        <HStack>
            <Heading size="md" w={65}>
                {title}
            </Heading>
            <VStack flex={1} gap={3}>
                <ServeyLine
                    title="없음"
                    percent={nonePer}
                    isBlack={isBlackIndex === 0}
                />
                <ServeyLine
                    title="보통"
                    percent={moderatePer}
                    isBlack={isBlackIndex === 1}
                />
                <ServeyLine
                    title="많음"
                    percent={manyPer}
                    isBlack={isBlackIndex === 2}
                />
            </VStack>
        </HStack>
    );
}
