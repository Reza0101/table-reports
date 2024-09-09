import { setState } from "../types";

const TableHead = ({
  setHoverCol,
  hoverCel,
  columns,
  hoverColl,
}: {
  setHoverCol: setState;
  hoverCel: {row: number, col: number} | null;
  columns: string[] | [];
  hoverColl: number | null;
}) => {
  return (
    <thead>
      <tr className="grid py-2 grid-cols-8 gap-5 px-6 bg-primary-primary rounded-xl">
        <th></th>
        {columns?.map((item: string, index: number) => (
            <th
              onMouseLeave={() => setHoverCol(null)}
              onMouseEnter={() => setHoverCol(index)}
              className={`cursor-pointer text-center flex items-center justify-center text-primary-secondary min-w-14 transition-colors rounded-md px-1.5 py-2 duration-300 ${
                hoverColl === index && "bg-highlight-primary-blue text-white"}
                ${hoverCel?.col === index && "bg-highlight-primary-blue text-white" }
              `}
              key={index}
            >
              {item}
            </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
