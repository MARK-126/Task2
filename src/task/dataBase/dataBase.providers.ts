import { DataSource } from 'typeorm';
import { Task } from '../entities/task.entity';

export const dataBaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'DbNestjs',
        entities: [Task],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
