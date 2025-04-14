import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { mastra } from './mastra';
import { AgentType } from './mastra/agents';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {
  async getStreamingAgent(question: string): Promise<Observable<{ data: { content: string } }>> {
    const agent = mastra.getAgent(AgentType.QA);
 
    const result = await agent.stream(question);

     return new Observable( subscriber => {
      const randomData = [faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.paragraph()];
      try {
        for (const part of randomData) {
          subscriber.next({ data: { content: part } });
        }
        subscriber.complete();
      } catch (error) {
        subscriber.error(error);
      }
    });
   }
 }
