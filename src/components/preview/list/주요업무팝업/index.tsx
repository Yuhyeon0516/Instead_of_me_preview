import {SafeAreaView} from "react-native";
import React, {useState} from "react";
import {Button, ButtonText} from "@gluestack-ui/themed";
import Popup from "./Popup";

export default function BusinessPopup() {
    const [showActionSheet, setShowActionSheet] = useState(false);

    function handleActionSheetOpen() {
        setShowActionSheet(true);
    }

    function handleActionSheetClose() {
        setShowActionSheet(false);
    }

    return (
        <SafeAreaView>
            <Button onPress={handleActionSheetOpen}>
                <ButtonText>Open</ButtonText>
            </Button>

            <Popup
                showActionSheet={showActionSheet}
                handleActionSheetClose={handleActionSheetClose}
            />
        </SafeAreaView>
    );
}
