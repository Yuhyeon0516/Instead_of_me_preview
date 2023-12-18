import React from "react";
import {HStack, Heading} from "@gluestack-ui/themed";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {MdOutlineArrowForwardIos} from "react-icons/md";

import {ISectionItem} from "./type";

export default function SectionItem({
    text,
    showLabel = false,
    label,
}: ISectionItem) {
    return (
        <HStack alignItems="center" p={10}>
            <Heading flex={1}>{text}</Heading>
            {showLabel ? (
                <Heading>{label}</Heading>
            ) : (
                // <MaterialIcons
                //     name="arrow-forward-ios"
                //     color={"black"}
                //     style={{fontSize: 20}}
                // />
                <MdOutlineArrowForwardIos
                    style={{color: "black", fontSize: 20}}
                />
            )}
        </HStack>
    );
}
