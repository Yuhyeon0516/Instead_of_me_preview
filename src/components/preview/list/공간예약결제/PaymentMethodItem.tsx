// import {useWindowDimensions} from "react-native";
import React from "react";
import {Heading, Image, Pressable} from "@gluestack-ui/themed";
import {IPaymentMethodItem} from "./type";

export default function PaymentMethodItem({
    image,
    title,
    selectedButton,
    setSelectedButton,
    imageHeight,
    imageWidth,
    index,
}: IPaymentMethodItem & {
    selectedButton: number | null;
    setSelectedButton: React.Dispatch<React.SetStateAction<number | null>>;
    imageWidth: number;
    imageHeight: number;
    index: number;
}) {
    // const {width} = useWindowDimensions();
    const width = 410; // web버젼용

    function onPressButton() {
        if (selectedButton === index) {
            setSelectedButton(null);
        } else {
            setSelectedButton(index);
        }
    }

    return (
        <Pressable
            onPress={onPressButton}
            w={(width - 30 - 10) / 2}
            h={70}
            alignItems="center"
            justifyContent="center"
            borderWidth={1}
            borderColor={selectedButton === index ? "$blue500" : "black"}
            bgColor={selectedButton === index ? "$blue100" : "transparent"}
            borderRadius={20}>
            {title ? (
                <Heading
                    color={selectedButton === index ? "$blue500" : "black"}>
                    {title}
                </Heading>
            ) : (
                <Image
                    source={image}
                    alt="image"
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                        objectFit: "fill",
                    }}
                />
            )}
        </Pressable>
    );
}
