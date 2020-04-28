//tells the fragment shader where to sample from the texture.

varying vec2 vUv;

void main() {
    vUv = uv/.5;
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;  
}

