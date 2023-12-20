import React from "react";
import {IIconText} from "./type";
import {HStack, Heading, Icon} from "@gluestack-ui/themed";

export default function IconText({label, icon}: IIconText) {
    return (
        <HStack space="md" alignItems="center">
            {/* <Icon as={icon} color="black" size="xl" /> */}
            <Icon as={icon} color="black" size="lg" /> {/*web용 */}
            <Heading>{label}</Heading>
        </HStack>
    );
}
