import {Box, Button, ButtonText} from "@gluestack-ui/themed";
// import React, {useRef, useState} from "react";
import React, {useState} from "react";
import {SafeAreaView} from "react-native";
// import PagerView from "react-native-pager-view";
import Header from "../common/Header";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import Dot from "./Dot";

export default function SequenceScreen() {
    const safeAreaInsets = useSafeAreaInsets();
    // const pagerRef = useRef<PagerView | null>(null);
    const [page, setPage] = useState(0);

    function onPressButton() {
        // pagerRef.current?.setPage(page + 1);
        setPage(prev => prev + 1);
    }

    return (
        <Box flex={1} position="relative">
            <SafeAreaView style={{flex: 1}}>
                <Header title="교육 종류 선택" />
                <Dot currentPage={page} maxPage={2} />
                {page === 0 ? <FirstScreen /> : <SecondScreen />}
                {/* <PagerView
                    ref={pagerRef}
                    initialPage={page}
                    style={{flex: 1}}
                    orientation={"horizontal"}
                    onPageSelected={e => {
                        setPage(e.nativeEvent.position);
                    }}
                    scrollEnabled={false}>
                    <FirstScreen />
                    <SecondScreen />
                </PagerView> */}
            </SafeAreaView>
            <Button
                zIndex={10}
                size="xl"
                position="absolute"
                // bottom={0}
                bottom={-100} // web
                w={"$full"}
                h={80}
                pb={safeAreaInsets.bottom}
                onPress={page < 1 ? onPressButton : () => {}}>
                <ButtonText>{page < 1 ? "다음" : "완료"}</ButtonText>
            </Button>
        </Box>
    );
}
