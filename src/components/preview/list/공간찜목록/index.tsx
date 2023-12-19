import {Box, Center, Divider, Heading, ScrollView} from "@gluestack-ui/themed";
import React from "react";
import {SafeAreaView, useWindowDimensions} from "react-native";
import Header from "../common/Header";
import {IWishlist} from "./type";
import SpaceWishlistItem from "./SpaceWishlistItem";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const wishList: IWishlist[] = [
    {
        title: "IOM 연습실",
        location: "경기도 화성시",
        price: "2,000원/시간",
        maxPerson: "최대 10인",
        likeCount: 123,
        messageCount: 12,
    },
    {
        title: "IOM 비밀의 방",
        location: "경기도 안산시",
        price: "3,000원/시간",
        maxPerson: "최대 2인",
        likeCount: 12,
        messageCount: 1,
    },
    {
        title: "IOM 녹음실",
        location: "경기도 수원시",
        price: "5,000원/시간",
        maxPerson: "최대 4인",
        likeCount: 1004,
        messageCount: 318,
    },
];

export default function SpaceWishlist() {
    const window = useWindowDimensions();
    const safeAreaInset = useSafeAreaInsets();

    return (
        <SafeAreaView>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header title="공간 찜 목록" />
                {wishList.length > 0 ? (
                    wishList.map((item, index) => {
                        return (
                            <Box key={`Space-Item-${index}`}>
                                <SpaceWishlistItem item={item} />
                                {wishList.length - 1 !== index && (
                                    <Divider my={20} />
                                )}
                            </Box>
                        );
                    })
                ) : (
                    <Center
                        h={
                            window.height -
                            safeAreaInset.top -
                            safeAreaInset.bottom
                        }>
                        <Heading>찜한 항목이 없습니다.</Heading>
                    </Center>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
