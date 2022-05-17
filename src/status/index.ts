export default class Status {
  static info(type: 'get' | 'set'): Object {
    switch (type) {
      case 'get':
        return {
          'system': {
            'get_sysinfo': {}
          }
        };

      case 'set':
      default:
        return {};
    }
  }

  static card(type: 'get' | 'set'): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.sdCard': {
            'get_sd_card_state': {}
          }
        };

      case 'set':
      default:
        return {};
    }
  }

  static cardEnc(type: 'get' | 'set'): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.sdCard': {
            'get_sd_enc_config': {}
          }
        };

      case 'set':
      default:
        return {};
    }
  }

  static cloud(type: 'get' | 'set'): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.cloud': {
            'get_info': {}
          }
        };

      case 'set':
      default:
        return {};
    }
  }

  static time(type: 'get' | 'set'): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.dateTime': {
            'get_status': {}
          }
        };

      case 'set':
      default:
        return {};
    }
  }

  static presets(type: 'get' | 'set'): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.ptz': {
            'get_all_preset': {}
          }
        };

      case 'set':
      default:
        return {};
    }
  }

  static vod(type: 'get' | 'set', playerId: string): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.vod': {
            'get_vod_occupied_state': {
              'player_id': playerId
            }
          }
        };

      case 'set':
      default:
        return {};
    }
  }

}