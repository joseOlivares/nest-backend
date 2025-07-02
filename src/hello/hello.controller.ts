import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';

@Controller()
export class HelloController {
  @Get()
  getHello() {
    return 'Hello World!';
  }
  //Probando status code
  @Get('not-found')
  @HttpCode(404)
  getNotFound() {
    return 'Response 404 Not Found';
  }

  @Get('greeting')
  getGreeting(@Query(ValidateUserPipe) query: { name?: string; age?: number }) {
    console.log(typeof query.name, typeof query.age);
    // Si no se envian los parametros, se asignan valores por defecto
    return `Hello ${query.name || 'Guest'}! You are ${query.age ? query.age + ' years old' : 'of unknown age'}.`;
  }
}
