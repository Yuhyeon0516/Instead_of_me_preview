import React from "react";
import {Heading, VStack} from "@gluestack-ui/themed";
import ProfileItem from "./ProfileItem";

export default function MyProfileSection() {
    return (
        <VStack w={"$full"} bgColor="$trueGray100" px={20} py={30} space="sm">
            <Heading size="md">내 프로필</Heading>
            <ProfileItem />
        </VStack>
    );
}
