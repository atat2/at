import * as T from "../../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../../libs/CS559-Framework/GrObject.js";
import * as Geom from "../../libs/CS559-Three/examples/jsm/deprecated/Geometry.js";
import { shaderMaterial } from "../../libs/CS559-Framework/shaderHelper.js";

export class Hill extends GrObject {
    constructor() {
        let geometry = new T.CylinderGeometry(6, 8, 5);
        let material = new T.MeshStandardMaterial({
            color: "green",
        });
        let mesh = new T.Mesh(geometry, material);
        mesh.translateY(2.5);

        super("Hill", mesh);
    }
}

let shaderMat = shaderMaterial("./assets/lake.vs", "./assets/lake.fs", {
    side: T.DoubleSide,
    uniforms: {
        time: {value: 0.0}
    }
});

export class Lake extends GrObject {
    constructor() {
        let geometry = new T.CylinderGeometry(7, 7, 0.25, 100);
        let material = new T.MeshStandardMaterial({
            color: "lightblue",
        });
        let mesh = new T.Mesh(geometry, shaderMat);

        super("Lake", mesh);
        this.u = 0;
    }

    stepWorld(delta, timeOfDay) {
        this.u += delta/2000;
        let colorValue = Math.abs(Math.sin(this.u));
        shaderMat.uniforms.time.value = colorValue;
    }
}
