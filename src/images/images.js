import Mound from "./Mound.png"
import Seedling from "./Seedling.png";

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
    {
      "Just Planted": Mound,
      "Seedling":    Seedling,
      "Growing":     BlueFlowerGrowing,
      "Mature":      BlueFlowerMature
    },
    {
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  PurpleFlowerGrowing,
      "Mature":   PurpleFlowerMature
    },
    {
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  RedFlowerGrowing,
      "Mature":   RedFlowerMature
    },
    {
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  GoldFlowerGrowing,
      "Mature":   GoldFlowerMature
    },
    {
      "Just Planted": Mound,
      "Seedling": Seedling,
      "Growing":  OrangeFlowerGrowing,
      "Mature":   OrangeFlowerMature
    }
  ];
  return plantImages[plantId][growthStage];
};


export default getPlantDisplay;
