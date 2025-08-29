import { GateTypeEnum } from "../../enums/gate-type-enum";
import { GateModel } from "../../models/gate-model";
import "./gate-grid.css";

type Props = {
  gates: (GateModel | null)[][];
  selectedGate: GateModel | null;
  setSelectedGate: (gate: GateModel | null) => void;
};

export default function GateGrid({
  gates,
  selectedGate,
  setSelectedGate,
}: Props) {
  function handleGateClick(gate: GateModel | null) {
    if (!gate) return;
    if (gate.type === "SWEEP") return; // 🚫 make it not selectable

    setSelectedGate(selectedGate === gate ? null : gate);
  }

  return (
    <table className="gate-table">
      <thead>
        <tr>
          <th></th>
          {Array.from({ length: 9 }, (_, colIndex) => (
            <th className="col-index" key={`col-${colIndex}`}>
              Col {colIndex + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {gates.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className="row-index">Row {rowIndex + 1}</td>
            {row.map((gate, colIndex) => (
              <td
                key={colIndex}
                className={`gate-cell ${
                  gate?.type === GateTypeEnum.SWEEP ? "sweep" : ""
                }`}
                onClick={() => handleGateClick(gate)}
                style={{
                  backgroundImage: `url(${gate?.gateImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                {selectedGate === gate && <span className="checkmark">✅</span>}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
