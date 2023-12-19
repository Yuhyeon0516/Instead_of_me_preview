import {Heading, VStack} from "@gluestack-ui/themed";
import React from "react";
import FilterListItem from "./FilterListItem";

export default function FilterList() {
    return (
        <VStack bgColor="white" px={15} py={30} space="lg">
            <Heading>필터</Heading>
            <FilterListItem
                title="기본 편의시설"
                data={[
                    "24시간 운영",
                    "CCTV",
                    "WiFi",
                    "도어락",
                    "정수기",
                    "화장실",
                    "주차장",
                    "주방",
                    "냉장고",
                    " 건조기",
                ]}
            />
            <FilterListItem
                title="촬영 장비"
                data={[
                    "음향장비",
                    "휴대폰거치대",
                    "삼각대",
                    "스크린",
                    "카메라조명",
                    "스탠드조명",
                    "레일조명",
                    "TV",
                ]}
            />
        </VStack>
    );
}
