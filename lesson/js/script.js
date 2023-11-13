'use strict';
document.addEventListener('DOMContentLoaded', () => {    
    function hideLessonContent(elements){
        elements.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('active');
        });
    }

    function showLessonContent(elements, i = 0){
        elements[i].style.display = 'block';
        elements[i].classList.add('active');
    }

    /* function setCookie(bal) {
        userName.bal += bal;

        if(document.cookie.slice(4) != ''){
            let b = 0; b = Number.parseInt(document.cookie.slice(4));
            document.cookie = `bal = ${b}; path=./state.html; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
        }
        else{
            document.cookie = `bal = ${userName.bal}; path=./state.html; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
        }
    } */

    function UserState(name, bal){
        this.name = name;
        this.bal = bal;
        this.level = 1;
        this.rang = rang[0];
    }

    let rang = ['Школяр', 'Учень', 'Студент', 'Викладач','Гуру'];
    let userName = new UserState('Jonh', 0);

    if(window.location.pathname.slice(window.location.pathname.indexOf('index')) == 'index.html'){
        console.log(userName);
    }
    else if(window.location.pathname.slice(window.location.pathname.indexOf('lesson')) == 'lesson.html'){    
        const lessonChoose = document.querySelector('.lesson-choose'), 
            btns = lessonChoose.querySelectorAll('.block-btn'),
            lessonContent = document.querySelectorAll('.lesson-content');


        hideLessonContent(lessonContent);
        showLessonContent(lessonContent);

        lessonChoose.addEventListener('click', (e) => {
            let target = e.target;
            if(target && target.nodeName == 'BUTTON'){
                btns.forEach((item, i) => {
                    if(target == item){
                        hideLessonContent(lessonContent);
                        showLessonContent(lessonContent, i);
                    }
                });
            }
        });

        if (!localStorage.getItem('scrolled')) {
            lessonChoose.addEventListener('scroll', function() {
              console.log('Прокручено!');
            });
            localStorage.setItem('scrolled', 'true');

            serName.bal += 5;

            if(document.cookie.slice(4) != ''){
                let b = 0; b = Number.parseInt(document.cookie.slice(4));
                document.cookie = `bal = ${b}; path=./state.html; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
            }
            else{
                document.cookie = `bal = ${userName.bal}; path=./state.html; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
            }
          } 
          else 
          {
            console.log('Прокрутка уже выполнена');
            sessionStorage.setItem('scroll', 'true');
          }

    }
    else if(window.location.pathname.slice(window.location.pathname.indexOf('test')) == 'test.html'){
        const inputAnswer = document.querySelectorAll('input'),
            btn = document.querySelector('.btn-submit');

        btn.addEventListener('click', () => {
            let arr = [],
                b = 0;
            inputAnswer.forEach((item, i)=>{
                item.style.borderColor = 'black';
                arr.push(item.value);
            });

            for(let i = 0; i < arr.length; i++){
                switch (i) {
                    case 0: {
                        if(arr[i] === '675')
                            b += 20;
                        else
                            inputAnswer[i].style.borderColor = 'red';
                        break;
                    }
                    case 1: {
                        if(arr[i] === '1100101')
                            b += 20;
                        else
                            inputAnswer[i].style.borderColor = 'red';
                        break;
                    }
                    case 2: {
                        if(arr[i] === '555')
                            b += 20;
                        else
                            inputAnswer[i].style.borderColor = 'red';
                        break;
                    }
                    case 3: {
                        if(arr[i] === 'D6' || arr[i] === 'd6')
                            b += 20;
                        else
                            inputAnswer[i].style.borderColor = 'red';
                        break;
                    }
                    case 4: {
                        if(arr[i] === '65')
                            b += 20;
                        else
                            inputAnswer[i].style.borderColor = 'red';
                        break;
                    }
                    case 5: {
                        if(arr[i] === '10100111')
                            b += 20;
                        else
                            inputAnswer[i].style.borderColor = 'red';
                        break;
                    }
                    case 6: {
                        if(arr[i] === '279')
                            b += 20;
                        else
                            inputAnswer[i].style.borderColor = 'red';
                        break;
                    }
                }
            };

            sessionStorage.setItem('MaxBal', b);

            if(b == 0 && b <= 40){
                alert('Ви можете і краще балів ' + b);
                userName.bal += b/2;
            }
            else if(b > 40 && b <= 80){
                alert('Матеріал був засвоєний частично балів ' + b);
                userName.bal += b/2;
            }
            else if(b > 80 && b <= 120){
                alert('Ви добре молодієте матеріал, але потрібно дещо відновити балів ' + b);
                userName.bal += b/2;
            }
            else{
                alert('Ви добре засвоїли матеріал балів ' + b);
                userName.bal += b/2;
            }

            userName.bal += b/2;

            if(document.cookie.slice(4) != ''){
                let ba = 0; 
                ba = Number.parseInt(document.cookie.slice(4)) + userName.bal;
                console.log(ba);
                document.cookie = `bal = ${ba}; path=./state.html; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
            }
            else{
                document.cookie = `bal = ${userName.bal}; path=./state.html; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
            }

        });

    }
    else if(window.location.pathname.slice(window.location.pathname.indexOf('mini')) == 'mini-game.html'){
        let cartGameImg = document.querySelectorAll('.cart-game_img'),
            modal = document.querySelectorAll('.modal'),
            btnClose = document.querySelectorAll('.close');
            
        btnClose.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                modal[i].classList.remove('active');
            });
        });

        cartGameImg.forEach((item, i) => {
            item.addEventListener('click', (e) =>{
                modal[i].classList.add('active');

                userName.bal += 10;

                if(document.cookie.slice(4) != ''){
                    let b = 0; b = Number.parseInt(document.cookie.slice(4));
                    document.cookie = `bal = ${b}; path=./state.html; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
                }
                else{
                    document.cookie = `bal = ${userName.bal}; path=./state.html; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
                }

            });
        });

    }
    else if(window.location.pathname.slice(window.location.pathname.indexOf('state')) == 'state.html'){
        if((userName.name === '')){
            return window.location.pathname = 'index.html';
        }
        else{
            let name = document.querySelector('#name'),
                level = document.querySelector('#level'),
                rangText = document.querySelector('#rang');

            userName.bal += Number.parseInt(document.cookie.slice(4));
            console.log(Number.parseInt(userName.bal));

            name.textContent = userName.name;
            
            if((Number.parseInt(userName.bal) < 50)){
                level.textContent = 'Уровень: 1';
                rangText.textContent = 'Ранг: ' + rang[0];
            }
            else if(Number.parseInt(userName.bal) >= 50 && Number.parseInt(userName.bal) < 80){
                level.textContent = `Уровень: 2`;
                rangText.textContent = 'Ранг: ' + rang[1];
            }
            else if(Number.parseInt(userName.bal) >= 80 && Number.parseInt(userName.bal) < 110){
                level.textContent = `Уровень: 3`;
                rangText.textContent = 'Ранг: ' + rang[2];
            }
            else if(Number.parseInt(userName.bal) >= 110 && Number.parseInt(userName.bal) < 200){
                level.textContent = `Уровень: 4`;
                rangText.textContent = 'Ранг: ' + rang[3];
            }

            /*let achievementImg = ['1.png', '2.png', '3.png', '4.png']*/
            const block = document.querySelectorAll('.block');

            block.forEach((item)=>{
                item.style.display = 'none';
            })

            if(sessionStorage.getItem('scroll') == 'true'){
                block[0].style.display = 'flex';
                block[0].childNodes[1].style.backgroundImage = `url(../img/1.jpg)`;
                block[0].childNodes[3].textContent = 'Пройти перший урок'
            }
            else if(level.textContent === `Уровень: 4`){
                block[1].style.display = 'flex';
                block[1].childNodes[1].style.backgroundImage = `url(../img/1.jpg)`;
                block[1].childNodes[3].textContent = 'Пройти перший урок'
            }
            else if(sessionStorage.getItem('MaxBal') == 120){
                block[2].style.display = 'flex';
                block[2].childNodes[1].style.backgroundImage = `url(../img/1.jpg)`;
                block[2].childNodes[3].textContent = 'Получити максимальний бал в тестах'
            }
            else if(level.textContent === `Уровень: 4`){
                block[3].style.display = 'flex';
                block[3].childNodes[1].style.backgroundImage = `url(../img/1.jpg)`;
                block[3].childNodes[3].textContent = 'Получити максимальний уровень'
            }
        }
    }
});