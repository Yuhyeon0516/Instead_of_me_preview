import React from "react";
import {Box, Heading, VStack} from "@gluestack-ui/themed";
import {ICategoryItem} from "./type";

export default function CategoryItem({title}: ICategoryItem) {
    return (
        <VStack space="xs" alignItems="center">
            <Box
                w={70}
                h={70}
                bgColor="$trueGray200"
                borderRadius={"$full"}
                alignItems="center"
                justifyContent="center">
                <Heading size="xs" color="$trueGray600">
                    Image
                </Heading>
            </Box>

            <Heading color="black" size="md">
                {title}
            </Heading>
        </VStack>
    );
}
