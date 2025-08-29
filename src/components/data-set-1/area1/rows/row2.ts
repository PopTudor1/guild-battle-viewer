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

import CoopBossGate from "../../../../assets/guild-battle-gates/coop-boss-gate.png";
import CoopBossImg from "../../../../assets/monster-images/co-op-monster.png";

const A1Row2: GateModel[] = [
  {
    rowPosition: 1,
    row: 2,
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
        imageUrl: DRune,
      },
    ],
  },
  {
    rowPosition: 2,
    row: 2,
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
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
      {
        rune: RuneTypeEnum.C,
        chance: 2,
        imageUrl: CRune,
      },
    ],
  },
  {
    rowPosition: 3,
    row: 2,
    column: 3,
    status: GateStatusEnum.UNCLEARED,
    type: GateTypeEnum.COOP_BOSS,
    scrollCost: 8,
    scrollImage: ScrollImage,
    gateImage: CoopBossGate,
    monsterImage: CoopBossImg,
    gateDescription: GateTypeEnumDescription[GateTypeEnum.COOP_BOSS],
    level: undefined,
    element: undefined,
    guildPoints: {
      imageUrl: GuildPointsImg,
      points: 1,
    },
    runesList: undefined,
  },
  {
    rowPosition: 4,
    row: 2,
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
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
    ],
  },
  {
    rowPosition: 5,
    row: 2,
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
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
    ],
  },
  {
    rowPosition: 6,
    row: 2,
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
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
      {
        rune: RuneTypeEnum.C,
        chance: 1, //TODO check this later
        imageUrl: CRune,
      },
    ],
  },
  {
    rowPosition: 7,
    row: 2,
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
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
      {
        rune: RuneTypeEnum.C,
        chance: 2,
        imageUrl: CRune,
      },
    ],
  },
  {
    rowPosition: 8,
    row: 2,
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
        chance: 6,
        imageUrl: CRune,
      },
    ],
  },
  {
    rowPosition: 9,
    row: 2,
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
      {
        rune: RuneTypeEnum.D,
        chance: 100,
        imageUrl: DRune,
      },
      {
        rune: RuneTypeEnum.C,
        chance: 8,
        imageUrl: CRune,
      },
    ],
  },
];

export default A1Row2;

export const a1Row2RuneInput: unknown[][] = [
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 9 },
  ], //
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 2 },
  ], //
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ], //
  [{ rune: RuneTypeEnum.D, chance: 100 }], //
  [{ rune: RuneTypeEnum.D, chance: 100 }], //
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 1 },
  ], //
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 2 },
  ], //
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 6 },
  ], //
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 8 },
  ], //
];
