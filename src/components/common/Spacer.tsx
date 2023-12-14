import {Box} from "@gluestack-ui/themed";
import React from "react";

export default function Spacer({
    space,
    horizontal = false,
}: {
    space: number;
    horizontal?: boolean;
}) {
    return horizontal ? <Box w={space} /> : <Box h={space} />;
}
