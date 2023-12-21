import React from "react";
import {IConfirmationRate} from "./type";
import {Heading, VStack} from "@gluestack-ui/themed";

export default function ConfirmationRate({
    title,
    percentage,
}: IConfirmationRate) {
    return (
        <VStack space="lg" alignItems="center">
            <Heading size="sm">{title}</Heading>
            <Heading size="lg">{percentage}%</Heading>
            <Heading size="xs" color="$trueGray400">
                업데이트 중
            </Heading>
        </VStack>
    );
}
