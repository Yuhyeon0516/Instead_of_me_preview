import {HStack, Heading} from "@gluestack-ui/themed";
import React from "react";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {MdArrowForwardIos} from "react-icons/md";
import {ISuggetionItem} from "./type";

export default function SuggetionItem({text}: ISuggetionItem) {
    return (
        <HStack alignItems="center" p={10}>
            <Heading flex={1}>{text}</Heading>
            {/* <MaterialIcons
                name="arrow-forward-ios"
                color={"black"}
                style={{fontSize: 20}}
            /> */}
            <MdArrowForwardIos style={{color: "black", fontSize: 20}} />
        </HStack>
    );
}
