function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const days = document.getElementById('days');
cont = 0;
for (let k of dezDaysList) {
  let li = document.createElement('li');
  li.className = 'day';
  if (k === 24 || k === 25 || k === 31) {
    li.classList.add('holiday');
  }
  cont += 1;
  if (cont === 1) {
    li.classList.add('friday');
  } else if (cont === 7) {
    li.classList.add('friday');
    cont = 0;
  }

  li.innerHTML = k;
  days.appendChild(li);
}

const btnContainer = document.getElementsByClassName('buttons-container')[0];
let btnHoliday;
function fridays(param) {
  btnHoliday = document.createElement('button');
  btnHoliday.innerHTML = param;
  btnHoliday.id = 'btn-holiday'
  btnContainer.appendChild(btnHoliday);
}
fridays('Feriados');

function changeHolidayColor() {
  let holidays = document.getElementsByClassName('holiday')
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor === 'rgb(47, 193, 140)') {
      holidays[i].style.backgroundColor = 'rgb(238, 238, 238)'
    } else {
      holidays[i].style.backgroundColor = '#2fc18c'
    }
  }
}

btnHoliday.addEventListener('click', changeHolidayColor);
let btnFriday
function setFriday(param) {
  btnFriday = document.createElement('button');
  btnFriday.innerHTML = param;
  btnFriday.id = 'btn-friday'
  btnContainer.appendChild(btnFriday);
}
setFriday('Sexta-feira');

let li = document.getElementsByClassName('day');
function changeFriday() {
  for (let i = 5; i < (dezDaysList.length - 5); i += 7) {
    if (li[i].innerHTML === 'SEXTOU!!!') {
      li[i].innerHTML = i - 1;
    } else {
      li[i].innerHTML = 'SEXTOU!!!';
    }
  }
}
btnFriday.addEventListener('click', changeFriday)

function zoomOut(event) {
  if (event.target.classList.contains('day')) {
    event.target.style.transition = 'transform .2s';
    event.target.style.transform = 'scale(1.5)';
    // console.log(event.target.style.transition);
  }
}
document.addEventListener('mouseover', zoomOut)

function zoomIn(event) {
  if (event.target.classList.contains('day')) {
    event.target.style.transition = 'transform .2s';
    event.target.style.transform = 'scale(1)';
  }
}
document.addEventListener('mouseout', zoomIn)

let myTasks = document.getElementsByClassName('my-tasks')[0];
console.log(myTasks);
function addTask(string) {
  let span = document.createElement('span');
  span.innerHTML = string + ' ';
  myTasks.appendChild(span);

}
addTask('Estudar');

let div;
function colorTask(cor) {
  div = document.createElement('div');
  div.style.backgroundColor = cor
  myTasks.appendChild(div)
}
colorTask('red');

function selectDiv(event) {
  event.target.className = 'task selected'

}
myTasks.addEventListener('click', selectDiv)

function setDayColor(event) {
  if (event.target.classList.contains('day')) {
    event.target.style.color = div.style.backgroundColor;
  }
}
document.addEventListener('click', setDayColor);