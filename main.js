import * as THREE from 'three';




const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial({
    color:'red'
})

const mesh = new THREE.Mesh(geometry , material)

scene.add(mesh)

const camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight)

camera.position.z=10;


const renderer = new THREE.WebGLRenderer()

document.body.appendChild( renderer.domElement );
renderer.setSize(window.innerWidth ,window.innerHeight)



function animate(){
    requestAnimationFrame( animate );
 mesh.rotation.x += 0.01 ;
 mesh.rotation.y += 0.01;
 renderer.render(scene , camera)
}
animate()