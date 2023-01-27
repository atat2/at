uniform float time;

void main()
{   
    gl_FragColor = vec4(0., time*.5, time+.25, 1.);
}