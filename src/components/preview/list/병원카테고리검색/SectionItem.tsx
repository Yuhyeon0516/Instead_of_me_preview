import React, {useState} from "react";
import {ISectionItem} from "./type";
import {Heading, VStack} from "@gluestack-ui/themed";
import {FlatList} from "react-native";
import ButtonItem from "./ButtonItem";

export default function SectionItem({title, buttons}: ISectionItem) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    function onPressButton(index: number) {
        setSelectedIndex(index);
    }

    return (
        <VStack space="md">
            <Heading size="md" color="black">
                {title}
            </Heading>

            <FlatList
                numColumns={4}
                data={buttons}
                renderItem={({item, index}) => (
                    <ButtonItem
                        title={item}
                        isSelected={selectedIndex === index}
                        onPressButton={() => onPressButton(index)}
                    />
                )}
                columnWrapperStyle={{gap: 5}}
                contentContainerStyle={{gap: 5}}
            />
        </VStack>
    );
}
