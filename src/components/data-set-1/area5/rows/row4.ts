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
import NatureBossImg from "../../../../assets/monster-images/nature-boss.png";

import { ElementTypeEnum } from "../../../../enums/element-type-enum";

const A5Row4: GateModel[] = [
  {
    rowPosition: 1,
    row: 4,
    column: 1,
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
      { rune: RuneTypeEnum.B, chance: 19, imageUrl: BRune },
      { rune: RuneTypeEnum.A, chance: 8, imageUrl: ARune },
    ],
  },
  {
    rowPosition: 2,
    row: 4,
    column: 2,
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
      { rune: RuneTypeEnum.C, chance: 20, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 12, imageUrl: BRune },
      { rune: RuneTypeEnum.A, chance: 2, imageUrl: ARune },
    ],
  },
  {
    rowPosition: 3,
    row: 4,
    column: 3,
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
      { rune: RuneTypeEnum.C, chance: 17, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 7, imageUrl: BRune },
    ],
  },
  {
    rowPosition: 4,
    row: 4,
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
      { rune: RuneTypeEnum.C, chance: 11, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 1, imageUrl: BRune },
    ],
  },
  {
    rowPosition: 5,
    row: 4,
    column: 5,
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
      { rune: RuneTypeEnum.C, chance: 14, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 4, imageUrl: BRune },
    ],
  },
  {
    rowPosition: 6,
    row: 4,
    column: 6,
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
      { rune: RuneTypeEnum.C, chance: 20, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 12, imageUrl: BRune },
      { rune: RuneTypeEnum.A, chance: 2, imageUrl: ARune },
    ],
  },
  {
    rowPosition: 7,
    row: 4,
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
      { rune: RuneTypeEnum.C, chance: 20, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 15, imageUrl: BRune },
      { rune: RuneTypeEnum.A, chance: 5, imageUrl: ARune },
    ],
  },
  {
    rowPosition: 8,
    row: 4,
    column: 8,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.ELEM_BOSS,
    scrollCost: 10,
    scrollImage: ScrollImage,
    gateImage: ElemBossGate,
    monsterImage: NatureBossImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.ELEM_BOSS],
    level: 24,
    element: ElementTypeEnum.NATURE,
    guildPoints: {
      imageUrl: GuildPointsImg,
      points: 460,
    },
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.B, chance: 20, imageUrl: BRune },
      { rune: RuneTypeEnum.A, chance: 14, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 1.8, imageUrl: SRune },
    ],
  },
  {
    rowPosition: 9,
    row: 4,
    column: 9,
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
      { rune: RuneTypeEnum.B, chance: 20, imageUrl: BRune },
      { rune: RuneTypeEnum.A, chance: 18, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 3, imageUrl: SRune },
    ],
  },
];

export default A5Row4;

export const a5Row4RuneInput: unknown[][] = [
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 19 },
    { rune: RuneTypeEnum.A, chance: 8 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 12 },
    { rune: RuneTypeEnum.A, chance: 2 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 17 },
    { rune: RuneTypeEnum.B, chance: 7 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 11 },
    { rune: RuneTypeEnum.B, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 14 },
    { rune: RuneTypeEnum.B, chance: 4 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 12 },
    { rune: RuneTypeEnum.A, chance: 2 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 15 },
    { rune: RuneTypeEnum.A, chance: 5 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.B, chance: 20 },
    { rune: RuneTypeEnum.A, chance: 14 },
    { rune: RuneTypeEnum.S, chance: 1.8 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.B, chance: 20 },
    { rune: RuneTypeEnum.A, chance: 18 },
    { rune: RuneTypeEnum.S, chance: 3 },
  ],
];
