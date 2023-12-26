import {SafeAreaView} from "react-native";
import React from "react";
import SearchHeader from "../common/SearchHeader";
import {Box, VStack} from "@gluestack-ui/themed";
import SectionItem from "./SectionItem";

export default function SearchHospitalCategory() {
    return (
        <SafeAreaView>
            <SearchHeader placeHolder="검색어를 입력하세요." />
            <Box bgColor="$trueGray200" p={20}>
                <VStack space="4xl" p={20} bgColor="white" borderRadius={10}>
                    <SectionItem
                        title="만성질환"
                        buttons={["고혈압", "당뇨", "고지혈증", "비만"]}
                    />
                    <SectionItem
                        title="정신질환"
                        buttons={["우울", "불안", "치매", "불면"]}
                    />
                    <SectionItem
                        title="경증질환"
                        buttons={[
                            "감기",
                            "몸살",
                            "두통",
                            "설사",
                            "복통",
                            "알러지",
                            "비염",
                            "천식",
                            "구토",
                        ]}
                    />
                    <SectionItem
                        title="소아진료"
                        buttons={[
                            "감기",
                            "고열",
                            "소아 발진",
                            "설사/변비/배변",
                        ]}
                    />
                    <SectionItem
                        title="피부질환"
                        buttons={[
                            "여드름",
                            "피부발진",
                            "벌레물림",
                            "아토피",
                            "피부 염증",
                        ]}
                    />
                </VStack>
            </Box>
        </SafeAreaView>
    );
}
