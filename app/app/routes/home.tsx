'use client'
import type { Route } from "./+types/coding-test";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "System Zero" },
    { name: "description", content: "Coding test" },
  ];
}

export default function CodingTest() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>System Zero</CardTitle>
          <CardDescription>Coding test</CardDescription>
        </CardHeader>
        <CardContent>
          <main className="flex min-h-[300px] items-center justify-center">
            <p className="text-muted-foreground">Coding test content will go here</p>
          </main>
        </CardContent>
      </Card>
    </div>
  );
}
