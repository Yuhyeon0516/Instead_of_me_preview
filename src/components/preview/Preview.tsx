import {Box, Heading, Icon, Pressable} from "@gluestack-ui/themed";
import React, {useState} from "react";
import {DeviceFrameset} from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import {ScrollView} from "react-native";
import {GrPowerCycle} from "react-icons/gr";

const LONG = 600;
const SHORT = 350;

export default function Preview() {
    const [landscape, setLandscape] = useState(false);
    const [width, setWidth] = useState(SHORT);
    const [height, setHeight] = useState(LONG);

    function toggleLandscape() {
        setLandscape(prev => !prev);
        setWidth(landscape ? SHORT : LONG);
        setHeight(landscape ? LONG : SHORT);
    }

    return (
        <>
            <Box flex={6} alignItems="center">
                <Box
                    w={"100%"}
                    h={"100%"}
                    alignItems="center"
                    justifyContent="center"
                    position="relative">
                    <Box position="relative">
                        <DeviceFrameset
                            height={LONG}
                            width={SHORT}
                            device="iPhone 8 Plus"
                            color="black"
                            landscape={landscape}
                            style={{
                                position: "absolute",
                                zIndex: -1,
                                left: 0,
                            }}
                        />

                        <Box
                            w={width}
                            h={height}
                            top={landscape ? 26 : 112}
                            left={landscape ? 112 : 26}
                            position="absolute"
                            zIndex={10}
                            sx={{
                                _web: {
                                    transition: "all 0.2s linear",
                                },
                            }}>
                            <ScrollView
                                style={{
                                    width: "100%",
                                    height: 3000,
                                    overflow: "scroll",
                                }}>
                                <Heading color="black">Scroll</Heading>
                                <Heading color="black">제발</Heading>
                                <Heading color="black">되게</Heading>
                                <Heading color="black">해주세요</Heading>
                                <Box h={800} />
                                <Heading color="black">와</Heading>
                                <Heading color="black">와</Heading>
                                <Heading color="black">와</Heading>
                                <Heading color="black">드디어</Heading>
                                <Heading color="black">성공했다</Heading>
                                <Heading color="black">
                                    .............................................................................
                                </Heading>
                            </ScrollView>
                        </Box>
                    </Box>
                    <Pressable
                        onPress={toggleLandscape}
                        position="absolute"
                        bottom={0}
                        right={50}>
                        <Icon as={GrPowerCycle} size="xl" />
                    </Pressable>
                </Box>
            </Box>
        </>
    );
}
