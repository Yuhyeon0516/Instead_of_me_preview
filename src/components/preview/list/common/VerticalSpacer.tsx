import React from "react";
import {Box} from "@gluestack-ui/themed";

interface IVerticalSpacer {
    height: number;
}

export default function VerticalSpacer({height}: IVerticalSpacer) {
    return <Box h={height} />;
}
