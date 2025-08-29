import { ElementTypeEnum } from "../enums/element-type-enum";
import { GateStatusEnum } from "../enums/gate-status-enum";
import { GateTypeEnum } from "../enums/gate-type-enum";
import { GuildPointsModel } from "./guild-points-model";
import { RuneModel } from "./rune-model";

export type GateModel = {
  rowPosition: number;
  row: number;
  column: number;
  status: GateStatusEnum;
  type: GateTypeEnum;
  scrollCost: number;
  scrollImage: string;
  gateImage: string;
  monsterImage: string;
  gateDescription: string;
  level?: number;
  element?: ElementTypeEnum;
  guildPoints?: GuildPointsModel;
  runesList?: RuneModel[];
};
