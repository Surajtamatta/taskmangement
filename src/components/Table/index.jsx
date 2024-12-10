import React from "react";
import { ReactTabulator } from "react-tabulator"; // Tabulator.js wrapper
import "react-tabulator/lib/styles.css"; // Tabulator base styles
import "react-tabulator/css/semantic-ui/tabulator_semantic-ui.min.css"; // semantic
  import "react-tabulator/css/materialize/tabulator_materialize.min.css"; // meterialize

const Table = ({
    data,
    columns

}) => {

  return (
    <div className="w-full mx-auto">
      {/* Task Table */}
      <ReactTabulator
        data={data}
        columns={columns}
        layout="fitColumns"
        responsiveLayout="hide"
        renderHorizontal="virtual"
        options={{ movableRows: true }}
        className="rounded shadow"
      />


    </div>
  );
};

export default Table;
