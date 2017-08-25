var isUserInteracting = false;

function container_init(containerid,width,height,href,loadingBoxJQobject) {

    var config={"lon":174,
        "lat":-2.9,
        "phi":0,
        "theta":0,
        "loadingBox":loadingBoxJQobject,
        "window_innerWidth":width||750,
        "window_innerHeight":height||415,
        "camera":null,
        "scene":null,
        "renderer":null,
        "material":null,
        "mesh":null,
        "onPointerDownPointerX":0,
        "onPointerDownPointerY":0,
        "onPointerDownLon":0,
        "onPointerDownLat":0,
        "animate":function () {
            requestAnimationFrame(config.animate);
            config.update();
        },
        "update":function () {
            if (isUserInteracting === false) {
                config.lon += 0.1;
            }
            config.lat = Math.max(-85, Math.min(85, config.lat));
            config.phi = THREE.Math.degToRad(90 - config.lat);
            config.theta = THREE.Math.degToRad(config.lon);
            config.camera.target.x = 500 * Math.sin(config.phi) * Math.cos(config.theta);
            config.camera.target.y = 500 * Math.cos(config.phi);
            config.camera.target.z = 500 * Math.sin(config.phi) * Math.sin(config.theta);
            config.camera.lookAt(config.camera.target);
            config.renderer.render(config.scene, config.camera);
        },
        "changePic":function (src) {
            var img = new Image();
            img.src = src;
            if (!img.complete) {
                config.loadingBox.fadeIn(500);
                img.onload = function () {
                    config.loadingBox.fadeOut(500)
                }
            }
            config.material.map.image.src = src;
            config.material.map.needsUpdate = true
        }
    };
    config.loadingBox.fadeIn(500);
    var container;
    container = document.getElementById(containerid);
    config.camera = new THREE.PerspectiveCamera(75, config.window_innerWidth / config.window_innerHeight,1, 1100);
    config.camera.target = new THREE.Vector3(0, 0, 0);
    config.scene = new THREE.Scene();
    var geometry = new THREE.SphereGeometry(500, 120, 80);
    geometry.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));
    THREE.ImageUtils.crossOrigin = ""
    var materSrc = THREE.ImageUtils.loadTexture(href);
    materSrc.magFilter = THREE.LinearFilter;
    materSrc.minFilter = THREE.LinearFilter;
    config.material = new THREE.MeshBasicMaterial(
        {
            map: materSrc, needsUpdate: true
        });
    config.mesh = new THREE.Mesh(geometry, config.material);
    config.scene.add(config.mesh);
    config.renderer = new THREE.WebGLRenderer({
            antialias: true,
            precision: "highp",
            alpha: true,
            premultipliedAlpha: false,
            stencil: false,
            preserveDrawingBuffer: true,
            antialias: true
        }
    );
    config.renderer.setSize(config.window_innerWidth, config.window_innerHeight);
    $(container).html("");
    container.appendChild(config.renderer.domElement);
    container.addEventListener("mousedown", function (event) {
        event.preventDefault();
        isUserInteracting = true;
        config.onPointerDownPointerX = event.clientX;
        config.onPointerDownPointerY = event.clientY;
        config.onPointerDownLon = config.lon;
        config.onPointerDownLat = config.lat
    }, false);
    container.addEventListener("mousemove", function (event) {
        if (isUserInteracting === true) {
            config.lon = (config.onPointerDownPointerX - event.clientX) * 0.1 + config.onPointerDownLon;
            config.lat = (event.clientY - config.onPointerDownPointerY) * 0.1 + config.onPointerDownLat
        }
    }, false);
    container.addEventListener("mouseup", function (event) {
        isUserInteracting = false
    }, false);
    container.addEventListener("touchmove", function (event) {
        var touch = event.targetTouches[0];
        if (isUserInteracting) {
            config.lon = (config.onPointerDownPointerX - touch.pageX) * 0.1 + config.onPointerDownLon;
            config.lat = (touch.pageY - config.onPointerDownPointerY) * 0.1 + config.onPointerDownLat
        }
    }, false);
    container.addEventListener("touchstart", function (event) {
        event.preventDefault();
        isUserInteracting = true;
        var touch = event.targetTouches[0];
        config.onPointerDownPointerX = touch.pageX;
        config.onPointerDownPointerY = touch.pageY;
        config.onPointerDownLon = config.lon;
        config.onPointerDownLat = config.lat
    }, false);
    container.addEventListener("dragover", function (event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = "copy"
        }
        , false);
    container.addEventListener("dragenter", function (event) {
            document.body.style.opacity = 0.5
        }
        , false);
    container.addEventListener("dragleave", function (event) {
            document.body.style.opacity = 1
        }
        , false);

    window.addEventListener("resize", function () {
        config.camera.aspect = config.window_innerWidth / config.window_innerHeight;
        config.camera.updateProjectionMatrix();
        config.renderer.setSize(config.window_innerWidth, config.window_innerHeight)
    }, false);
    config.loadingBox.fadeOut(500);
    return config;
}

$("body").on("mouseup touchend", function (e) {
        isUserInteracting = false
    }
);


