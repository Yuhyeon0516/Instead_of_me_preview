import {Text} from "@gluestack-ui/themed";
import React, {useEffect, useState} from "react";

export default function TimerText() {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (Math.floor(seconds) > 0) {
                setSeconds(Math.floor(seconds) - 1);
            }
            if (Math.floor(seconds) === 0) {
                if (Math.floor(minutes) === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(Math.floor(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return (
        <Text color="$blue500" fontWeight="$bold">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Text>
    );
}
