import { Row as TanstackRow, Table as TanstackTable } from "@tanstack/react-table";
import { Body, GetProps, Label, ThemeableStack, Title } from "@truststack/ui";
declare const Row: typeof ThemeableStack;
declare const Cell: typeof ThemeableStack;
declare const Text: typeof Body;
declare const HeaderCell: typeof ThemeableStack;
declare const HeaderLabel: typeof Label;
declare const TableBody: typeof ThemeableStack;
declare const TableHead: typeof ThemeableStack;
declare const TableComp: typeof ThemeableStack;
declare const TableTitle: typeof Title;
declare function TableSpinner(): JSX.Element;
type NoResultsProps = {
    readonly message?: string;
} & GetProps<typeof Row>;
declare function NoResults({ message, ...props }: NoResultsProps): JSX.Element;
type PaginationProps = {
    readonly onPageChange: (v: number) => void;
    readonly onRowsPerPageChange: (v: number) => void;
    readonly page: number;
    readonly rowsPerPage: number;
};
declare function Pagination({ onRowsPerPageChange, rowsPerPage, page, onPageChange, }: PaginationProps): JSX.Element;
declare const TextCell: typeof Cell;
declare const HeaderTextCell: typeof HeaderCell;
export declare const Table: typeof TableComp & {
    Body: typeof TableBody;
    Cell: typeof Cell;
    Head: typeof TableHead;
    HeaderCell: typeof HeaderCell;
    HeaderLabel: typeof HeaderLabel;
    HeaderTextCell: typeof HeaderTextCell;
    NoResults: typeof NoResults;
    Pagination: typeof Pagination;
    Row: typeof Row;
    Spinner: typeof TableSpinner;
    Text: typeof Text;
    TextCell: typeof TextCell;
    Title: typeof TableTitle;
};
export type TableProps = GetProps<typeof Table>;
export type TableHeadProps = GetProps<typeof TableHead>;
export type DataTableProps<TData> = {
    readonly table: TanstackTable<TData>;
    readonly pagination?: GetProps<typeof Pagination>;
    readonly loading?: boolean;
    readonly TableHeadProps?: TableHeadProps;
    readonly noResultsMessage?: string;
    readonly scrollViewHeight?: number;
    readonly expandedRow?: (row: TanstackRow<TData>) => JSX.Element;
} & TableProps;
export declare function DataTable<TData>({ table, loading, pagination, TableHeadProps, noResultsMessage, expandedRow, scrollViewHeight, ...props }: DataTableProps<TData>): JSX.Element;
type UsePaginationProps = {
    readonly rowsPerPage?: number;
};
export declare const usePagination: ({ rowsPerPage: defaultRowsPerPage }?: UsePaginationProps) => {
    page: number;
    setPage: import("react").Dispatch<import("react").SetStateAction<number>>;
    rowsPerPage: number;
    setRowsPerPage: import("react").Dispatch<import("react").SetStateAction<number>>;
    offset: number;
    limit: number;
};
export {};
//# sourceMappingURL=Table.d.ts.map