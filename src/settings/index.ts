export default class Settings {
  static power(type: 'get' | 'set', enable: boolean): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.switch': {
            get_is_enable: {}
          }
        };

      case 'set':
        const status = enable ? 'on' : 'off';
        return {
          'smartlife.cam.ipcamera.switch': {
            set_is_enable: {
              value: status
            }
          }
        };

      default:
        return {};
    }
  }

  static recordVideo(type: 'get' | 'set', enable: boolean): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.delivery': {
            'get_local_clip_is_enable': {}
          }
        };

      case 'set':
        const status = enable ? 'on' : 'off';
        return {
          'smartlife.cam.ipcamera.delivery': {
            'set_local_clip_is_enable': {
              'value': status
            }
          }
        };

      default:
        return {};
    }
  }

  static detectMotion(type: 'get' | 'set', enable: boolean): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.motionDetect': {
            'get_is_enable': {}
          }
        };

      case 'set':
        const status = enable ? 'on' : 'off';
        return {
          'smartlife.cam.ipcamera.motionDetect': {
            'set_is_enable': {
              'value': status
            }
          }
        };

      default:
        return {};
    }
  }

  static detectMotionSensitivity(type: 'get' | 'set', sensitivity: 'low' | 'medium' | 'high'): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.motionDetect': {
            'get_sensitivity': {}
          }
        };

      case 'set':
        // low, medium, high
        return {
          'smartlife.cam.ipcamera.motionDetect': {
            'set_sensitivity': {
              'value': sensitivity
            }
          }
        };

      default:
        return {};
    }
  }

  static detectMotionTime(type: 'get' | 'set', dayTime: number, nightTime: number): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.motionDetect': {
            'get_min_trigger_time': {}
          }
        };

      case 'set':
        // 1500, 1500
        return {
          'smartlife.cam.ipcamera.motionDetect': {
            'set_min_trigger_time': {
              'day_mode_value': dayTime,
              'night_mode_value': nightTime
            }
          }
        };

      default:
        return {};
    }
  }

  static detectBabyCry(type: 'get' | 'set', enable: boolean): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.intelligence': {
            'get_bcd_enable': {}
          }
        };

      case 'set':
        const status = enable ? 'on' : 'off';
        return {
          'smartlife.cam.ipcamera.intelligence': {
            'set_bcd_enable': {
              'value': status
            }
          }
        };

      default:
        return {};
    }
  }

  static detectPerson(type: 'get' | 'set', enable: boolean): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.intelligence': {
            'get_pd_enable': {}
          }
        };

      case 'set':
        const status = enable ? 'on' : 'off';
        return {
          'smartlife.cam.ipcamera.intelligence': {
            'set_pd_enable': {
              'value': status
            }
          }
        };

      default:
        return {};
    }
  }

  static recordAudio(type: 'get' | 'set', enable: boolean): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.delivery': {
            'get_clip_audio_is_enable': {}
          }
        };

      case 'set':
        const status = enable ? 'on' : 'off';
        return {
          'smartlife.cam.ipcamera.delivery': {
            'set_clip_audio_is_enable': {
              'value': status
            }
          }
        };

      default:
        return {};
    }
  }

  static detectAudio(type: 'get' | 'set', enable: boolean): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.soundDetect': {
            'get_is_enable': {}
          }
        };

      case 'set':
        const status = enable ? 'on' : 'off';
        return {
          'smartlife.cam.ipcamera.soundDetect': {
            'set_is_enable': {
              'value': status
            }
          }
        };

      default:
        return {};
    }
  }

  static detectAudioSensitivity(type: 'get' | 'set', sensitivity: 'low' | 'medium' | 'high'): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.soundDetect': {
            'get_sensitivity': {}
          }
        };

      case 'set':
        // low, medium, high
        return {
          'smartlife.cam.ipcamera.soundDetect': {
            'set_sensitivity': {
              'value': sensitivity
            }
          }
        };

      default:
        return {};
    }
  }

  static motionTracking(type: 'get' | 'set', enable: boolean): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.ptz': {
            'get_ptz_tracking_is_enable': {}
          }
        };

      case 'set':
        const status = enable ? 'on' : 'off';
        return {
          'smartlife.cam.ipcamera.ptz': {
            'set_ptz_tracking_is_enable': {
              'value': status
            }
          }
        };

      default:
        return {};
    }
  }

  static patrol(type: 'get' | 'set', enable: boolean): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.ptz': {
            'get_patrol_is_enable': {}
          }
        };

      case 'set':
        const status = enable ? 'on' : 'off';
        return {
          'smartlife.cam.ipcamera.ptz': {
            'set_patrol_is_enable': {
              'value': status
            }
          }
        };

      default:
        return {};
    }
  }

  static format(type: 'get' | 'set'): Object {
    switch (type) {
      case 'get':
      default:
        return {};

      case 'set':
        return {
          'smartlife.cam.ipcamera.sdCard': {
            'set_format_sd_card': {}
          }
        };
    }
  }

  static resolution(type: 'get' | 'set', resolution: 'string'): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.videoControl': {
            'get_resolution': {}
          }
        };

      case 'set':
        // 1920x1080, etc
        return {
          'smartlife.cam.ipcamera.videoControl': {
            'set_resolution': {
              'value': resolution
            }
          }
        };

      default:
        return {};
    }
  }

  static rotation(type: 'get' | 'set', degree: number): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.videoControl': {
            'get_rotation_degree': {}
          }
        };

      case 'set':
        // 0, 180
        return {
          'smartlife.cam.ipcamera.videoControl': {
            'set_rotation_degree': {
              'value': degree
            }
          }
        };

      default:
        return {};
    }
  }

  static nightVision(type: 'get' | 'set', state: 'auto' | 'day' | 'night'): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.dayNight': {
            'get_mode': {}
          }
        };

      case 'set':
        // auto, day, night
        return {
          'smartlife.cam.ipcamera.dayNight': {
            'set_mode': {
              'value': state
            }
          }
        };

      default:
        return {};
    }
  }

  static statusLED(type: 'get' | 'set', enable: boolean): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.led': {
            'get_status': {}
          }
        };

      case 'set':
        const status = enable ? 'on' : 'off';
        return {
          'smartlife.cam.ipcamera.led': {
            'set_status': {
              'value': status
            }
          }
        };

      default:
        return {};
    }
  }

  static doNotDisturb(type: 'get' | 'set', enable: boolean): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.dndSchedule': {
            'get_dnd_enable': {}
          }
        };

      case 'set':
        const status = enable ? 'on' : 'off';
        return {
          'smartlife.cam.ipcamera.dndSchedule': {
            'set_dnd_enable': {
              'value': status
            }
          }
        };

      default:
        return {};
    }
  }

  static time(type: 'get' | 'set', time: number): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.dateTime': {
            'get_time': {}
          }
        };

      case 'set':
        // 1631639476
        return {
          'smartlife.cam.ipcamera.dateTime': {
            'set_time': {
              'epoch_sec': time
            }
          }
        };

      default:
        return {};
    }
  }

  static timezone(type: 'get' | 'set', timezone: string, area: string): Object {
    switch (type) {
      case 'get':
        return {
          'smartlife.cam.ipcamera.dateTime': {
            'get_time_zone': {}
          }
        };

      case 'set':
        // UTC-05:00, America/New_York
        return {
          'smartlife.cam.ipcamera.dateTime': {
            'set_time_zone': {
              timezone,
              area
            }
          }
        };

      default:
        return {};
    }
  }

}