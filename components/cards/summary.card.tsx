// summary section in profile page
"use client";
import { UserDataProps } from "@/lib/user-details";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function SummaryCard({ description }: UserDataProps) {
  return (
    <Card  >
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>

      <CardContent>
        {description ? (
          <p className="">{description}</p>
        ) : (
          <p className="text-slate-500">The user has no summary ....🕵️</p>
        )}
      </CardContent>
    </Card>
  );
}
