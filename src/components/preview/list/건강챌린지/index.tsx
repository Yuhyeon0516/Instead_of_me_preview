import {SafeAreaView} from "react-native";
import React from "react";
import Header from "../common/Header";
import Calendar from "./Calendar";
import VerticalSpacer from "../common/VerticalSpacer";
import FeaturedChallenge from "./FeaturedChallenge";

export default function HealthChallenge() {
    return (
        <SafeAreaView>
            <Header title="건강 챌린지" />
            <Calendar />
            <VerticalSpacer height={20} />
            <FeaturedChallenge />
        </SafeAreaView>
    );
}
