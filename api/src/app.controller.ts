import { Controller, Sse, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Sse('ask')
  async ask(@Query('question') question: string = 'SystemZero - CFO Copilot'): Promise<Observable<{ data: { content: string } }>> {
    return await this.appService.getStreamingAgent(question);
  }
}
