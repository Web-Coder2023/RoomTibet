let select = function () {
    let selectHeaders = document.querySelectorAll('.select-form__header');
    let selectItems = document.querySelectorAll('.select-form__list-item');
    let selectWrappers = document.querySelectorAll('.select-form__wrapper');

    selectHeaders.forEach(header => {
        header.addEventListener('click', selectToggle);
    });

    selectItems.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        let selectList = this.nextElementSibling;
        let currentWrapper = this.parentElement;

        if (currentWrapper.classList.contains('is-active')) {
            // Если текущий селект уже открыт, закрываем его
            currentWrapper.classList.remove('is-active');
            selectList.style.maxHeight = null;
        } else {
            // Закрываем все другие селекты перед открытием текущего
            selectWrappers.forEach(wrapper => {
                wrapper.classList.remove('is-active');
                const list = wrapper.querySelector('.select-form__list');
                if (list) {
                    list.style.maxHeight = null;
                }
            });

            // Открываем текущий селект
            currentWrapper.classList.add('is-active');
            let selectListHeight = selectList.scrollHeight;
            selectList.style.maxHeight = selectListHeight + 'px';
            selectList.scrollTop = 0;
        }
    }

    function selectChoose() {
        let text = this.innerText,
            selectWrapper = this.closest('.select-form__wrapper'),
            currentText = selectWrapper.querySelector('.select-form__current');

        currentText.innerText = text;
        selectWrapper.classList.remove('is-active');
        let selectList = this.parentElement;
        selectList.style.maxHeight = null;
    }
};

select();
