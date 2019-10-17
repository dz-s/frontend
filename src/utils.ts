import axios from "axios";

export default class {
  static shuffle<T>(arr: Array<T>): Array<T> {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  static async fetchSize(url: string): Promise<number> {
    const {headers} = await axios.head(`https://cors-anywhere.herokuapp.com/${url}`);
    return parseInt(headers["content-length"]);
  }

  static formatSize(KB: number): string {
    if (KB === 0)
      return "0 Bytes";

    const SIZES = ["Bytes", "KB", "MB"];
    const MB = 1000;
    const i = Math.floor(Math.log(KB) / Math.log(MB));
    return `${parseFloat((KB / Math.pow(MB, i)).toFixed(2))} ${SIZES[i]}`;
  }
}