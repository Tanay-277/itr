"use client";

import React, { useState, useEffect } from "react";
import {
    getDayName,
    getFormattedDate,
    getDateAndMonth
} from "@/lib/dateUtils"

export const DateTime = React.memo(
    ({ variant, className }: { variant: "date" | "time" | "datetime" | "day" | "shortDate", className?: string }) => {
        const [currentTime, setCurrentTime] = useState(() => new Date());

        useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);

            return () => clearInterval(intervalId);
        }, []);

        return (
            <div className={className}>
                {variant === "date" && <span>{getFormattedDate(currentTime)}</span>}
                {variant === "time" && (
                    <span>{currentTime.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit", hour12: true })}</span>
                )}
                {variant === "datetime" && (
                    <div className="text-end text-sm px-2">
                        {getDateAndMonth(currentTime)}<br />
                        {currentTime.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit", hour12: true })}
                    </div>
                )}
                {variant === "day" && <span>{getDayName(currentTime)}</span>}
                {variant === "shortDate" && <span>{getDateAndMonth(currentTime)}</span>}
            </div>
        );
    }
);