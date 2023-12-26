import {SafeAreaView} from "react-native";
import React from "react";
import LeftIconHeader from "../common/LeftIconHeader";
import {MapPin} from "lucide-react-native";
import {Box, Heading} from "@gluestack-ui/themed";
import CategorySection from "./CategorySection";
import MarketSection from "./MarketSection";

export default function DeliveryHome() {
    return (
        <SafeAreaView>
            <LeftIconHeader icon={MapPin} title="경기도 화성시 반월동" />

            <Box
                w={"$full"}
                h={250}
                bgColor="$trueGray200"
                alignItems="center"
                justifyContent="center">
                <Heading color="$trueGray600">Image</Heading>
            </Box>

            <CategorySection />

            <MarketSection />
        </SafeAreaView>
    );
}
