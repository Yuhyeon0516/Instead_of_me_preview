import React from "react";
import {Box, Heading, VStack} from "@gluestack-ui/themed";
import MenuItem from "./MenuItem";

export default function MenuSection() {
    return (
        <VStack px={20}>
            <Heading>메뉴 정보</Heading>

            <Box>
                <MenuItem
                    title="App 개발"
                    price="500,000원"
                    description="Instead of me의 특별한 App개발"
                />
                <MenuItem
                    title="Web 개발"
                    price="500,000원"
                    description="Instead of me의 화려한 Web개발"
                />
                <MenuItem
                    title="Web + App 개발"
                    price="가격 상담"
                    description="Instead of me의 엄청난 1:1 커스텀"
                />
            </Box>
        </VStack>
    );
}
