import {Box, HStack, Pressable, Text, VStack} from "@gluestack-ui/themed";
import React, {useState} from "react";
import {DeviceFrameset} from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import {ScrollView} from "react-native";
import {IoIosTabletPortrait, IoIosPhonePortrait} from "react-icons/io";
import {MdOutlineScreenRotation} from "react-icons/md";
import MobileScreenComponent from "./MobileScreenComponent";

export default function Preview() {
    const [landscape, setLandscape] = useState(false);
    const [deviceFrame, setDeviceFrame] = useState<
        "iPhone 8 Plus" | "iPad Mini"
    >("iPhone 8 Plus");

    function toggleLandscape() {
        setLandscape(prev => !prev);
    }

    function onPressTablet() {
        setDeviceFrame("iPad Mini");
    }

    function onPressPhone() {
        setDeviceFrame("iPhone 8 Plus");
    }

    return (
        <Box flex={5} alignItems="center">
            <Box
                w={"100%"}
                h={"100%"}
                alignItems="center"
                justifyContent={landscape ? "center" : "flex-end"}
                top={30}>
                <DeviceFrameset
                    device={deviceFrame}
                    color="black"
                    landscape={landscape}
                    zoom={0.9}>
                    <Box w={"100%"} h={"100%"}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{
                                width: "100%",
                                minHeight: 736,
                            }}>
                            <MobileScreenComponent />
                            <Box h={300} />
                        </ScrollView>
                    </Box>
                </DeviceFrameset>
                <HStack position="absolute" bottom={40} left={30} space="md">
                    <Pressable
                        onPress={onPressTablet}
                        p={10}
                        $hover={{transform: "scale(1.2)"}}
                        sx={{
                            _web: {
                                transition: "all 0.2s linear",
                            },
                        }}>
                        <VStack alignItems="center" space="sm">
                            <IoIosTabletPortrait
                                style={{fontSize: 40, color: "black"}}
                            />
                            <Text fontSize={14} fontWeight="$medium">
                                Tablet
                            </Text>
                        </VStack>
                    </Pressable>
                    <Pressable
                        onPress={onPressPhone}
                        p={10}
                        $hover={{transform: "scale(1.2)"}}
                        sx={{
                            _web: {
                                transition: "all 0.2s linear",
                            },
                        }}>
                        <VStack alignItems="center" space="sm">
                            <IoIosPhonePortrait
                                style={{fontSize: 40, color: "black"}}
                            />

                            <Text fontSize={14} fontWeight="$medium">
                                Phone
                            </Text>
                        </VStack>
                    </Pressable>
                    <Pressable
                        onPress={toggleLandscape}
                        p={10}
                        $hover={{transform: "scale(1.2)"}}
                        sx={{
                            _web: {
                                transition: "all 0.2s linear",
                            },
                        }}>
                        <VStack alignItems="center" space="sm">
                            <MdOutlineScreenRotation
                                style={{fontSize: 40, color: "black"}}
                            />
                            <Text fontSize={14} fontWeight="$medium">
                                Rotation
                            </Text>
                        </VStack>
                    </Pressable>
                </HStack>
            </Box>
        </Box>
    );
}
