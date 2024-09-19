import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskRunsService } from './task-runs.service';
// import { CreateTaskRunDto } from './dto/create-task-run.dto';

@Controller('task-runs')
export class TaskRunController {
  constructor(private readonly taskRunService: TaskRunsService) {}

  // @Post()
  // create(@Body() createTaskRunDto: CreateTaskRunDto) {
  //   return this.taskRunService.create(createTaskRunDto);
  // }

  @Get()
  findAll() {
    return this.taskRunService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskRunService.findOne(+id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.taskRunService.remove(+id);
  // }
}
