import React from "react";
import {Center, HStack, Heading, VStack} from "@gluestack-ui/themed";
import Item from "./Item";

export default function FirstScreen() {
    return (
        <Center key={1}>
            <Heading>어떤 교육을 원하세요?</Heading>
            <Heading size="md" color="$blue500" mt={20} mb={30}>
                원하는 교육을 전부 선택해주세요!
            </Heading>
            <VStack
                space="lg"
                justifyContent="center"
                alignItems="center"
                w={"$full"}>
                <HStack justifyContent="space-between" w={"$full"} px={50}>
                    {[...Array(4)].map((_, index) => (
                        <Item key={index} />
                    ))}
                </HStack>
                <HStack justifyContent="space-between" w={"$full"} px={50}>
                    {[...Array(4)].map((_, index) => (
                        <Item key={index} />
                    ))}
                </HStack>
            </VStack>
        </Center>
    );
}
