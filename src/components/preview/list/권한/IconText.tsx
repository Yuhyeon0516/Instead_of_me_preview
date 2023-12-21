import React from "react";
import {IIconText} from "./type";
import {HStack, Heading, VStack} from "@gluestack-ui/themed";

export default function IconText({icon: Icon, title, description}: IIconText) {
    return (
        <HStack space="lg" alignItems="center">
            <Icon size={30} color="black" />
            <VStack>
                <Heading size="lg">{title}</Heading>
                <Heading size="xs" color="$trueGray500">
                    {description}
                </Heading>
            </VStack>
        </HStack>
    );
}
