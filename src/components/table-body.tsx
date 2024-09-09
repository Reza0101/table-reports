import { setState, tableReportsData } from "../types";
import GradientComponent from "./gradient-component";

const TableBody = ({
  data,
  setHoverCel,
  hoverColl,
  hoverRow,
  setHoverRow,
  hoverCel,
}: {
  data: tableReportsData;
  setHoverCel: any,
  hoverCel: {row: number, col: number} | null
  hoverColl: number | null;
  hoverRow: number | null;
  setHoverRow: setState;
}) => {
  return (
    <tbody className="border-border-primary p-6 gap-x-4 grid grid-cols-8 border-2 rounded-xl">
      {/* Render rows table */}
      <tr className="flex custom-borderv gap-4 pb-0.5 right-0 sticky rounded-md bg-white flex-col col-span-1 row-span-1">
        {data?.rows.map((item: string, index: number) => (
          <td
            onMouseLeave={() => setHoverRow(null)} // Reset row hover state when mouse leaves
            onMouseEnter={() => setHoverRow(index)} // Set row hover state when mouse enters
            className={`cursor-pointer text-primary-secondary h-10 flex items-center justify-center min-w-14 transition-colors rounded-md text-center duration-300 
            ${index === data.rows.length - 1 && "mt-3"}
            ${hoverRow === index && "bg-highlight-primary-blue text-white"}
            ${hoverCel?.row === index && "bg-highlight-primary-blue text-white"}
            `}
            key={index}
          >
            {item}
          </td>
        ))}
      </tr>
      <tr className="col-span-7 h-fit grid-rows-6 row-span-6">
        {data?.data
          .slice(0, data?.data.length)
          .map((item: number[], indexParent: number) => (
            <tr
              className={`
              ${indexParent === data.rows.length - 1 && "border-t-2 border-border-primary pt-3"}

              grid custom-margin gap-x-4 grid-cols-7`}
              key={indexParent}
            >
              {item.map((item: number, index: number) => (
                <td 
                onMouseEnter={() => setHoverCel({row: indexParent, col: index})}
                onMouseLeave={() => setHoverCel(null)}
                className={`min-w-14 text-center self-center`} key={index}>
                  <GradientComponent hoverRow={hoverRow} hoverColl={hoverColl} data={data.rows} index={index} indexParent={indexParent} value={item} />
                </td>
              ))}
            </tr>
          ))}
      </tr>
    </tbody>
  );
};
export default TableBody;
