/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS 
    export class Control { 
        //PUBLIC INSTANCE VARIABLES
        public points: objects.Point[];
        public mesh: Object3D;
        public x_rotationSpeed: number;
        public y_rotationSpeed: number;
        public z_rotationSpeed: number;
        public label: string;
        public colorHead:string;
        public colorBody:string;
        public colorLeftArm:string;
        public colorRightArm:string;
        public colorLeftLeg:string;
        public colorRightLeg:string;
        public colorNeck: string;
        
        constructor(x_rotationSpeed: number, y_rotationSpeed: number, z_rotationSpeed: number, colorHead: string, colorBody: string, colorRightArm: string, colorLeftArm: string, colorRightLeg: string, colorLeftLeg: string, colorNeck: string) {
            this.x_rotationSpeed = x_rotationSpeed;
            this.y_rotationSpeed = y_rotationSpeed;
            this.z_rotationSpeed = z_rotationSpeed;
            this.colorHead = colorHead;
            this.colorBody = colorBody;
            this.colorRightArm = colorRightArm;
            this.colorLeftArm = colorLeftArm;
            this.colorRightLeg = colorRightLeg;
            this.colorLeftLeg = colorLeftLeg;
            this.colorNeck = colorNeck;
		}
        
        //PUBLIC METHODS
       public randomColors(): void { 
            this.colorHead = '#'+ Math.random().toString(16).substring(2,8);    
            this.colorBody = '#'+ Math.random().toString(16).substring(2,8);
            this.colorRightArm = '#'+ Math.random().toString(16).substring(2,8);
            this.colorLeftArm = '#'+ Math.random().toString(16).substring(2,8);
            this.colorRightLeg = '#'+ Math.random().toString(16).substring(2,8);
            this.colorLeftLeg = '#'+ Math.random().toString(16).substring(2,8);
            this.colorNeck = '#'+ Math.random().toString(16).substring(2,8);
            
            
             console.log(this.colorHead);
             console.log(this.colorBody);
             console.log(this.colorRightArm);
             console.log(this.colorRightLeg);
             console.log(this.colorLeftLeg);
             console.log(this.colorLeftArm);
        } 
         
        public resetColours(): void {
            this.colorHead = "#ffe0bd";
            this. colorBody = "#006ca7";
            this.colorRightArm = '#ffe0bd';
            this.colorLeftArm = '#ffe0bd';
            this.colorRightLeg = '#ffe0bd';
            this.colorLeftLeg = '#ffe0bd';
            this.colorNeck = '#ffe0bd';
            updateCubes();
         } 
         
        public resetPosition(): void {     
            this.x_rotationSpeed = 0;
            this.y_rotationSpeed= 0;
            this.z_rotationSpeed = 0;
        }  

        public clone(): void {
            var materials = [
                new THREE.MeshLambertMaterial({ opacity: 0.6, color: 0xff44ff, transparent: true }),
                new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })
            ];

            var mesh2 = THREE.SceneUtils.createMultiMaterialObject(customGeometry, materials);
            mesh2.children.forEach(function(child) {
                child.castShadow = true
            });  
            mesh2.translateX(5);
            mesh2.translateZ(5);
            mesh2.name = "clone";
            scene.remove(scene.getObjectByName("clone"));
            scene.add(mesh2);
        }
    }
}
