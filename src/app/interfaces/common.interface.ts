import { IApiBaseMeta, IAppConfig } from 'common-service';

//#region interface
export interface IEnvironmentConFig extends IAppConfig {}
export interface ICustomSVG {
    key: string;
    path: string;
}
export interface ITableLayoutProps {
  data?: any[];
  expandFilter?: boolean;
  showExpand?: boolean;
  showReset?: boolean;
  showRefresh?: boolean;
  showExportExcel?: boolean;
  showDefaultButtons?: boolean;
  showSummarize?: boolean;
  showPagination?: boolean;
  minWidth?: number;
  maxHeight?: string;
  no_data_msg?: string;
  showTable?: boolean;
  param?: IApiBaseMeta;
  alertReset?: boolean;
  nzWidthConfig?: string[];
  nzPageSizeOptions?: number[];
}

//#region type
