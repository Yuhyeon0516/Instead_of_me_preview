import React from "react";
import {SafeAreaView} from "react-native";
import Header from "../common/Header";
import NeedModification from "./NeedModification";
import {Button, ButtonText, Divider, HStack} from "@gluestack-ui/themed";
import LocationInformation from "./LocationInformation";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Phone} from "lucide-react-native";

export default function MarketInformation() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{flex: 1, position: "relative"}}>
            <Header title="IOM 레스토랑" />

            <Divider h={10} />

            <NeedModification />

            <Divider h={10} />

            <LocationInformation />

            <HStack
                position="absolute"
                bottom={safeAreaInsets.bottom - 50}
                w={"$full"}
                px={20}
                alignItems="center"
                space="lg">
                <Phone size={30} color="black" />
                <Button flex={1} size="lg">
                    <ButtonText>예약하기</ButtonText>
                </Button>
            </HStack>
        </SafeAreaView>
    );
}
