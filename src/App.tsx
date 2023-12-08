import React from "react";
import { HStack, VStack, Image } from "@chakra-ui/react";
import Category from "./components/category/Category";
import SelectedPreviewList from "./components/selected_preview_list/SelectedPreviewList";
import Preview from "./components/preview/Preview";

function App() {
    return (
        <VStack w={"100%"} h={"100vh"} alignItems={"flex-start"}>
            <Image
                src={require("./assets/logo/blackLogo/textLogo7.png")}
                w={"calc('100%'-10)"}
                ml={20}
                mb={20}
            />
            <HStack w={"100%"} flex={1} gap={0}>
                <Category />
                <SelectedPreviewList />
                <Preview />
            </HStack>
        </VStack>
    );
}

export default App;
