import React from "react";
import { getFormattedTimeUnits, getScreeningTimes } from "../../utils/utils";
import { ScreeningTimesStyled } from "./ScreeningTimes.styled";

export interface ScreeningTimesProps {
  duration: number;
  openingTime: string;
  closingTime: string;
}

export const ScreeningTimes = ({
  duration,
  openingTime,
  closingTime
}: ScreeningTimesProps) => {
  const openingTimeUnites = getFormattedTimeUnits(openingTime);
  const closingTimeUnites = getFormattedTimeUnits(closingTime);
  const screeningTimes = getScreeningTimes(
    duration,
    openingTimeUnites,
    closingTimeUnites
  );
  return (
    <ScreeningTimesStyled>
      {screeningTimes.map(time => (
        <span key={time}>{time} </span>
      ))}
    </ScreeningTimesStyled>
  );
};
