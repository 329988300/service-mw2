import { EggRedisOptions } from 'egg-redis';
import { ConnectionOptions } from 'typeorm';

// 数据库配置
export const orm: ConnectionOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '12345678',
  database: 'vv',
  synchronize: false,
  logging: true,
};

// redis配置
export const redis: EggRedisOptions = {
  client: {
    port: 6379, // Redis port
    host: '127.0.0.1', // Redis host
    password: '123456',
    db: 0,
  },
};
