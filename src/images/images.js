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


const getPlantDisplay = (plantId=0, growthStage="seedling") => {
  // plantImages entries must align with plant_id in database
  const plantImages = [
    {
      "justPlanted": Mound,
      "seedling":    Seedling,
      "growing":     BlueFlowerGrowing,
      "mature":      BlueFlowerMature
    },
    {
      "justPlanted": Mound,
      "seedling": Seedling,
      "growing":  PurpleFlowerGrowing,
      "mature":   PurpleFlowerMature
    },
    {
      "justPlanted": Mound,
      "seedling": Seedling,
      "growing":  RedFlowerGrowing,
      "mature":   RedFlowerMature
    },
    {
      "justPlanted": Mound,
      "seedling": Seedling,
      "growing":  GoldFlowerGrowing,
      "mature":   GoldFlowerMature
    },
    {
      "justPlanted": Mound,
      "seedling": Seedling,
      "growing":  OrangeFlowerGrowing,
      "mature":   OrangeFlowerMature
    }
  ];
  return plantImages[plantId][growthStage];
};


export default getPlantDisplay;
