var OW = Object.create(IB.engine);

//////////////////////////////////

OW.FOV = 75;

OW.NEAR = 0.01;

OW.FAR = 1000;

/////////////////////////////////////////////////////////////////////////////////

OW.customStartupFunctions0.push(function () {OW.network.connectToMainServer();});

OW.customStartupFunctions3.push(function () {
	var grassTex = THREE.ImageUtils.loadTexture('img/Grass_1.png');
    grassTex.wrapS = THREE.RepeatWrapping;
    grassTex.wrapT = THREE.RepeatWrapping;
    grassTex.repeat.x = 256;
    grassTex.repeat.y = 256;
    var groundMat = new THREE.MeshPhongMaterial({map: grassTex});
    var groundGeo = new THREE.PlaneGeometry(10000, 10000);
    var ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.1; //-1.9; //lower it 
    ground.rotation.x = -Math.PI / 2; //-90 degrees around the xaxis 
    ////IMPORTANT, draw on both sides 
    ground.doubleSided = true;
    ground.receiveShadow = true;
    this.world.sceneAdd(ground);
	
	var pointLight = new THREE.PointLight(0xFFFFFF);
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;
	pointLight.intensity = 1;
	this.world.sceneAdd(pointLight);
	this.world.sceneAdd(new THREE.Mesh(new THREE.SphereGeometry(50, 16, 16), new THREE.MeshLambertMaterial({color: 0xCC0000})));
});
