import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // <-- Add this import
import { checkerTest } from './checkerTest';


import('@dimforge/rapier3d').then(RAPIER => {
    console.log(RAPIER);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#FFFFFF")
    scene.fog = new THREE.FogExp2("#23FFFFFF2323", 0.09);
    
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    scene.add(camera);
    
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    document.body.appendChild( renderer.domElement );
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0); // Optional: set the point to orbit around
    
    
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    
    scene.add(directionalLight);
    
    let checkerTestPlane = new checkerTest(100, 1, 100, "/textures/checkerFloor.jpg"); // larger plane
    let checkerTestPlaneModel = checkerTestPlane.makeModel();
    
    // Make the texture repeat
    checkerTestPlaneModel.material.map.wrapS = THREE.RepeatWrapping;
    checkerTestPlaneModel.material.map.wrapT = THREE.RepeatWrapping;
    checkerTestPlaneModel.material.map.repeat.set(20, 20); 
    
    checkerTestPlaneModel.position.set(0, -1, 0);
    checkerTestPlaneModel.receiveShadow = true;
    scene.add(checkerTestPlaneModel);
    
    camera.position.set(0, 2, 10); 
    
    
    // In your animation loop, update the texture offset for endless effect
    function mainApplicationLoop(){
        controls.update();
    
        // Move the checkerboard texture based on camera position for endless effect
        checkerTestPlaneModel.material.map.offset.x = camera.position.x / 100;
        checkerTestPlaneModel.material.map.offset.y = camera.position.z / 100;
    
        renderer.render(scene, camera);
    }
    
    renderer.setAnimationLoop(mainApplicationLoop);
})



