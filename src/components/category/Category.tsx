import { VStack } from "@chakra-ui/react";
import React from "react";
import CategoryItem from "./CategoryItem";

export default function Category() {
    return (
        <VStack flex={1} h={"100%"} gap={10}>
            <CategoryItem title="Web" />
            <CategoryItem title="App" />
        </VStack>
    );
}
