import React, { useEffect } from "react";
import * as d3 from "d3";
import * as venn from "venn.js";
export const SuungDiagram = (props) => {
  useEffect(() => {

    var chart = venn.VennDiagram().width(900).height(900);
    d3.select("#venn").datum(props.sets).call(chart);
  }, [props.sets]);

  return (
    <div id="venn" style={{ textAlign: "center" }}>
    </div>
  );
};
