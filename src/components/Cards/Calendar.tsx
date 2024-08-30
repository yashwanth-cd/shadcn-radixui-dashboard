"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveTimeRange } from "@nivo/calendar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveTimeRange = (props: any) => (
  <ResponsiveTimeRange
    data={props.data}
    from="2018-04-01"
    to="2018-08-12"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    margin={{ top: 0, right: 40, bottom: 0, left: 0 }}
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    dayRadius={4}
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        justify: false,
        itemCount: 4,
        itemWidth: 30,
        itemHeight: 30,
        itemsSpacing: 14,
        itemDirection: "bottom-to-top",
        translateX: 1,
        translateY: 1,
        symbolSize: 16,
      },
    ]}
  />
);

const data = [
  {
    value: 132,
    day: "2018-05-26",
  },
  {
    value: 277,
    day: "2018-06-12",
  },
  {
    value: 377,
    day: "2018-04-03",
  },
  {
    value: 15,
    day: "2018-04-22",
  },
  {
    value: 278,
    day: "2018-07-25",
  },
  {
    value: 398,
    day: "2018-05-28",
  },
  {
    value: 169,
    day: "2018-07-21",
  },
  {
    value: 214,
    day: "2018-06-07",
  },
  {
    value: 318,
    day: "2018-05-18",
  },
  {
    value: 324,
    day: "2018-04-08",
  },
  {
    value: 306,
    day: "2018-05-14",
  },
  {
    value: 196,
    day: "2018-07-12",
  },
  {
    value: 369,
    day: "2018-04-19",
  },
  {
    value: 292,
    day: "2018-05-21",
  },
  {
    value: 326,
    day: "2018-07-31",
  },
  {
    value: 397,
    day: "2018-04-15",
  },
  {
    value: 252,
    day: "2018-05-23",
  },
  {
    value: 304,
    day: "2018-05-15",
  },
  {
    value: 159,
    day: "2018-07-28",
  },
  {
    value: 275,
    day: "2018-06-06",
  },
  {
    value: 390,
    day: "2018-07-08",
  },
  {
    value: 352,
    day: "2018-06-30",
  },
  {
    value: 383,
    day: "2018-07-10",
  },
  {
    value: 372,
    day: "2018-05-12",
  },
  {
    value: 36,
    day: "2018-04-01",
  },
  {
    value: 191,
    day: "2018-04-20",
  },
  {
    value: 350,
    day: "2018-06-16",
  },
  {
    value: 308,
    day: "2018-05-19",
  },
  {
    value: 349,
    day: "2018-05-08",
  },
  {
    value: 315,
    day: "2018-06-22",
  },
  {
    value: 181,
    day: "2018-08-08",
  },
  {
    value: 357,
    day: "2018-06-21",
  },
  {
    value: 346,
    day: "2018-05-02",
  },
  {
    value: 224,
    day: "2018-07-03",
  },
  {
    value: 365,
    day: "2018-05-11",
  },
  {
    value: 230,
    day: "2018-07-06",
  },
  {
    value: 233,
    day: "2018-05-16",
  },
  {
    value: 184,
    day: "2018-06-24",
  },
  {
    value: 229,
    day: "2018-07-18",
  },
  {
    value: 219,
    day: "2018-05-07",
  },
  {
    value: 338,
    day: "2018-08-02",
  },
  {
    value: 215,
    day: "2018-07-30",
  },
  {
    value: 70,
    day: "2018-04-13",
  },
  {
    value: 164,
    day: "2018-07-20",
  },
  {
    value: 292,
    day: "2018-08-07",
  },
  {
    value: 232,
    day: "2018-04-14",
  },
  {
    value: 155,
    day: "2018-07-05",
  },
  {
    value: 86,
    day: "2018-04-09",
  },
  {
    value: 109,
    day: "2018-08-10",
  },
  {
    value: 277,
    day: "2018-05-22",
  },
  {
    value: 149,
    day: "2018-06-05",
  },
  {
    value: 40,
    day: "2018-08-06",
  },
  {
    value: 337,
    day: "2018-07-11",
  },
  {
    value: 165,
    day: "2018-07-17",
  },
  {
    value: 166,
    day: "2018-04-30",
  },
  {
    value: 179,
    day: "2018-07-09",
  },
  {
    value: 334,
    day: "2018-06-02",
  },
  {
    value: 108,
    day: "2018-04-29",
  },
  {
    value: 105,
    day: "2018-06-25",
  },
  {
    value: 70,
    day: "2018-06-26",
  },
  {
    value: 113,
    day: "2018-06-13",
  },
  {
    value: 282,
    day: "2018-05-09",
  },
  {
    value: 108,
    day: "2018-07-07",
  },
  {
    value: 305,
    day: "2018-07-29",
  },
  {
    value: 140,
    day: "2018-05-27",
  },
  {
    value: 376,
    day: "2018-06-27",
  },
  {
    value: 22,
    day: "2018-07-04",
  },
  {
    value: 65,
    day: "2018-07-24",
  },
  {
    value: 40,
    day: "2018-07-19",
  },
  {
    value: 80,
    day: "2018-08-04",
  },
  {
    value: 362,
    day: "2018-05-24",
  },
  {
    value: 295,
    day: "2018-05-05",
  },
  {
    value: 205,
    day: "2018-05-31",
  },
  {
    value: 171,
    day: "2018-04-11",
  },
  {
    value: 53,
    day: "2018-06-28",
  },
  {
    value: 286,
    day: "2018-05-01",
  },
  {
    value: 165,
    day: "2018-04-06",
  },
  {
    value: 289,
    day: "2018-07-22",
  },
  {
    value: 89,
    day: "2018-05-06",
  },
  {
    value: 24,
    day: "2018-04-28",
  },
  {
    value: 19,
    day: "2018-04-02",
  },
  {
    value: 160,
    day: "2018-05-17",
  },
];

export default function Calendar() {
  return (
    <Card className="grow">
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>Analytics of the week</CardDescription>
      </CardHeader>
      <CardContent className="h-[120px] flex items-center max-w-[600px]">
        <MyResponsiveTimeRange data={data} />
      </CardContent>
    </Card>
  );
}
