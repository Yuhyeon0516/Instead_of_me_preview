import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import Header from "../common/Header";
import ProductItem from "./ProductItem";
import {
    Box,
    Button,
    ButtonText,
    Divider,
    Textarea,
    TextareaInput,
} from "@gluestack-ui/themed";
import StarSection from "./StarSection";

export default function WriteReview() {
    return (
        <SafeAreaView>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header title="리뷰 작성하기" />
                <ProductItem />

                <Divider />

                <StarSection />

                <Box px={20}>
                    <Textarea size="lg" h={150}>
                        <TextareaInput placeholder="상세 내용을 작성해주세요." />
                    </Textarea>
                </Box>

                <Button size="xl" mt={20} mx={20}>
                    <ButtonText>저장하기</ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}
