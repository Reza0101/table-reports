export interface tableReportsData {
    rows: string[] | [],
    columns: string[] | [],
    data: number[][]
}
export type setState = (value:  number | null) => void