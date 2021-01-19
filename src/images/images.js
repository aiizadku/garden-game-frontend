import Mound from "./Mound.png"
import Seedling from "./Seedling.png";
import TutorialFlowerNO from "./TutorialFlowerNO.png";

import TutorialFlowerGrowing from "./TutorialFlowerGrowing.png";
import TutorialFlowerMature  from "./TutorialFlowerMature.png";

import EmmayBudGrowing from "./EmmayBudGrowing.png";
import EmmayBudMature  from "./EmmayBudMature.png";

import JHideoutGrowing from "./JHideoutGrowing.png";
import JHideoutMature from "./JHideoutMature.png";

import JerelilyGrowing from "./JerelilyGrowing.png";
import JerelilyMature  from "./JerelilyMature.png";

import TimintGrowing from "./TimintGrowing.png";
import TimintMature  from "./TimintMature.png";

import BlueFlowerGrowing from "./BlueFlowerGrowing.png";
import BlueFlowerMature  from "./BlueFlowerMature.png";

import AugieBeautyGrowing from "./AugieBeautyGrowing.png";
import AugieBeautyMature  from './AugieBeautyMature.png';

import HeatherGrowing from "./HeatherGrowing.png";
import HeatherMature  from './HeatherMature.png';

import GeovannirodGrowing from "./GeovannirodGrowing.png";
import GeovannirodMature  from "./GeovannirodMature.png";

import SillyDillyGrowing from "./SillyDillyGrowing.png";
import SillyDillyMature  from "./SillyDillyMature.png";

import TomBlossomGrowing from "./TomBlossomGrowing.png";
import TomBlossomMature  from "./TomBlossomMature.png";

import NoalionGrowing from "./NoalionGrowing.png";
import NoalionMature  from "./NoalionMature.png";

const getPlantDisplay = (plantId=0, growthStage="Just Planted") => {
  // plantImages entries must align with plant_id in database
  const plantImages = [
    { // 0 is not used
      "Grey":        TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling":    Seedling,
      "Growing":     BlueFlowerGrowing,
      "Mature":      BlueFlowerMature,
    },
    { // id 1 => tutorial flower
      "Grey":         TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling":      Seedling,
      "Growing":      TutorialFlowerGrowing,
      "Mature":       TutorialFlowerMature
    },
    { // id 2 => Emmay bud
      "Grey":        TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling":    Seedling,
      "Growing":     EmmayBudGrowing,
      "Mature":      EmmayBudMature
    },
    { // id 3 => J hideout
      "Grey":        TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling":    Seedling,
      "Growing":     JHideoutGrowing,
      "Mature":      JHideoutMature
    },
    { // id 4 => Silly Dilly
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  SillyDillyGrowing,
      "Mature":   SillyDillyMature
    },
    { // id 5 => Jerelily
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  JerelilyGrowing,
      "Mature":   JerelilyMature
    },
    { // id 6 => Timint
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  TimintGrowing,
      "Mature":   TimintMature
    },
    { // id 7 => Augie Beauty
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  AugieBeautyGrowing,
      "Mature":   AugieBeautyMature
    },
    { // id 8 => Geovannirod
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  GeovannirodGrowing,
      "Mature":   GeovannirodMature
    },
    { // id 9 => Heather
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  HeatherGrowing,
      "Mature":   HeatherMature
    },
    { // id 10 => Tom Blossom
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  TomBlossomGrowing,
      "Mature":   TomBlossomMature
    },
    { // id 11 => Noalion
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  NoalionGrowing,
      "Mature":   NoalionMature
    }
  ];
  return plantImages[plantId][growthStage];
};


export default getPlantDisplay;
