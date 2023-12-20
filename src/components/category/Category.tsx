import React from "react";
import CategoryItem from "./CategoryItem";
import {VStack} from "@gluestack-ui/themed";

export default function Category() {
    return (
        <VStack flex={1} h={"100%"} gap={10} pl={20} pt={15}>
            <CategoryItem title="App" />
        </VStack>
    );
}
