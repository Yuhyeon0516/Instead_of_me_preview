import React from "react";
import {HStack, Heading, Input, InputField, VStack} from "@gluestack-ui/themed";

export default function Age() {
    return (
        <VStack space="md">
            <Heading size="md">나이</Heading>
            <HStack w={"$full"} space="md" alignItems="center">
                <Input flex={1}>
                    <InputField keyboardType="number-pad" />
                </Input>
                <Heading>~</Heading>
                <Input flex={1}>
                    <InputField keyboardType="number-pad" />
                </Input>
            </HStack>
        </VStack>
    );
}
