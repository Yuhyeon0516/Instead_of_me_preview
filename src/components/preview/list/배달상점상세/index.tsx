import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import Header from "../common/Header";
import {Box, Heading} from "@gluestack-ui/themed";
import DeliveryPackaging from "./DeliveryPackaging";
import MenuSection from "./MenuSection";

export default function DeliveryStoreDetail() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}>
                <Header title="Instead of me" />

                <Box
                    w={"$full"}
                    h={250}
                    bgColor="$trueGray200"
                    alignItems="center"
                    justifyContent="center">
                    <Heading color="$trueGray500">Image</Heading>
                </Box>

                <DeliveryPackaging />

                <MenuSection />
            </ScrollView>
        </SafeAreaView>
    );
}
