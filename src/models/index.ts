import { name, version } from '../../package.json';

export interface Config {
  auth: {
      username: string, 
      password: string
  },
  camera: {
      ip: string,
      port: number,
      name: string,
      source?: string,
      token?: string
  },
  logging: boolean
}

export const defaultConf = {
  metadata: {
      package: name,
      version
  },
  camera: {
      ip: '127.0.0.1',
      port: 9999,
      name: 'camera',
      source: '8a2d067d-07fa-49b9-9289-d9f694f709b4'
  },
  auth: {
      username: '',
      password: ''
  }
};
