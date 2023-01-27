import * as T from "../../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../../libs/CS559-Framework/GrObject.js";
import * as Geom from "../../libs/CS559-Three/examples/jsm/deprecated/Geometry.js";
import { OBJLoader } from "../../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "../../libs/CS559-Three/examples/jsm/loaders/MTLLoader.js";
//import { ObjGrObject } from "../../libs/CS559-Framework/ObjGrObject.js";
import { shaderMaterial } from "../../libs/CS559-Framework/shaderHelper.js";
import * as Loaders from "../../libs/CS559-Framework/loaders.js";


export class ObjTree extends Loaders.ObjGrObject {
    constructor() {
        super({
            obj: "../for_students/assets/treeModel.obj",
            mtl: "../for_students/assets/treeMaterial.mtl",
            name: "Tree_Blocky",
            norm: 4.0
        });
    }
}

let shaderMat = shaderMaterial("./assets/treeShader.vs", "./assets/treeShader.fs", {
    side: T.DoubleSide,
    uniforms: {
        time: {value: 0.0}
    }
});

export class Tree extends GrObject {
    constructor() {
        let trunk = new T.CylinderGeometry(0.1, 0.1, 1);
        
        let materialTrunk = new T.MeshStandardMaterial({
          color: "brown",
          roughness: 0.5
        });

        let meshTrunk = new T.Mesh(trunk, materialTrunk);
  
        let leaves = new T.SphereGeometry(0.75);
        let meshLeaves = new T.Mesh(leaves, shaderMat);
        meshTrunk.add(meshLeaves);
        meshTrunk.translateY(0.5);
        meshLeaves.translateY(1);
  
        super("Tree_Round", meshTrunk);
        this.u = 0;
    }

    stepWorld(delta, timeOfDay) {
        this.u += delta/2000;
        let colorValue = Math.abs(Math.sin(this.u));
        shaderMat.uniforms.time.value = colorValue;
    }
  }