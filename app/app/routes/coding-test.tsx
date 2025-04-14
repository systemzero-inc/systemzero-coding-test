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
          <main className="flex min-h-[300px] items-center justify-center w-full">
            {/* CAN BE REMOVED DURING THE TEST */}
            <div className="max-w-3xl space-y-6">
              <div className="space-y-4">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Frontend Technical Assessment</h2>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>
                      Welcome to the frontend portion of our technical assessment. This component, located at
                      <code className="mx-1 px-2 py-1 bg-muted rounded-sm">app/app/routes/coding-test.tsx</code>,
                      will be your starting point for implementing a streaming chat interface.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Primary Objectives</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium">Streaming Chat Implementation</h4>
                      <p className="text-sm text-muted-foreground">
                        Create a chat interface that connects to our backend API and handles server-sent events (SSE) 
                        for streaming LLM responses.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">State Management</h4>
                      <ul className="list-disc pl-6 text-sm text-muted-foreground">
                        <li>Chat history and messages</li>
                        <li>Loading and error states</li>
                        <li>Stream connection status</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium">Code Quality</h4>
                      <ul className="list-disc pl-6 text-sm text-muted-foreground">
                        <li>Clean, maintainable component architecture</li>
                        <li>Proper TypeScript usage and type safety</li>
                        <li>Error boundary implementation</li>
                        <li>Loading state handling</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium">Testing</h4>
                      <ul className="list-disc pl-6 text-sm text-muted-foreground">
                        <li>Unit tests for utility functions</li>
                        <li>Component tests for UI elements</li>
                        <li>Integration tests for API interactions</li>
                        <li>Mock service workers for API testing</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Technical Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                      <li>Use React hooks for state management (useState, useReducer, useContext as needed)</li>
                      <li>Implement proper error handling and display error messages to users</li>
                      <li>Handle connection interruptions and reconnection logic</li>
                      <li>Ensure accessibility standards are met</li>
                      <li>Optimize performance with proper memo usage and render optimization</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5">
                  <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>
                      Begin by creating a chat input component and connecting it to the streaming endpoint. 
                      The backend endpoint will be available at <code className="bg-muted px-1 rounded-sm">/api/chat/stream</code>.
                      Remember to handle the SSE connection appropriately and implement proper cleanup in your useEffect hooks.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            {/* CAN BE REMOVED DURING THE TEST */}
            
            {/* START OF THE TEST */}

            

          </main>
        </CardContent>
      </Card>
    </div>
  );
}
