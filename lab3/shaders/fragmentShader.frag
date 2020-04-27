//The fragment shader outputs the pixel color for the fragment we are shading.

uniform vec3 colorA;
uniform vec3 colorB;

varying vec3 vUv;

void main() {
    gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);
    
}
