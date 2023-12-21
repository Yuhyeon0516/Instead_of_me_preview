import {SafeAreaView} from "react-native";
import React, {useState} from "react";
import Header from "../common/Header";
import TopTab from "./TopTab";
import SupportScreen from "./SupportScreen";
import ProposeScreen from "./ProposeScreen";
import WishListScreen from "./WishListScreen";

export default function TalentManagement() {
    const [topTabIndex, setTopTabIndex] = useState(0);

    function onPressTabItem(index: number) {
        setTopTabIndex(index);
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="인재 관리" />
            <TopTab
                selectedIndex={topTabIndex}
                onPressTabItem={onPressTabItem}
            />
            {topTabIndex === 0 ? (
                <SupportScreen />
            ) : topTabIndex === 1 ? (
                <ProposeScreen />
            ) : (
                <WishListScreen />
            )}
        </SafeAreaView>
    );
}
