import * as B from 'babylonjs'


// the canvas
const canvasEL = document.getElementById("3d")

console.log("canvasEL ", canvasEL)
console.log("hola from ts ")

// create engine
const engine = new B.Engine(canvasEL as HTMLCanvasElement)


// create scene
const scene = new B.Scene(engine, {})
scene.clearColor = new B.Color4(0.5, 0.8, 0.5, .2)
scene.ambientColor = new B.Color3(0.3, 0.3, 0.3)
// add fog
// scene.fogMode = BABYLON.Scene.FOGMODE_EXP
// scene.fogDensity = .01
// scene.fogColor = new BABYLON.Color3(0.9, 0.9, 0.85)


// create light
const light0 = new B.HemisphericLight("Light", B.Vector3.Zero(), scene)
light0.diffuse = new B.Color3(1, 0, 0) // sky color
light0.specular = new B.Color3(0, 1, 0)
light0.groundColor = new B.Color3(0, 0, 0)  // ground color

// const light = new B.PointLight("light", new B.Vector3(0, 10, 10), scene)
// const light = new B.DirectionalLight("light", new B.Vector3(0, -1, 0), scene)

// position
// direction
// angle
// exponent
const light = new B.SpotLight(
    "Light", 
    new B.Vector3(0, 30, 0),  // position
    new B.Vector3(0, -1, 0),  // direction
    0.8,  // angle
    2,  // exponent
    scene
)
light.diffuse = new B.Color3(0, 1, 0)
light.specular = new B.Color3(1, 0, 1)

// create camera
const camera = new B.ArcRotateCamera("Camera", 1, 2, 30, B.Vector3.Zero(), scene)
// const camera = new B.WebVRFreeCamera("WebVRFreeCamera", new B.Vector3(0, 10, -30), scene)
camera.attachControl(true)
camera.upperBetaLimit = Math.PI / 2.1
camera.lowerRadiusLimit = 4

var light2 = new B.HemisphericLight("light1", new B.Vector3(0, 1, 0), scene);
light2.intensity = 0.7


// ground
const ground = B.MeshBuilder.CreateGround(
    "ground", { width: 400, height: 400, updatable: true, subdivisions: 5 }, scene
)
const groundMaterial = new B.StandardMaterial("groundMaterial", scene)
groundMaterial.diffuseTexture = new B.Texture("../assets/tile.jpg")
ground.material = groundMaterial

// create cylinder
// new Array(10).fill(0).map((_, index: number)=> {

//     const cylinder = B.MeshBuilder.CreateCylinder(
//         "Cylinder",
//         {
//             height: 3, diameter: 1, tessellation: 6
//         },
//         scene
//     )

//     // space them out
//     cylinder.position.z -= 3 * index


// })


// disc
// const disc = B.MeshBuilder.CreateDisc(
//     "disc", { radius: 20, tessellation: 24 }, scene
// )


// torus 
// const torus = B.MeshBuilder.CreateTorus(
//     "torus", { diameter: 4, thickness: 1, tessellation: 5 }, scene
// )
// torus.position.y = 4
// torus.rotation.x = 90
const torusMaterial = new B.StandardMaterial("TorusMat", scene)
// torusMaterial.diffuseColor = new B.Color3(1, 0, .4)
torusMaterial.diffuseTexture = new B.Texture("../assets/ring.png")
torusMaterial.ambientColor = new BABYLON.Color3(1, 0, 0)
// set transparency
// torusMaterial.alpha = .5
// torus.material = torusMaterial

// create cube
// const cube = B.MeshBuilder.CreateBox(
//     "Box", 
//     { width: 2, height: 2, depth: 2 },
//     scene
// )
// cube.material = torusMaterial


// tube
// const paths = [
//     new B.Vector3(-5, 0, 0),
//     new B.Vector3(5, 0, 0),
//     new B.Vector3(0, 0, -5),
//     new B.Vector3(0, 5, 0)
//  ]
// const tube = B.MeshBuilder.CreateTube(
//     "tube", { radius: 20, tessellation: 10, paths: paths }, scene
// )



// skybox
// const skybox = B.MeshBuilder.CreateBox(
//     "skybox", { width: 100, height: 100, depth: 100, }, scene
// )
// const skyboxMat = new B.StandardMaterial("skyboxMat", scene)
// skyboxMat.backFaceCulling = false
// skyboxMat.reflectionTexture = new B.CubeTexture("../assets/skybox", scene)
// skyboxMat.reflectionTexture.coordinatesMode = B.Texture.SKYBOX_MODE
// skyboxMat.diffuseColor = new B.Color3(0, 0, 0)
// skyboxMat.specularColor = new B.Color3(0, 0, 0)
// skyboxMat.disaBeLighting = true
// skybox.material = skyboxMat





// animation
// const anim = new B.Animation(
//     "anim", 
//     "scale.y", 
//     30, 
//     B.Animation.ANIMATIONTYPE_FLOAT, 
//     B.Animation.ANIMATIONLOOPMODE_CYCLE
// )
// anim.setKeys([
//     { frame: 0, value: 1},
//     { frame: 60, value: 1.2},
//     { frame: 100, value: 1},
// ])

// ad the anim to cube
// cube.animations = []
// cube.animations.push(anim)


// start anim
// scene.beginAnimation(cube, 0, 100, true)



// sprites
const spriteManager = new B.SpriteManager(
    "spriteManager", "../assets/ring.png", 2, 2000, scene
)
spriteManager.isPickable = true

const sprite = new B.Sprite("sprite", spriteManager)
// sets width & height to same value
// sprite.size = 10  
sprite.width = 10
sprite.height = 10
sprite.angle = Math.PI/4
sprite.invertU = true

sprite.position.y = 20


sprite.isPickable = true




// cube 1
const cube1 = B.MeshBuilder.CreateBox("cube1", { width: 2, height: 2, depth: 2 }, scene)
cube1.position.y = 1
cube1.position.z = 5

const cube1Mat = new B.StandardMaterial("cube1Mat", scene)
cube1Mat.diffuseColor = new B.Color3(0, 0, 1)
cube1.material = cube1Mat

// cube 2
const cube2 = B.MeshBuilder.CreateBox("cube1", { width: 5, height: 5, depth: 5 }, scene)
cube2.position.y = 2.5
cube2.position.z = 0





// particle system
const particlSystm = new B.ParticleSystem(
    "particlSystm", 20000, scene
)

particlSystm.particleTexture = new B.Texture("../assets/ring.png")
particlSystm.textureMask = new B.Color4(0.1, 0.8, 0.8, 1.0) // B.Color4(1, 0, 0, 1) // B.Color4(0.1, 0.8, 0.8, 1.0)
particlSystm.emitter = cube1
particlSystm.color1 = new B.Color4(1, 0, 0, 1)
particlSystm.color2 = new B.Color4(0, 1, 1, 1)
particlSystm.colorDead = new B.Color4(0, 0, 0.2, 0.0)

particlSystm.minSize = .2
particlSystm.maxSize = .6
particlSystm.minLifeTime = .5
particlSystm.maxLifeTime = 1.5

particlSystm.emitRate = 1500
particlSystm.minEmitPower = 1
particlSystm.maxEmitPower = 3

particlSystm.updateSpeed = .005

particlSystm.minAngularSpeed = 0
particlSystm.maxAngularSpeed = Math.PI

particlSystm.blendMode = B.ParticleSystem.BLENDMODE_ONEONE
particlSystm.gravity = new B.Vector3(1, 98, 1)

particlSystm.direction1 = new B.Vector3(-7, 8, 3)
particlSystm.direction2 = new B.Vector3(7, 8, -3)

particlSystm.minEmitBox = new B.Vector3(-1, 0, 0) // Starting all from
particlSystm.maxEmitBox = new B.Vector3(1, 0, 0) // to

particlSystm.start()




scene.onPointerDown = function(evt) {
    const pickedResult = scene.pickSprite(this.pointerX, this.pointerY) 
    // console.log("pickedResult ", pickedResult)
    
    if( pickedResult.hit ) {
        pickedResult.pickedSprite.angle += 1
        // particlSystm.start()
    }
}
// scene.onPointerDown = function(evt, pickedResult) {    
//     torus.position.x = pickedResult.pickedPoint.x
// }




// animations here
scene.registerBeforeRender(()=> {
    // torus.rotation.y += .01
    // camera.alpha += .01
    cube1.position.z -= .02

    if( cube1.intersectsMesh(cube2, false) ) {
        console.log("collided")
        // cube1.material.alpha += 2
        cube1Mat.diffuseColor = new B.Color3(1, 0, 0)
    } else {
        // cube1.material.alpha -= .5
        cube1Mat.diffuseColor = new B.Color3(0, 0, 1)
    }

})

engine.runRenderLoop(()=> scene.render())



// resize engine when window resizes
window.addEventListener("resize", ()=> engine.resize())