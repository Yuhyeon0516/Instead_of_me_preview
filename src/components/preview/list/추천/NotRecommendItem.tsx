import React from "react";
import {INotRecommendItem} from "./type";
import {Divider, HStack, Heading, Icon, VStack} from "@gluestack-ui/themed";
import {X} from "lucide-react-native";

export default function NotRecommendItem({title, caution}: INotRecommendItem) {
    return (
        <VStack
            w={"$full"}
            h={200}
            borderWidth={2}
            borderColor="$trueGray200"
            borderRadius={20}
            px={20}
            py={10}
            justifyContent="center">
            <HStack space="sm" alignItems="center">
                <Icon as={X} color="red" size="xl" />
                <Heading flex={1}>{title}</Heading>
            </HStack>

            <Divider my={15} />

            <Heading size="sm">주의: {caution}</Heading>
        </VStack>
    );
}
