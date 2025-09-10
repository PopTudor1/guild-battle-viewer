import CRune from "../../../../assets/guild-battle-runes/C-rune.png";
import DRune from "../../../../assets/guild-battle-runes/D-rune.png";

import { GateStatusEnum } from "../../../../enums/gate-status-enum";

import {
  GateTypeEnum,
  GateTypeEnumDescription,
} from "../../../../enums/gate-type-enum";
import { RuneTypeEnum } from "../../../../enums/rune-type-enum";
import { GateModel } from "../../../../models/gate-model";

import MonsterHardImg from "../../../../assets/monster-images/hard-monster.png";
import MonsterEasyImg from "../../../../assets/monster-images/normal-monster.png";

import MonsterEasyGate from "../../../../assets/guild-battle-gates/monster-easy-gate.png";
import MonsterHardGate from "../../../../assets/guild-battle-gates/monster-hard-gate.png";

import GuildPointsImg from "../../../../assets/guild-points-icon.png";
import ScrollImage from "../../../../assets/scroll.png";

import GuildGate from "../../../../assets/guild-battle-gates/guild-gate.png";
import BattlegroundImg from "../../../../assets/monster-images/battleground-monster.png";

import OpenGate from "../../../../assets/open-gate.png";

const A1Row1: GateModel[] = [
  {
    rowPosition: 1,
    row: 1,
    column: 1,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: 7,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
      {
        rune: RuneTypeEnum.C,
        chance: 6,
        imageUrl: CRune,
      },
    ],
  },
  {
    rowPosition: 2,
    row: 1,
    column: 2,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_HARD,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: MonsterHardGate,
    monsterImage: MonsterHardImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_HARD],
    level: 1,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
      {
        rune: RuneTypeEnum.D,
        chance: 20,
        imageUrl: DRune,
      },
      {
        rune: RuneTypeEnum.C,
        chance: 5,
        imageUrl: CRune,
      },
    ],
  },
  {
    rowPosition: 3,
    row: 1,
    column: 3,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: 1,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
    ],
  },
  {
    rowPosition: 4,
    row: 1,
    column: 4,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: 1,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
    ],
  },
  {
    rowPosition: 5,
    row: 1,
    column: 5,
    status: GateStatusEnum.CLEARED,
    type: GateTypeEnum.SWEEP,
    scrollCost: 1,
    scrollImage: ScrollImage,
    gateImage: OpenGate,
    monsterImage: "",
    gateDescription: GateTypeEnumDescription[GateTypeEnum.SWEEP],
    level: undefined,
    element: undefined,
    guildPoints: undefined,
    runesList: [],
  },
  {
    rowPosition: 6,
    row: 1,
    column: 6,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: 1,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
    ],
  },
  {
    rowPosition: 7,
    row: 1,
    column: 7,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: 2,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
      {
        rune: RuneTypeEnum.C,
        chance: 1,
        imageUrl: CRune,
      },
    ],
  },
  {
    rowPosition: 8,
    row: 1,
    column: 8,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.GUILD,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: GuildGate,
    monsterImage: BattlegroundImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.GUILD],
    level: 1,
    element: undefined,
    guildPoints: {
      imageUrl: GuildPointsImg,
      points: 25,
    },
    runesList: undefined,
  },
  {
    rowPosition: 9,
    row: 1,
    column: 9,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_HARD,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: MonsterHardGate,
    monsterImage: MonsterHardImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_HARD],
    level: 5,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
      {
        rune: RuneTypeEnum.D,
        chance: 20,
        imageUrl: DRune,
      },
      {
        rune: RuneTypeEnum.C,
        chance: 9,
        imageUrl: CRune,
      },
    ],
  },
];

export default A1Row1;

export const a1Row1RuneInput: unknown[][] = [
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 6 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 5 },
  ],
  [{ rune: RuneTypeEnum.D, chance: 100 }],
  [{ rune: RuneTypeEnum.D, chance: 100 }],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [{ rune: RuneTypeEnum.D, chance: 100 }],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 9 },
  ],
];
