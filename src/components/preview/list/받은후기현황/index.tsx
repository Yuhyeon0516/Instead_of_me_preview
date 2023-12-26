import {SafeAreaView} from "react-native";
import React, {useState} from "react";
import Header from "../common/Header";
import {HStack, Heading, Pressable} from "@gluestack-ui/themed";
import SellerScreen from "./SellerScreen";
import BuyerScreen from "./BuyerScreen";

export default function StatusOfReviewsReceived() {
    const [selectedScreen, setSelectedScreen] = useState<"판매자" | "구매자">(
        "판매자",
    );

    function onPressButton(screen: "판매자" | "구매자") {
        setSelectedScreen(screen);
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="받은 후기 현황" />
            <HStack w={"$full"}>
                <Pressable
                    flex={1}
                    alignItems="center"
                    justifyContent="center"
                    py={10}
                    borderBottomColor="black"
                    borderBottomWidth={selectedScreen === "판매자" ? 2 : 0}
                    onPress={() => onPressButton("판매자")}>
                    <Heading>판매자</Heading>
                </Pressable>
                <Pressable
                    flex={1}
                    alignItems="center"
                    justifyContent="center"
                    py={10}
                    borderBottomColor="black"
                    borderBottomWidth={selectedScreen === "구매자" ? 2 : 0}
                    onPress={() => onPressButton("구매자")}>
                    <Heading>구매자</Heading>
                </Pressable>
            </HStack>
            {selectedScreen === "판매자" ? <SellerScreen /> : <BuyerScreen />}
        </SafeAreaView>
    );
}
