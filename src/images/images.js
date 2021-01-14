import Mound from "./Mound.png"
import Seedling from "./Seedling.png";

import TutorialFlowerGrowing from "./TutorialFlowerGrowing.png";
import TutorialFlowerMature  from "./TutorialFlowerMature.png";
import TutorialFlowerNO from "./TutorialFlowerNO.png";

import EmmayBudGrowing from "./EmmayBudGrowing.png";
import EmmayBudMature  from "./EmmayBudMature.png";

import BlueFlowerGrowing from "./BlueFlowerGrowing.png";
import BlueFlowerMature from "./BlueFlowerMature.png";

import RedFlowerGrowing from "./RedFlowerGrowing.png";
import RedFlowerMature from './RedFlowerMature.png';

import PurpleFlowerGrowing from "./PurpleFlowerGrowing.png";
import PurpleFlowerMature from './PurpleFlowerMature.png';

import OrangeFlowerGrowing from "./OrangeFlowerGrowing.png";
import OrangeFlowerMature from "./OrangeFlowerMature.png";

import GoldFlowerGrowing from "./GoldFlowerGrowing.png";
import GoldFlowerMature from "./GoldFlowerMature.png";


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
      "Growing":     BlueFlowerGrowing,
      "Mature":      BlueFlowerMature
    },
    { // id 4 => Silly Dilly
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  PurpleFlowerGrowing,
      "Mature":   PurpleFlowerMature
    },
    { // id 5 => Jerelily
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  RedFlowerGrowing,
      "Mature":   RedFlowerMature
    },
    { // id 6 => Timint
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  GoldFlowerGrowing,
      "Mature":   GoldFlowerMature
    },
    { // id 7 => Augie Beauty
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  OrangeFlowerGrowing,
      "Mature":   OrangeFlowerMature
    },
    { // id 8 => Geovannirod
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  OrangeFlowerGrowing,
      "Mature":   OrangeFlowerMature
    },
    { // id 9 => Heather
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  OrangeFlowerGrowing,
      "Mature":   OrangeFlowerMature
    },
    { // id 10 => Tom Blossom
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  OrangeFlowerGrowing,
      "Mature":   OrangeFlowerMature
    },
    { // id 11 => Tom Blossom
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  OrangeFlowerGrowing,
      "Mature":   OrangeFlowerMature
    },
    { // Not used
      "Grey":     TutorialFlowerNO,
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  OrangeFlowerGrowing,
      "Mature":   OrangeFlowerMature
    }
  ];
  return plantImages[plantId][growthStage];
};


export default getPlantDisplay;
