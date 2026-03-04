import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// use the official PostgreSQL driver adapter for Prisma v7
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // Prisma v7 demands either an `adapter` or `accelerateUrl` option when
    // creating the client.  The simplest approach is to install and use the
    // official PostgreSQL adapter package (`@prisma/adapter-pg`), which already
    // implements the `SqlDriverAdapterFactory` interface expected by the
    // generated client.  We read the connection string from our environment to
    // keep things consistent with `prisma.config.ts`.
    const connectionString = process.env.DATABASE_URL!;
    const adapter = new PrismaPg({ connectionString });

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}