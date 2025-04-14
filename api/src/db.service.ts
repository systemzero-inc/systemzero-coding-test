import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
    await this.seedDatabase();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // Optional: Clean up DB in testing
  async cleanDatabase() {
    // Example: await this.user.deleteMany();
  }

  async seedDatabase() {
    // create test user
    const user = await this.user.findFirst({
      where: {
        email: 'test@test.com',
      },
    });

    if (!user) {
      await this.user.create({
        data: {
          email: 'test@test.com',
          passwordHash: 'hash', 
          name: 'Coding Test User',
        },
      });
    }
  }
}
