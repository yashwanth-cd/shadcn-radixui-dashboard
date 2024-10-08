"use client";

import Calendar from "@/components/Cards/Calendar";
import { DataTableDemo } from "@/components/Cards/DataTable";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import { TableDemo } from "@/components/Cards/Table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    id: "Serie 1",
    data: [
      {
        x: "2000",
        y: 9,
      },
      {
        x: "2001",
        y: 3,
      },
      {
        x: "2002",
        y: 11,
      },
      {
        x: "2003",
        y: 5,
      },
      {
        x: "2004",
        y: 12,
      },
    ],
  },
  {
    id: "Serie 2",
    data: [
      {
        x: "2000",
        y: 2,
      },
      {
        x: "2001",
        y: 4,
      },
      {
        x: "2002",
        y: 8,
      },
      {
        x: "2003",
        y: 6,
      },
      {
        x: "2004",
        y: 5,
      },
    ],
  },
  {
    id: "Serie 3",
    data: [
      {
        x: "2000",
        y: 1,
      },
      {
        x: "2001",
        y: 10,
      },
      {
        x: "2002",
        y: 12,
      },
      {
        x: "2003",
        y: 11,
      },
      {
        x: "2004",
        y: 4,
      },
    ],
  },
  {
    id: "Serie 4",
    data: [
      {
        x: "2000",
        y: 5,
      },
      {
        x: "2001",
        y: 5,
      },
      {
        x: "2002",
        y: 2,
      },
      {
        x: "2003",
        y: 12,
      },
      {
        x: "2004",
        y: 8,
      },
    ],
  },
  {
    id: "Serie 5",
    data: [
      {
        x: "2000",
        y: 6,
      },
      {
        x: "2001",
        y: 12,
      },
      {
        x: "2002",
        y: 6,
      },
      {
        x: "2003",
        y: 7,
      },
      {
        x: "2004",
        y: 2,
      },
    ],
  },
  {
    id: "Serie 6",
    data: [
      {
        x: "2000",
        y: 7,
      },
      {
        x: "2001",
        y: 1,
      },
      {
        x: "2002",
        y: 1,
      },
      {
        x: "2003",
        y: 3,
      },
      {
        x: "2004",
        y: 1,
      },
    ],
  },
  {
    id: "Serie 7",
    data: [
      {
        x: "2000",
        y: 4,
      },
      {
        x: "2001",
        y: 2,
      },
      {
        x: "2002",
        y: 5,
      },
      {
        x: "2003",
        y: 9,
      },
      {
        x: "2004",
        y: 7,
      },
    ],
  },
  {
    id: "Serie 8",
    data: [
      {
        x: "2000",
        y: 8,
      },
      {
        x: "2001",
        y: 9,
      },
      {
        x: "2002",
        y: 4,
      },
      {
        x: "2003",
        y: 1,
      },
      {
        x: "2004",
        y: 3,
      },
    ],
  },
  {
    id: "Serie 9",
    data: [
      {
        x: "2000",
        y: 10,
      },
      {
        x: "2001",
        y: 11,
      },
      {
        x: "2002",
        y: 7,
      },
      {
        x: "2003",
        y: 4,
      },
      {
        x: "2004",
        y: 11,
      },
    ],
  },
  {
    id: "Serie 10",
    data: [
      {
        x: "2000",
        y: 3,
      },
      {
        x: "2001",
        y: 7,
      },
      {
        x: "2002",
        y: 3,
      },
      {
        x: "2003",
        y: 10,
      },
      {
        x: "2004",
        y: 10,
      },
    ],
  },
  {
    id: "Serie 11",
    data: [
      {
        x: "2000",
        y: 12,
      },
      {
        x: "2001",
        y: 6,
      },
      {
        x: "2002",
        y: 10,
      },
      {
        x: "2003",
        y: 8,
      },
      {
        x: "2004",
        y: 9,
      },
    ],
  },
  {
    id: "Serie 12",
    data: [
      {
        x: "2000",
        y: 11,
      },
      {
        x: "2001",
        y: 8,
      },
      {
        x: "2002",
        y: 9,
      },
      {
        x: "2003",
        y: 2,
      },
      {
        x: "2004",
        y: 6,
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="grid gap-[26px]">
      <div className="xl:grid xl:grid-cols-2 gap-[32px] md:flex md:flex-col">
        <General />
        <div className="grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>

      <div className="xl:grid xl:grid-cols-3 gap-[24px] xl:h-[400px] md:flex md:flex-col sm:mb-6 md:mb-0">
        <Lines />
        <Card className="p-[4px] overflow-y-scroll sm:mt-6 md:mt-0">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>Transcations Invoice for Orders</CardDescription>
          </CardHeader>
          <CardContent>
            <TableDemo />
          </CardContent>
        </Card>
        <Card className="p-[4px] sm:mt-6 md:mt-0">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>List of Users</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTableDemo />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
