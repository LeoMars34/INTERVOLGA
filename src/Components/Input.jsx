export function Input({
    name,
    value,
    id,
    type,
    date,
    licensePlate,
    number,
    series,
}) {
    /*Валидации гос-номера*/
    function validateLicensePlate(e) {
        e.target.value = e.target.value.toUpperCase();
        const index = e.target.value.length;
        const target = e.target.value.charAt(index - 1);

        if (index == 1) {
            if (!/[А-Я]/.test(target)) {
                e.target.value = '';
            }
        } else if (index > 1 && index < 5) {
            if (!/\d/.test(target)) {
                e.target.value = e.target.value.slice(0, index - 1);
            }
        } else if (index > 4 && index < 7) {
            if (!/[А-Я]/.test(target)) {
                e.target.value = e.target.value.slice(0, index - 1);
            }
        } else if (index > 6 && index < 10) {
            if (!/\d/.test(target)) {
                e.target.value = e.target.value.slice(0, index - 1);
            }
        } else {
            e.target.value = e.target.value.slice(0, index - 1);
        }
        let form = e.target.parentNode;
        let licensePlate = e.target;
        e.target.value = e.target.value.replace(/[^А-Я\d]/g, '');
        if (e.target.value.length > 9) {
            e.target.value = e.target.value.slice(0, 9);
        }
        let pattern = /^[А-Я]{1}\d{3}[А-Я]{2}\d{2,3}$/;
        if (licensePlate.value.match(pattern)) {
            form.classList.remove('tomato__border');
        } else {
            form.classList.add('tomato__border');
        }
        if (licensePlate.value == '') {
            form.classList.remove('tomato__border');
        }
    }

    /*Валидации номера паспорта*/
    function validateNumber(e) {
        let form = e.target.parentNode;
        let number = e.target;
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        if (e.target.value.length > 5) {
            e.target.value = e.target.value.slice(0, 6);
        }
        let pattern = /^\d{6}$/;
        if (number.value.match(pattern)) {
            form.classList.remove('tomato__border');
        } else {
            form.classList.add('tomato__border');
        }
        if (number.value == '') {
            form.classList.remove('tomato__border');
        }
    }

    /*Валидации серии паспорта*/
    function validateSeries(e) {
        let form = e.target.parentNode;
        let series = e.target;
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        if (2 < e.target.value.length && e.target.value.length < 5) {
            e.target.value =
                e.target.value.slice(0, 2) + '-' + e.target.value.slice(2, 4);
        } else if (e.target.value.length > 4) {
            e.target.value =
                e.target.value.slice(0, 2) + '-' + e.target.value.slice(2, 4);
        }
        let pattern = /^\d{2}-\d{2}$/;
        if (series.value.match(pattern)) {
            form.classList.remove('tomato__border');
        } else {
            form.classList.add('tomato__border');
        }
        if (series.value == '') {
            form.classList.remove('tomato__border');
        }
    }
    /*Валидация даты выдачи паспорта*/
    function validateDate(e) {
        let form = e.target.parentNode;
        let date = e.target;
        if (date.value == '') {
            form.classList.remove('tomato__border');
        }
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        if (2 < e.target.value.length && e.target.value.length < 5) {
            e.target.value =
                e.target.value.slice(0, 2) + '.' + e.target.value.slice(2, 4);
        } else if (e.target.value.length > 4) {
            e.target.value =
                e.target.value.slice(0, 2) +
                '.' +
                e.target.value.slice(2, 4) +
                '.' +
                e.target.value.slice(4, 8);
        }
        let pattern = /^\d{2}.\d{2}.\d{4}$/;
        if (date.value.match(pattern)) {
            form.classList.remove('tomato__border');
        } else {
            form.classList.add('tomato__border');
        }
        if (date.value == '') {
            form.classList.remove('tomato__border');
        }
    }

    function validate(e) {
        if (licensePlate) {
            validateLicensePlate(e);
        }
        if (series) {
            validateSeries(e);
        }
        if (number) {
            validateNumber(e);
        }
        if (date) {
            validateDate(e);
        }
    }

    return (
        <div className="inputBox inputBox__standart">
            <input
                defaultValue={value}
                onInput={(e) => {
                    validate(e);
                }}
                required
                id={id}
                type={type ? type : undefined}
            />
            <span>{name}</span>
        </div>
    );
}
