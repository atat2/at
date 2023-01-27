import * as T from "../../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../../libs/CS559-Framework/GrObject.js";
import * as Geom from "../../libs/CS559-Three/examples/jsm/deprecated/Geometry.js";

import { OBJLoader } from "../../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";
import * as Loaders from "../../libs/CS559-Framework/loaders.js";

export class Bus extends GrObject {
    constructor() {
        let geometry = new T.BoxGeometry(8, 2, 2);
        let material = new T.MeshStandardMaterial({
            color: "blue",
            metalness: .75,
            roughness: 0.25
        });
        let mesh = new T.Mesh(geometry, material);
        mesh.translateY(1.25);
        let wheelGeo = new T.CylinderGeometry(0.5, 0.5, 0.5);
        let wheelMat = new T.MeshStandardMaterial({
            color: "black",
        }); 
        let wheel = [];
        for(let i = 0; i < 4; i++) {
            wheel[i] = new T.Mesh(wheelGeo, wheelMat);
            wheel[i].translateY(-0.75);
        }
        wheel[0].translateX(3.5);
        wheel[0].translateZ(.7);

        wheel[1].translateX(-3.5);
        wheel[1].translateZ(.7);

        wheel[2].translateX(-3.5);
        wheel[2].translateZ(-.7);

        wheel[3].translateX(3.5);
        wheel[3].translateZ(-.7);

        wheel.forEach(w =>{
            w.rotateX(Math.PI/2);
            mesh.add(w);
        });

        super("Bus", mesh);
        this.u = 0;
        this.rideable = mesh;
    }
    stepWorld(delta, timeOfDay) {
        this.u += delta / 2000;
        this.setPos(Math.sin(this.u)*4-4, 1.25, 4);
    }
}

export class BladelessHelicopter extends Loaders.ObjGrObject {
    constructor() {
        super({
            obj: "../for_students/assets/helicopter.obj",
            name: "BladelessHelicopter",
            norm: 10.0,
            mtl: "../for_students/assets/helicopter.mtl",
            
        });
        this.u = 0;
        this.rideable = this.objects[0];
    }
    stepWorld(delta, timeOfDay) {
        this.u += delta / 2000;
        this.setPos(Math.sin(this.u)*10, 10+Math.sin(this.u), Math.cos(this.u)*10);
        this.objects[0].rotation.y = -this.u;
    }

}