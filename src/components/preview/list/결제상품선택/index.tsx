import React from "react";
import Header from "../common/Header";
import {Box} from "@gluestack-ui/themed";
import {SafeAreaView, FlatList} from "react-native";
import Item from "./Item";
import VerticalSpacer from "../common/VerticalSpacer";

const payList: {title: string; description: string}[] = [
    {
        title: "15만원",
        description: "서비스 포인트 5,000원",
    },
    {
        title: "30만원",
        description: "서비스 포인트 15,000원",
    },
    {
        title: "50만원",
        description: "서비스 포인트 50,000원",
    },
];

export default function Payment() {
    return (
        <SafeAreaView>
            <Box>
                <Header title="결제 상품 선택" />
                <Box h={20} />
                <FlatList
                    data={payList}
                    renderItem={({item}) => (
                        <Item
                            title={item.title}
                            description={item.description}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <VerticalSpacer height={20} />
                    )}
                />
            </Box>
        </SafeAreaView>
    );
}
