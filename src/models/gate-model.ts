import { GateStatusEnum } from "../enums/gate-status-enum";
import { GateTypeEnum } from "../enums/gate-type-enum";
import { RuneModel } from "./rune-model";

//TODO change this later
export type GateModel = {
  rowPosition?: number;
  type: GateTypeEnum;
  status: GateStatusEnum;
  costIncrement: number;
  scrollCost: number;
  totalBuffExperience: number;
  efficiency: number;
  runesList: RuneModel[];
  imageUrl: string;
  swipeCount: number;
  row: number;
  column: number;
};
