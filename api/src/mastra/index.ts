
import { Mastra } from '@mastra/core';
import { qaAgent } from './agents'; 
import { createLogger } from '@mastra/core';


/**
 * Mastra instance
 */
export const mastra = new Mastra({
    workflows: {  },
    agents: { qaAgent },
    logger: createLogger({
      name: 'Mastra',
      level: 'error',
    }),
    serverMiddleware: [
      {
        handler: (c, next) => {
          console.log('Middleware called');
          return next();
        },
      },
    ],
  });
  
  
  