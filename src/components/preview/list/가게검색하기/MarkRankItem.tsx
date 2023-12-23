import React from "react";
import {HStack, Heading} from "@gluestack-ui/themed";
import {IMarkRankItem} from "./type";

export default function MarkRankItem({name, rank}: IMarkRankItem) {
    return (
        <HStack
            w={"$full"}
            py={15}
            borderBottomWidth={1}
            borderBottomColor="$trueGray400"
            space="md"
            alignItems="center">
            <Heading size="md">{rank}</Heading>
            <Heading size="md" fontWeight="$normal">
                {name}
            </Heading>
        </HStack>
    );
}
