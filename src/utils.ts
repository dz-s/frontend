export default class {
  static shuffle<T>(arr: Array<T>): Array<T> {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
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