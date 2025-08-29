import Area1Img from "../../assets/guild-battle-areas/area-1.png";
import Area2Img from "../../assets/guild-battle-areas/area-2.png";
import Area3Img from "../../assets/guild-battle-areas/area-3.png";
import Area4Img from "../../assets/guild-battle-areas/area-4.png";
import Area5Img from "../../assets/guild-battle-areas/area-5.png";
import type { AreaModel } from "../../models/area-model";
import Area1 from "./area1/area-1";
import Area2 from "./area2/area-2";
import Area3 from "./area3/area-3";
import Area4 from "./area4/area-4";
import Area5 from "./area5/area-5";

import Area1TitleImg from "../../assets/guild-battle-areas/area-1-title.png";
import Area2TitleImg from "../../assets/guild-battle-areas/area-2-title.png";
import Area3TitleImg from "../../assets/guild-battle-areas/area-3-title.png";
import Area4TitleImg from "../../assets/guild-battle-areas/area-4-title.png";
import Area5TitleImg from "../../assets/guild-battle-areas/area-5-title.png";

const AreasList1: AreaModel[] = [
  {
    name: "Area 1",
    gatesList: Area1,
    areaImage: Area1Img,
    areaTitleImage: Area1TitleImg,

    // gateTypesInput: area1GateTypesInput,
    // runesInput: area1RunesInput,
  },
  {
    name: "Area 2",
    gatesList: Area2,
    areaImage: Area2Img,
    areaTitleImage: Area2TitleImg,

    // gateTypesInput: area2GateTypesInput,
    // runesInput: area2RunesInput,
  },
  {
    name: "Area 3",
    gatesList: Area3,
    areaImage: Area3Img,
    areaTitleImage: Area3TitleImg,

    // gateTypesInput: area3GateTypesInput,
    // runesInput: area3RunesInput,
  },
  {
    name: "Area 4",
    gatesList: Area4,
    areaImage: Area4Img,
    areaTitleImage: Area4TitleImg,

    // gateTypesInput: area4GateTypesInput,
    // runesInput: area4RunesInput,
  },
  {
    name: "Area 5",
    gatesList: Area5,
    areaImage: Area5Img,
    areaTitleImage: Area5TitleImg,

    // gateTypesInput: area5GateTypesInput,
    // runesInput: area5RunesInput,
  },
];

export default AreasList1;
