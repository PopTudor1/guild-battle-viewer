import ARune from "../../../../assets/guild-battle-runes/A-rune.png";
import BRune from "../../../../assets/guild-battle-runes/B-rune.png";
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

import ElemBossGate from "../../../../assets/guild-battle-gates/elem-boss-gate.png";
import CelestialBossImg from "../../../../assets/monster-images/celestial-boss.png";

import { ElementTypeEnum } from "../../../../enums/element-type-enum";

const A1Row8: GateModel[] = [
  {
    rowPosition: 1,
    row: 8,
    column: 1,
    type: GateTypeEnum.ELEM_BOSS,
    status: GateStatusEnum.UNCLEARED,
    scrollCost: 10,
    scrollImage: ScrollImage,
    gateImage: ElemBossGate,
    monsterImage: CelestialBossImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.ELEM_BOSS],
    level: 1,
    element: ElementTypeEnum.CELESTIAL,
    guildPoints: {
      imageUrl: GuildPointsImg,
      points: 5,
    },
    runesList: [
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
      {
        rune: RuneTypeEnum.C,
        chance: 20,
        imageUrl: CRune,
      },
      {
        rune: RuneTypeEnum.B,
        chance: 17,
        imageUrl: BRune,
      },
      {
        rune: RuneTypeEnum.A,
        chance: 7,
        imageUrl: ARune,
      },
    ],
  },
  {
    rowPosition: 2,
    row: 8,
    column: 2,
    type: GateTypeEnum.MONSTER_HARD,
    status: GateStatusEnum.UNCLEARED,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: MonsterHardGate,
    monsterImage: MonsterHardImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_HARD],
    level: undefined,
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
        chance: 20,
        imageUrl: CRune,
      },
      {
        rune: RuneTypeEnum.B,
        chance: 11,
        imageUrl: BRune,
      },
      {
        rune: RuneTypeEnum.A,
        chance: 1,
        imageUrl: ARune,
      },
    ],
  },
  {
    rowPosition: 3,
    row: 8,
    column: 3,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: undefined,
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
        chance: 18,
        imageUrl: CRune,
      },
      {
        rune: RuneTypeEnum.B,
        chance: 8,
        imageUrl: BRune,
      },
    ],
  },
  {
    rowPosition: 4,
    row: 8,
    column: 4,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: undefined,
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
        chance: 15,
        imageUrl: CRune,
      },
      {
        rune: RuneTypeEnum.B,
        chance: 5,
        imageUrl: BRune,
      },
    ],
  },
  {
    rowPosition: 5,
    row: 8,
    column: 5,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: undefined,
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
        chance: 16,
        imageUrl: CRune,
      },
      {
        rune: RuneTypeEnum.B,
        chance: 6,
        imageUrl: BRune,
      },
    ],
  },
  {
    rowPosition: 6,
    row: 8,
    column: 6,
    type: GateTypeEnum.MONSTER_HARD,
    status: GateStatusEnum.UNCLEARED,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: MonsterHardGate,
    monsterImage: MonsterHardImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_HARD],
    level: undefined,
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
        chance: 19,
        imageUrl: CRune,
      },
      {
        rune: RuneTypeEnum.B,
        chance: 8,
        imageUrl: BRune,
      },
    ],
  },
  {
    rowPosition: 7,
    row: 8,
    column: 7,
    type: GateTypeEnum.MONSTER_HARD,
    status: GateStatusEnum.UNCLEARED,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: MonsterHardGate,
    monsterImage: MonsterHardImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_HARD],
    level: undefined,
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
        chance: 20,
        imageUrl: CRune,
      },
      {
        rune: RuneTypeEnum.B,
        chance: 10,
        imageUrl: BRune,
      },
    ],
  },
  {
    rowPosition: 8,
    row: 8,
    column: 8,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: undefined,
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
        chance: 20,
        imageUrl: CRune,
      },
      {
        rune: RuneTypeEnum.B,
        chance: 10,
        imageUrl: BRune,
      },
    ],
  },
  {
    rowPosition: 9,
    row: 8,
    column: 9,
    type: GateTypeEnum.MONSTER_HARD,
    status: GateStatusEnum.UNCLEARED,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: MonsterHardGate,
    monsterImage: MonsterHardImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_HARD],
    level: undefined,
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
        chance: 20,
        imageUrl: CRune,
      },
      {
        rune: RuneTypeEnum.B,
        chance: 15,
        imageUrl: BRune,
      },
      {
        rune: RuneTypeEnum.A,
        chance: 5,
        imageUrl: ARune,
      },
    ],
  },
];

export default A1Row8;

export const a1Row8RuneInput: unknown[][] = [
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 17 },
    { rune: RuneTypeEnum.A, chance: 7 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 11 },
    { rune: RuneTypeEnum.A, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 18 },
    { rune: RuneTypeEnum.B, chance: 8 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 15 },
    { rune: RuneTypeEnum.B, chance: 5 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 16 },
    { rune: RuneTypeEnum.B, chance: 6 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 19 },
    { rune: RuneTypeEnum.B, chance: 8 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 10 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 10 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 15 },
    { rune: RuneTypeEnum.A, chance: 5 },
  ],
];
