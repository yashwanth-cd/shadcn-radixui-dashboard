"use client";

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = (props: any) => (
  <ResponsiveLine
    data={props.data}
    margin={{ top: 10, right: 40, bottom: 10, left: 50 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="step"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

const data = [
  {
    id: "japan",
    color: "hsl(134, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 205,
      },
      {
        x: "helicopter",
        y: 194,
      },
      {
        x: "boat",
        y: 206,
      },
      {
        x: "train",
        y: 248,
      },
      {
        x: "subway",
        y: 171,
      },
      {
        x: "bus",
        y: 72,
      },
      {
        x: "car",
        y: 241,
      },
      {
        x: "moto",
        y: 133,
      },
      {
        x: "bicycle",
        y: 219,
      },
      {
        x: "horse",
        y: 199,
      },
      {
        x: "skateboard",
        y: 115,
      },
      {
        x: "others",
        y: 54,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(19, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 110,
      },
      {
        x: "helicopter",
        y: 211,
      },
      {
        x: "boat",
        y: 208,
      },
      {
        x: "train",
        y: 285,
      },
      {
        x: "subway",
        y: 41,
      },
      {
        x: "bus",
        y: 138,
      },
      {
        x: "car",
        y: 152,
      },
      {
        x: "moto",
        y: 135,
      },
      {
        x: "bicycle",
        y: 21,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 77,
      },
      {
        x: "others",
        y: 4,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(7, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 194,
      },
      {
        x: "helicopter",
        y: 273,
      },
      {
        x: "boat",
        y: 50,
      },
      {
        x: "train",
        y: 208,
      },
      {
        x: "subway",
        y: 182,
      },
      {
        x: "bus",
        y: 270,
      },
      {
        x: "car",
        y: 137,
      },
      {
        x: "moto",
        y: 2,
      },
      {
        x: "bicycle",
        y: 120,
      },
      {
        x: "horse",
        y: 51,
      },
      {
        x: "skateboard",
        y: 242,
      },
      {
        x: "others",
        y: 88,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(343, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 78,
      },
      {
        x: "helicopter",
        y: 27,
      },
      {
        x: "boat",
        y: 80,
      },
      {
        x: "train",
        y: 202,
      },
      {
        x: "subway",
        y: 177,
      },
      {
        x: "bus",
        y: 205,
      },
      {
        x: "car",
        y: 289,
      },
      {
        x: "moto",
        y: 185,
      },
      {
        x: "bicycle",
        y: 221,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 66,
      },
      {
        x: "others",
        y: 133,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(190, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 135,
      },
      {
        x: "helicopter",
        y: 58,
      },
      {
        x: "boat",
        y: 90,
      },
      {
        x: "train",
        y: 288,
      },
      {
        x: "subway",
        y: 129,
      },
      {
        x: "bus",
        y: 45,
      },
      {
        x: "car",
        y: 80,
      },
      {
        x: "moto",
        y: 78,
      },
      {
        x: "bicycle",
        y: 244,
      },
      {
        x: "horse",
        y: 283,
      },
      {
        x: "skateboard",
        y: 226,
      },
      {
        x: "others",
        y: 148,
      },
    ],
  },
];

export default function Lines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lines</CardTitle>
        <CardDescription>The stats of the this year</CardDescription>
      </CardHeader>
      <CardContent className="h-[350px]">
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  );
}
