import {Box, HStack} from "@gluestack-ui/themed";
import React from "react";

export default function Dot({
    currentPage,
    maxPage,
}: {
    currentPage: number;
    maxPage: number;
}) {
    return (
        <HStack
            gap={20}
            w={"$full"}
            h={70}
            alignItems="center"
            justifyContent="center">
            {[...Array(maxPage)].map((_, index) => (
                <Box
                    key={index}
                    w={10}
                    h={10}
                    borderRadius={"$full"}
                    bgColor={
                        currentPage === index ? "$blue500" : "$trueGray300"
                    }
                />
            ))}
        </HStack>
    );
}
