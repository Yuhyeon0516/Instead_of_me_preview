import React from "react";
import {ScrollView} from "react-native";
import WishListItem from "./WishListItem";

export default function WishListScreen() {
    return (
        <ScrollView style={{padding: 10}}>
            <WishListItem
                name="짱구"
                age={26}
                gender="남"
                location="경기도 화성시 반월동"
                education="IOM대학원 재학중"
                career="경력 없음"
            />
            <WishListItem
                name="유리"
                age={24}
                gender="여"
                location="서울특별시 송파구 문정동"
                education="IOM대학 컴퓨터공학과 학사 졸업"
                career="경력 없음"
            />
            <WishListItem
                name="철수"
                age={32}
                gender="남"
                location="경기도 수원시 인계동"
                education="IOM사이버대학 경영경제과 재학중"
                career="3년차"
            />
        </ScrollView>
    );
}
