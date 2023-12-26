import React, {useState} from "react";
import {HStack, Heading, Pressable, VStack} from "@gluestack-ui/themed";
import DeliverySection from "./DeliverySection";
import PackagingSection from "./PackagingSection";

export default function DeliveryPackaging() {
    const [selectedSection, setSelectedSection] = useState<"배달" | "포장">(
        "배달",
    );

    function onPressButton(section: "배달" | "포장") {
        setSelectedSection(section);
    }

    return (
        <VStack p={20} pb={0}>
            <Heading size="xl">Instead of me</Heading>

            <HStack w={"$full"}>
                <Pressable
                    flex={1}
                    alignItems="center"
                    justifyContent="center"
                    py={10}
                    borderBottomColor={
                        selectedSection === "배달" ? "black" : "$trueGray200"
                    }
                    borderBottomWidth={2}
                    onPress={() => onPressButton("배달")}>
                    <Heading size="sm">배달 45~60분</Heading>
                </Pressable>
                <Pressable
                    flex={1}
                    alignItems="center"
                    justifyContent="center"
                    py={10}
                    borderBottomColor={
                        selectedSection === "포장" ? "black" : "$trueGray200"
                    }
                    borderBottomWidth={2}
                    onPress={() => onPressButton("포장")}>
                    <Heading size="sm">포장 15~20분</Heading>
                </Pressable>
            </HStack>

            {selectedSection === "배달" ? (
                <DeliverySection />
            ) : (
                <PackagingSection />
            )}
        </VStack>
    );
}
