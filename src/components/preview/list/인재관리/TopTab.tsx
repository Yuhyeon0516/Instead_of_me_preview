import React from "react";
import {HStack} from "@gluestack-ui/themed";
import TopTabItem from "./TopTabItem";
import {ITopTab} from "./type";

export default function TopTab({selectedIndex, onPressTabItem}: ITopTab) {
    return (
        <HStack
            w={"$full"}
            borderBottomWidth={1}
            borderBottomColor="$trueGray200">
            <TopTabItem
                title="지원"
                isSelected={selectedIndex === 0}
                onPressTabItem={() => onPressTabItem(0)}
            />
            <TopTabItem
                title="제안"
                isSelected={selectedIndex === 1}
                onPressTabItem={() => onPressTabItem(1)}
            />
            <TopTabItem
                title="찜"
                isSelected={selectedIndex === 2}
                onPressTabItem={() => onPressTabItem(2)}
            />
        </HStack>
    );
}
