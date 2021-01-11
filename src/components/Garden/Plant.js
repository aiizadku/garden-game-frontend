import React from 'react';
import getPlantDisplay from '../../images/images';
import gsap from 'gsap';


const Plant = (props) => {
  // id of -1 means no image should be shown
  // plantId corresponds to plant id from database.
  const [plantId, setPlantId] = React.useState(-1);

  const getGrowthStatus = (percentGrown) => {
    if (percentGrown >= 100) return "mature";
    else if (percentGrown >= 50) return "growing";
    else if (percentGrown >= 20) return "seedling";
    else return "justPlanted";
  };

  const animate = () => {
    var tl = gsap.timeline({repeat: -1, yoyo: true})
    tl.set(`#${props.id}`, {transformOrigin: "50% 100%"});
    tl.from(`#${props.id}`, {duration: 1, scaleX:1.1, scaleY: .9});
  };

  React.useEffect(animate, [props.id]);

  return (
    <div>
      {props.id ?
        <img id={props.id} src={getPlantDisplay(props.plantId, getGrowthStatus(props.growthPercent))} alt="Flower"/>
        : "Plants must have unique IDs in props."
      }
    </div>
  );
}


export default Plant;
