import { Module } from '@nestjs/common';
import { TestController } from '../controllers/test.controller';


@Module({
    modules: [],
    controllers: [TestController]
})
export class ApplicationModule {}