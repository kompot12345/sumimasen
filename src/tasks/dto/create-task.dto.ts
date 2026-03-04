import { ApiProperty } from '@nestjs/swagger';
export class CreateTaskDto {
  @ApiProperty() title: string;
  @ApiProperty() status: string;
  @ApiProperty() userId: number;
  @ApiProperty() boardId: number;
}
