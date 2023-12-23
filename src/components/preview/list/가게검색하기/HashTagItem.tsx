import React from "react";
import {IHashTagItem} from "./type";
import {Box, Heading} from "@gluestack-ui/themed";

export default function HashTagItem({label}: IHashTagItem) {
    return (
        <Box borderRadius={20} p={15} bgColor="$trueGray200">
            <Heading size="xs" color="black">
                # {label}
            </Heading>
        </Box>
    );
}
