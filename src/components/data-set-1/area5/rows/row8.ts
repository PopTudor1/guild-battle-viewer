import ARune from "../../../../assets/guild-battle-runes/A-rune.png";
import BRune from "../../../../assets/guild-battle-runes/B-rune.png";
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
import CelestialBossImg from "../../../../assets/monster-images/celestial-boss.png";

import CoopBossGate from "../../../../assets/guild-battle-gates/coop-boss-gate.png";
import CoopBossImg from "../../../../assets/monster-images/co-op-monster.png";

import GuildGate from "../../../../assets/guild-battle-gates/guild-gate.png";
import BattlegroundImg from "../../../../assets/monster-images/battleground-monster.png";
import { ElementTypeEnum } from "../../../../enums/element-type-enum";

const A5Row8: GateModel[] = [
  {
    rowPosition: 1,
    row: 8,
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
      { rune: RuneTypeEnum.A, chance: 20, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 5.4, imageUrl: SRune },
      { rune: RuneTypeEnum.SR, chance: 0.8, imageUrl: SRRune },
    ],
  },
  {
    rowPosition: 2,
    row: 8,
    column: 2,
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
    rowPosition: 3,
    row: 8,
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
      { rune: RuneTypeEnum.B, chance: 20, imageUrl: BRune },
      { rune: RuneTypeEnum.A, chance: 18, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 3, imageUrl: SRune },
    ],
  },
  {
    rowPosition: 4,
    row: 8,
    column: 4,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.COOP_BOSS,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: CoopBossGate,
    monsterImage: CoopBossImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.COOP_BOSS],
    level: 18,
    element: undefined,
    guildPoints: {
      imageUrl: GuildPointsImg,
      points: 1765,
    },
    runesList: undefined,
  },
  {
    rowPosition: 5,
    row: 8,
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
      { rune: RuneTypeEnum.B, chance: 20, imageUrl: BRune },
      { rune: RuneTypeEnum.A, chance: 12, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 1, imageUrl: SRune },
    ],
  },
  {
    rowPosition: 6,
    row: 8,
    column: 6,
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
    rowPosition: 7,
    row: 8,
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
      { rune: RuneTypeEnum.A, chance: 20, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 4.2, imageUrl: SRune },
    ],
  },
  {
    rowPosition: 8,
    row: 8,
    column: 8,
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
      { rune: RuneTypeEnum.A, chance: 20, imageUrl: ARune },
      { rune: RuneTypeEnum.S, chance: 6.6, imageUrl: SRune },
      { rune: RuneTypeEnum.SR, chance: 1.4, imageUrl: SRRune },
    ],
  },
  {
    rowPosition: 9,
    row: 8,
    column: 9,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.ELEM_BOSS,
    scrollCost: 10,
    scrollImage: ScrollImage,
    gateImage: ElemBossGate,
    monsterImage: CelestialBossImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.ELEM_BOSS],
    level: 45,
    element: ElementTypeEnum.CELESTIAL,
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
];

export default A5Row8;

export const a5Row8RuneInput: unknown[][] = [
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.A, chance: 20 },
    { rune: RuneTypeEnum.S, chance: 5.4 },
    { rune: RuneTypeEnum.SR, chance: 0.8 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.B, chance: 20 },
    { rune: RuneTypeEnum.A, chance: 18 },
    { rune: RuneTypeEnum.S, chance: 3 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.B, chance: 20 },
    { rune: RuneTypeEnum.A, chance: 12 },
    { rune: RuneTypeEnum.S, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.A, chance: 20 },
    { rune: RuneTypeEnum.S, chance: 4.2 },
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
    { rune: RuneTypeEnum.S, chance: 10.2 },
    { rune: RuneTypeEnum.SR, chance: 3.2 },
  ],
];
