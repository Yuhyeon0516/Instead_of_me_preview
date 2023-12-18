import {SafeAreaView} from "react-native";
import React from "react";
import Header from "../common/Header";
import Selector from "./Selector";
import TextInputBox from "./TextInputBox";

const category: string[] = ["애정 & 관계"];

const detailCategory: string[] = ["결혼/부부생활/이혼/재혼"];

export default function WritePost() {
    return (
        <SafeAreaView>
            <Header title="글쓰기" />
            <Selector actionItems={category} placeholder="카테고리 선택" />
            <Selector
                actionItems={detailCategory}
                placeholder="상세 카테고리 선택"
            />
            <TextInputBox />
        </SafeAreaView>
    );
}
