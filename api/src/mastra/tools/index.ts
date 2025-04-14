import { PrismaClient } from '@prisma/client';
import { createTool } from '@mastra/core';
import { z } from 'zod';

const prisma = new PrismaClient();

export const exampleTool = createTool({
  id: 'get-user',
  description: 'Get user details',
  inputSchema: z.object({
    title: z.string()
  }),
  execute: async ({ context }) => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: `Product ${context.title}`,
        });
      }, 100);
    });
  },
});

