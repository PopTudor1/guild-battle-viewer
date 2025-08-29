import { useState } from "react";
import AreasList1 from "./components/data-set-1/areas-list-1";
import GateGrid from "./components/gate-grid/gate-grid";
import GateModalInfo from "./components/gate-modal-info/gate-modal-info";
import "./guid-battle-viewer.css";
import { AreaModel } from "./models/area-model";
import { GateModel } from "./models/gate-model";

export default function GuildBattleViewer() {
  const [selectedArea, setSelectedArea] = useState<AreaModel>(AreasList1[0]);
  const [selectedGate, setSelectedGate] = useState<GateModel | null>(null);

  const grid: (GateModel | null)[][] = Array.from({ length: 10 }, () =>
    Array.from({ length: 9 }, () => null)
  );

  selectedArea.gatesList.forEach((gate) => {
    const rowIndex = gate.row - 1;
    const colIndex = gate.column - 1;
    if (rowIndex >= 0 && rowIndex < 10 && colIndex >= 0 && colIndex < 9) {
      grid[rowIndex][colIndex] = gate;
    }
  });

  const handleAreaClick = (area: AreaModel) => {
    setSelectedArea(area);
    setSelectedGate(null); // reset selected gate when switching areas
  };

  return (
    <div className="guild-battle-viewer">
      <span className="title">Guild Battle Viewer</span>
      <span className="madeBy">
        ( made by Tudique26 from the KNIGHTSXORDER guild on Trakan server )
      </span>

      <div>
        {AreasList1.map((area, index) => (
          <img
            key={index}
            src={area.areaTitleImage}
            alt={area.name}
            className="area-image"
            onClick={() => handleAreaClick(area)}
            style={{
              border:
                selectedArea === area ? "3px solid red" : "2px solid gray",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>

      <div className="viewer-content">
        {selectedArea && (
          <>
            <GateGrid
              gates={grid}
              selectedGate={selectedGate}
              setSelectedGate={setSelectedGate}
            />
            <GateModalInfo gate={selectedGate} />
          </>
        )}
      </div>
    </div>
  );
}
