import ARune from "../../../../assets/guild-battle-runes/A-rune.png";
import DRune from "../../../../assets/guild-battle-runes/D-rune.png";
import SRune from "../../../../assets/guild-battle-runes/S-rune.png";
import SRRune from "../../../../assets/guild-battle-runes/SR-rune.png";

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
import InfernalBossImg from "../../../../assets/monster-images/infernal-boss.png";

import CoopBossGate from "../../../../assets/guild-battle-gates/coop-boss-gate.png";
import CoopBossImg from "../../../../assets/monster-images/co-op-monster.png";

import GuildGate from "../../../../assets/guild-battle-gates/guild-gate.png";
import BattlegroundImg from "../../../../assets/monster-images/battleground-monster.png";
import { ElementTypeEnum } from "../../../../enums/element-type-enum";

const A5Row10: GateModel[] = [
  {
    rowPosition: 1,
    row: 10,
    column: 1,
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
    rowPosition: 2,
    row: 10,
    column: 2,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.COOP_BOSS,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: CoopBossGate,
    monsterImage: CoopBossImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.COOP_BOSS],
    level: 25,
    element: undefined,
    guildPoints: {
      imageUrl: GuildPointsImg,
      points: 3270,
    },
    runesList: undefined,
  },
  {
    rowPosition: 3,
    row: 10,
    column: 3,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: 48,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.A, chance: 20, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 7, imageUrl: SRune },
      { rune: RuneTypeEnum.SR, chance: 1.6, imageUrl: SRRune },
    ],
  },
  {
    rowPosition: 4,
    row: 10,
    column: 4,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: 45,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.A, chance: 20, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 5.8, imageUrl: SRune },
      { rune: RuneTypeEnum.SR, chance: 1, imageUrl: SRRune },
    ],
  },
  {
    rowPosition: 5,
    row: 10,
    column: 5,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_HARD,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: MonsterHardGate,
    monsterImage: MonsterHardImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_HARD],
    level: 42,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.A, chance: 20, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 6.6, imageUrl: SRune },
      { rune: RuneTypeEnum.SR, chance: 1.4, imageUrl: SRRune },
    ],
  },
  {
    rowPosition: 6,
    row: 10,
    column: 6,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_HARD,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: MonsterHardGate,
    monsterImage: MonsterHardImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_HARD],
    level: 45,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.A, chance: 20, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 7.8, imageUrl: SRune },
      { rune: RuneTypeEnum.SR, chance: 2, imageUrl: SRRune },
    ],
  },
  {
    rowPosition: 7,
    row: 10,
    column: 7,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_HARD,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: MonsterHardGate,
    monsterImage: MonsterHardImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_HARD],
    level: 48,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.A, chance: 20, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 9, imageUrl: SRune },
      { rune: RuneTypeEnum.SR, chance: 2.6, imageUrl: SRRune },
    ],
  },
  {
    rowPosition: 8,
    row: 10,
    column: 8,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.ELEM_BOSS,
    scrollCost: 10,
    scrollImage: ScrollImage,
    gateImage: ElemBossGate,
    monsterImage: InfernalBossImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.ELEM_BOSS],
    level: 45,
    element: ElementTypeEnum.INFERNAL,
    guildPoints: {
      imageUrl: GuildPointsImg,
      points: 1466,
    },
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.A, chance: 20, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 10.2, imageUrl: SRune },
      { rune: RuneTypeEnum.SR, chance: 3.2, imageUrl: SRRune },
    ],
  },
  {
    rowPosition: 9,
    row: 10,
    column: 9,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.MONSTER_EASY,
    scrollCost: 6,
    scrollImage: ScrollImage,
    gateImage: MonsterEasyGate,
    monsterImage: MonsterEasyImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.MONSTER_EASY],
    level: 54,
    element: undefined,
    guildPoints: undefined,
    runesList: [
      { rune: RuneTypeEnum.D, chance: 100, imageUrl: DRune },
      { rune: RuneTypeEnum.A, chance: 20, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 9.4, imageUrl: SRune },
      { rune: RuneTypeEnum.SR, chance: 2.8, imageUrl: SRRune },
    ],
  },
];

export default A5Row10;

export const a5Row10RuneInput: unknown[][] = [
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.A, chance: 20 },
    { rune: RuneTypeEnum.S, chance: 7 },
    { rune: RuneTypeEnum.SR, chance: 1.6 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.A, chance: 20 },
    { rune: RuneTypeEnum.S, chance: 5.8 },
    { rune: RuneTypeEnum.SR, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.A, chance: 20 },
    { rune: RuneTypeEnum.S, chance: 6.6 },
    { rune: RuneTypeEnum.SR, chance: 1.4 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.A, chance: 20 },
    { rune: RuneTypeEnum.S, chance: 7.8 },
    { rune: RuneTypeEnum.SR, chance: 2 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.A, chance: 20 },
    { rune: RuneTypeEnum.S, chance: 9 },
    { rune: RuneTypeEnum.SR, chance: 2.6 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.A, chance: 20 },
    { rune: RuneTypeEnum.S, chance: 10.2 },
    { rune: RuneTypeEnum.SR, chance: 3.2 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.A, chance: 20 },
    { rune: RuneTypeEnum.S, chance: 9.4 },
    { rune: RuneTypeEnum.SR, chance: 2.8 },
  ],
];
