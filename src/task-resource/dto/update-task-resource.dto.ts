import { PartialType } from '@nestjs/swagger';
import { CreateTaskResourceDto } from './create-task-resource.dto';

export class UpdateTaskResourceDto extends PartialType(CreateTaskResourceDto) {}
