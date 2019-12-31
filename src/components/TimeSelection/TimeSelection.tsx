import React from "react";
import Timekeeper, { TimeOutput } from "react-timekeeper";
import { TimeSelectionStyled, TitleStyled, TimeSelectionContainerStyled } from "./TimeSelection.styled";

export interface TimeSelectionProps 
  {
    closingTime: string;
    openingTime: string;
    onOpeningTimeSelected(time: string):void;
    onClosingTimeSelected(time: string):void;
  }

export const TimeSelection = ({
  closingTime,
  openingTime,
  onOpeningTimeSelected,
  onClosingTimeSelected
}: TimeSelectionProps) => {
  return (
    <TimeSelectionStyled>
      <TimeSelectionContainerStyled>
        <TitleStyled>Opening Time</TitleStyled>
        <Timekeeper
          time={openingTime}
          hour24Mode={true}
          onChange={(data: TimeOutput) =>
            onOpeningTimeSelected(data.formatted24)
          }
        />
      </TimeSelectionContainerStyled>
      <TimeSelectionContainerStyled>
        <TitleStyled>Closing Time</TitleStyled>
        <Timekeeper
          time={closingTime}
          hour24Mode={true}
          onChange={(data: TimeOutput) =>
            onClosingTimeSelected(data.formatted24)
          }
        />
      </TimeSelectionContainerStyled>
    </TimeSelectionStyled>
  );
};
