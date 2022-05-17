export default class Actions {
  static preset(type: 'get' | 'set', num: Number): Object {
    switch (type) {
      case 'set':
        if (num > 4) {
          return {};
        }

        return {
          'smartlife.cam.ipcamera.ptz': {
            'set_run_to_preset': {
              'index': num
            }
          }
        };
      case 'get':
      default:
        return {};
    }
  }

  static move(type: 'get' | 'set', dir: string, speed: Number): Object {
    switch (type) {
      case 'set':
        if (['left', 'up', 'right', 'down'].indexOf(dir) === -1 || speed < 1 || speed > 10) {
          return {};
        }

        return {
          'smartlife.cam.ipcamera.ptz': {
            'set_move': {
              'direction': dir,
              'speed': speed
            }
          }
        };
      case 'get':
      default:
        return {};
    }
  }

  static position(type: 'get' | 'set', x: Number, y: Number): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.ptz': {
            get_position: {}
          }
        };

      case 'set':
        return {
          'smartlife.cam.ipcamera.ptz': {
            set_target: {
              x,
              y
            }
          }
        };

      default:
        return {};
    }
  }

  static stop(type: 'get' | 'set'): Object {
    switch (type) {
      case 'set':
        return {
          'smartlife.cam.ipcamera.ptz': {
            'set_stop': {}
          }
        };
      case 'get':
      default:
        return {};
    }
  }

  static stream(type: 'get' | 'set', view: any) {// TODO
    // view the stream or just return buffer
  }

  static streamToFile(type: 'get' | 'set', seconds: Number) {// TODO
    // store n seconds to file
  }

  static streamToStream(type: 'get' | 'set', format: string) {// TODO
    // restream the stream in better format
  }

  static vodStream(type: 'get' | 'set', view: any) {// TODO
    // view the stream or just return buffer
  }

  static speak(type: 'get' | 'set', audioStream: any) {// TODO
    // send audio stream to camera
  }

  static snapshot(type: 'get' | 'set'): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.relay': {
            'get_preview_snapshot': {}
          }
        };

      case 'set':
      default:
        return {};
    }
  }

  static events(type: 'get' | 'set', startTime: Number, endTime: Number): Object {
    switch (type) {
      case 'get':
        if (startTime >= endTime) {
          return {};
        }

        return {
          'smartlife.cam.ipcamera.vod': {
            'get_detect_zone_list': {
              'start_time': startTime,
              'end_time': endTime
            }
          }
        };

      case 'set':
      default:
        return {};
    }
  }

}