import {SafeAreaView} from "react-native";
import React from "react";
import Header from "../common/Header";
import MyProfileSection from "./MyProfileSection";
import {Divider} from "@gluestack-ui/themed";
import FavoriteProfileSection from "./FavoriteProfileSection";

export default function JobSeekerProfileList() {
    return (
        <SafeAreaView>
            <Header title="프로필 보기" />
            <MyProfileSection />
            <Divider h={3} />
            <FavoriteProfileSection />
        </SafeAreaView>
    );
}
