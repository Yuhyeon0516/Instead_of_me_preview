import {VStack} from "@gluestack-ui/themed";
import React from "react";
import ServeyItem from "./ServeyItem";

export default function ServeySection() {
    return (
        <VStack gap={10}>
            <ServeyItem
                title="과제"
                nonePer={2}
                moderatePer={45}
                manyPer={53}
                isBlackIndex={2}
            />
            <ServeyItem
                title="조모임"
                nonePer={87}
                moderatePer={11}
                manyPer={2}
                isBlackIndex={0}
            />
        </VStack>
    );
}
