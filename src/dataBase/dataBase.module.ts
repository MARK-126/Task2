import { Module } from '@nestjs/common';
import { dataBaseProviders } from './dataBase.providers';

@Module({
  providers: [...dataBaseProviders],
  exports: [...dataBaseProviders],
})
export class DatabaseModule {}
