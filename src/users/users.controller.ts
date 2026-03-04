import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private prisma: PrismaService) {}

  @Get()
  findAll() { return this.prisma.user.findMany(); }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.user.findUnique({ where: { id: Number(id) }, include: { tasks: true } });
  }

  @Post()
  create(@Body() dto: CreateUserDto) { return this.prisma.user.create({ data: dto }); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.prisma.user.delete({ where: { id: Number(id) } }); }
}
