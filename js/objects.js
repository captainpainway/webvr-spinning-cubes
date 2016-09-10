var scene = document.querySelector('a-scene');

var number = 30;
var angle = 0;
var increase = Math.PI * 2 / number;
for(var i = 0; i < number; i++){
    var box = document.createElement('a-box');
    box.setAttribute('material', 'shader: phong; color: #bada55; specular: #333; shininess: 50');

    var box_reflect = document.createElement('a-box');
    box_reflect.setAttribute('material', 'shader: phong; color: #bada55; specular: #333; shininess: 50; opacity: 0.3');

    var animation = document.createElement('a-animation');
    animation.setAttribute('attribute', 'rotation');
    animation.setAttribute('from', '0 0 0');
    animation.setAttribute('to', '0 360 0');
    animation.setAttribute('dur', '4000');
    animation.setAttribute('repeat', 'indefinite');
    animation.setAttribute('easing', 'linear');

    var x = 10 * Math.cos(angle);
    var z = -10 * Math.sin(angle);

    box.setAttribute('position', x + ' 1 ' + z);
    box_reflect.setAttribute('position', '0 -1.3 0');
    scene.appendChild(box);
    box.appendChild(box_reflect);
    box.appendChild(animation);
    angle += increase;
}
