import * as THREE from 'three';

export class checkerTest {
    width;
    height;
    depth;
    textureURL;
    
    constructor(width, height, depth, textureURL){
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.textureURL = textureURL;
    }

    setWidth(width){
        this.width = width;
    }
    setHeight(height){
        this.height = height;
    }

    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height; 
    }

    setTexture(textureURL){
        this.textureURL = textureURL;
    }

    setDepth(depth){
        this.depth = depth;
    }
    getDepth(){
        return this.depth;
    }

    
    getTexture(){
        return this.textureURL;
    }
    
    
    
    makeModel(){
        let geometryForPlane = new THREE.BoxGeometry(this.width, this.height, this.depth);
        let textureLoader = new THREE.TextureLoader();
        let texture = textureLoader.load(this.getTexture()); 

        let material = new THREE.MeshStandardMaterial({
            map: texture,
        });

        let plane = new THREE.Mesh(geometryForPlane, material);

        return plane;
    }
}