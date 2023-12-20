import React from "react";
import {IRecentSearchItem} from "./type";
import {Box, Text} from "@gluestack-ui/themed";

export default function RecentSearchItem({label}: IRecentSearchItem) {
    return (
        <Box
            px={10}
            py={5}
            bgColor="$blue200"
            alignItems="center"
            justifyContent="center"
            borderRadius={15}>
            <Text color="$blue600">{label}</Text>
        </Box>
    );
}
