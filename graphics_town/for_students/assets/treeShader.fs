uniform float time;

void main()
{
    //float color = sin(time)*100.;
    
    gl_FragColor = vec4(1.+time*3./4., 0., time, 1.);
}