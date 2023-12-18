import React from "react";
import {IPolicy} from "./type";
import {Heading, Text, VStack} from "@gluestack-ui/themed";
import VerticalSpacer from "../common/VerticalSpacer";

interface IItem {
    item: IPolicy;
    index: number;
}

export default function Item({item, index}: IItem) {
    return (
        <VStack my={20}>
            <Heading size="md">
                제 {index}조. {item.title}
            </Heading>
            <VerticalSpacer height={20} />
            <Text color="black">{item.description}</Text>
        </VStack>
    );
}
