import React from "react";
import {ISpaceItem} from "./type";
import {
    Center,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {Star} from "lucide-react-native";

export default function SpaceItem({item}: {item: ISpaceItem}) {
    return (
        <VStack p={10} space="xs">
            <Center w={180} h={180} bgColor="$trueGray300" borderRadius={20}>
                <Heading size="lg" color="$trueGray500">
                    Image
                </Heading>
            </Center>

            <VStack px={5}>
                <Text fontSize={"$sm"}>{item.location}</Text>
                <Heading>{item.title}</Heading>
                <HStack space="xs" alignItems="center">
                    <Icon
                        as={Star}
                        color="$tertiary400"
                        fill={"$tertiary400"}
                    />
                    <Heading size="xs">{item.score}</Heading>
                </HStack>
            </VStack>
        </VStack>
    );
}
