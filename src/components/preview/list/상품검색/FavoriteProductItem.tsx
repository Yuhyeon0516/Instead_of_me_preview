import React from "react";
import {IFavoriteProductItem} from "./type";
import {Box, Heading, VStack} from "@gluestack-ui/themed";

export default function FavoriteProductItem({title}: IFavoriteProductItem) {
    return (
        <VStack space="md" alignItems="center">
            <Box
                bgColor="$trueGray300"
                w={150}
                h={150}
                alignItems="center"
                justifyContent="center"
                borderRadius={10}>
                <Heading color="white">Image</Heading>
            </Box>
            <Heading size="sm">{title}</Heading>
        </VStack>
    );
}
