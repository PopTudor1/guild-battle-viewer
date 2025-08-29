import { useState } from "react";
import AreasList1 from "./components/data-set-1/areas-list-1";
import "./guid-battle-viewer.css";
import { AreaModel } from "./models/area-model";
import { GateModel } from "./models/gate-model";

export default function GuildBattleViewer() {
  const [selectedArea, setSelectedArea] = useState<AreaModel>(AreasList1[0]);

  const grid: (GateModel | null)[][] = Array.from({ length: 10 }, () =>
    Array.from({ length: 9 }, () => null)
  );

  const handleAreaClick = (area: AreaModel) => {
    setSelectedArea(area);
  };

  selectedArea.gatesList.forEach((gate) => {
    const rowIndex = gate.row - 1;
    const colIndex = gate.column - 1;
    if (rowIndex >= 0 && rowIndex < 10 && colIndex >= 0 && colIndex < 9) {
      grid[rowIndex][colIndex] = gate;
    }
  });

  console.log(selectedArea);

  return (
    <>
      <span style={{ color: "white" }}>TODO GB viewer</span>
      <div>
        {AreasList1.map((area, index) => (
          <button
            className="area-button"
            key={index}
            onClick={() => handleAreaClick(area)}
          >
            {area.name}
          </button>
        ))}
      </div>
    </>
  );
}
