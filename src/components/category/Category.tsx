import React from "react";
import CategoryItem from "./CategoryItem";
import {VStack} from "@gluestack-ui/themed";

export default function Category() {
    return (
        <VStack flex={1} h={"100%"} gap={10} px={20}>
            <CategoryItem title="Web" />
            <CategoryItem title="App" />
        </VStack>
    );
}
