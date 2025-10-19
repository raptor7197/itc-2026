"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./chart"
const chartData = [
  
  { browser: "Speakers", visitors: 56, fill: "rgb(7, 58, 158)" },
  { browser: "Presentations", visitors: 65, fill: "rgb(3, 35, 101)" },
  { browser: "Countries", visitors: 17, fill: "rgb(141, 188, 255)" },
  { browser: "Reviewers", visitors: 70, fill: "rgb(92, 165, 249)" }
]

const chartConfig = {
  visitors: {
    label: "Technical Sessions",
  },

} satisfies ChartConfig

export default function Highlights() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
        <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] text-white"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-3xl  font-bold"
                        >
                          190
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-gray-100"
                        >
                          Organizations
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm text-white">
        <div className="flex items-center gap-2 font-extrabold text-xl leading-none">
        398 Submissions <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
        800 Attendees | 100+ Fellowships
        </div>
      </CardFooter>
    </Card>
  )
}
