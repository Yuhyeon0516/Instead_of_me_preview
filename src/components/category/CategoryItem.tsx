import React from "react";
import {ICategoryItem} from "../../types/type";
import {useRecoilState} from "recoil";
import {CategoryState} from "../../global/recoil";
import {HStack, Heading, Pressable} from "@gluestack-ui/themed";
import {FaChevronRight} from "react-icons/fa";

export default function CategoryItem({title}: ICategoryItem) {
    const [selectedCategory, setSelectedCategory] =
        useRecoilState(CategoryState);

    function onPressCategory() {
        setSelectedCategory(title);
    }

    return (
        <Pressable onPress={onPressCategory}>
            <HStack
                w={"80%"}
                sx={{
                    _web: {
                        transition: "all 0.2s linear",
                    },
                }}
                borderWidth={1}
                borderColor="black"
                borderRadius={20}
                transform={
                    selectedCategory === title ? "translateX(15px)" : "none"
                }
                alignItems="center"
                py={10}
                px={20}>
                <Heading flex={1} fontSize={18}>
                    {title}
                </Heading>
                <FaChevronRight
                    style={{
                        fontSize: 20,
                    }}
                />
            </HStack>
        </Pressable>
    );
}
