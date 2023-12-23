import React from "react";
import {ISelectItem} from "./type";
import {HStack, Heading, Icon, VStack} from "@gluestack-ui/themed";
import {ChevronRight} from "lucide-react-native";

export default function SelectItem({icon, title, description}: ISelectItem) {
    return (
        <HStack
            borderBottomColor="$trueGray300"
            borderBottomWidth={1}
            px={20}
            py={30}
            alignItems="center"
            space="lg">
            <Icon as={icon} color="black" size="xl" />

            <VStack flex={1} space="xs">
                <Heading>{title}</Heading>
                <Heading size="xs" color="$trueGray500">
                    {description}
                </Heading>
            </VStack>

            <Icon as={ChevronRight} size="xl" color="black" />
        </HStack>
    );
}
