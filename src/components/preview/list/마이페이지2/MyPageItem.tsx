import React from "react";
import {IMyPageItem} from "./type";
import {Box, Heading} from "@gluestack-ui/themed";

export default function MyPageItem({label}: IMyPageItem) {
    return (
        <Box
            w={"$full"}
            borderBottomColor="$trueGray400"
            borderBottomWidth={1}
            py={10}>
            <Heading>{label}</Heading>
        </Box>
    );
}
