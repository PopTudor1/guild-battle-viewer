import ARune from "../../../../assets/guild-battle-runes/A-rune.png";
import BRune from "../../../../assets/guild-battle-runes/B-rune.png";
import CRune from "../../../../assets/guild-battle-runes/C-rune.png";
import DRune from "../../../../assets/guild-battle-runes/D-rune.png";
import SRune from "../../../../assets/guild-battle-runes/S-rune.png";

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
import InfernalBossImg from "../../../../assets/monster-images/infernal-boss.png";
import { ElementTypeEnum } from "../../../../enums/element-type-enum";

const A3Row6: GateModel[] = [
  {
    rowPosition: 1,
    row: 6,
    column: 1,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.ELEM_BOSS,
    scrollCost: 10,
    scrollImage: ScrollImage,
    gateImage: ElemBossGate,
    monsterImage: CelestialBossImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.ELEM_BOSS],
    level: 23,
    element: ElementTypeEnum.CELESTIAL,
    guildPoints: {
      imageUrl: GuildPointsImg,
      points: 427,
    },
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.B, chance: 20, imageUrl: BRune },
      { rune: RuneTypeEnum.A, chance: 13, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 1.4, imageUrl: SRune },
    ],
  },
  {
    rowPosition: 2,
    row: 6,
    column: 2,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: undefined,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.C, chance: 18, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 8, imageUrl: BRune },
    ],
  },
  {
    rowPosition: 3,
    row: 6,
    column: 3,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.ELEM_BOSS,
    scrollCost: 10,
    scrollImage: ScrollImage,
    gateImage: ElemBossGate,
    monsterImage: InfernalBossImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.ELEM_BOSS],
    level: 8,
    element: ElementTypeEnum.INFERNAL,
    guildPoints: {
      imageUrl: GuildPointsImg,
      points: 104,
    },
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.C, chance: 18, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 8, imageUrl: BRune },
    ],
  },
  {
    rowPosition: 4,
    row: 6,
    column: 4,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: undefined,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.C, chance: 9, imageUrl: CRune },
    ],
  },
  {
    rowPosition: 5,
    row: 6,
    column: 5,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_HARD,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: MonsterHardGate,
    monsterImage: MonsterHardImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_HARD],
    level: undefined,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.D, chance: 20, imageUrl: DRune },
      { rune: RuneTypeEnum.C, chance: 12, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 2, imageUrl: BRune },
    ],
  },
  {
    rowPosition: 6,
    row: 6,
    column: 6,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: undefined,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.C, chance: 12, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 2, imageUrl: BRune },
    ],
  },
  {
    rowPosition: 7,
    row: 6,
    column: 7,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_HARD,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: MonsterHardGate,
    monsterImage: MonsterHardImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_HARD],
    level: undefined,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.D, chance: 20, imageUrl: DRune },
      { rune: RuneTypeEnum.C, chance: 18, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 8, imageUrl: BRune },
    ],
  },
  {
    rowPosition: 8,
    row: 6,
    column: 8,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: undefined,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.C, chance: 20, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 11, imageUrl: BRune },
      { rune: RuneTypeEnum.A, chance: 1, imageUrl: ARune },
    ],
  },
  {
    rowPosition: 9,
    row: 6,
    column: 9,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.ELEM_BOSS,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: ElemBossGate,
    monsterImage: CelestialBossImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.ELEM_BOSS],
    level: 25,
    element: ElementTypeEnum.CELESTIAL,
    guildPoints: {
      imageUrl: GuildPointsImg,
      points: 494,
    },
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.B, chance: 20, imageUrl: BRune },
      { rune: RuneTypeEnum.A, chance: 15, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 2.2, imageUrl: SRune },
    ],
  },
];

export default A3Row6;

export const a3Row6RuneInput: unknown[][] = [
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.B, chance: 20 },
    { rune: RuneTypeEnum.A, chance: 13 },
    { rune: RuneTypeEnum.S, chance: 1.4 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 18 },
    { rune: RuneTypeEnum.B, chance: 8 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 18 },
    { rune: RuneTypeEnum.B, chance: 8 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 9 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 12 },
    { rune: RuneTypeEnum.B, chance: 2 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 12 },
    { rune: RuneTypeEnum.B, chance: 2 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 18 },
    { rune: RuneTypeEnum.B, chance: 8 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 11 },
    { rune: RuneTypeEnum.A, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.B, chance: 20 },
    { rune: RuneTypeEnum.A, chance: 15 },
    { rune: RuneTypeEnum.S, chance: 2.2 },
  ],
];
