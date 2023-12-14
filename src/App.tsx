import React from "react";
import {GluestackUIProvider, HStack, Image, VStack} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config";
import {ToastProvider} from "@gluestack-ui/toast";
import {OverlayProvider} from "@gluestack-ui/overlay";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Category from "./components/category/Category";
import SelectedPreviewList from "./components/selected_preview_list/SelectedPreviewList";
import Preview from "./components/preview/Preview";
import {RecoilRoot} from "recoil";

function App(): JSX.Element {
    return (
        <GluestackUIProvider config={config}>
            <SafeAreaProvider>
                <ToastProvider>
                    <OverlayProvider>
                        <RecoilRoot>
                            <VStack
                                w={"$full"}
                                h={"$full"}
                                alignItems={"flex-start"}>
                                <Image
                                    source={require("./assets/logo/blackLogo/textLogo7.png")}
                                    width={200}
                                    ml={20}
                                    mb={20}
                                />
                                <HStack w={"$full"} h={800}>
                                    <Category />
                                    <SelectedPreviewList />
                                    <Preview />
                                </HStack>
                            </VStack>
                        </RecoilRoot>
                    </OverlayProvider>
                </ToastProvider>
            </SafeAreaProvider>
        </GluestackUIProvider>
    );
}

export default App;
