import type { AreaModel } from "../../models/area-model";
import Area1 from "./area1/area-1";
import Area2 from "./area2/area-2";
import Area3 from "./area3/area-3";
import Area4 from "./area4/area-4";
import Area5 from "./area5/area-5";

const AreasList1: AreaModel[] = [
  {
    name: "Area 1",
    gatesList: Area1,
    // gateTypesInput: area1GateTypesInput,
    // runesInput: area1RunesInput,
  },
  {
    name: "Area 2",
    gatesList: Area2,
    // gateTypesInput: area2GateTypesInput,
    // runesInput: area2RunesInput,
  },
  {
    name: "Area 3",
    gatesList: Area3,
    // gateTypesInput: area3GateTypesInput,
    // runesInput: area3RunesInput,
  },
  {
    name: "Area 4",
    gatesList: Area4,
    // gateTypesInput: area4GateTypesInput,
    // runesInput: area4RunesInput,
  },
  {
    name: "Area 5",
    gatesList: Area5,
    // gateTypesInput: area5GateTypesInput,
    // runesInput: area5RunesInput,
  },
];

export default AreasList1;
