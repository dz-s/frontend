export default class {
  static async fetchSize(url: string): Promise<number> {
    const response = await fetch(`https://cors.x7.workers.dev/${url}`, {method: "HEAD"});
    const contentLength = response.headers.get("content-length");
    return parseInt(contentLength!);
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