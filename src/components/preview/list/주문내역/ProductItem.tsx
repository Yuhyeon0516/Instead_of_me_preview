import {
    Box,
    Button,
    ButtonText,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {Star} from "lucide-react-native";
import React from "react";
import {IProductItem} from "./type";

export default function ProductItem({title, score, reviewCount}: IProductItem) {
    return (
        <VStack
            px={20}
            py={15}
            borderBottomColor="$trueGray300"
            borderBottomWidth={1}
            space="lg">
            <HStack space="md">
                <Box
                    w={100}
                    h={100}
                    borderRadius={10}
                    bgColor="$trueGray200"
                    alignItems="center"
                    justifyContent="center">
                    <Heading color="$trueGray500">Image</Heading>
                </Box>

                <VStack py={5} space="sm">
                    <Heading size="md">{title}</Heading>
                    <HStack space="xs" alignItems="center">
                        <Icon
                            as={Star}
                            color="$yellow400"
                            fill={"$yellow400"}
                        />
                        <Text>
                            {score}({reviewCount})
                        </Text>
                    </HStack>
                </VStack>
            </HStack>

            <HStack space="sm">
                <Button
                    size="xl"
                    flex={1}
                    variant="outline"
                    borderColor="$trueGray400"
                    borderWidth={2}>
                    <ButtonText color="$trueGray600">리뷰쓰기</ButtonText>
                </Button>

                <Button
                    size="xl"
                    flex={1}
                    variant="outline"
                    borderColor="$trueGray400"
                    borderWidth={2}>
                    <ButtonText color="$trueGray600">방문하기</ButtonText>
                </Button>
            </HStack>
        </VStack>
    );
}
