/**
 * echart 生成图参数
 */
export interface EchartOption {
  /**
   * 图表宽度，默认 500
   */
  width: number;
  /**
   * 图表高度，默认 500
   */
  height: number;
  /**
   * echarts 图表配置
   */
  option: any;

  /**
   * 图片生成的路径，默认为空，返回 buffer 数据
   */
  path: string;
  /**
   * echarts 生成图后是否自动销毁，默认是
   */
  enableAutoDispose: boolean;
}