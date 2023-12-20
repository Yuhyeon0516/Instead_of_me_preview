import React, {useState} from "react";
import {HStack} from "@gluestack-ui/themed";
import WorkButtonGroupItem from "./WorkButtonGroupItem";

export default function WorkButtonGroup() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    function onPressButton(index: number) {
        setSelectedIndex(index);
    }

    return (
        <HStack space="sm">
            <WorkButtonGroupItem
                label="Front-end"
                isSelected={selectedIndex === 0}
                onPressButton={() => onPressButton(0)}
            />
            <WorkButtonGroupItem
                label="Back-end"
                isSelected={selectedIndex === 1}
                onPressButton={() => onPressButton(1)}
            />
            <WorkButtonGroupItem
                label="Mobile QA"
                isSelected={selectedIndex === 2}
                onPressButton={() => onPressButton(2)}
            />
        </HStack>
    );
}
