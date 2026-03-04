import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateBoardDto } from './dto/create-board.dto';

@ApiTags('Boards')
@Controller('boards')
export class BoardsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  findAll() { return this.prisma.board.findMany(); }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.board.findUnique({ where: { id: Number(id) }, include: { tasks: true } });
  }

  @Post()
  create(@Body() dto: CreateBoardDto) { return this.prisma.board.create({ data: dto }); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.prisma.board.delete({ where: { id: Number(id) } }); }
}
