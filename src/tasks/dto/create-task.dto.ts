import { OmitType } from '@nestjs/swagger';
import { TaskDto } from './task.dto';
export class CreateTaskDto extends OmitType(TaskDto, ['id'] as const) {}
//TODO: Validar porqué OmitType se marca con error aunque fucniona según la documentacion
//DeppSeek dice que es un falso positivo del linter
