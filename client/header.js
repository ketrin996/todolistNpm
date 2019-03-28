
const header = document.getElementById('header');
header.classList.add('header');

const headerLogo = document.createElement('div');
const headerLogoImg = document.createElement('img');
headerLogoImg.src ='../images/di2.svg';
headerLogo.appendChild(headerLogoImg);


const headerSeparator = document.createElement('div');
headerSeparator.classList.add('header-separator');
const headerSepImg = document.createElement('img');
headerSepImg.src ='../images/di1.svg';
headerSeparator.appendChild(headerSepImg);

const headerDo = document.createElement('div');
headerDo.classList.add('header-todod');
const headerDoImg = document.createElement('img');
headerDoImg.src ='../images/di3.svg';
headerDo.appendChild(headerDoImg);

header.appendChild(headerLogo);
header.appendChild(headerSeparator);
header.appendChild(headerDo);
