import * as T from "../../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../../libs/CS559-Framework/GrObject.js";
import * as Geom from "../../libs/CS559-Three/examples/jsm/deprecated/Geometry.js";

let tl = new T.TextureLoader().load("../for_students/assets/texture.png");

let buildingMaterial = new T.MeshStandardMaterial({
    color: "#EDE0B9",
    bumpMap: tl,
    roughness: 1.0,
});

let building1Count = 0;
export class Building1 extends GrObject {
    constructor(x, y, z) {
        let geometry = new T.BufferGeometry();
        const vertices = new Float32Array( [
          -1, 0, 0,
          1, 0, 0,
          1, 2, 0,
    
          1, 2, 0,
          -1, 2, 0,
          -1, 0, 0,
    
          1, 2, 0,
          1, 0, 0,
          1, 2, -2,
    
          1, 0, -2,
          1, 2, -2,
          1, 0, 0,
    
          1, 2, -2,
          1, 0, -2,
          -1, 2, -2,
    
          -1, 2, -2,
          1, 0, -2,
          -1, 0, -2,
    
          -1, 0, -2,
          -1, 2, 0,
          -1, 2, -2,
    
          -1, 0, 0,
          -1, 2, 0,
          -1, 0, -2,
    
          1, 2, 0,
          1, 3, -1,
          -1, 2, 0,
    
          -1, 2, 0,
          1, 3, -1,
          -1, 3, -1,

          1, 3, -1,
          1, 2, -2,
          -1, 3, -1,
    
          1, 2, -2,
          -1, 2, -2,
          -1, 3, -1,


          1, 2, -2,
          1, 3, -1,
          1, 2, 0,

          -1, 2, 0,
          -1, 3, -1,
          -1, 2, -2,

          -1, 0, -2,
          1, 0, 0,
          -1, 0, 0,
    
          1, 0, -2,
          1, 0, 0,
          -1, 0, -2
        ]);
        geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
        geometry.computeVertexNormals();
    
        let material = buildingMaterial;
        let mesh = new T.Mesh(geometry, material);

        mesh.translateX(x);
        mesh.translateY(y);
        mesh.translateZ(z);
        super(`Building1-${++building1Count}`, mesh);
        }
}

let tallBuildingCount = 0;
export class TallBuilding extends GrObject {
    constructor(x, y, z) {
        let baseGeo = new T.BoxGeometry(6, 4, 12);
        let material = buildingMaterial;
        let mesh = new T.Mesh(baseGeo, material);
        mesh.translateY(2);

        let partLeft = new T.Mesh(baseGeo, material);
        mesh.add(partLeft); 
        partLeft.translateX(-8);
        partLeft.translateZ(2);
        partLeft.rotateY(Math.PI/2);

        let tower = new T.Mesh(
            new T.BoxGeometry(4, 20, 8),
            material
        );
        tower.translateY(10);
        mesh.add(tower);

        mesh.scale.set(0.5, 0.5, 0.5);
        mesh.position.set(x, y, z);
        
        super(`TallBuilding-${++tallBuildingCount}`, mesh);
    }
}

let hallCount = 0;
export class Hall extends GrObject {
    constructor(x, y, z) {
        let baseGeo = new T.BoxGeometry(20, 4, 8);
        let material = buildingMaterial;
        let mesh = new T.Mesh(baseGeo, material);
        mesh.translateY(7);

        let part1 = new T.Mesh(new T.BoxGeometry(8, 4, 4), material);
        mesh.add(part1); 
        part1.translateX(14);
        part1.translateZ(-2);
        
        let part2 = new T.Mesh(
            new T.BoxGeometry(4, 4, 8),
            material
        );
        mesh.add(part2);
        part2.translateX(18);

        mesh.scale.set(0.5, 0.5, 0.5);
        mesh.position.set(x, y, z);
        

        super(`Hall-${++hallCount}`, mesh);
    }
}

