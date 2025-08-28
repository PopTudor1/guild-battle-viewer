import AIcon from "../assets/guild-battle-runes/A-rune.png";
import BIcon from "../assets/guild-battle-runes/B-rune.png";
import CIcon from "../assets/guild-battle-runes/C-rune.png";
import DIcon from "../assets/guild-battle-runes/D-rune.png";
import SIcon from "../assets/guild-battle-runes/S-rune.png";
import SRIcon from "../assets/guild-battle-runes/SR-rune.png";
import { RuneTypeEnum } from "../enums/rune-type-enum";

const runeTypeProperties = {
  [RuneTypeEnum.D]: {
    imageUrl: DIcon,
    experience: 10,
  },
  [RuneTypeEnum.C]: {
    imageUrl: CIcon,
    experience: 20,
  },
  [RuneTypeEnum.B]: {
    imageUrl: BIcon,
    experience: 40,
  },
  [RuneTypeEnum.A]: {
    imageUrl: AIcon,
    experience: 70,
  },
  [RuneTypeEnum.S]: {
    imageUrl: SIcon,
    experience: 110,
  },
  [RuneTypeEnum.SR]: {
    imageUrl: SRIcon,
    experience: 160,
  },
};

export default runeTypeProperties;
