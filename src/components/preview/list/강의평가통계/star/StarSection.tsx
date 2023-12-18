import {HStack, Heading, StarIcon, Text, VStack} from "@gluestack-ui/themed";
import React from "react";
import StarLine from "./StarLine";

export default function StarSection() {
    return (
        <VStack gap={20}>
            <HStack gap={10} alignItems="center">
                <Heading size="xl">4.3</Heading>
                <HStack gap={5}>
                    <StarIcon
                        color="$yellow300"
                        size="xl"
                        fill={"$yellow300"}
                    />
                    <StarIcon
                        color="$yellow300"
                        size="xl"
                        fill={"$yellow300"}
                    />
                    <StarIcon
                        color="$yellow300"
                        size="xl"
                        fill={"$yellow300"}
                    />
                    <StarIcon
                        color="$yellow300"
                        size="xl"
                        fill={"$yellow300"}
                    />
                    <StarIcon color="$yellow300" size="xl" />
                </HStack>
                <Text fontSize={14}>(65개)</Text>
            </HStack>
            <VStack gap={15}>
                <StarLine score={5} percent={65} isBlack />
                <StarLine score={4} percent={16} />
                <StarLine score={3} percent={0} />
                <StarLine score={2} percent={7} />
                <StarLine score={1} percent={12} />
            </VStack>
        </VStack>
    );
}
