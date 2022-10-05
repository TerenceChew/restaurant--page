export default function footer() {
  const footer = document.createElement('div');
  const footerText = document.createElement('h2');
  const div = document.createElement('div');
  const copyrightText = document.createElement('p');
  const copyrightIconSpan = document.createElement('span');
  const currYearSpan = document.createElement('span');
  const ghLink = document.createElement('a');
  const ghIcon = document.createElement('i');
  const currYear = new Date().getFullYear();

  footerText.innerText = 'WiXX';
  copyrightIconSpan.innerText = '\u00A9';
  currYearSpan.innerText = currYear;
  ghLink.href = 'https://github.com/TerenceChew';


  footer.classList.add('footer', 'flex', 'center');
  copyrightIconSpan.classList.add('copyright-icon-span');
  ghIcon.classList.add('fa', 'fa-github');

  copyrightText.append('Copyright ', copyrightIconSpan, ' ', currYearSpan, ' Terence');
  ghLink.append(ghIcon);
  footer.append(footerText, div, copyrightText, ghLink);

  return footer;
}