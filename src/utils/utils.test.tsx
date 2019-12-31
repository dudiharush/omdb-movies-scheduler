import { getScreeningTimes } from "./utils";

test('output a single screenig time range correctly', () => {
  let times = getScreeningTimes(60, {h:7,m:0}, {h:9,m:0})
  expect(times.length).toEqual(1);
  expect(times[0]).toEqual('07:00 - 08:00');
});


test('output multiple screening time ranges correctly', () => {
  let times = getScreeningTimes(61, {h:7,m:0}, {h:11,m:0})
  expect(times.length).toEqual(3);
  expect(times[0]).toEqual('07:00 - 08:01');
  expect(times[1]).toEqual('08:11 - 09:12');
  expect(times[2]).toEqual('09:22 - 10:23');
});

test('output empty screening time range', () => {
  let times = getScreeningTimes(61,{h:7,m:0}, {h:8,m:0})
  expect(times.length).toEqual(0);
});