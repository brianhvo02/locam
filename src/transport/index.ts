import needle from 'needle';
import { Config } from '../models'

export default class Transport {
  #opts;

  constructor(opts: Config['camera']) {
    this.#opts = opts;
  }

  #encrypt(str: string): Buffer {
    let key = 171;
    let b = Buffer.alloc(0);

    for (let i of str) {
      const a = key ^ i.charCodeAt(0);
      key = a;
      b = Buffer.concat([b, Buffer.from([a])]);
    }

    return b;
  }

  #decrypt(str: Buffer): string {
    let key = 171;
    let result = '';

    for (let i of str) {
      const a = key ^ i;
      key = i;
      result += String.fromCharCode(a);
    }

    return result;
  }

  #encode(data: Buffer): Buffer {
    return Buffer.from(data);
  }

  #decode(data: string): Buffer {
    return Buffer.from(data, 'base64');
  }

  #parse(data: string): Object {
    const d = this.#decode(data);
    const r = this.#decrypt(d);
    return JSON.parse(r);
  }

  #stringifyData(data: Object): string {
    const p = {
      context: {
        source: this.#opts.source
      },
      ...data
    };
    const s = JSON.stringify(p);
    const e = this.#encrypt(s);
    const b = this.#encode(e).toString('base64');
    const u = encodeURIComponent(b);
    return u;
  }

  async fetch(command: Object): Promise<Object> {
    const str = this.#stringifyData(command);
    const req = await needle('post', `https://${this.#opts.ip}:${this.#opts.port}/data/LINKIE.json`, `content=${str}`, {
      compressed: true,
      headers: {
        'Host': `${this.#opts.ip}:${this.#opts.port}`,
        'Authorization': `Basic ${this.#opts.token}`
      },
      rejectUnauthorized: false
    });
    return this.#parse(req.body);
  }
}