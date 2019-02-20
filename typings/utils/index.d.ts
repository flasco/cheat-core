import * as cv from 'opencv4nodejs';

/**
 * 转 base64 图片字符串为 opencv 的 Mat
 * @param base64text base64编码的图片字符串
 */
export declare function base642Mat(base64text: string): cv.Mat;

/**
 * 休眠
 * @param ms 毫秒
 */
export declare function delay(ms: number): Promise<void>;
