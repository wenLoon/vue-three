<template>
  <div class="solar">
    <canvas id="solar"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { Scene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {CSS2DRenderer, CSS2DObject} from './lib/CSS2DRenderer.js';
export default {
  mounted() {
    const canvas = document.getElementById("solar");
    /*画布大小*/
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    /* scene */
    const scene = new Scene();
    /*camera*/
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    camera.position.set(-200, 50, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);
    /*renderer*/
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色

    /* sun system */
    const loader = new THREE.TextureLoader();
    const SunSystem = new THREE.Object3D();
    scene.add(SunSystem);
    /*sun*/
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: loader.load("../assets/img/sun_bg.jpg"),
    });
    const Sun = new THREE.Mesh(
      new THREE.SphereGeometry(14, 30, 30),
      sunMaterial
    );
    Sun.name = "Sun";
    SunSystem.add(Sun);

    const planetDiv = document.createElement("div");
    planetDiv.className = "label";
    planetDiv.textContent = "Sun";
    planetDiv.style.marginTop = "-0.3em";
    const planetLabel = new CSS2DObject(planetDiv);
    planetLabel.position.set(0, 14, 0);
    Sun.add(planetLabel);

    renderer.render(scene, camera);
  },
  methods: {
    aa() {
      console.log("solar");
    },
  },
};
</script>

<style lang="less" scoped>
.solar {
}
</style>