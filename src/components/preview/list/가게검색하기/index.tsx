import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import Header from "../common/Header";
import SearchSection from "./SearchSection";
import {Box, Button, ButtonText, Divider} from "@gluestack-ui/themed";
import HashTagSection from "./HashTagSection";
import MarketRankSection from "./MarketRankSection";
import RecommendMarket from "./RecommendMarket";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function SearchMarket() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{flex: 1, position: "relative"}}>
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}>
                <Header title="검색하기" />
                <SearchSection />
                <Divider h={10} />
                <HashTagSection />
                <MarketRankSection />
                <RecommendMarket />
                <Box h={80} />
            </ScrollView>
            <Button
                w={"$full"}
                h={80}
                pb={safeAreaInsets.bottom}
                size="xl"
                bottom={0}
                position="absolute">
                <ButtonText>검색</ButtonText>
            </Button>
        </SafeAreaView>
    );
}
