# CMPM163Labs
CMPM 163 Labs - Mia Kennedy 

# Lab2

Three Cubes Video: https://drive.google.com/open?id=1Na5wOhAo7MWSQHrUjD-dSZOrLOZ1xfDP

Three Objects Photo:
![](Screenshot%20(220).png)

# Lab3 

Link to video: https://drive.google.com/open?id=1uPYX00Y-KTlW0NmfB9D-i9n_f8VLG7bv

For the cube furthest to the left, I interpolated between green and pink using my own shaders.
The cube in the center of the screen is the cube with a green specular highlight made with three.js phong material.
The cube closest to the right, I interpolated between pink and red following the lab tutorial on how to build a shader/using my own shader.
The cube floating towards the bottom left corner is a cube with a purple base, and a orange specular highlight made with three.js phong material.
The cube floating towards the top right corner is a cube with a navy blue base, and a yellow specular highlight made with three.js phong material.

# Lab4

Link to video: https://drive.google.com/open?id=1J8bxVqj2qs9D0GxHwDv3iGQxMJNItl7p

For the middle cube, I applied a texture and normal map to show defined shadows on the cube - with present light animation
For the bottom left cube, I applied a texture map without normal mapping - with present light animation
For the bottom right cube, I applied a mixture of 2 different texture and normal map patterns to create a unique shadowing - with present light animation
For the upper left cube, I applied a texture by using and building a fragment and vector shader
For the upper right cube, I tiled a texture using fragment and vertor shaders. I first began by scaling the texture down to 1/4 of the overall area of the cubes faces, by dividing the UV by .5; and then I used UV Mapping to tile the texture. Since the UV (x,y) coordinates fall within the span of 0 to 1, in my fragment shader, I knew that I had to work with modules (looking at if there is a remainder value) to check the values and ensure that once the UV's x or y value reaches 1, it with loop back around to the next row of the cube until the x,y values would reach (1,1).

a) What is a formula to get the x coordinate of the texture given a u value of the uv coordinate (a value between 0 and 1)?
  - x = 
  
b) What is a formula to get the y coordinate of the texture given a v value of the uv coordinate (a value between 0 and 1)?
  - y =
  
c)What color is sampled from the texture at the uv coordinate (0.375, 0.25)? (sample from the image based on the number your formula gives you i.e. (1, 0) (x, y) is blue)
   - color
