uniform float time;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position + time/5., 1.0 );
}