import {Box, Heading, Pressable, Text} from "@gluestack-ui/themed";
import React from "react";

interface IItem {
    title: string;
    description: string;
}

export default function Item({title, description}: IItem) {
    function onPressProductItem() {
        console.log("press");
    }

    return (
        <Pressable onPress={onPressProductItem}>
            <Box
                w={"90%"}
                h={150}
                backgroundColor="$warmGray100"
                alignSelf="center"
                justifyContent="center"
                borderRadius={10}
                gap={10}
                p={30}>
                <Heading>{title}</Heading>
                <Text>{description}</Text>
            </Box>
        </Pressable>
    );
}
