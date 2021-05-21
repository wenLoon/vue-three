<template>
  <div class="about"></div>
</template>

<script>
import * as THREE from "three";
import { Scene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default {
  name: "About",
  components: {},
  data() {
    return {};
  },
  mounted() {
    const scene = new THREE.Scene();

    /* 创建网格模型 */
    const box = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象
    const material = new THREE.MeshLambertMaterial({
      color: 0xff0000,
      opacity: 0.7,
      transparent: true,
    }); //材质对象
    const mesh = new THREE.Mesh(box, material); //网格模型对象

    // const box1 = new THREE.SphereGeometry(60, 40, 40);//创建一个球体几何对象
    // const mesh1 = new THREE.Mesh(box1, material);//网格模型对象
    scene.add(mesh); //网格模型添加到场景中

    //点光源
    const point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    const ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    /**
     * 相机设置
     */
    const width = window.innerWidth; //窗口宽度
    const height = window.innerHeight; //窗口高度
    const k = width / height; //窗口宽高比
    const s = 100; //三维场景缩放系数
    //创建相机对象
    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 300, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    document
      .getElementsByClassName("about")[0]
      .appendChild(renderer.domElement);
    //执行渲染操作
    // renderer.render(scene, camera);

    /* function render() {
             renderer.render(scene, camera);//执行渲染操作
             mesh.rotateY(0.02);//每次绕y轴旋转0.01弧度
             mesh.rotateX(0.04);//每次绕y轴旋转0.01弧度
             requestAnimationFrame(render);//请求再次执行渲染函数render
         }
         render(); */
    /* function render() {
      renderer.render(scene, camera); //执行渲染操作
    }
    render(scene, camera); */
    const controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
    const self = this;
    self.renderModel(renderer, scene, camera);
    controls.addEventListener("change", function () {
      self.renderModel(renderer, scene, camera);
    }); //监听鼠标、键盘事件
  },
  methods: {
    renderModel(renderer, scene, camera) {
      renderer.render(scene, camera); //执行渲染操作
    },
  },
};
</script>

<style lang="less" scoped>
.about {
}
</style>