import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar-align">
      <ul>
        <Link to='/home'>
          <li><svg className="nav-icon" viewBox="0 1 511 511.999" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0"/></svg></li>
        </Link>
        <Link to='/profile'>
          <li><svg className="nav-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 472.6 472.6" space="preserve">
<g>
	<path d="M417.3,453.2c-22-45.7-61.6-81.6-109.6-99.7v-28.9c23.6-1.3,68.1-7.3,94.2-34c3.3-3.4,4.6-8.3,3.4-12.9s-4.8-8.2-9.4-9.5
		c-0.4-0.1-34.8-11.9-27.9-82.3c3-30,2.5-57-1.4-80.2c-4.5-26.6-13.5-47.5-26.6-62.1c-14.2-15.7-32.7-23.7-55-23.7
		c-0.9,0-1.8,0-2.6,0C273.9,12.5,255.3,0,226.8,0c-13.3,0-27.2,2.7-41.4,8.2l-0.6,0.2c-11.2,4.2-32,12.1-49.6,35.5
		c-20.5,27.2-30.3,67.5-29.1,119.7c1.2,52.3-7.4,77.9-14.8,90.2c-6.1,10.1-11.9,12.1-13.4,12.5c-5.1-0.4-9.2,2.2-11.8,6.6
		c-2.7,4.5-1.7,10.2,1.3,14.6c1.2,1.8,8.2,11.2,25.1,20.3c19.3,10.4,43.4,16.3,71.9,17.5v27.5C117,370.8,77.6,407,55.3,453.3
		c-2,4.2-1.7,9.1,0.7,13c2.5,3.9,6.8,6.3,11.4,6.3h337.8c4.6,0,9-2.4,11.4-6.3C419,462.3,419.3,457.4,417.3,453.2z M90.4,445.5
		c21.6-33.2,54-58.3,91.5-70.4c5.6-1.8,9.4-7,9.4-12.8V312c0-3.6-1.4-7.1-4-9.6s-6-4-9.6-3.9c-38.9,0.4-62.4-8.5-75.2-16.1
		c0.9-0.9,1.9-1.8,2.9-2.8c19.7-20.5,29-59.7,27.7-116.6c-2.6-105.1,42.1-122.1,61.1-129.3l0.6-0.2c11.2-4.2,21.9-6.4,31.8-6.4
		c25.8,0,39,14.2,40.1,15.5c2.8,3.5,7.1,5.2,11.6,4.8c2.2-0.2,4.4-0.3,6.5-0.3c14.5,0,26,4.8,35,14.8c19,21,26.8,65.3,21.2,121.5
		c-5.6,56.7,12.1,85.1,27.4,98.9c-20.6,11.4-49.9,15.7-72,15.7c-1.2,0-1.9,0-2,0c-3.6-0.1-7.2,1.3-9.8,3.8c-2.6,2.5-4.1,6-4.1,9.7
		v51.7c0,5.9,3.8,11,9.4,12.8c38,12.3,70.5,37.1,92,69.7H90.4V445.5z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
