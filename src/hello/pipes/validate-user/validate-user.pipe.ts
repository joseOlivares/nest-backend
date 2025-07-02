import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

interface UserData {
  name?: string;
  age?: number | string;
}

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: UserData, metadata: ArgumentMetadata) {
    console.log('Validating user data:', value);

    const ageNumber = parseInt(value.age?.toString() ?? '', 10) ?? NaN;


    if (value.age !== undefined && isNaN(ageNumber)) {
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }
    return { name: value.name || 'Guest', age: isNaN(ageNumber) ? undefined : ageNumber };
  }
}
