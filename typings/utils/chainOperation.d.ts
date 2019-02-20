declare module '@flasco/cheat-core/src/utils/chainOperation' {
  declare namespace actionInf {
    interface press {
      action: 'press';
      options: {
        x: number;
        y: number;
      };
    }

    interface tap {
      action: 'tap';
      options: {
        x: number;
        y: number;
      };
    }

    interface wait {
      action: 'wait';
      options: {
        ms: number;
      };
    }

    interface release {
      action: 'release';
    }
  }

  /**
   * 长按
   * @param x x坐标
   * @param y y坐标
   * @param druation 持续时间
   */
  export declare function longPress(
    x: number,
    y: number,
    druation: number
  ): [actionInf.press, actionInf.wait, actionInf.release];

  /**
   * 等待
   * @param ms 毫秒
   */
  export declare function wait(ms: number): actionInf.wait;

  /**
   * 点击
   * @param x x坐标
   * @param y y坐标
   */
  export declare function tap(x: number, y: number): actionInf.tap;
}
