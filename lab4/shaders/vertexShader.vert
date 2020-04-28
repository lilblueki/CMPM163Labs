//tells the fragment shader where to sample from the texture.

varying vec2 vUv;
int x;

void main() {
        vUv = uv;
        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewPosition;    
}

