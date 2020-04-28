//display the uv coordinate in the red and green channels of gl_FragColor

uniform sampler2D texture1;
varying vec2 vUv;

void main() {
    vec2 a = vUv;
    gl_FragColor = texture2D(texture1, a);   
    a.y = mod(a.y, 1.0);
    a.x = mod(a.x, 1.0);

    gl_FragColor = texture2D(texture1, a);
}

