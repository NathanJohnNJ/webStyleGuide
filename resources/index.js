(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "colors": [
    {
      "color": "purple",
      "main": "#8a46c8ff",
      "shades": {
        "1": "#d9cdfcff",
        "2": "#be9ff4ff",
        "3": "#9b75e0ff",
        "4": "#8140ccff",
        "5": "#6326a0ff",
        "6": "#491a7aff"
      },
      "complimentary": {
        "1": "#c8a846ff",
        "2": "#8ac846ff",
        "3": "#46c88aff"
      },
      "contrasting": {
        "1": "#c84b46ff",
        "2": "#46a8c8ff",
        "3": "#46c87eff"
      },
      "shadow": "#5b2f8aff",
      "highlight": "#ccb6deff"
    },
    {
      "color": "blue",
      "main": "#3b78e6ff",
      "shades": {
        "1": "#a0b2ffff",
        "2": "#789afbff",
        "3": "#4b77f3ff",
        "4": "#3462e2ff",
        "5": "#1a4ddcff",
        "6": "#1e44afff"
      },
      "complimentary": {
        "1": "#e6953bff",
        "2": "#e63b78ff",
        "3": "#95e63bff"
      },
      "contrasting": {
        "1": "#e63b3bff",
        "2": "#3be6e3ff",
        "3": "#78e63bff"
      },
      "shadow": "#2a569bff",
      "highlight": "#c0d7f9ff"
    },
    {
      "color": "teal",
      "main": "#48b9c4ff",
      "shades": {
        "1": "#b1e8fbff",
        "2": "#5fc4e6ff",
        "3": "#48b2d8ff",
        "4": "#32a1ccff",
        "5": "#247fa0ff",
        "6": "#1a5b7aff"
      },
      "complimentary": {
        "1": "#c4485fff",
        "2": "#b9c448ff",
        "3": "#c47848ff"
      },
      "contrasting": {
        "1": "#c45748ff",
        "2": "#c4a948ff",
        "3": "#48c457ff"
      },
      "shadow": "#307f87ff",
      "highlight": "#d0e5e8ff"
    },
    {
      "color": "aquamarine",
      "main": "#6ebfc9ff",
      "shades": {
        "1": "#d8f4f5ff",
        "2": "#b6e7ebff",
        "3": "#8dcfd3ff",
        "4": "#83d5ddff",
        "5": "#49b9c7ff",
        "6": "#276877ff"
      },
      "complimentary": {
        "1": "#c96e6eff",
        "2": "#c99f6eff",
        "3": "#bfc96eff"
      },
      "contrasting": {
        "1": "#c96e91ff",
        "2": "#bf916eff",
        "3": "#6ec996ff"
      },
      "shadow": "#4a8086ff",
      "highlight": "#c9e5e6ff"
    },
    {
      "color": "keppel",
      "main": "#58cabdff",
      "shades": {
        "1": "#d1f6efff",
        "2": "#a4ebdfff",
        "3": "#86d6c9ff",
        "4": "#6edaccff",
        "5": "#40c1b3ff",
        "6": "#1b6a66ff"
      },
      "complimentary": {
        "1": "#ca5f58ff",
        "2": "#cabd58ff",
        "3": "#a0ca58ff"
      },
      "contrasting": {
        "1": "#ca587dff",
        "2": "#58a6caff",
        "3": "#75ca58ff"
      },
      "shadow": "#307f74ff",
      "highlight": "#b8e4dfff"
    },
    {
      "color": "green",
      "main": "#66c366ff",
      "shades": {
        "1": "#cdfcccff",
        "2": "#a8f3a7ff",
        "3": "#89db8eff",
        "4": "#75d977ff",
        "5": "#50bc57ff",
        "6": "#2b6e2eff"
      },
      "complimentary": {
        "1": "#c36666ff",
        "2": "#c39b66ff",
        "3": "#b3c366ff"
      },
      "contrasting": {
        "1": "#c366a3ff",
        "2": "#66a3c3ff",
        "3": "#9bc36fff"
      },
      "shadow": "#296229ff",
      "highlight": "#bee0beff"
    },
    {
      "color": "apple",
      "main": "#76e067ff",
      "shades": {
        "1": "#defddbff",
        "2": "#bff8baff",
        "3": "#99e99eff",
        "4": "#8bf184ff",
        "5": "#53e048ff",
        "6": "#198213ff"
      },
      "complimentary": {
        "1": "#e06776ff",
        "2": "#e0aa67ff",
        "3": "#d7e067ff"
      },
      "contrasting": {
        "1": "#e067a3ff",
        "2": "#67e0a3ff",
        "3": "#aae067ff"
      },
      "shadow": "#316b2aff",
      "highlight": "#ddf9d8ff"
    },
    {
      "color": "yellow",
      "main": "#dab21fff",
      "shades": {
        "1": "#f3e7b2ff",
        "2": "#f7e08bff",
        "3": "#f5cd50ff",
        "4": "#e0b503ff",
        "5": "#c29d00ff",
        "6": "#705500ff"
      },
      "complimentary": {
        "1": "#1f94daff",
        "2": "#1fdadaff",
        "3": "#1fda94ff"
      },
      "contrasting": {
        "1": "#da1f9cff",
        "2": "#1fdac2ff",
        "3": "#94da1fff"
      },
      "shadow": "#997b19ff",
      "highlight": "#eae2c8ff"
    },{
      "color": "sand",
      "main": "#ddb758ff",
      "shades": {
        "1": "#faf3c7ff",
        "2": "#f6e492ff",
        "3": "#edce68ff",
        "4": "#eab625ff",
        "5": "#daa018ff",
        "6": "#7d4716ff"
      },
      "complimentary": {
        "1": "#b85f2bff",
        "2": "#82b82bff",
        "3": "#4cb82bff"
      },
      "contrasting": {
        "1": "#b82b5fff",
        "2": "#2bb89bff",
        "3": "#5fb82bff"
      },
      "shadow": "#a17f3dff",
      "highlight": "#fbefd2ff"
    },
    {
      "color": "champagne",
      "main": "#e4a048ff",
      "shades": {
        "1": "#f9ebc8ff",
        "2": "#f3d894ff",
        "3": "#e8bd75ff",
        "4": "#edbf5cff",
        "5": "#e1881fff",
        "6": "#834f08ff"
      },
      "complimentary": {
        "1": "#487de4ff",
        "2": "#4848e4ff",
        "3": "#a048e4ff"
      },
      "contrasting": {
        "1": "#e44848ff",
        "2": "#e48848ff",
        "3": "#e4e448ff"
      },
      "shadow": "#9f671bff",
      "highlight": "#fbe0bcff"
    },
    {
      "color": "orange",
      "main": "#ea8f47ff",
      "shades": {
        "1": "#fcd8b0ff",
        "2": "#f4b37aff",
        "3": "#e69950ff",
        "4": "#e69144ff",
        "5": "#cc6e1fff",
        "6": "#7a3a14ff"
      },
      "complimentary": {
        "1": "#47b3eaff",
        "2": "#4792eaff",
        "3": "#4cea47ff"
      },
      "contrasting": {
        "1": "#ea4747ff",
        "2": "#47eaa8ff",
        "3": "#92ea47ff"
      },
      "shadow": "#a75e2fff",
      "highlight": "#f9d9bfff"
    },
    {
      "color": "coral",
      "main": "#f86c41ff",
      "shades": {
        "1": "#ffe9d5ff",
        "2": "#fecfaaff",
        "3": "#fbab80ff",
        "4": "#fdac74ff",
        "5": "#fb7f3cff",
        "6": "#c22f0cff"
      },
      "complimentary": {
        "1": "#419ff8ff",
        "2": "#4174f8ff",
        "3": "#41f87aff"
      },
      "contrasting": {
        "1": "#f84141ff",
        "2": "#41f8bcff",
        "3": "#9ff841ff"
      },
      "shadow": "#b34e2cff",
      "highlight": "#fbe3daff"
    },
    {
      "color": "rose",
      "main": "#e55a5aff",
      "shades": {
        "1": "#ffe0e0ff",
        "2": "#ffc7c7ff",
        "3": "#ffa3a3ff",
        "4": "#ffa0a0ff",
        "5": "#ff6969ff",
        "6": "#c31212ff"
      },
      "complimentary": {
        "1": "#5aa4e5ff",
        "2": "#5ae5a4ff",
        "3": "#a4e55aff"
      },
      "contrasting": {
        "1": "#e55aa4ff",
        "2": "#5ae5e5ff",
        "3": "#a4e55aff"
      },
      "shadow": "#a03d3dff",
      "highlight": "#fbc0c0ff"
    },
    {
      "color": "pink",
      "main": "#e7678dff",
      "shades": {
        "1": "#fccde2ff",
        "2": "#f49fc5ff",
        "3": "#e77ba8ff",
        "4": "#e667a1ff",
        "5": "#cc3c7eff",
        "6": "#7a1944ff"
      },
      "complimentary": {
        "1": "#67e7c2ff",
        "2": "#67a1e7ff",
        "3": "#67e767ff"
      },
      "contrasting": {
        "1": "#e76767ff",
        "2": "#67e7a1ff",
        "3": "#e7c267ff"
      },
      "shadow": "#a14361ff",
      "highlight": "#f9d3deff"
    },
    {
      "color": "red",
      "main": "#d65252ff",
      "shades": {
        "1": "#fcccccff",
        "2": "#f49d9dff",
        "3": "#e57373ff",
        "4": "#e46e6eff",
        "5": "#c94444ff",
        "6": "#7b1e1eff"
      },
      "complimentary": {
        "1": "#52aad6ff",
        "2": "#52d69dff",
        "3": "#aad652ff"
      },
      "contrasting": {
        "1": "#d652aaff",
        "2": "#d6aa52ff",
        "3": "#52d652ff"
      },
      "shadow": "#a13636ff",
      "highlight": "#fbe0e0ff"
    },
    {
      "color": "grey",
      "main": "#999999ff",
      "shades": {
        "1": "#d2d2d2ff",
        "2": "#b4b4b4ff",
        "3": "#9c9c9cff",
        "4": "#969696ff",
        "5": "#787878ff",
        "6": "#3c3c3cff"
      },
      "complimentary": {
        "1": "#b4b499ff",
        "2": "#9999b4ff",
        "3": "#99b499ff"
      },
      "contrasting": {
        "1": "#334d33ff",
        "2": "#33334dff",
        "3": "#4d3333ff"
      },
      "shadow": "#333333ff",
      "highlight": "#ecececff"
    }
  ]
}
},{}],2:[function(require,module,exports){
const table = document.getElementById('tableBody');
const data = require('./colors.json');
let type = "hex";
let alpha = 1;

const colorTitle = document.getElementById("colorTitle");
const colorSystem = document.createElement("span");
colorSystem.innerText = type === 'hex' ? 'hexadecimal' : type === "rgba" ? "rgba()" : 'hsla()' ;
colorSystem.style.marginLeft = "1vw";
colorSystem.style.fontWeight = "700";
colorSystem.style.fontSize = "2vmax";
colorTitle.appendChild(colorSystem)
const rgbA = document.getElementById('rgba');
rgbA.addEventListener('click', () => rgbaFunction());
const hex = document.getElementById('hex');
hex.addEventListener('click', () => hexFunction());
// const hslA = document.getElementById('hsla');
// hslA.addEventListener('click',() => hslaFunction());
const opacitySlider = document.getElementById('myRange');
opacitySlider.addEventListener('change', (e) => adjustOpacity(e));
const opacityTitle = document.getElementById("opacityTitle");
const opacityValue = document. createElement("span");
opacityValue.innerText = alpha;
opacityValue.style.fontSize = '2vmax';
opacityValue.style.fontWeight = "700";
opacityTitle.appendChild(opacityValue)

const styleButton = document.getElementById('stylesBtn');
styleButton.addEventListener('click', ()=>changeTable());

function changeTable(){
  const styleButton = document.getElementById('stylesBtn');
  const root = document.querySelector(':root');
  if(styleButton.innerText === "Show Gradients"){
    styleButton.innerText = "Show Font Settings";
    root.style.setProperty('--font-settings', 'none')
    root.style.setProperty('--hidden-cell', 'table-cell')
  }else{
    styleButton.innerText = "Show Gradients";
    root.style.setProperty('--font-settings', 'table-cell')
    root.style.setProperty('--hidden-cell', 'none')
  }
}

data.colors.map((color, i) => {
  const row = document.createElement('tr');
  const row2 = document.createElement('tr');
  table.appendChild(row);
  table.appendChild(row2);
  const cell = document.createElement('td');
  row.appendChild(cell);
  cell.style.backgroundColor = color.main;
  cell.innerText = color.main;
  cell.setAttribute('id', 'mainColor');
  cell.style.color = 'transparent';
  cell.style.minWidth = '25px';
  cell.style.maxWidth = '25px';
  cell.title = color.main;
  cell.rowSpan = 2;
  const cell2 = document.createElement('td');
  const cell3 = document.createElement('td');
  row.appendChild(cell2);
  row2.appendChild(cell3);
  cell2.style.color = `${color.main}`
  cell2.style.fontWeight = 700;
  cell2.innerText = color.color.toUpperCase();
  cell2.style.height = "35px";
  cell2.setAttribute('id', 'textColor1');
  cell2.classList.add('coloredText');
  cell3.style.color = `${color.main}`;
  cell3.style.fontWeight = 700;
  cell3.innerText = color.main;
  cell3.style.height = "35px";
  cell3.setAttribute('id', 'textColor2');
  cell3.classList.add('coloredText');
  cell3.addEventListener('click', (e) => copyFunction(e));
  Object.entries(color.shades).map((shade, i)=>{
    const cell = document.createElement('td');
    row.appendChild(cell);
    cell.style.backgroundColor = shade[1];
    cell.style.maxWidth="25px";
    cell.style.minWidth="25px";
    cell.title = shade[1];
    const shadeID = `shades${i}`;
    cell.setAttribute = ( "id", shadeID);
    cell.style.height = "70px";
    cell.rowSpan = 2;
    cell.innerText = shade[1];
    cell.style.color = 'transparent';
    cell.style.fontSize = '0px';
    cell.addEventListener('click', (e) => copyFunction(e));
    cell.addEventListener('mouseover', function(){
      cell.style.minWidth = '90px';
      cell.style.maxWidth = '90px';
      cell.style.height = "70px";
      cell.style.position = 'absolute';
      cell.style.fontSize = "1.25vmax";
      cell.style.display = 'flex';
      cell.style.flexDirection = 'column';
      cell.style.alignItems = "center";
      cell.style.justifyContent = "center";
      if(i == 0 || i == 1){
        cell.style.color = "#333333"
      } else{
        cell.style.color = "#ffffff"
      }
    });
    cell.addEventListener('mouseout', function(){
      cell.style.maxWidth="25px";
      cell.style.minWidth="25px";
      cell.style.position = 'inherit';
      cell.style.display = 'table-cell';
      cell.style.fontSize = "0px";
    });
  });
  Object.entries(color.complimentary).map((shade, i) => {
    const cell = document.createElement('td');
    row.appendChild(cell);
    cell.style.backgroundColor = shade[1];
    cell.title = shade[1];
    cell.style.width = 'min-content';
    cell.innerText = shade[1];
    cell.style.textAlign = 'center';
    cell.addEventListener('click', (e) => copyFunction(e));
    cell.rowSpan = 2;
    cell.style.height = "70px";
  });
  Object.entries(color.contrasting).map((shade, i) => {
    const cell = document.createElement('td');
    row.appendChild(cell);
    cell.style.backgroundColor = shade[1];
    cell.title = shade[1];
    cell.style.width = 'min-content';
    cell.innerText = shade[1];
    cell.style.textAlign = 'center';
    cell.addEventListener('click', (e) => copyFunction(e));
    cell.rowSpan = 2;
    cell.style.height = "70px";
  });
  const shadowCell = document.createElement('td');
  row.appendChild(shadowCell);
  shadowCell.style.backgroundColor = color.shadow;
  shadowCell.title = color.shadow;
  shadowCell.style.width = 'min-content';
  shadowCell.innerText = color.shadow;
  shadowCell.style.textAlign = 'center';
  shadowCell.addEventListener('click', (e) => copyFunction(e));
  shadowCell.rowSpan = 2;
  shadowCell.style.height = "70px";
  const highlightCell = document.createElement('td');
  row.appendChild(highlightCell);
  highlightCell.style.backgroundColor = color.highlight;
  highlightCell.title = color.highlight;
  highlightCell.style.width = 'min-content';
  highlightCell.innerText = color.highlight;
  highlightCell.style.textAlign = 'center';
  highlightCell.style.color = "#000000";
  highlightCell.addEventListener('click', (e) => copyFunction(e));
  highlightCell.rowSpan = 2;
  highlightCell.style.height = "70px";
})

function rgbaToHex(rgbaString) {
  // Extract the RGBA values using a regular expression
  const match = rgbaString.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
  // Extract RGB and alpha values
  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  const alpha = parseFloat(match[4]);

  // Convert RGB to hexadecimal
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  // Convert alpha to hexadecimal (scaled from 0–1 to 0–255)
  const aHex = Math.round(alpha * 255).toString(16).padStart(2, '0');

  // Combine into 8-digit hexadecimal format
  return `#${rHex}${gHex}${bHex}${aHex}`;
}

function adjustOpacity(e){
  const value = e.target.value;
  alpha = Number(value)/10;
  opacityValue.innerText = alpha;
  updateOpacity(alpha);
}
const hexFunction = () => {
  console.log('hex')
  const tableCells = document.querySelectorAll('table td'); // Adjust this selector as needed

    tableCells.forEach(cell => {
        if (cell.innerText.startsWith('rgb')) {
          cell.innerText = rgbaToHex(cell.innerText);
        }
    });
}

function opacityToHex(opacity) {
  // Scale to 0-255, round to the nearest integer, and convert to a two-digit hex string
  return Math.round(opacity * 255).toString(16).padStart(2, '0');
}
const copyFunction = (e) => {
  const text = e.target.innerHTML;
  const copyText = text.substring(text.indexOf(">") + 1)
  navigator.clipboard.writeText(copyText);
  alert(`Copied ${copyText} to clipboard`)
}
function rgbaFunction(){
  const tableCells = document.querySelectorAll('table td'); // Adjust this selector as needed

    tableCells.forEach(cell => {
        if (cell.innerText.startsWith('#')) { // Only process cells with hex values
            cell.innerText = hexToRgba(cell.innerText);
        }
    });
}
function hexToRgba(hex) {
  hex = hex.replace(/^#/, '');
  // Split the hex string into red, green, and blue components
  let r = parseInt(hex.substring(0, 2), 16); // Red
  let g = parseInt(hex.substring(2, 4), 16); // Green
  let b = parseInt(hex.substring(4, 6), 16); // Blue
  let a = parseInt(hex.substring(6, 8), 16) / 255; // Alpha (convert to 0-1 scale)
  a = (Math.floor(a*100))/100; // Prevent any trailing decimals during conversion

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
function updateOpacity(alpha){
  const tableCells = document.querySelectorAll('table td'); // Adjust this selector as needed

    tableCells.forEach(cell => {
        if (cell.innerText.startsWith('rgb')) {
          const match = cell.innerText.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
          // Extract RGB values and alpha value
          const r = parseInt(match[1], 10);
          const g = parseInt(match[2], 10);
          const b = parseInt(match[3], 10);
          cell.innerText = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          cell.style.opacity = alpha;
        } else if(cell.innerText.startsWith('#')){
          const opacity = opacityToHex(alpha);
          const newColor = cell.innerText.slice(0, -2) + opacity;
          cell.innerText = newColor;
          cell.style.opacity = alpha;
        } 
    });
}
// function hslaFunction(){
//   console.log('hsla')
// }

},{"./colors.json":1}]},{},[2]);
