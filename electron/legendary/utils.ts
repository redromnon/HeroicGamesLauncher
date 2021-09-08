import { spawn } from 'child_process';
import { legendaryBin } from '../constants';


export default class LegendaryUtils {
  /**
   * Checks Legendary Version.
   *
   * @returns version: string.
   */
  public static async checkVersion() {
    const child = spawn(legendaryBin, ['--version'])
    let version = ''
    return new Promise((res) => {
      child.stdout.on('data', (data) => {
        const info = `${data}`.split(' ')
        version = `${info[2]} - ${info[4]} ${info[5]}`.replace(',', '')
        console.log(`${data}`)
        res(version)
      })
    })
  }
}