import * as T from "../../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../../libs/CS559-Framework/GrObject.js";
import * as Geom from "../../libs/CS559-Three/examples/jsm/deprecated/Geometry.js";

let truckObCtr = 0;
// 
/**
 * @typedef TruckProperties
 * @type {object}
 * @property {number} [x=0]
 * @property {number} [y=0]
 * @property {number} [z=0]
 * @property {number} [size=1]
 */
export class GrTruck extends GrObject {
  /**
   * @param {TruckProperties} params
   */
  constructor(params = {}) {
    let truck = new T.Group();

    let baseGeo = new T.BoxGeometry(4, 0.5, 2);
    let truckMat = new T.MeshStandardMaterial({
      color: "yellow",
      metalness: 0.5,
      roughness: 0.7
    });
    let base = new T.Mesh(baseGeo, truckMat);
    truck.add(base);
    base.translateY(0.3);

    let frontGeo = new T.BoxGeometry(1.2, 1, 1.5);
    let front = new T.Mesh(frontGeo, truckMat);
    base.add(front);
    front.translateX(1.2);
    front.translateY(0.6);

    let backGeo = new T.BoxGeometry(3, 1, 2);
    let backMat = new T.MeshStandardMaterial({
      color: "yellow",
      metalness: 0.5,
      roughness: 0.7
    });
    let back = new T.Mesh(backGeo, backMat);
    back.translateY(0.8);
    back.position.x=-1;
    back.rotateY(Math.PI*2);
    base.add(back);

    super(`Truck-${truckObCtr++}`, truck, [
      ["x", -10, 10, 0],
      ["z", -10, 10, 0],
      ["theta", 0, 360, 0],
      ["back", 0, 1, 0]
    ]);

    this.whole_ob = truck;
    this.back = back;

    this.u = 0;
  }

  stepWorld(delta, timeOfDay) {
    this.u += delta / 2000;
    this.back.rotation.z = Math.abs(Math.sin(this.u));
    this.whole_ob.position.x = 10 + Math.abs(Math.sin(this.u));
  }
}


let mixerObCtr = 0;
// 
/**
 * @typedef MixerProperties
 * @type {object}
 * @property {number} [x=0]
 * @property {number} [y=0]
 * @property {number} [z=0]
 * @property {number} [size=1]
 */
export class GrMixer extends GrObject {
  /**
   * @param {MixerProperties} params
   */
  constructor(params = {}) {
    let mixer = new T.Group();

 
    let baseGeo = new T.SphereGeometry(0.75);
    let mixerMat = new T.MeshStandardMaterial({
      color: "grey",
      metalness: 0.5,
      roughness: 0.7
    });
    let base = new T.Mesh(baseGeo, mixerMat);
    mixer.add(base);
    base.translateY(0.7);

    let bucketGeo = new T.TorusGeometry(0.5);

    let bucket = new T.Mesh(bucketGeo, mixerMat);
    
    bucket.position.z = -0.5;
    bucket.translateY(0.5);
    bucket.rotateX(10);

    base.add(bucket);

    let handleGeo = new T.CylinderGeometry(0.05, 0.05, 2);
    let handleMat = new T.MeshStandardMaterial({
      color: "white",
      metalness: 0.5
    });
    let handle1 = new T.Mesh(handleGeo, handleMat);
    let handle2 = new T.Mesh(handleGeo, handleMat);
    bucket.add(handle1);
    bucket.add(handle2);
    handle2.rotateZ(Math.PI/2);

    super(`Mixer-${mixerObCtr++}`, mixer, [
      ["x", -10, 10, 0],
      ["z", -10, 10, 0],
      ["theta", 0, 360, 0],
      ["mix", 0, 360, 0],

    ]);

    this.whole_ob = mixer;
    this.bucket = bucket;

    this.u = 0;
  }

  stepWorld(delta, timeOfDay) {
    this.u += delta / 2000;
    this.bucket.rotation.z = this.u;
  }
}