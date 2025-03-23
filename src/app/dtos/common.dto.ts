import { ITableLayoutProps } from '@interfaces';
import { Exclude, Expose, Type } from 'class-transformer';
import { BaseDto, Default, IApiBaseMeta } from 'common-service';

@Exclude()
export class TableLayoutPropsDto extends BaseDto implements ITableLayoutProps {
    @Expose()
    @Default(false)
    showExpand!: boolean;

    @Expose()
    @Default(true)
    showReset!: boolean;

    @Expose()
    @Default(true)
    showRefresh!: boolean;

    @Expose()
    @Default(false)
    showExportExcel!: boolean;

    @Expose()
    @Default(true)
    showDefaultButtons!: boolean;

    @Expose()
    @Default(false)
    showSummarize!: boolean;

    @Expose()
    @Default(false)
    showPagination!: boolean;

    @Expose()
    minWidth!: number;

    @Expose()
    maxHeight!: string;

    @Expose()
    no_data_msg!: string;

    @Expose()
    showTable!: boolean;

    @Expose()
    param!: IApiBaseMeta;

    @Expose()
    alertReset!: boolean;

    @Expose()
    nzWidthConfig!: string[];

    @Expose()
    nzPageSizeOptions!: number[];

}
