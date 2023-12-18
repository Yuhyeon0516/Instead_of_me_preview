import React, {useState} from "react";
import {StarIcon, HStack, Text, Pressable} from "@gluestack-ui/themed";
import HorizontalSpacer from "../common/HorizontalSpacer";

export default function SelectStar() {
    const [selectedStar, setSelectedStar] = useState(0);

    function onPressStar(index: number) {
        if (selectedStar === index) {
            setSelectedStar(0);
        } else {
            setSelectedStar(index);
        }
    }

    return (
        <HStack px={10} space="sm" alignItems="center">
            <Pressable onPress={() => onPressStar(1)}>
                <StarIcon
                    fill={selectedStar > 0 ? "$yellow300" : "$white"}
                    w={30}
                    h={30}
                    color="$yellow300"
                />
            </Pressable>
            <Pressable onPress={() => onPressStar(2)}>
                <StarIcon
                    fill={selectedStar > 1 ? "$yellow300" : "$white"}
                    w={30}
                    h={30}
                    color="$yellow300"
                />
            </Pressable>
            <Pressable onPress={() => onPressStar(3)}>
                <StarIcon
                    fill={selectedStar > 2 ? "$yellow300" : "$white"}
                    w={30}
                    h={30}
                    color="$yellow300"
                />
            </Pressable>
            <Pressable onPress={() => onPressStar(4)}>
                <StarIcon
                    fill={selectedStar > 3 ? "$yellow300" : "$white"}
                    w={30}
                    h={30}
                    color="$yellow300"
                />
            </Pressable>
            <Pressable onPress={() => onPressStar(5)}>
                <StarIcon
                    fill={selectedStar > 4 ? "$yellow300" : "$white"}
                    w={30}
                    h={30}
                    color="$yellow300"
                />
            </Pressable>
            <HorizontalSpacer width={5} />
            <Text>{selectedStar} / 5</Text>
        </HStack>
    );
}
