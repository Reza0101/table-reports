import { useEffect, useState } from "react"
import formatNegativeNumbers from "../helpers/function";

interface tableReportsData {
    rows: [],
    columns: [],
    data: []
}


export default function TableReports() {
    const [data, setData] = useState<tableReportsData>();
    const [hoverRow, setHoverRow] = useState<null | number>(null);
    const [hoverColl, setHoverCol] = useState<null | number>(null);


    useEffect(() => {
        const getTableReports = async () => {
            const response = await fetch('https://run.mocky.io/v3/3dc81d1e-c1c5-4a45-9f2f-1be8578bf15e');
            const data = await response.json();
            setData(data);
        }
        getTableReports();
    }, [])

    const colors: string[] = [
        "bg-red-100 text-black",
        "bg-red-200 text-black",
        "bg-red-300 text-black",
        "bg-red-400 text-black",
        "bg-red-500 text-black",
        "bg-red-600 text-black",
        "bg-red-700 text-black",
        "bg-red-800 text-black",
        "bg-red-900 text-black",
    ]

    const colorsGreen: string[] = [
        "bg-green-100",
        "bg-green-200",
        "bg-green-300",
        "bg-green-400",
        "bg-green-500",
        "bg-green-600",
        "bg-green-700",
        "bg-green-800",
        "bg-green-900",
    ]

    return (
        <div className="flex min-w-[850px] justify-center">
            <table className="flex flex-col gap-4">
                <thead>
                    <tr className="grid px-6 text-center grid-cols-8 bg-primary-primary rounded-xl py-2">
                        {
                            data?.columns.map((item: string, index: number) =>
                                <th onMouseLeave={() => setHoverCol(null)} onMouseEnter={() => setHoverCol(index)} className={`cursor-pointer mx-4 text-center text-primary-secondary min-w-14 transition-colors rounded-md px-2 py-1 duration-300 ${hoverColl === index && "bg-highlight-primary-blue text-white"}`} key={index}>{item}</th>
                            )
                        }
                        <th className="px-2 py-1 min-w-14 text-black">سال</th>
                    </tr>
                </thead>
                <tbody className="border-border-primary grid grid-cols-8 gap-3 border-2 rounded-xl p-6">
                    <tr className="col-span-7 grid-rows-6 row-span-6">
                        {
                            data?.data.slice(0, data?.data.length).map((item: [], indexParent: number) =>
                                <tr className="grid mt-4 gap-4 grid-cols-7" key={indexParent}>
                                    {item.map((item: number, index) => (
                                        <td className={`min-w-14 text-center self-center`} key={index}>
                                            <p className={`text-center rounded-md border border-border-primary transition-colors duration-300 py-2 
                                            ${hoverColl === index && item > 0 && colorsGreen[item]}
                                            ${hoverColl === index && item < 0 && colors[Math.abs(item)]}
                                            ${hoverRow === indexParent && item > 0 && colorsGreen[item]}
                                            ${hoverRow === indexParent && item < 0 && colors[Math.abs(item)]}
                                            ${hoverRow === indexParent && ""} 
                                            ${indexParent === hoverRow && ""} 
                                            ${hoverColl == null && hoverRow == null && item < 0 && colors[Math.abs(item)]}
                                            ${hoverColl == null && hoverRow == null && item > 0 && colorsGreen[+item]}
                                            rounded-md`}>
                                                {
                                                    formatNegativeNumbers(item)
                                                }
                                            </p>
                                        </td>
                                    ))}
                                </tr>
                            )
                        }
                    </tr>
                    <tr className="flex  right-0 gap-1 flex-col col-span-1 row-span-1">
                        {
                            data?.rows.map((item: string, index: number) => (
                                <td onMouseLeave={() => setHoverRow(null)} onMouseEnter={() => setHoverRow(index)} className={`cursor-pointer mt-4 text-primary-secondary py-2 min-w-14 transition-colors rounded-md p-2 text-center duration-300 ${hoverRow === index && "bg-highlight-primary-blue text-white"}`} key={index}>{item}</td>
                            ))
                        }

                    </tr>
                </tbody>
            </table>
        </div>
    )
}