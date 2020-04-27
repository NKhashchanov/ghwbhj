export class Statistics {
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
        Нужно отрисовать HTML разметку, сгенерировав строки таблицы и заполнив
        их полученными данными. Новые строки нужно разместить в tbody.
        При запуске приложения HTML отрисовывается согласно данных из db.json.
        Если в локальном хранилище есть информация по сотрудникам на проектах, то
        нужно отрисовать HTML согласно этих данных, то есть в селектах должны
        быть отмечены сотрудники.
    */
    static render(data) {

    }
}