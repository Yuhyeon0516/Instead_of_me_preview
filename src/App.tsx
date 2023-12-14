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
import SelectPreviewModal from "./components/selected_preview_list/SelectPreviewModal";
import DetailPreviewModal from "./components/selected_preview_list/DetailPreviewModal";

function App(): JSX.Element {
    return (
        <GluestackUIProvider config={config}>
            <SafeAreaProvider>
                <RecoilRoot>
                    <ToastProvider>
                        <OverlayProvider>
                            <VStack
                                w={"$full"}
                                h={"$full"}
                                alignItems={"flex-start"}
                                overflow="hidden">
                                <Image
                                    source={require("./assets/logo/blackLogo/textLogo7.png")}
                                    width={200}
                                    ml={20}
                                    mb={20}
                                />
                                <HStack w={"$full"} h={840}>
                                    <Category />
                                    <SelectedPreviewList />
                                    <Preview />
                                </HStack>
                                <SelectPreviewModal />
                                <DetailPreviewModal />
                            </VStack>
                        </OverlayProvider>
                    </ToastProvider>
                </RecoilRoot>
            </SafeAreaProvider>
        </GluestackUIProvider>
    );
}

export default App;
