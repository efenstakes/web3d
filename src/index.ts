import * as BL from 'babylonjs'


// the canvas
const canvasEL = document.getElementById("3d")

console.log("canvasEL ", canvasEL)
console.log("hola from ts ")

// create engine
const engine = new BL.Engine(canvasEL as HTMLCanvasElement)


// create scene
const scene = new BL.Scene(engine, {})
scene.clearColor = new BL.Color4(0.5, 0.8, 0.5, .2)
scene.ambientColor = new BL.Color3(0.3, 0.3, 0.3)
// add fog
// scene.fogMode = BABYLON.Scene.FOGMODE_EXP
// scene.fogDensity = .01
// scene.fogColor = new BABYLON.Color3(0.9, 0.9, 0.85)


// create light
const light = new BL.HemisphericLight("Light", BL.Vector3.Zero(), scene)


// create camera
const camera = new BL.ArcRotateCamera("Camera", 1, 1, 20, BL.Vector3.Zero(), scene)
camera.attachControl(true)
camera.upperBetaLimit = Math.PI / 2.1
camera.lowerRadiusLimit = 4

var light2 = new BL.HemisphericLight("light1", new BL.Vector3(0, 1, 0), scene);
light2.intensity = 0.7


// ground
const ground = BL.MeshBuilder.CreateGround(
    "ground", { width: 400, height: 400, updatable: true, subdivisions: 5 }, scene
)
const groundMaterial = new BL.StandardMaterial("groundMaterial", scene)
groundMaterial.diffuseTexture = new BL.Texture("../assets/tile.jpg")
ground.material = groundMaterial

// create cylinder
// new Array(10).fill(0).map((_, index: number)=> {

//     const cylinder = BL.MeshBuilder.CreateCylinder(
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
// const disc = BL.MeshBuilder.CreateDisc(
//     "disc", { radius: 20, tessellation: 24 }, scene
// )


// torus 
const torus = BL.MeshBuilder.CreateTorus(
    "torus", { diameter: 4, thickness: 1, tessellation: 5 }, scene
)
torus.position.y = 4
torus.rotation.x = 90
const torusMaterial = new BL.StandardMaterial("TorusMat", scene)
// torusMaterial.diffuseColor = new BL.Color3(1, 0, .4)
torusMaterial.diffuseTexture = new BL.Texture("../assets/ring.png")
torusMaterial.ambientColor = new BABYLON.Color3(1, 0, 0)
// set transparency
// torusMaterial.alpha = .5
torus.material = torusMaterial

// create cube
// const cube = BL.MeshBuilder.CreateBox(
//     "Box", 
//     { width: 2, height: 2, depth: 2 },
//     scene
// )
// cube.material = torusMaterial


// tube
// const paths = [
//     new BL.Vector3(-5, 0, 0),
//     new BL.Vector3(5, 0, 0),
//     new BL.Vector3(0, 0, -5),
//     new BL.Vector3(0, 5, 0)
//  ]
// const tube = BL.MeshBuilder.CreateTube(
//     "tube", { radius: 20, tessellation: 10, paths: paths }, scene
// )



// skybox
// const skybox = BL.MeshBuilder.CreateBox(
//     "skybox", { width: 100, height: 100, depth: 100, }, scene
// )
// const skyboxMat = new BL.StandardMaterial("skyboxMat", scene)
// skyboxMat.backFaceCulling = false
// skyboxMat.reflectionTexture = new BL.CubeTexture("../assets/skybox", scene)
// skyboxMat.reflectionTexture.coordinatesMode = BL.Texture.SKYBOX_MODE
// skyboxMat.diffuseColor = new BL.Color3(0, 0, 0)
// skyboxMat.specularColor = new BL.Color3(0, 0, 0)
// skyboxMat.disableLighting = true
// skybox.material = skyboxMat





// animation
// const anim = new BL.Animation(
//     "anim", 
//     "scale.y", 
//     30, 
//     BL.Animation.ANIMATIONTYPE_FLOAT, 
//     BL.Animation.ANIMATIONLOOPMODE_CYCLE
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
const spriteManager = new BL.SpriteManager(
    "spriteManager", "../assets/ring.png", 2, 2000, scene
)
spriteManager.isPickable = true

const sprite = new BL.Sprite("sprite", spriteManager)
// sets width & height to same value
// sprite.size = 10  
sprite.width = 10
sprite.height = 10
sprite.angle = Math.PI/4
sprite.invertU = true

sprite.position.y = 20


sprite.isPickable = true



scene.onPointerDown = function(evt) {
    const pickedResult = scene.pickSprite(this.pointerX, this.pointerY) 
    console.log("pickedResult ", pickedResult)
    
    if( pickedResult.hit ) {
        pickedResult.pickedSprite.angle += 1
    }
}




// animations here
scene.registerBeforeRender(()=> {
    torus.rotation.y += .01
})

engine.runRenderLoop(()=> scene.render())



// resize engine when window resizes
window.addEventListener("resize", ()=> engine.resize())