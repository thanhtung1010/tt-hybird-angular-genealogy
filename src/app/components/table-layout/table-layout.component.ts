import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnChanges, Output, TemplateRef } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { AppConfigService, AssetsLink, IApiBaseMeta } from 'common-service';
import { ITableLayoutProps } from '@interfaces';
import { EmptyComponent } from '@components';
import { TableLayoutPropsDto } from '@dtos';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'tt-table-layout',
  templateUrl: './table-layout.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzCollapseModule,
    NzToolTipModule,
    TranslateModule,
    NzPopconfirmModule,
    NzTableModule,
    NzPaginationModule,
    EmptyComponent,
    AssetsLink,
    NzSkeletonModule,
  ],
})
export class TableLayoutComponent implements OnChanges {
  @Input() props!: ITableLayoutProps;
  @Input() data: unknown[] = [];
  @Input() loading: boolean = true;
  @Input() allowFilter: boolean = true;
  @Input() nzLoadingIndicator!: TemplateRef<any>;

  @Output() oReset: EventEmitter<any> = new EventEmitter(undefined);
  @Output() oRefresh: EventEmitter<any> = new EventEmitter(undefined);
  @Output() oChangeParams: EventEmitter<any> = new EventEmitter(undefined);

  @Input() expandFilter: boolean = false;
  @Output() expandFilterChange: EventEmitter<boolean> = new EventEmitter();

  @Input() showFilterMb: boolean = false;
  @Output() showFilterMbChange: EventEmitter<boolean> = new EventEmitter();

  private appConfigService = inject(AppConfigService);

  defaultPageSize: number = this.appConfigService.config.value.defaultPageSize || 10;
  currentParams: IApiBaseMeta = {
    totalPages: 0,
    pageNumber: 0,
    pageSize: this.defaultPageSize,
  };
  stateProps: TableLayoutPropsDto = TableLayoutPropsDto.createEmpty();
  column = {
    left: 16,
    right: 8,
  };

  constructor() {}

  ngOnChanges() {
    if (this.props) {
      this.stateProps = TableLayoutPropsDto.fromJson(this.props ?? {});
    }
    if (this.stateProps.param) {
      this.currentParams = this.stateProps.param;
    }
  }

  //#region Output Emit event
  onQueryParamsChange(evt: NzTableQueryParams | number, type: string) {
    let _params: IApiBaseMeta = { ...(this.currentParams as any) };
    switch (type) {
      case 'table':
        _params.pageNumber = (evt as NzTableQueryParams).pageIndex;
        _params.pageSize =
          (evt as NzTableQueryParams).pageSize < this.defaultPageSize
            ? this.defaultPageSize
            : (evt as NzTableQueryParams).pageSize;
        // if ((evt as NzTableQueryParams).filter.length > 0) {
        //   _params.filter = (evt as NzTableQueryParams).filter;
        // }
        // if ((evt as NzTableQueryParams).sort.length > 0) {
        //   _params.sort = (evt as NzTableQueryParams).sort;
        // }
        break;
      case 'size':
        _params.pageSize = evt as number;
        _params.pageNumber = 1;
        break;
      default:
        _params.pageNumber = evt as number;
        break;
    }
    if (JSON.stringify(_params) !== JSON.stringify(this.currentParams)) {
      this.currentParams = { ..._params };
      this.oChangeParams.emit(this.currentParams);
    }
  }
  onReload() {
    this.oReset.emit(this.currentParams);
  }
  onRefresh() {
    this.oRefresh.emit(this.currentParams);
  }
  onToggleExpand() {
    this.expandFilter = !this.expandFilter;
    this.expandFilterChange.emit(this.expandFilter);
  }
  onToggleShowFilterMb() {
    this.expandFilter = !this.expandFilter;
    this.expandFilterChange.emit(this.expandFilter);
  }
  //#endregion
}
