import {Heading, VStack} from "@gluestack-ui/themed";
import React from "react";
import {FlatList} from "react-native";
import {IFilterListItem} from "./type";
import FilterListItemButton from "./FilterListItemButton";

export default function FilterListItem({title, data}: IFilterListItem) {
    return (
        <VStack space="md" px={5}>
            <Heading size="sm">{title}</Heading>
            <FlatList
                data={data}
                renderItem={({item}) => <FilterListItemButton label={item} />}
                numColumns={4}
            />
        </VStack>
    );
}
