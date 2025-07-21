import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // <-- Add this import
import { checkerTest } from './checkerTest';



class RapierDebugRenderer {
    mesh
    world
    enabled = true

    constructor(scene, world) {
        this.world = world
        this.mesh = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xffffff, vertexColors: true }))
        this.mesh.frustumCulled = false
        scene.add(this.mesh)
    }

    update() {
        if (this.enabled) {
            const { vertices, colors } = this.world.debugRender()
            this.mesh.geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
            this.mesh.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4))
            this.mesh.visible = true
        } else {
            this.mesh.visible = false
        }
    }
}   


import('@dimforge/rapier3d').then(RAPIER => {
    let gravity = { x: 0.0, y: -9.81, z: 0.0 };
    const world = new RAPIER.World(gravity);
  
  
    const { vertices, colors } = world.debugRender()
    
  

  
    const scene = new THREE.Scene();


    const dynamicBodies = []


  

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.castShadow = true
    camera.position.set(1,1,-10);

    
    let rapierDebugger = new RapierDebugRenderer(scene, world);
    
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    document.body.appendChild( renderer.domElement );
    
    
    const cubeMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial())
    cubeMesh.castShadow = true
    scene.add(cubeMesh)
    const cubeBody = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 2, 0).setCanSleep(false))
    const cubeShape = RAPIER.ColliderDesc.cuboid(0.5, 0.5, 0.5).setMass(1).setRestitution(1.2)
    world.createCollider(cubeShape, cubeBody)
    dynamicBodies.push([cubeMesh, cubeBody])
    
    
    
    const cubeMesh2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial())
    cubeMesh2.castShadow = true
    scene.add(cubeMesh2)
    const cubeBody2 = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 2, 0).setCanSleep(false))
    const cubeShape2 = RAPIER.ColliderDesc.cuboid(0.5, 0.5, 0.5).setMass(1).setRestitution(1.2)
    world.createCollider(cubeShape2, cubeBody2)
    dynamicBodies.push([cubeMesh2, cubeBody2])
    

    const controls = new OrbitControls(camera, renderer.domElement);
    
    controls.update();


    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    
    scene.add(directionalLight);
    
    let checkerTestPlane = new checkerTest(100, 1, 100, "/textures/checkerFloor.jpg"); // larger plane
    let checkerTestPlaneModel = checkerTestPlane.makeModel();
    const floorBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, -0.99, 0))
    const floorShape = RAPIER.ColliderDesc.cuboid(50, 0.5, 50)
    world.createCollider(floorShape, floorBody)
    
    // Make the texture repeat
    checkerTestPlaneModel.material.map.wrapS = THREE.RepeatWrapping;
    checkerTestPlaneModel.material.map.wrapT = THREE.RepeatWrapping;
    checkerTestPlaneModel.material.map.repeat.set(20, 20); 
    
    checkerTestPlaneModel.position.set(0, -1, 0);
    checkerTestPlaneModel.receiveShadow = true;
    scene.add(checkerTestPlaneModel);
     
    const clock = new THREE.Clock()
    let delta
    
    let movingKeysFlags = {
        wPressed: false,
        sPressed: false,
        dPressed: false,
        aPressed: false,
    }

    // Add these variables near your other state variables:
    let targetVelocity = { x: 0, y: 0, z: 0 };
    const acceleration = 40; // Higher = faster response, lower = smoother

    // Update your keydown handler:
    window.addEventListener("keydown", function(event){
        switch(event.key){
            case("w"):
                movingKeysFlags.wPressed = true;
                targetVelocity.z = 2;
                break;
            case("s"):
                movingKeysFlags.sPressed = true;
                targetVelocity.z = -2;
                break;
            case("a"):
                movingKeysFlags.aPressed = true;
                targetVelocity.x = 2;
                break;
            case("d"):
                movingKeysFlags.dPressed = true;
                targetVelocity.x = -2;
                break;
        }        
    })

    // Update your keyup handler:
    window.addEventListener("keyup", function(event){
        switch(event.key){
            case("w"):
               movingKeysFlags.wPressed = false;
                // Only set to 0 if "d" is not pressed
                if (!movingKeysFlags.sPressed) targetVelocity.z = 0;
                break;
            case("s"):
                movingKeysFlags.aPressed = false;
                // Only set to 0 if "d" is not pressed
                if (!movingKeysFlags.wPressed) targetVelocity.z = 0;
                break;
            case("a"):
                movingKeysFlags.aPressed = false;
                // Only set to 0 if "d" is not pressed
                if (!movingKeysFlags.dPressed) targetVelocity.x = 0;
                break;
            case("d"):
                movingKeysFlags.dPressed = false;
                // Only set to 0 if "a" is not pressed
                if (!movingKeysFlags.aPressed) targetVelocity.x = 0;
                break;
        }
    })


    function mainApplicationLoop(){
        delta = clock.getDelta()
        world.timestep = Math.min(delta, 0.1)
        world.step()

        controls.update();

        for (let i = 0, n = dynamicBodies.length; i < n; i++) {
            dynamicBodies[i][0].position.copy(dynamicBodies[i][1].translation())
            dynamicBodies[i][0].quaternion.copy(dynamicBodies[i][1].rotation())
        }
        rapierDebugger.update();

        // Smoothly interpolate velocity for the first cube
        const cubeBody = dynamicBodies[0][1];
        const currentVel = cubeBody.linvel();
        // Interpolate each axis
        const lerp = (a, b, t) => a + (b - a) * t;
        const newVel = {
            x: lerp(currentVel.x, targetVelocity.x, acceleration * delta),
            y: currentVel.y,
            z: lerp(currentVel.z, targetVelocity.z, acceleration * delta)
        };
        cubeBody.setLinvel(newVel, true);

        renderer.render(scene, camera);
    }
    
    renderer.setAnimationLoop(mainApplicationLoop);
})


