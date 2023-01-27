uniform float time;

void main()
{
    float x = (cos(uv.x * uv.y * .5 + time) + 1.0)*0.25;
    vec3 pos = position * (0.5 + x);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( pos , 1.0 );
}