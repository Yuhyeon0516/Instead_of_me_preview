import {
    CircleIcon,
    Heading,
    Radio,
    RadioGroup,
    RadioIcon,
    RadioIndicator,
    RadioLabel,
    VStack,
} from "@gluestack-ui/themed";
import React, {useState} from "react";

export default function ReservationType() {
    const [radioValue, setRadioValue] = useState<
        "all" | "time" | "price" | "review"
    >("all");

    return (
        <VStack bgColor="white" px={15} py={30} space="lg">
            <Heading>예약 유형</Heading>
            <RadioGroup value={radioValue} onChange={setRadioValue}>
                <VStack space="md" px={5}>
                    <Radio value="all">
                        <RadioIndicator mr="$2">
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel
                            color="$black"
                            fontWeight={
                                radioValue === "all" ? "$bold" : "$medium"
                            }>
                            전체
                        </RadioLabel>
                    </Radio>
                    <Radio value="time">
                        <RadioIndicator mr="$2">
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel
                            color="$black"
                            fontWeight={
                                radioValue === "time" ? "$bold" : "$medium"
                            }>
                            시간 예약
                        </RadioLabel>
                    </Radio>
                    <Radio value="price">
                        <RadioIndicator mr="$2">
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel
                            color="$black"
                            fontWeight={
                                radioValue === "price" ? "$bold" : "$medium"
                            }>
                            낮은 가격순
                        </RadioLabel>
                    </Radio>
                    <Radio value="review">
                        <RadioIndicator mr="$2">
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel
                            color="$black"
                            fontWeight={
                                radioValue === "review" ? "$bold" : "$medium"
                            }>
                            리뷰 평점순
                        </RadioLabel>
                    </Radio>
                </VStack>
            </RadioGroup>
        </VStack>
    );
}
