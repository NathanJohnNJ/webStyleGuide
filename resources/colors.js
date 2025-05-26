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
