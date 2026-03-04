import { Controller, Get, Post, Delete, Body, Param, Query } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @ApiQuery({ name: 'status', required: false })
  findAll(@Query('status') status?: string) {
    return this.prisma.task.findMany({ where: status ? { status } : {} });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.task.findUnique({ where: { id: Number(id) }, include: { user: true } });
  }

  @Post()
  create(@Body() dto: CreateTaskDto) { return this.prisma.task.create({ data: dto }); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.prisma.task.delete({ where: { id: Number(id) } }); }
}
