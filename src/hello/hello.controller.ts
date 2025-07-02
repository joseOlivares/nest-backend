import { Controller, Get, HttpCode, ParseIntPipe, Query } from '@nestjs/common';
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

  //Probando Custom Validation pipes
  @Get('greeting')
  getGreeting(@Query(ValidateUserPipe) query: { name?: string; age?: number }) {
    console.log(typeof query.name, typeof query.age);
    // Si no se envian los parametros, se asignan valores por defecto
    return `Hello ${query.name || 'Guest'}! You are ${query.age ? query.age + ' years old' : 'of unknown age'}.`;
  }

  //Probando ParseIntPipe
  @Get('greeting2')
  getGreeting2(@Query('name') name?: string, @Query('age', ParseIntPipe) age?: number) {
    //Aunque en el query le decimos los tipos de los parametros,
    //en realidad son de tipo string, por lo que debemos convertirlos a number si es necesario
    //En este cso estamos unsando un ParseIntPipe para convertir age a number
    console.log(typeof name, typeof age);
    // Si no se envian los parametros, se asignan valores por defecto
    return `Hello ${name || 'Guest'}! You are ${age ? age + ' years old' : 'of unknown age'}.`;
  }

}
