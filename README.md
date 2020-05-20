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
  - x = u * 4
  
b) What is a formula to get the y coordinate of the texture given a v value of the uv coordinate (a value between 0 and 1)?
  - y = v * 4
  
c)What color is sampled from the texture at the uv coordinate (0.375, 0.25)? (sample from the image based on the number your formula gives you i.e. (1, 0) (x, y) is blue)
   - grey
   
# Lab5

Link to Part2A static particle video: https://drive.google.com/open?id=1z16s5JrPkjjVn7J8DPrLN9qOf8hEwFBP

Link to Part2B explosion particle video: https://drive.google.com/open?id=1ppnMcnIIgMkTFHo0BBdOxeyqSH_gFkq5

Link to Part2B custom particle video: https://drive.google.com/open?id=1IVQcS5Ie8YmZZHoUwI7O0QdqQabHlLB9

I did alot of reasearch on how to create a spiral animation with particles, and I found that I would have to develop a function where the amount of particles, the spacing between them, and their positions can be implemented repeatly. I first adjusted the Z value for my camera to 500, so it can be a good enough distance away to get the full spiral in the view (to really capture a galaxy kind of effect). Then I stuck to the amount of 1000 particles, and assigned a startSize variable that will control the amount of particles that will appear within the spiral. Then I created a spread variable that randomly selects a value between the span of -.7 and .7, which will control how spacing of the particles. The width variable controls the width of the spiral at certain points based on the startSize value at the moment and the spread; and the height variable controls how tall the spiral gets at certain points based on a random value choosen between my given values of -.8 and .8. I then messed around with the sin and cos equations with the width and heights, to get an aesthetic wave effect in the spiral; this selection of the code helped in positioning the particles within the spiral. Then lastly I adjusted the meshes x and y rotation values, the mesh's z positioning, and added code (provided in Part2A of the Lab) to allow the color of the particles to change over time.

# Lab6
-implemented Part2 of Lab6 in Shadertoy -

Screenshot of Texture with correct aspect ratio:

![](Screenshot%20(257).png)

Link to my ShaderToy Project: https://www.shadertoy.com/view/3sSfzR

Link to something cool I saw on ShaderToy: https://www.shadertoy.com/view/WtGXWm

# Lab7
 
-implemented Part 2 of Lab 7

Screenshot of Terrain w/ Height Map as the Texture:

![](Screenshot%20(263).png)

Screenshot of Terrain w/ a Different Texture as the Texture:

![](Screenshot%20(264).png)

Video of wave plane (I thought we can change the colors - so mines is pink with purple and green lights)

https://drive.google.com/open?id=1wtE3KSFD44XyfrJmSHH_Lx-d86Ojso3-

Video of Mountain and Water Scenery

https://drive.google.com/open?id=1Oh0CqnPXPzx1t-Ie_rUWRrxcXHHo2Vmf

I wasn't able to talk to my partner about our projects because we completed the assignment at different times
