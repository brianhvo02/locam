import Actions from './actions';

import Status from './status';

import Settings from './settings';

import { Config, defaultConf } from './models';

import Transport from './transport';

class Camera {
  cameraOpts: Config['camera'];
  transport: Transport;

  constructor(opts: Config) {
    const authOpts = Object.assign(defaultConf.auth, opts.auth);
    this.cameraOpts = Object.assign(defaultConf.camera, opts.camera, {
      token: this.#generateToken(authOpts)
    });
    this.transport = new Transport(this.cameraOpts);

    if ('logging' in opts && opts.logging) {
      console.log('Configuration:', { ...this.cameraOpts,
        ...defaultConf.metadata
      });
    }
  }

  #generateToken(authOpts: Config['auth']) {
    const p = Buffer.from(authOpts.password).toString('base64');
    return Buffer.from(`${authOpts.username}:${p}`).toString('base64');
  }

  async send(data: Object) {
    if (data === null) {
      throw new Error('Invalid Command');
    }

    return await this.transport.fetch(data);
  }

}

export { Camera, Actions, Status, Settings };
