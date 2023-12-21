import {HStack, Heading, Icon} from "@gluestack-ui/themed";
import React from "react";
import {ILineItem} from "./type";

export default function LineItem({icon, title}: ILineItem) {
    return (
        <HStack space="sm" w={"$full"} h={60} alignItems="center">
            <Icon as={icon} size="xl" color="black" />
            <Heading size="md">{title}</Heading>
        </HStack>
    );
}
