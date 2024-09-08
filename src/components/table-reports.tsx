import React, { useEffect, useState } from "react";
import { tableReportsData } from "../types";
import TableBody from "./table-body";
import TableHead from "./table-header";

const TableReports: React.FC = () => {
  // State to hold the table data fetched from the API
  const [data, setData] = useState<tableReportsData>();

  // State to track the currently hovered row
  const [hoverRow, setHoverRow] = useState<null | number>(null);

  // State to track the currently hovered column
  const [hoverColl, setHoverCol] = useState<null | number>(null);

  useEffect(() => {
    // Function to get data table from the Api
    const getTableReports = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/3dc81d1e-c1c5-4a45-9f2f-1be8578bf15e"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTableReports();
  }, []);

  // Display a loading message while data is being fetched
  if (!data) return <div className="text-center text-4xl">Loading...</div>;

  return (
    <div className="flex min-w-[850px] justify-center">
      <table className="flex flex-col gap-4">
        {/* Render table header */}
        <TableHead
          hoverColl={hoverColl}
          columns={data?.columns}
          setHoverCol={setHoverCol}
        />
        {/* Render table body */}
        <TableBody
          data={data}
          hoverColl={hoverColl}
          hoverRow={hoverRow}
          setHoverRow={setHoverRow}
        />
      </table>
    </div>
  );
};

export default TableReports;
