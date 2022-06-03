import * as BL from 'babylonjs'


// the canvas
const canvasEL = document.getElementById("3d")

console.log("canvasEL ", canvasEL)
console.log("hola from ts ")

// create engine
const engine = new BL.Engine(canvasEL as HTMLCanvasElement)


// create scene
const scene = new BL.Scene(engine, {})



// create light
const light = new BL.HemisphericLight("Light", BL.Vector3.Zero(), scene)


// create camera
const camera = new BL.ArcRotateCamera("Camera", 1, 1, 20, BL.Vector3.Zero(), scene)
camera.attachControl(true)


// create cube
const cube = BL.MeshBuilder.CreateBox(
    "Box", 
    { width: 2, height: 2, depth: 2 },
    scene
)



engine.runRenderLoop(()=> scene.render())
