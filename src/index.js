import _ from "lodash";
import "./style.css";
import {aa, bb, cc} from "./test_module";
import icon from "./icon.jpg";

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello2', 'webpack'], ' ');
  element.innerHTML = _.join([aa, bb], ' ');
  element.classList.add('hello');
  element.addEventListener('click',function(){
  	alert('mmm');
  })
  var myIcon = new Image();
  myIcon.src = icon;
  console.log(icon);
  console.log(myIcon);

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());