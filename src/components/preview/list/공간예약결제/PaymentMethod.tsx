import {HStack, Heading, VStack} from "@gluestack-ui/themed";
import React, {useState} from "react";
import PaymentMethodItem from "./PaymentMethodItem";

export default function PaymentMethod() {
    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    return (
        <VStack space="md" px={15} py={20}>
            <Heading>결제수단</Heading>

            <VStack gap={10}>
                <HStack gap={10}>
                    <PaymentMethodItem
                        title="일반 결제"
                        imageHeight={0}
                        imageWidth={0}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        index={0}
                    />
                    <PaymentMethodItem
                        image={require("./assets/kakao_pay.png")}
                        imageWidth={80}
                        // imageHeight={30}
                        imageHeight={15} // web버젼용
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        index={1}
                    />
                </HStack>

                <HStack gap={10}>
                    <PaymentMethodItem
                        image={require("./assets/naver_pay.png")}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        imageWidth={80}
                        imageHeight={30}
                        index={2}
                    />
                    <PaymentMethodItem
                        image={require("./assets/payco.png")}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        imageWidth={80}
                        imageHeight={50}
                        index={3}
                    />
                </HStack>
            </VStack>
        </VStack>
    );
}
