export class Timesheet {
    /*
        Используя XMLHttpRequest нужно получить данные из файла db.json
        и в случае успеха передать полученные данные в метод render(xhr.response)
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
        Нужно отрисовать таблицу, где 33 столбца.
        1 столбец - номер проекта
        2 столбец - название проекта
        3-32 столбцы - это дни недели
        33 столбец - итого за месяц
        Будние дни имеют элемент select с возможность выбора часов от 1 до 8. Выходние дни отмечены красным
        и возможности выбора часов нет.
        При первом открытии HTML отрисовывается согласно данных из db.json.
        Если в локальном хранилище есть информация по часам на проектах, то
        нужно отрисовать HTML согласно этих данных, то есть в селектах должны
        быть отмечены часы.
    */
    static render(data) {

    }

    /*
      Метод вешает обработчик событий на элемент select с выбором сотрудника.
      При срабатывании отрисовывает данные по сотрудники через метод render()
    */
    static setUser(data) {

    }
}