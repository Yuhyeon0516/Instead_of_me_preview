import React from "react";
import {Box} from "@gluestack-ui/themed";

interface IHorizontalSpacer {
    width: number;
}

export default function HorizontalSpacer({width}: IHorizontalSpacer) {
    return <Box w={width} />;
}
