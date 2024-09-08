import formatPercentage from "../helpers/function";
import { tableReportsData } from "../types";

const getColorClass = (
  item: number | string,
  hoverColl: number | null,
  hoverRow: number | null,
  index: number,
  indexParent: number,
  data: any
) => {

  // Define a mapping of numerical values to Tailwind CSS color classes
  const colorClasses: { [key: string]: string } = {
    9: "bg-green-950",
    8: "bg-green-900",
    7: "bg-green-800",
    6: "bg-green-700",
    5: "bg-green-600",
    4: "bg-green-500",
    3: "bg-green-400",
    2: "bg-green-300",
    1: "bg-green-200",
    0: "bg-gray-100",
    "-1": "bg-red-100",
    "-2": "bg-red-200",
    "-3": "bg-red-300",
    "-4": "bg-red-400",
    "-5": "bg-red-500",
    "-6": "bg-red-600",
    "-7": "bg-red-700",
    "-8": "bg-red-800",
    "-9": "bg-red-900",
  };

  // Check if the current row is the last row (e.g., "Average" row)
  if (indexParent + 1 === data.length) {
    return colorClasses[String(item)] || "bg-white";
  }

  // Check if the current column is being hovered
  if (hoverColl === index) {
    return colorClasses[String(item)] || "bg-white";
  }

  // Check if the current row is being hovered
  if (hoverRow === indexParent) {
    return colorClasses[String(item)] || "bg-white";
  }

  // Default color when no column or row is hovered
  if (hoverColl == null && hoverRow == null) {
    return colorClasses[String(item)] || "bg-white";
  }
};

const TableBody = ({
  data,
  hoverColl,
  hoverRow,
  setHoverRow,
}: {
  data: tableReportsData | undefined;
  hoverColl: number | null;
  hoverRow: number | null;
  setHoverRow: any;
}) => {
  return (
    <tbody className="border-border-primary p-6 gap-x-4 grid grid-cols-8  border-2 rounded-xl">
      <tr className="col-span-7 h-fit grid-rows-6 row-span-6">
        {data?.data
          .slice(0, data?.data.length)
          .map((item: number[], indexParent: number) => (
            <tr
              className="grid custom-margin gap-x-4 grid-cols-7"
              key={indexParent}
            >
              {item.map((item: number, index: number) => (
                <td className={`min-w-14 text-center self-center`} key={index}>
                  <p
                    className={`text-center rounded-md border border-border-primary transition-colors duration-300 py-2 px-6 ${getColorClass(
                      item,
                      hoverColl,
                      hoverRow,
                      index,
                      indexParent,
                      data.rows
                    )}`}
                  >
                    {formatPercentage(item)}
                  </p>
                </td>
              ))}
            </tr>
          ))}
      </tr>
      <tr className="flex right-0 sticky rounded-md bg-white gap-4 flex-col col-span-1 row-span-1">
        {data?.rows.map((item: string, index: number) => (
          <td
            onMouseLeave={() => setHoverRow(null)} // Reset row hover state when mouse leaves
            onMouseEnter={() => setHoverRow(index)} // Set row hover state when mouse enters
            className={`cursor-pointer text-primary-secondary py-2.5 min-w-14 transition-colors rounded-md p-2 text-center duration-300 ${
              hoverRow === index && "bg-highlight-primary-blue text-white"
            }`}
            key={index}
          >
            {item}
          </td>
        ))}
      </tr>
    </tbody>
  );
};
export default TableBody;
