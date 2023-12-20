import React from "react";
import {VStack} from "@gluestack-ui/themed";
import RecommendItem from "./RecommendItem";

export default function RecommendScreen() {
    return (
        <VStack space="lg" w={"90%"} alignSelf="center">
            <RecommendItem
                title="오메가-3 지방산"
                efficacy="뇌 기능 및 심혈관 건강에 도움을 주는 오메가-3 지방산을 함유한 어류 오일이나 알츠메가-3 등의 영양제가 있습니다."
            />
            <RecommendItem
                title="비타민 D"
                efficacy="햇볕에 노출되기 어려운 경우나 비타민 D 부족이 의심되는 경우에 섭취됩니다. 뼈 건강과 면역 시스템 강화에 기여할 수 있습니다."
            />
            <RecommendItem
                title="칼슘"
                efficacy="뼈 건강과 근육 기능을 지원하기 위해 섭취되는 영양제입니다."
            />
            <RecommendItem
                title="프로바이오틱스 (유산균)"
                efficacy="소화기 건강을 지원하고 장내 균형을 유지하기 위해 섭취되는 영양제입니다."
            />
            <RecommendItem
                title="철분"
                efficacy="철분 부족이 의심되는 경우, 헤모글로빈 수치를 유지하기 위해 섭취됩니다."
            />
            <RecommendItem
                title="마그네슘"
                efficacy="뼈 건강과 근육 기능을 지원하기 위해 섭취되는 영양제입니다."
            />
        </VStack>
    );
}
