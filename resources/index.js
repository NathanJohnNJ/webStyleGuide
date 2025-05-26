(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "colors": [
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
        "1": "#fbaa78ff",
        "2": "#f3864bff",
        "3": "#e26d34ff",
        "4": "#dc541aff",
        "5": "#af481eff"
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
        "1": "#e69e5fff",
        "2": "#d88c48ff",
        "3": "#cc7a32ff",
        "4": "#a05f24ff",
        "5": "#7a3f18ff"
      },
      "shadow": "#1a5b7aff",
      "highlight": "#d8f4f5ff"
    },
    {
      "color": "green",
      "main": "#11ce11ff",
      "shades": {
        "1": "#9ce99cff",
        "2": "#6cd86cff",
        "3": "#3fcf3fff",
        "4": "#0aae0aff",
        "5": "#088808ff",
        "6": "#065906ff"
      },
      "complimentary": {
        "1": "#d86c6cff",
        "2": "#cf3f3fff",
        "3": "#ae0a0aff",
        "4": "#880808ff",
        "5": "#590606ff"
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
        "1": "#f8bfbfff",
        "2": "#e99999ff",
        "3": "#f1848bff",
        "4": "#e05353ff",
        "5": "#821919ff"
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
        "1": "#a698f7ff",
        "2": "#8564f3ff",
        "3": "#6b40e0ff",
        "4": "#4d26c2ff",
        "5": "#30178fff"
      },
      "shadow": "#997b19ff",
      "highlight": "#eae2c8ff"
    },
    {
      "color": "sand",
      "main": "#ddb758ff",
      "shades": {
        "1": "#faf3c7ff",
        "2": "#f6e492ff",
        "3": "#f5cd50ff",
        "4": "#eab625ff",
        "5": "#daa018ff",
        "6": "#7d4716ff"
      },
      "complimentary": {
        "1": "#9292f6ff",
        "2": "#6868edff",
        "3": "#4025eaff",
        "4": "#2d18daff",
        "5": "#1f1647ff"
      },
      "shadow": "#a17f3dff",
      "highlight": "#fbefd2ff"
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
        "1": "#7ab3f4ff",
        "2": "#5099e6ff",
        "3": "#4491e6ff",
        "4": "#1f6eccff",
        "5": "#143a7aff"
      },
      "shadow": "#a75e2fff",
      "highlight": "#f9d9bfff"
    },
    {
      "color": "coral",
      "main": "#f86c41ff",
      "shades": {
        "1": "#fbe3daff",
        "2": "#fecfaaff",
        "3": "#fdac74ff",
        "4": "#fb884fff",
        "5": "#f86c41ff",
        "6": "#c22f0cff"
      },
      "complimentary": {
        "1": "#aacffeff",
        "2": "#80abfbff",
        "3": "#74acfdff",
        "4": "#3c7ffbff",
        "5": "#0c2fc2ff"
      },
      "shadow": "#b34e2cff",
      "highlight": "#ffe9d5ff"
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
       "1": "#9dbb9dff",
    "2": "#739b73ff",
    "3": "#6e8f6eff",
    "4": "#446e44ff",
    "5": "#1e4a1eff"
      },
      "shadow": "#a13636ff",
      "highlight": "#fbe0e0ff"
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
        "1": "#b8e6c0ff",
        "2": "#8ecda3ff",
        "3": "#6bb48bff",
        "4": "#4e9c75ff",
        "5": "#387a5fff"
      },
      "shadow": "#a14361ff",
      "highlight": "#f9d3deff"
    },
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
        "1": "#f4e79fff",
        "2": "#e0c975ff",
        "3": "#ccab40ff",
        "4": "#a08626ff",
        "5": "#8c721fff"
      },
      "shadow": "#5b2f8aff",
      "highlight": "#ccb6deff"
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
        "1": "#99b499ff",
        "2": "#9999b4ff",
        "3": "#adad6dff",
        "4": "#4a4a2aff",
        "5": "#4d3333ff"
      },
      "shadow": "#333333ff",
      "highlight": "#ecececff"
    }
  ]
}

},{}],2:[function(require,module,exports){
const table = document.getElementById('tableBody');
console.log(window.innerWidth)
let data;
async function changeSize(){
  if (window.innerWidth >= 1100){
    data = require('./colors.json');  
    table.innerHTML = "";
    drawTable(data);
    document.getElementById("shadesHeading").colSpan = "6"
    document.getElementById("lastHeader").style.borderTopRightRadius = '0px';
    document.getElementById("lastHeader2").style.borderTopRightRadius = '0px';
    document.getElementById("fVSHead").style.borderTopRightRadius= '0px';
    Array.from(document.getElementsByClassName("fontWeight")).forEach((element)=> {
      element.style.display = "table-cell"
    });
  } else {
    data = require('./smallColors.json');
    table.innerHTML = "";
    drawTable(data);
    document.getElementById("shadesHeading").colSpan = "3"
    Array.from(document.getElementsByClassName("fontWeight")).forEach((element)=> {
      element.style.display = "none"
    });
    document.getElementById("lastHeader").style.borderTopRightRadius = '25px';
    document.getElementById("lastHeader2").style.borderTopRightRadius = '25px';
  }
  return window.removeEventListener('resize', ()=>changeSize())
}
window.addEventListener('resize', ()=>changeSize())
changeSize();


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
function drawTable(data){
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
  cell.style.minWidth = '15px';
  cell.style.maxWidth = '15px';
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
  cell2.style.minWidth = '45px';
  cell2.style.maxWidth = '45px';
  cell2.setAttribute('id', 'textColor1');
  cell2.classList.add('coloredText');
  cell3.style.color = `${color.main}`;
  cell3.style.fontWeight = 700;
  cell3.innerText = color.main;
  cell3.style.height = "35px";
  cell3.style.minWidth = '45px';
  cell3.style.maxWidth = '45px';
  cell3.setAttribute('id', 'textColor2');
  cell3.classList.add('coloredText');
  cell3.addEventListener('click', (e) => copyFunction(e));
  const highlightCell = document.createElement('td');
  row.appendChild(highlightCell);
  highlightCell.style.backgroundColor = color.highlight;
  highlightCell.title = color.highlight;
  // highlightCell.style.width = 'min-content';
  highlightCell.innerText = color.highlight;
  highlightCell.style.textAlign = 'center';
  highlightCell.style.color = "#000000";
  highlightCell.addEventListener('click', (e) => copyFunction(e));
  highlightCell.rowSpan = 2;
  highlightCell.style.height = "70px";
  highlightCell.setAttribute('id', 'highlightCell');
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

  const shadowCell = document.createElement('td');
  row.appendChild(shadowCell);
  shadowCell.style.backgroundColor = color.shadow;
  shadowCell.title = color.shadow;
  // shadowCell.style.width = 'min-content';
  shadowCell.innerText = color.shadow;
  shadowCell.style.textAlign = 'center';
  shadowCell.addEventListener('click', (e) => copyFunction(e));
  shadowCell.rowSpan = 2;
  shadowCell.style.height = "70px";
  shadowCell.setAttribute('id', 'shadowCell');
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
  
})
}
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

},{"./colors.json":1,"./smallColors.json":3}],3:[function(require,module,exports){
module.exports={
  "colors": [
    {
      "color": "blue",
      "main": "#3b78e6ff",
      "shades": {
        "1": "#a0b2ffff",
        "2": "#4b77f3ff",
        "3": "#1e44afff"
      },
      "complimentary": {
        "1": "#fbaa78ff",
        "2": "#e26d34ff",
        "3": "#af481eff"
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
        "3": "#247fa0ff"
      },
      "complimentary": {
        "1": "#e69e5fff",
        "2": "#cc7a32ff",
        "3": "#7a3f18ff"
      },
      "shadow": "#1a5b7aff",
      "highlight": "#d8f4f5ff"
    },
    {
      "color": "green",
      "main": "#11ce11ff",
      "shades": {
        "1": "#9ce99cff",
        "2": "#3fcf3fff",
        "3": "#065906ff"
      },
      "complimentary": {
        "1": "#d86c6cff",
        "2": "#ae0a0aff",
        "3": "#590606ff"
      },
      "shadow": "#296229ff",
      "highlight": "#bee0beff"
    },
    {
      "color": "apple",
      "main": "#76e067ff",
      "shades": {
        "1": "#defddbff",
        "2": "#8bf184ff",
        "3": "#198213ff"
      },
      "complimentary": {
        "1": "#f8bfbfff",
        "2": "#f1848bff",
        "3": "#821919ff"
      },
      "shadow": "#316b2aff",
      "highlight": "#ddf9d8ff"
    },
    {
      "color": "yellow",
      "main": "#dab21fff",
      "shades": {
        "1": "#f3e7b2ff",
        "2": "#f5cd50ff",
        "3": "#705500ff"
      },
      "complimentary": {
        "1": "#a698f7ff",
        "2": "#6b40e0ff",
        "3": "#30178fff"
      },
      "shadow": "#997b19ff",
      "highlight": "#eae2c8ff"
    },
    {
      "color": "sand",
      "main": "#ddb758ff",
      "shades": {
        "1": "#faf3c7ff",
        "2": "#eab625ff",
        "3": "#7d4716ff"
      },
      "complimentary": {
        "1": "#9292f6ff",
        "2": "#4025eaff",
        "3": "#1f1647ff"
      },
      "shadow": "#a17f3dff",
      "highlight": "#fbefd2ff"
    },
    {
      "color": "orange",
      "main": "#ea8f47ff",
      "shades": {
        "1": "#fcd8b0ff",
        "2": "#e69950ff",
        "3": "#7a3a14ff"
      },
      "complimentary": {
        "1": "#7ab3f4ff",
        "2": "#4491e6ff",
        "3": "#143a7aff"
      },
      "shadow": "#a75e2fff",
      "highlight": "#f9d9bfff"
    },
    {
      "color": "coral",
      "main": "#f86c41ff",
      "shades": {
        "1": "#fbe3daff",
        "2": "#fdac74ff",
        "3": "#c22f0cff"
      },
      "complimentary": {
        "1": "#aacffeff",
        "2": "#74acfdff",
        "3": "#0c2fc2ff"
      },
      "shadow": "#b34e2cff",
      "highlight": "#ffe9d5ff"
    },
    {
      "color": "red",
      "main": "#d65252ff",
      "shades": {
        "1": "#fcccccff",
        "2": "#e57373ff",
        "3": "#7b1e1eff"
      },
      "complimentary": {
        "1": "#9dbb9dff",
        "2": "#6e8f6eff",
        "3": "#1e4a1eff"
      },
      "shadow": "#a13636ff",
      "highlight": "#fbe0e0ff"
    },
    {
      "color": "pink",
      "main": "#e7678dff",
      "shades": {
        "1": "#fccde2ff",
        "2": "#e667a1ff",
        "3": "#7a1944ff"
      },
      "complimentary": {
        "1": "#b8e6c0ff",
        "2": "#6bb48bff",
        "3": "#387a5fff"
      },
      "shadow": "#a14361ff",
      "highlight": "#f9d3deff"
    },
    {
      "color": "purple",
      "main": "#8a46c8ff",
      "shades": {
        "1": "#d9cdfcff",
        "2": "#be9ff4ff",
        "3": "#491a7aff"
      },
      "complimentary": {
        "1": "#f4e79fff",
        "2": "#e0c975ff",
        "3": "#8c721fff"
      },
      "shadow": "#5b2f8aff",
      "highlight": "#ccb6deff"
    },
    {
      "color": "grey",
      "main": "#999999ff",
      "shades": {
        "1": "#d2d2d2ff",
        "2": "#b4b4b4ff",
        "3": "#3c3c3cff"
      },
      "complimentary": {
        "1": "#99b499ff",
        "2": "#adad6dff",
        "3": "#4d3333ff"
      },
      "shadow": "#333333ff",
      "highlight": "#ecececff"
    }
  ]
}

},{}]},{},[2]);
