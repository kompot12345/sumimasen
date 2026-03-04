import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersController } from './users/users.controller';
import { BoardsController } from './boards/boards.controller';
import { TasksController } from './tasks/tasks.controller';

@Module({
  controllers: [UsersController, BoardsController, TasksController],
  providers: [PrismaService],
})
export class AppModule {}