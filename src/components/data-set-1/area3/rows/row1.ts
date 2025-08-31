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

import GuildGate from "../../../../assets/guild-battle-gates/guild-gate.png";
import BattlegroundImg from "../../../../assets/monster-images/battleground-monster.png";

import OpenGate from "../../../../assets/open-gate.png";

const A3Row1: GateModel[] = [
  {
    rowPosition: 1,
    row: 1,
    column: 1,
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
      { rune: RuneTypeEnum.A, chance: 4, imageUrl: ARune },
    ],
  },
  {
    rowPosition: 2,
    row: 1,
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
      { rune: RuneTypeEnum.C, chance: 4, imageUrl: CRune },
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
    level: undefined,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.C, chance: 1, imageUrl: CRune },
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
    level: undefined,
    element: undefined,
    guildPoints: undefined,
    runesList: [{ rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune }],
  },
  {
    rowPosition: 5,
    row: 1,
    column: 5,
    status: GateStatusEnum.UNCLEARED,
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
    level: undefined,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.C, chance: 1, imageUrl: CRune },
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
    level: undefined,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.C, chance: 4, imageUrl: CRune },
    ],
  },
  {
    rowPosition: 8,
    row: 1,
    column: 8,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.ELEM_BOSS,
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
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.C, chance: 16, imageUrl: CRune },
      { rune: RuneTypeEnum.B, chance: 6, imageUrl: BRune },
    ],
  },
  {
    rowPosition: 9,
    row: 1,
    column: 9,
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
];

export default A3Row1;

export const a3Row1RuneInput: unknown[][] = [
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 19 },
    { rune: RuneTypeEnum.B, chance: 8 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 4 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 1 },
  ],
  [{ rune: RuneTypeEnum.D, chance: 100 }],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 4 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 16 },
    { rune: RuneTypeEnum.B, chance: 6 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
];
