import React from "react";
import {ISpaceReviewItem} from "./type";
import {
    Center,
    Divider,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {Star} from "lucide-react-native";

export default function SpaceReviewItem({item}: {item: ISpaceReviewItem}) {
    return (
        <VStack bgColor="white" borderRadius={20} w={380} h={200} p={15} pt={0}>
            <HStack space="lg" alignItems="center" flex={1}>
                <Center
                    w={100}
                    h={100}
                    bgColor="$trueGray300"
                    borderRadius={20}>
                    <Heading size="lg" color="$trueGray500">
                        Image
                    </Heading>
                </Center>
                <VStack space="xs">
                    <Heading>{item.title}</Heading>
                    <HStack space="sm">
                        <Text>{item.location}</Text>
                        <Divider orientation="vertical" />
                        <Text>{item.type}</Text>
                    </HStack>
                    <HStack space="xs" alignItems="center">
                        <Icon
                            as={Star}
                            color="$tertiary400"
                            fill={"$tertiary400"}
                        />
                        <Heading size="xs">{item.score}</Heading>
                    </HStack>
                </VStack>
            </HStack>
            <Text color="black" fontWeight="$medium">
                {item.description}
            </Text>
        </VStack>
    );
}
