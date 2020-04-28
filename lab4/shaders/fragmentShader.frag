//display the uv coordinate in the red and green channels of gl_FragColor

uniform sampler2D texture1;
//uniform vec2 size;
varying vec2 vUv;

void main() {
    gl_FragColor = texture2D(texture1, vUv);
}

