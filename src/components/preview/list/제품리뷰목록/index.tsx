import {SafeAreaView} from "react-native";
import React from "react";
import Header from "../common/Header";
import {Button, ButtonText, VStack} from "@gluestack-ui/themed";
import ReviewItem from "./ReviewItem";

export default function ProductReviewList() {
    return (
        <SafeAreaView>
            <Header title="리뷰" />

            <VStack p={20} space="md">
                <Button variant="outline" size="xl">
                    <ButtonText>리뷰 작성</ButtonText>
                </Button>

                <ReviewItem
                    title="최고의 제품이었습니다."
                    description="이렇게 좋은 제품을 이 가격에 구할 수 있어서 정말 다행입니다."
                    date="2023.12.21"
                />
                <ReviewItem
                    title="가성비 최고입니다."
                    description="진짜 가성비는 최고입니다."
                    date="2023.12.19"
                />
                <ReviewItem
                    title="사장님 남는게 있으신가요?"
                    description="아니 이렇게 좋은걸 이 가격에 파시면 뭐가 남으시나요!"
                    date="2023.12.13"
                />
            </VStack>
        </SafeAreaView>
    );
}
