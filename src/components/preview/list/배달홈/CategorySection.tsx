import {ScrollView} from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

const categoryList = [
    "한식",
    "중식",
    "일식",
    "양식",
    "분식",
    "디저트",
    "패스트푸드",
    "치킨",
    "피자",
    "족발",
];

export default function CategorySection() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{padding: 20}}
            contentContainerStyle={{gap: 20}}>
            {categoryList.map((item, index) => (
                <CategoryItem title={item} key={index} />
            ))}
        </ScrollView>
    );
}
