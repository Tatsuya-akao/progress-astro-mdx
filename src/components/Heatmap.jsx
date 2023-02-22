import React from "react";
import { useEffect, useState } from "react";
import Tooltip from "@uiw/react-tooltip";
import HeatMap from "@uiw/react-heat-map";

const Heatmap = ({ allPostsDate }) => {
  let count = {};

  for (let i = 0; i < allPostsDate.length; i++) {
    var elm = allPostsDate[i];
    count[elm] = (count[elm] || 0) + 1;
  }

  const wrap = [];

  const keys = Object.keys(count);

  keys.forEach((key) => {
    const newObj = {
      date: key,
      count: count[key],
    };

    wrap.push(newObj);
  });

  console.log(count);

  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue(wrap);
  }, []);

  return (
    <div>
      <HeatMap
        value={value}
        width={600}
        // style={{ color: "#ad001d" }}
        startDate={new Date("2023/02/01")}
        panelColors={{
          0: "#EBEDF0",
          2: "#4d96e4",
          4: "#3078c6",
        }}
        rectRender={(props, data) => {
          // if (!data.count) return <rect {...props} />;
          return (
            <Tooltip
              key={props.key}
              placement="top"
              content={`${data.date} count: ${data.count || 0}`}
            >
              <rect {...props} />
            </Tooltip>
          );
        }}
      />
    </div>
  );
};

export default Heatmap;
