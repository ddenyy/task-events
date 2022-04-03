/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    const text = document.createTextNode('Удали меня');
    button.appendChild(text);
    document.body.prepend(button);
    button.addEventListener('click', () => {
        button.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    //    let ul = document.createElement('ul');
    //    let elLi = document.createElement('li');
    //    arr.forEach(text => {
    //       let innerText = document.createTextNode(text);
    //       elLi.appendChild(innerText)
    //       ul.prepend(elLi);
    //       elLi.innerHTML = "";
    //    });
    //    document.body.append(ul);
    //    document.querySelector('ul').addEventListener(
    //       'mouseover',
    //       function (event) {
    //           if (event.target && event.target.nodeName === 'LI') {
    //               event.target.setAttribute('title', event.target.textContent);
    //           }
    //       },
    //       true,
    //   );
    //   document.querySelector('ul').addEventListener(
    //       'mouseout',
    //       function (event) {
    //           if (event.target && event.target.nodeName === 'LI') {
    //               event.target.removeAttribute('title');
    //           }
    //       },
    //       true,
    //   );
    let elLi = '';
    arr.forEach((text) => {
        elLi += `<li>${text}</li>`;
    });
    let ul = document.createElement('ul');
    ul.innerHTML = elLi;
    document.body.append(ul);
    ul.addEventListener(
        'mouseover',
        (e) => {
            if (e.target && e.target.nodeName === 'LI') {
                e.target.setAttribute('title', e.target.textContent);
            }
        },
        true,
    );
    ul.addEventListener(
        'mouseout',
        (e) => {
            if (e.target && e.target.nodeName === 'LI') {
                e.target.removeAttribute('title');
            }
        },
        true,
    );
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let flag = 0;
    let a = document.createElement('a');
    let txt = document.createTextNode('tensor');
    a.setAttribute('href', 'https://tensor.ru/');
    a.appendChild(txt);
    document.body.append(a);
    a.addEventListener('click', (e) => {
        flag += 1;
        if (flag == 1) {
            let elm = document.querySelector('a');
            elm.textContent += ` ${elm.href}`;
            e.preventDefault();
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const add = function (e) {
        if (e.target && e.target.nodeName === 'LI') {
            e.target.textContent += '!';
        }
    };
    let innerList = '<ul><li>Пункт</li></ul><button>Добавить пункт</button>';
    document.body.innerHTML = innerList;
    document.querySelector('button').addEventListener('click', () => {
        let li = document.createElement('li');
        let txt = document.createTextNode('Пункт');
        li.appendChild(txt);
        li.addEventListener('click', add);
        document.querySelector('ul').appendChild(li);
    });
    document.querySelector('li').addEventListener('click', add);
}
