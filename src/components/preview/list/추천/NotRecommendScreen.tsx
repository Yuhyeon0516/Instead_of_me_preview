import React from "react";
import {VStack} from "@gluestack-ui/themed";
import NotRecommendItem from "./NotRecommendItem";

export default function NotRecommendScreen() {
    return (
        <VStack space="lg" w={"90%"} alignSelf="center">
            <NotRecommendItem
                title="멀티비타민"
                caution="현재 비타민 D를 제외한 비타민은 충분한 상태입니다. 멀티비타민을 섭취 하실경우 비타민 과다복용일 가능성이 있습니다."
            />
            <NotRecommendItem
                title="비타민 C"
                caution="비타민 C는 면역 시스템 강화를 위해 섭취되는 영양소로, 일반적으로 감기 예방을 위해 섭취될 수 있습니다. 그러나 홍길동님의 혈액 검사 결과 현재 비타민 C가 충분합니다."
            />
            <NotRecommendItem
                title="마그네슘"
                caution="마그네슘은 신체에서 다양한 기능을 담당하는 미네랄 중 하나로, 근육 및 신경 기능을 지원하고 에너지 생산에 참여합니다. 그러나 홍길동님의 혈청 마그네슘 수준은 양호한 상태입니다."
            />
        </VStack>
    );
}
