import React from "react";
import {
    Box,
    CircleIcon,
    HStack,
    Heading,
    Radio,
    RadioGroup,
    RadioIcon,
    RadioIndicator,
    RadioLabel,
    VStack,
} from "@gluestack-ui/themed";

export default function EmploymentPeriodRadio() {
    return (
        <Box>
            <Heading size="md">근무기간</Heading>
            <RadioGroup mt={10}>
                <VStack gap={20}>
                    <HStack alignItems="center" gap={20}>
                        <Radio value="less than 1 month">
                            <RadioIndicator mr="$2">
                                <RadioIcon as={CircleIcon} />
                            </RadioIndicator>
                            <RadioLabel color="black" fontWeight="$medium">
                                1개월 미만
                            </RadioLabel>
                        </Radio>
                        <Radio value="1 month or more">
                            <RadioIndicator mr="$2">
                                <RadioIcon as={CircleIcon} />
                            </RadioIndicator>
                            <RadioLabel color="black" fontWeight="$medium">
                                1개월 이상
                            </RadioLabel>
                        </Radio>
                    </HStack>
                    <Radio value="long term work">
                        <RadioIndicator mr="$2">
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel color="black" fontWeight="$medium">
                            장기근무 우대
                        </RadioLabel>
                    </Radio>
                </VStack>
            </RadioGroup>
        </Box>
    );
}
