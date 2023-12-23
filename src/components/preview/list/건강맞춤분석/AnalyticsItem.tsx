import React from "react";
import {HStack, Heading, Icon} from "@gluestack-ui/themed";
import {IAnalyticsItem} from "./type";
import {ChevronRight} from "lucide-react-native";

export default function AnalyticsItem({title, description}: IAnalyticsItem) {
    return (
        <HStack py={20} alignItems="center">
            <Heading flex={1} size="md">
                {title}
            </Heading>
            <Heading size="md" color="$trueGray400" mr={5}>
                {description}
            </Heading>
            <Icon as={ChevronRight} color="$trueGray400" size="xl" />
        </HStack>
    );
}
