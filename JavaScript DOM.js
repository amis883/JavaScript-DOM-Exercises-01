const paragraph=document.querySelector('p');
paragraph.innerHTML=paragraph.innerText
.split(' ')
.map(word=>word.length>8?`<span style:"background-color:red">
${word}</span>`:word)
.join(' ');

// Exercise 2

const link = document.createElement('a');
link.href = 'https://www.google.com/';
link.innerText = 'Text generated from Google';
document.body.appendChild(link);

//Exercise 3

paragraph.innerHTML = paragraph.innerHTML
    .split(/\.[^\.|<]/)
    .join('<p></p>') + '</p>'

//Exercise 4

const wordCount = paragraph.innerText.split(' ').length;
const wordCountElem = document.createElement('div');
wordCountElem.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountElem, paragraph);

//Exercise 5

Array.from(document.querySelectorAll('p'))
.forEach (p=>{p.innerHTML=p.innerHTML
.replace(/\?/g,'😀')
.replace(/\!/g,'😸');

})
