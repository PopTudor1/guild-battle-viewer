import { GateStatusEnum } from "../../../../enums/gate-status-enum";
import { GateTypeEnum } from "../../../../enums/gate-type-enum";
import { RuneTypeEnum } from "../../../../enums/rune-type-enum";
import { GateModel } from "../../../../models/gate-model";
import { RuneWithChance } from "../../../../models/rune-model";

const A3Row5: GateModel[] = [
  {
    rowPosition: 1,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 5,
    column: 1,
  },
  {
    rowPosition: 2,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 5,
    column: 2,
  },
  {
    rowPosition: 3,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 5,
    column: 3,
  },
  {
    rowPosition: 4,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 5,
    column: 4,
  },
  {
    rowPosition: 5,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 5,
    column: 5,
  },
  {
    rowPosition: 6,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 5,
    column: 6,
  },
  {
    rowPosition: 7,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 5,
    column: 7,
  },
  {
    rowPosition: 8,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 5,
    column: 8,
  },
  {
    rowPosition: 9,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 5,
    column: 9,
  },
];

export default A3Row5;

export const a3Row5RuneInput: RuneWithChance[][] = [
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 17 },
    { rune: RuneTypeEnum.A, chance: 7 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 17 },
    { rune: RuneTypeEnum.B, chance: 17 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 9 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 7 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 9 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 11 },
    { rune: RuneTypeEnum.B, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 19 },
    { rune: RuneTypeEnum.A, chance: 8 },
  ],
];
