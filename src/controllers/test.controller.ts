import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get()
    get() {
        return { name: 'Will', age: 35};
    }
}