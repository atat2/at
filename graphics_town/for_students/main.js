/*jshint esversion: 6 */
// @ts-check

//
// CS559 - Graphics Town - Workbook 12
// Example Code: 
// Example "Town"
//
// This sets up the town loading different objects. 
//
// It should be called from the onload function, after the world has been created

/** These imports are for the examples - feel free to remove them */
// import { SimpleHouse } from "./house.js";
// import { CircularTrack, TrackCube, TrackCar } from "./track.js";
// import { Helicopter, Helipad } from "./helicopter.js";
// import { ShinySculpture } from "./shinySculpture.js";
// import { MorphTest } from "./morph.js";

import { Building1, Hall, TallBuilding } from "../for_students/assets/building.js"
import { Tree, ObjTree } from "../for_students/assets/tree.js"

//import { OBJLoader } from "../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";
//import { MTLLoader } from "../libs/CS559-Three/examples/jsm/loaders/MTLLoader.js";
//import * as T from "../libs/CS559-Three/build/three.module.js";
import { Bus, BladelessHelicopter } from "../for_students/assets/vehicle.js";
import { GrTruck, GrMixer } from "../for_students/assets/construction.js";
import { Hill, Lake } from "../for_students/assets/landscape.js";
//import { Object3D } from "../libs/CS559-Three/build/three.module.js";

/********************************************************************** */
/** EXAMPLES - student should not use this! It is just for reference    */
/** you may use the sample objects, but not the sample layout           */
/***/
export function main(world) {
  //exampleStuff(world); //Used to load example world

  let b1 = new Building1(10, 0, 10);
  //b1.setPos(10, 0, 10);
  world.add(b1);

  let b2 = new TallBuilding(4, 1, -3);
  world.add(b2);
  //b2.setPos(4, 1, -3);

  let b3 = new Hall(-14, 1, -3);
  world.add(b3);
  //b3.setPos(-14, 1, -3);

  let b4 = new Hall(10, 5.6, -10);
  world.add(b4);
  //b4.setPos(10, 5.6, -10);
  b4.setScale(0.3);

  let tree1 = new ObjTree();
  world.add(tree1);
  tree1.setPos(3, 0, 10);

  let bus = new Bus();
  world.add(bus);
  bus.setPos(0, 1.25, 4);
  //let busRide = new Object3D();
  //bus.rideable = busRide;
  //busRide.position.set(10,10,10);



  let c1 = new GrTruck();
  let c2 = new GrMixer();
  world.add(c1);
  world.add(c2);
  c1.setPos(10, 0, 5);
  c2.setPos(10, 0, 2);

  let l1 = new Hill();
  world.add(l1);
  l1.setPos(11.5, 2.5, -11);
  let l2 = new Lake();
  world.add(l2);
  l2.setPos(-4, 0, -12);

  let v2 = new BladelessHelicopter();
  world.add(v2);

  let tree2 = new Tree();
  world.add(tree2);
  tree2.setPos(0, 0.5, 10);

}