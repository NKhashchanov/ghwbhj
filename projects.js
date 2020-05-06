export class Projects {
    /*
        Используя XMLHttpRequest нужно получить данные из файла db.json
        и в случае успеха передать полученные данные в метод render(xhr.response)/
        Используя метод setLocalData(xhr.response) записывает данные в локальное хранилище
        Используйте метод GET, responseType равный 'json'
    */
    static request() {
        const request = new XMLHttpRequest();
        request.open('GET', './db.json');
        request.responseType = 'json';
        request.send();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                this.render(request.response);
            }
        });
    }

    /*
        Нужно отрисовать HTML разметку, сгенерировав строки таблицы и заполнив
        их полученными данными. Новые строки нужно разместить в tbody.
        При запуске приложения HTML отрисовывается согласно данных из db.json.
        Если в локальном хранилище есть информация по сотрудникам на проектах, то
        нужно отрисовать HTML согласно этих данных, то есть в селектах должны
        быть отмечены сотрудники.
    */
    static render(data) {
        /*
        let projectsHTML = '', usersHTML = '';
        data.users.forEach(el => {
            usersHTML += '<option value="'+ el.id +'">'+ el.last_name +' '+ el.first_name +'</option>'
        })
        data.projects.forEach(el => {
            projectsHTML += '<tr>' +
                '    <td>'+ el.number +'</td>' +
                '    <td>'+ el.name +'</td>' +
                '    <td>' +
                '        <select style="width: 95%" multiple="">' +
                usersHTML +
                '        </select>' +
                '    </td>' +
                '    <td>'+ el.status +'</td>' +
                '</tr>'
        });
        const tableHTML = '<table>' +
                '  <thead>' +
                '      <tr>' +
                '          <th class="project__number">Номер</th>' +
                '          <th class="project__name">Название</th>' +
                '          <th class="project__users">Сотрудники</th>' +
                '          <th class="project__status">Статус</th>' +
                '      </tr>' +
                '  </thead>' +
                '  <tbody>' +
                projectsHTML +
                '  </tbody>' +
                '</table>';

        document.getElementById('main').innerHTML = tableHTML;

         */
    }

    /*
        Метод проверяет, существуют ли записи в локальном хранилище
        о добавленных сотрудниках на проекты.
    */
    static checkProjectStorage() {

    }

    /*
        Метод добавляет запись в локальное хранилище в формате
        localStorage['projects'] = {id_проекта1:{сотрудник1, сотрудник2...}, id_проекта2:{сотрудник3, сотрудник5...}}
        соответственно в локальном хранилище объект projects хранит
        информацию по проектам и сотрудникам участвующим в этих проектах
    */
    static addProjectStorage() {

    }

    /*
        Метод обновляет записи в локальном хранилище.
        Нужно обновить localStorage['projects'], согласно внесеных правок
    */
    static updateProjectStorage() {

    }

    /*
        Метод вешает обработчик событий на элементы select.
        Если происходит выбор опций в селекте, то сперва нужно проверить
        наличие записей методом checkProjectStorage, если по проекту уже
        есть запись, то ее нужно обновить используя метод updateProjectStorage,
        если записей нет, то нужно создать новую запись используя метод addProjectStorage
    */
    static listener() {

    }

    /*
        Метод сохраняет данные из db.json в локальное хранилище
        в формате localStorage['data'] = db.json
    */
    static setLocalData(data) {

    }
}