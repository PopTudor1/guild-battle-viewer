import { GateTypeEnum } from "../../../enums/gate-type-enum";
import { GateModel } from "../../../models/gate-model";
import A4Row1, { a4Row1RuneInput } from "../area4/rows/row1";
import A4Row10, { a4Row10RuneInput } from "../area4/rows/row10";
import A4Row2, { a4Row2RuneInput } from "../area4/rows/row2";
import A4Row3, { a4Row3RuneInput } from "../area4/rows/row3";
import A4Row4, { a4Row4RuneInput } from "../area4/rows/row4";
import A4Row5, { a4Row5RuneInput } from "../area4/rows/row5";
import A4Row6, { a4Row6RuneInput } from "../area4/rows/row6";
import A4Row7, { a4Row7RuneInput } from "../area4/rows/row7";
import A4Row8, { a4Row8RuneInput } from "../area4/rows/row8";
import A4Row9, { a4Row9RuneInput } from "../area4/rows/row9";

const Area4: GateModel[] = [
  ...A4Row1,
  ...A4Row2,
  ...A4Row3,
  ...A4Row4,
  ...A4Row5,
  ...A4Row6,
  ...A4Row7,
  ...A4Row8,
  ...A4Row9,
  ...A4Row10,
];

export default Area4;

export const area4GateTypesInput: GateTypeEnum[] = [
  //row 1
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.SWEEP,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  //row2
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_EASY,
  //row3
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  //row4
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  //row5
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.ELEM_BOSS,
  //row6
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  //row7
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  //row8
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.GUILD,
  //row9
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row10
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.ELEM_BOSS,
];

export const area4RunesInput: unknown[][] = [
  ...a4Row1RuneInput,
  ...a4Row2RuneInput,
  ...a4Row3RuneInput,
  ...a4Row4RuneInput,
  ...a4Row5RuneInput,
  ...a4Row6RuneInput,
  ...a4Row7RuneInput,
  ...a4Row8RuneInput,
  ...a4Row9RuneInput,
  ...a4Row10RuneInput,
];
