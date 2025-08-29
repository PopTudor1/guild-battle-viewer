export enum GateTypeEnum {
  GUILD = "GUILD",
  COOP_BOSS = "COOP_BOSS",
  ELEM_BOSS = "ELEM_BOSS",
  MONSTER_EASY = "MONSTER_EASY",
  MONSTER_HARD = "MONSTER_HARD",
  SWEEP = "SWEEP",
  ALL = "ALL",
}

export const GateTypeEnumLabel: Record<GateTypeEnum, string> = {
  [GateTypeEnum.GUILD]: "Battleground",
  [GateTypeEnum.COOP_BOSS]: "Co-op Boss",
  [GateTypeEnum.ELEM_BOSS]: "Elemental Boss",
  [GateTypeEnum.MONSTER_EASY]: "Normal",
  [GateTypeEnum.MONSTER_HARD]: "Hard",
  [GateTypeEnum.SWEEP]: "Start",
  [GateTypeEnum.ALL]: "All",
};

export const GateTypeEnumDescription: Record<GateTypeEnum, string> = {
  [GateTypeEnum.GUILD]:
    "Kill the boss within the time limit. When this area is occupied by another guild, it can be occupied after 3 minutes.",
  [GateTypeEnum.COOP_BOSS]:
    "Deal as much damage as possible to the boss. This boss can be killed with guild members.",
  [GateTypeEnum.ELEM_BOSS]: "Kill the elemental boss within the time limit.",
  [GateTypeEnum.MONSTER_EASY]: "Kill all monsters within the time limit.",
  [GateTypeEnum.MONSTER_HARD]: "Kill all monsters within the time limit.",
  [GateTypeEnum.SWEEP]: "This is a dummy description.",
  [GateTypeEnum.ALL]: "This is a dummy description.",
};
