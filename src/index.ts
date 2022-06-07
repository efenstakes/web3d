import * as B from 'babylonjs'


// the canvas
const canvasEL = document.getElementById("3d")

console.log("canvasEL ", canvasEL)


// button
const sButton = document.getElementById("takeScreenShot")
// console.log("button ", sButton)
sButton.addEventListener("click", takeScreenShot)


// create engine
const engine = new B.Engine(canvasEL as HTMLCanvasElement, true, { preserveDrawingBuffer: true, stencil: true })


// create scene
const scene = new B.Scene(engine, {})
scene.clearColor = new B.Color4(0.5, 0.8, 0.5, .2)
scene.ambientColor = new B.Color3(0.3, 0.3, 0.3)
// add fog
// scene.fogMode = B.Scene.FOGMODE_EXP
// scene.fogDensity = .01
// scene.fogColor = new B.Color3(0.9, 0.9, 0.85)


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
// torusMaterial.ambientColor = new B.Color3(1, 0, 0)
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
cube1Mat.diffuseColor = new B.Color3(0, 1, 1)
cube1.material = cube1Mat


// cube 2
// const cube2 = B.MeshBuilder.CreateBox("cube1", { width: 10, height: 8, depth: 10 }, scene)
// cube2.position.y = 2
// cube2.position.z = 7
// cube2.position.x  = 12
// // cube2.material = cube1Mat

// // to receive shadows
// cube2.receiveShadows = true





// mesh instances

// creates new instance
// const cube2Instance = cube2.createInstance("cube2Instance")
// cube2Instance.position.y = 12



// dynamic texture --- TEXT
const dTexture = new B.DynamicTexture("dTexture", { width: 512, height: 256 }, scene)

// @param text — defines the text to be drawn
// @param x — defines the placement of the text from the left
// @param y — defines the placement of the text from the top when invertY is true and from the bottom when false
// @param font — defines the font to be used with font-style, font-size, font-name
// @param color — defines the color used for the text
// @param clearColor — defines the color for the canvas, use null to not overwrite canvas
// @param invertY — defines the direction for the Y axis (default is true - y increases downwards)
// @param update — defines whether texture is immediately update (default is true)
// dTexture.drawText("Hola Mi Amor", 20, 150, "bold 60px Arial", "green", "white", true, true)



const sphere = B.MeshBuilder.CreateSphere(
    "sphere", { diameter: 20, segments: 120, }, scene
)
sphere.position.y = 10
sphere.rotation.x = Math.PI


var cube2Mat = new B.StandardMaterial("cube2Mat", scene)
cube2Mat.diffuseTexture = dTexture
sphere.material = cube2Mat




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

// particlSystm.start()



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






// VolumemetricLightScatteringPost
// const vLSP = new B.VolumetricLightScatteringPostProcess(
//     // Name given to the light
//     "VolumemetricLightScatteringPost", 
//     // The size of the post-process (0.5 means that your postprocess will have a width = canvas.width 0.5 and a height = canvas.height 0.5)
//     .9,
//     // The camera used in the scene
//     camera,
//     // The mesh used to create the light scattering effect
//     cube1, 
//     // The post-process quality, default 100
//     150,
//     // The post-process filtering mode
//     B.Texture.BILINEAR_SAMPLINGMODE,
//     // engine
//     engine,
//     // Postprocess if reusable
//     false,
//     // scene
//     scene
// )





// Mesh EdgesRenderer
// draws egdes around the mesh

cube1.enableEdgesRendering()
cube1.edgesWidth = 10
cube1.edgesColor = new B.Color4(1, 0, 0, 1)



// Mesh BlendModes
// create a blend mode by modifying the alphamode of the materials

// const cube1MaterialClone = cube1Mat.clone(null)
// cube1MaterialClone.alphaMode = B.Engine.ALPHA_INTERPOLATE

// const ballX = B.MeshBuilder.CreateSphere(
//     "ballX", { diameter: 4, segments: 20 }, scene
// )
// ballX.material = cube1MaterialClone





// SolidParticle System

// particle meshes
// const boxP = B.MeshBuilder.CreateBox("boxP", { width: 2, height: 2, depth: 2 }, scene)
// const ballP = B.MeshBuilder.CreateSphere("ballP", { diameter: 2, segments: 10 }, scene)

// const solidParticleSystem = new B.SolidParticleSystem( "solidParticleSystem", scene )
// solidParticleSystem.addShape( boxP, 500 )
// solidParticleSystem.addShape( ballP, 500 )

// const mesh = solidParticleSystem.buildMesh()

// // free them from memory
// boxP.dispose()
// ballP.dispose()


// const solidParticleSystemMat = new B.StandardMaterial("solidParticleSystemMat", scene);
// const texture = new B.Texture("../assets/ring.png", scene);
// solidParticleSystemMat.diffuseTexture = texture

// // set solidParticleSystem mesh material
// mesh.material = solidParticleSystemMat

// // mesh.position.y = -50
// mesh.position.y = 5


// // init
// solidParticleSystem.initParticles = function() {
//     // just recycle everything
//     for (var p = 0; p < this.nbParticles; p++) {
//        recycleParticle(this.particles[p]);
//     }
// }

// solidParticleSystem.updateParticle = function(particle: B.SolidParticle): B.SolidParticle {  
//     // some physics here 
//     if (particle.position.y < 0) {
//        recycleParticle(particle)
//     }
//     particle.velocity.y += gravity; // apply gravity to y
//     (particle.position).addInPlace(particle.velocity);  // update particle new position
//     particle.position.y += speed / 2;

//     var sign = (particle.idx % 2 == 0) ? 1 : -1;  // rotation sign and new value
//     particle.rotation.z += 0.1 * sign;
//     particle.rotation.x += 0.05 * sign;
//     particle.rotation.y += 0.008 * sign;

//     return particle
// }

// // init all particle values and set them once to apply textures, colors, etc
// solidParticleSystem.initParticles();
// solidParticleSystem.setParticles();

// solidParticleSystem.computeParticleColor = false;
// solidParticleSystem.computeParticleTexture = false


// scene.debugLayer.show()
// // animation
// scene.registerBeforeRender(function() {
//     solidParticleSystem.setParticles()
//     solidParticleSystem.mesh.rotation.y += 0.01
// })










// Decals
// used to add details on the created mesh – details like bullets, holes

// const decalsMat = new B.StandardMaterial("decalsMat", scene)
// decalsMat.diffuseTexture = new B.Texture("../assets/hole.png", scene)
// decalsMat.diffuseTexture.hasAlpha = true
// decalsMat.zOffset = -2




// var onPointerDown = function (evt) {
//     if (evt.button !== 0) {
//        return;
//     }

//     // check if we are under a mesh
//     var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh === cube1 })
    
//     // this will give all the meshes , 
//     // but it will pick the mesh whch is same as cube1(target mesh) and 
//     // return true if it is found });

//     if (pickInfo.hit) { // if true
//        var decalSize = new B.Vector3(5, 5, 5); //size of decal is defined

//        var newDecal = B.MeshBuilder.CreateDecal("decal", cube1); //decal is created 
//        newDecal.material = decalsMat; //decal material is added.
//     }
//  }

// canvasEL.addEventListener("pointerdown", onPointerDown, false)









// Curve3

// const quadraticBezierVectors = B.Curve3.CreateQuadraticBezier( 
//     B.Vector3.Zero(), 
//     new B.Vector3(10, 5, 5), 
//     new B.Vector3(10, 10, 0), 
//     15
// );
// const quadraticBezierCurve = B.MeshBuilder.CreateLines(
//     "qbezier", 
//     { 
//         points: quadraticBezierVectors.getPoints(),
//         // colors: [
//         //     new B.Color4(1, 1, 1, 1),
//         //     new B.Color4(1, 1, 0, 1),
//         //     new B.Color4(1, .5, 1, 1),
//         //     new B.Color4(0, 1, 1, 1),
//         // ]
//     }, 
//     scene
// )
// quadraticBezierCurve.color = new B.Color3(1, 1, 0.5)



// const cubicBezierVectors = B.Curve3.CreateCubicBezier( 
//     B.Vector3.Zero(), 
//     new B.Vector3(10, 5, 20), 
//     new B.Vector3(-50, 5, -20), 
//     new B.Vector3( -10, 20, 10), 
//     60
// )
// const cubicBezierCurve = B.MeshBuilder.CreateLines(
//     "cbezier", { points: cubicBezierVectors.getPoints() }, scene
// )
// cubicBezierCurve.color = new B.Color3(1, 0, 0)



// const createCatmullRomSpline = B.Curve3.CreateCatmullRomSpline( 
//     [
//         B.Vector3.Zero(), 
//         new B.Vector3(10, 5, 20), 
//         new B.Vector3(-50, 5, -20), 
//         new B.Vector3( -10, 20, 10), 
//     ],
//     60
// )
// const createCatmullRomSplineCurve = B.MeshBuilder.CreateLines(
//     "cbezier", { points: createCatmullRomSpline.getPoints() }, scene
// )
// createCatmullRomSplineCurve.color = new B.Color3(1, 0, 0)






// Parallax Mapping
// It uses a height map which is applied as an offset 
// on the material's textures in order to accentuate the effect of 
// relief in the geometry's surface. In the 3Dworld, stone walls with a 
// depth applied to it will have more apparent looks and will look 
// realistic to the end user. 
// At steeper view-angles, the texture coordinates are displaced more, 
// giving the illusion of depth due to parallax effects as 
// the view changes


const realBox = B.MeshBuilder.CreateBox(
    "realBox", { width: 3, height: 3, depth: 3 }, scene
)
realBox.position.y = 1.5
const realBoxMat = new B.StandardMaterial("realBoxMat", scene)
realBoxMat.diffuseTexture = new B.Texture("../assets/stones2.jpg")
realBox.material = realBoxMat

realBoxMat.useParallax = true
realBoxMat.useParallaxOcclusion = true
realBoxMat.parallaxScaleBias = .3
realBoxMat.specularPower = 1000
realBoxMat.specularColor = new B.Color3(0.5, 0.5, 0.5)








// Lens Flares
// to show a realistic occurrence of the light effect, lens flare is used
// Consider sun rays falling on the mirror and the effect seen of it is mostly called Lens Flare


// const lensFlareSys = new B.LensFlareSystem("lensFlareSys", light, scene)

// const flare = new B.LensFlare(
//     Math.random(), // size
//     .15, // position
//     B.Color3.Yellow(),   // color
//     "../assets/sun.jpg",
//     lensFlareSys
// )







// Create ScreenShot
// pass { preserveDrawingBuffer: true, stencil: true } to the engines third param

function takeScreenShot() {
    B.Tools.CreateScreenshot(
        engine,
        camera,
        { width: 1024, height: 560 },
        (data)=> {
            console.log("ScreenShot data ", data)
            const img = document.createElement("img")
            img.src = data
            document.body.append(img)
        }
    )
}







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
//     // ray.show(scene, new B.Color3(1, 1, 0.1));

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

var speed = 1.5;
var gravity = -0.01;
function recycleParticle(particle) {
    particle.position.x = 0;
    particle.position.y = 0;
    particle.position.z = 0;
    particle.velocity.x = (Math.random() - 0.5) * speed;
    particle.velocity.y = Math.random() * speed;
    particle.velocity.z = (Math.random() - 0.5) * speed;
    
    var scale = Math.random() +0.5;
    particle.scale.x = scale;
    particle.scale.y = scale;
    particle.scale.z = scale;
    particle.rotation.x = Math.random() * 3.5;
    particle.rotation.y = Math.random() * 3.5;
    particle.rotation.z = Math.random() * 3.5;
    
    particle.color.r = Math.random() * 0.6 + 0.5;
    particle.color.g = Math.random() * 0.6 + 0.5;
    particle.color.b = Math.random() * 0.6 + 0.5;
    particle.color.a = Math.random() * 0.6 + 0.5;
 }