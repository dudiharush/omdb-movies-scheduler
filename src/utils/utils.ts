import { TimeUnits } from "../types";

export const getScreeningTimes = (duration: number, fromTime: TimeUnits, toTime: TimeUnits): string[] => {
    let theaterOpeningTime = new Date(0,0,0,fromTime.h, fromTime.m);
    let theaterClosingTime = new Date(0,0,0,toTime.h, toTime.m);
    let movieStartTime = new Date(theaterOpeningTime.getTime());
    let movieEndTime = addMinutes(movieStartTime, duration);
    const times = [];
  
    while(movieEndTime < theaterClosingTime){
      times.push(getTimeRangeFormatted(movieStartTime, movieEndTime))
      movieStartTime = addMinutes(movieEndTime, 10);
      movieEndTime = addMinutes(movieStartTime, duration);
    }
  
    return times;
  }
  
  function addMinutes(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes*60*1000);
  }
  
  function getTimeRangeFormatted(startTime: Date, endTime: Date){
    return getTimeFormatted(startTime) + " - " + getTimeFormatted(endTime);
  }
  
  function getTimeFormatted(time: Date){
    return ("0" + time.getHours()).slice(-2) + ":" + 
      ("0" + time.getMinutes()).slice(-2)
  }

  export function getFormattedTimeUnits(time: string): TimeUnits{
      const [h, m] = time.split(":");
      return {h:+h, m:+m};
  }