import {ScrollView} from "@gluestack-ui/themed";
import React from "react";
import AddPreview from "./AddPreview";
import {SelectedPreviewState} from "../../global/recoil";
import {useRecoilValue} from "recoil";
import {FlatList} from "react-native";
import SelectedPreviewItem from "./SelectedPreviewItem";

export default function SelectedPreviewList() {
    const selectedPreview = useRecoilValue(SelectedPreviewState);

    return (
        <ScrollView flex={1} h={"$full"} showsVerticalScrollIndicator={false}>
            {selectedPreview.length > 0 && (
                <FlatList
                    data={selectedPreview}
                    renderItem={({item, index}) => (
                        <SelectedPreviewItem id={item} index={index} />
                    )}
                />
            )}
            <AddPreview />
        </ScrollView>
    );
}
