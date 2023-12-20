import React, {useState} from "react";
import {IDayItem} from "./type";
import {Heading, Pressable} from "@gluestack-ui/themed";

export default function DayItem({day}: IDayItem) {
    const [isSelected, setIsSelected] = useState(false);

    function onPressDay() {
        setIsSelected(prev => !prev);
    }

    return (
        <Pressable
            onPress={onPressDay}
            p={5}
            borderRadius={"$full"}
            borderWidth={1}
            borderColor={isSelected ? "$blue300" : "$trueGray400"}
            bgColor={isSelected ? "$blue100" : "transparent"}
            w={40}
            h={40}
            alignItems="center"
            justifyContent="center">
            <Heading size="md" color={isSelected ? "$blue600" : "black"}>
                {day}
            </Heading>
        </Pressable>
    );
}
