import React from "react";
import {SafeAreaView} from "react-native";
import Header from "../common/Header";
import {Button, ButtonText, VStack} from "@gluestack-ui/themed";
import InquiryItem from "./InquiryItem";

export default function InquiryList() {
    return (
        <SafeAreaView>
            <Header title="1:1 문의" />
            <VStack space="md" px={20} py={25}>
                <Button variant="outline" size="xl" mb={10}>
                    <ButtonText>1:1 문의 작성</ButtonText>
                </Button>

                <InquiryItem
                    title="메리 크리스마스"
                    description="메리 크리스마스 화이팅!"
                    isAnswer={false}
                    date="2023.12.25"
                />
                <InquiryItem
                    title="금지 물품 판매 문의"
                    description="담배는 판매 금지인데 담배 케이스는 가능할까요?"
                    isAnswer={true}
                    date="2023.12.23"
                />
                <InquiryItem
                    title="짝퉁 판매자 제보"
                    description="아래에 링크된 제품이 짝퉁인거같은데 조치 부탁드립니다."
                    isAnswer={true}
                    date="2023.12.21"
                />
                <InquiryItem
                    title="정말 고생 많으십니다"
                    description="매번 문의에 친절히 답변해주셔서 감사합니다."
                    isAnswer={true}
                    date="2023.12.20"
                />
            </VStack>
        </SafeAreaView>
    );
}
