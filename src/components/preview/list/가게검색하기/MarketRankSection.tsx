import React from "react";
import {Heading, VStack} from "@gluestack-ui/themed";
import MarkRankItem from "./MarkRankItem";

export default function MarketRankSection() {
    return (
        <VStack px={20} py={30} space="sm">
            <Heading size="md">관심 급상승 레스토랑</Heading>
            <MarkRankItem name="Instead" rank={1} />
            <MarkRankItem name="of" rank={2} />
            <MarkRankItem name="me" rank={3} />
            <MarkRankItem name="is" rank={4} />
            <MarkRankItem name="best" rank={5} />
        </VStack>
    );
}
