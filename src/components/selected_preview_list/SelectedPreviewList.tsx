import {ScrollView} from "@gluestack-ui/themed";
import React from "react";
import AddPreview from "./AddPreview";

export default function SelectedPreviewList() {
    return (
        <ScrollView flex={1} h={"$full"} showsVerticalScrollIndicator={false}>
            <AddPreview />
        </ScrollView>
    );
}
