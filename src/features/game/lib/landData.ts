import { INITIAL_BUMPKIN_LEVEL } from "./bumpkinData";
import { STATIC_OFFLINE_FARM } from "./landDataStatic";
import { DYNAMIC_OFFLINE_FARM } from "./landDataDynamic";

export const OFFLINE_FARM =
  INITIAL_BUMPKIN_LEVEL > 1 ? DYNAMIC_OFFLINE_FARM : STATIC_OFFLINE_FARM;
