import { RuneTypeEnum } from "../enums/rune-type-enum";

export type RuneModel = {
  rune: RuneTypeEnum;
  chance: number;
  experience?: number;
  imageUrl: string;
};
