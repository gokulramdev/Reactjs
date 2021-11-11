import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function List() {
  const [show, setShow] = useState(false);

  const FrameWork = [
    {
      id: 1,
      tool: "React",
    },
    {
      id: 2,
      tool: "Angular",
    },
    {
      id: 3,
      tool: "Vue",
    },
  ];

const Data1 = {
    id: 1,
    tool: "React",
}

const Data2 = {
  id: 2,
  tool: "vue",
}

const Joined = { Data1,...{last:"tesst"}}
console.log(Joined)

  return (
    <div>
      {FrameWork.map((to, index) => (
        <div key={index}>
          <Card style={{ margin: "10px", border: "1px solid red" }}>
            <CardContent>{to.tool}</CardContent>
          </Card>
        </div>
      ))}
      {show ? "yes" : "false"}
      {show ? "Hi am Gokul" : null}
      {/* more than one */}
      {show ? "Hi am Gokul" : true ? "Next" : null}
    </div>
  );
}

export default List;
