import { HStack, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import { ICategoryItem } from "../../types/type";
import { FaChevronRight } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { CategoryState } from "../../global/recoil";

export default function CategoryItem({ title }: ICategoryItem) {
    const [selectedCategory, setSelectedCategory] =
        useRecoilState(CategoryState);

    function onPressCategory() {
        setSelectedCategory(title);
    }

    return (
        <HStack
            w={"80%"}
            _hover={{
                cursor: "pointer",
                transform: selectedCategory !== title && "translateX(15px)",
            }}
            border={"1px solid black"}
            borderRadius={20}
            transition={"all 0.2s linear"}
            transform={selectedCategory === title ? "translateX(15px)" : "none"}
            onClick={onPressCategory}
        >
            <Heading flex={1} ml={20} fontSize={18}>
                {title}
            </Heading>
            <Icon as={FaChevronRight} mr={20} />
        </HStack>
    );
}
