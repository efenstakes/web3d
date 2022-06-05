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
light.diffuse = new B.Color3(0, 1, 0) // B.Color3.Purple()
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
// const torusMaterial = new B.StandardMaterial("TorusMat", scene)
// // torusMaterial.diffuseColor = new B.Color3(1, 0, .4)
// torusMaterial.diffuseTexture = new B.Texture("../assets/ring.png")
// torusMaterial.ambientColor = new BABYLON.Color3(1, 0, 0)
// // set transparency
// // torusMaterial.alpha = .5
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
// skyboxMat.disableLighting = true
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
cube1.isPickable = true

const cube1Mat = new B.StandardMaterial("cube1Mat", scene)
cube1Mat.diffuseColor = new B.Color3(0, 0, 1)
cube1.material = cube1Mat


// cube 2
const cube2 = B.MeshBuilder.CreateBox("cube1", { width: 2, height: 8, depth: 2 }, scene)
cube2.position.y = 2.5
cube2.position.z = 7
cube2.position.x  = 12
cube2.material = cube1Mat

// to receive shadows
cube2.receiveShadows = true





// mesh instances

// creates new instance
const cube2Instance = cube2.createInstance("cube2Instance")
cube2Instance.position.y = 12





// particle system
const particlSystm = new B.ParticleSystem(
    "particlSystm", 20000, scene
)

particlSystm.particleTexture = new B.Texture("../assets/ring.png")
particlSystm.textureMask = new B.Color4(0.1, 0.8, 0.8, 1.0) // B.Color4(1, 0, 0, 1) // B.Color4(0.1, 0.8, 0.8, 1.0)
// particlSystm.emitter = torus
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



// shadow generator
// const shadowGen = new B.ShadowGenerator(512, light)
// shadowGen.getShadowMap().renderList.push(cube2)
// shadowGen.useBlurExponentialShadowMap = true
// shadowGen.bias = .01







// highlight layers
// const highlightLayer = new B.HighlightLayer("highlightLayer", scene)
// highlightLayer.addMesh(cube2, B.Color3.Yellow(), true)
// highlightLayer.addMesh(cube1, B.Color3.Purple())






// action manager
// cube1.actionManager = new B.ActionManager(scene)

// cube1.actionManager.registerAction(
//     new B.InterpolateValueAction(
//         // triger when mouse goes over
//         B.ActionManager.OnPickTrigger, 
//         // the mesh we are targetting ! can be any mesh
//         light,                                
//         // the property we are to upate on the mesh
//         "diffuse",                              
//         // the new value to set for the mesh property above
//         B.Color3.Purple(),               
//         // duration it takes to interpolate
//         2000,                                 
//         // condition to interpolate
//         null,                                 
//         // whether to stop other animations or not. false means dont stop
//         false,                                
//         // function to call after interpolation is finished
//         ()=> {
//             console.log("done animating light")
//         }
//     )
// ).then(
//     new B.InterpolateValueAction(
//         B.ActionManager.NothingTrigger,
//         light,
//         "diffuse",
//         B.Color3.Yellow()
//     )
// )
// cube2.actionManager = new B.ActionManager(scene)
// cube2.actionManager.registerAction(
//     new B.InterpolateValueAction(
//         // triger when mouse goes over
//         B.ActionManager.OnPointerOverTrigger, 
//         // the mesh we are targetting ! can be any mesh
//         cube2,                                
//         // the property we are to upate on the mesh
//         "scaling",                              
//         // the new value to set for the mesh property above
//         new B.Vector3(1.2, 1, 1.2),               
//         // duration it takes to interpolate
//         2000,                                 
//         // condition to interpolate
//         null,                                 
//         // whether to stop other animations or not. false means dont stop
//         false,                                
//         // function to call after interpolation is finished
//         ()=> {
//             console.log("done animating cube2")
//             setTimeout(()=> cube2.scaling = new B.Vector3(1, 1, 1), 4000)
//         }
//     )
// )




// asset manager
// const assetMan = new B.AssetsManager(scene)


// load mesh
// var meshTask = assetMan.addMeshTask("skull task", "", "scenes/", "skull.babylon")
// meshTask.onSuccess = function(task) {
//     console.log("meshTask loaded");
// }	
// meshTask.onError = (task, msg, exception)=> {
//     console.log( "meshTask error ", msg, " exception ", exception )
// }

// load image
// var imageTask = assetMan.addImageTask("image_task", "assets/sky.jpg");
// imageTask.onSuccess = function(task) {
//     console.log("imageTask loades width ", task.image.width);
// }	
// imageTask.onError = (task, msg, exception)=> {
//     console.log( "imageTask error ", msg, " exception ", exception )
// }

// load text File
// const textFileTask = assetMan.addTextFileTask("textFileTask", "test.txt")
// textFileTask.onSuccess = (task)=> {
//     console.log("loaded our file ", task.text)
// }
// textFileTask.onError = (task, msg, exception)=> {
//     console.log( "textFileTask error ", msg, " exception ", exception )
// }

// load assets
// assetMan.loadAsync()


// scene.onPointerDown = function(evt) {
//     const pickedResult = scene.pickSprite(this.pointerX, this.pointerY) 
//     // console.log("pickedResult ", pickedResult)
    
//     if( pickedResult.hit ) {
//         pickedResult.pickedSprite.angle += 1
//         // particlSystm.start()
//     }
// }
// scene.onPointerDown = function(evt, pickedResult) {    
//     torus.position.x = pickedResult.pickedPoint.x
// }

// scene.onPointerMove = function () {
//     var pickResult = scene.pick(scene.pointerX, scene.pointerY);

//     if (pickResult.hit) {
//         var diffX = pickResult.pickedPoint.x - cube1.position.x;
//         var diffY = pickResult.pickedPoint.z - cube1.position.z;
//         cube1.rotation.y = Math.atan2(diffX,diffY);			
//     }
// }



// animations here
// scene.registerBeforeRender(()=> {
    // torus.rotation.y += .01
    // camera.alpha += .01
    // cube1.position.z -= .02

    // if( cube1.intersectsMesh(cube2, false) ) {
    //     console.log("collided")
    //     // cube1.material.alpha += 2
    //     cube1Mat.diffuseColor = new B.Color3(1, 0, 0)
    // } else {
    //     // cube1.material.alpha -= .5
    //     cube1Mat.diffuseColor = new B.Color3(0, 0, 1)
    // }

// })
// scene.registerBeforeRender(function () {
//     var origin = cube1.position;

//     var forward = new B.Vector3(0,0,1);		
//     forward = vecToLocal(forward, cube1);

//     var direction = forward.subtract(origin);
//     direction = B.Vector3.Normalize(direction);

//     var length = 100;

//     var ray = new B.Ray(origin, direction, length);
//     // ray.show(scene, new BABYLON.Color3(1, 1, 0.1));

//     var hit = scene.pickWithRay(ray);

//     if (hit.pickedMesh) {
//        hit.pickedMesh.scaling.y  += 0.01;
//     }
//  });



// highlight layers
// var alpha = 0
// scene.registerBeforeRender(()=> {
//     alpha += 0.06

//     const dateMillis = Date.now()

//     if( dateMillis % 5 === 0 ) {
//         highlightLayer.outerGlow = false
//         highlightLayer.innerGlow = false
//     } else {
//         highlightLayer.outerGlow = true
//         highlightLayer.innerGlow = true
//     }

//     highlightLayer.blurHorizontalSize = 0.3 + Math.cos(alpha) * 0.6 + 0.6;		
//     highlightLayer.blurVerticalSize = 0.3 + Math.sin(alpha / 3) * 0.6 + 0.6;
// })


// run engine
engine.runRenderLoop(()=> scene.render())



// resize engine when window resizes
window.addEventListener("resize", ()=> engine.resize())

function vecToLocal(vector, mesh) {
    var m = mesh.getWorldMatrix();
    var v = B.Vector3.TransformCoordinates(vector, m);
    return v;		
}