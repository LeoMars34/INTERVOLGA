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
        let form = e.target.parentNode;
        let licensePlate = e.target;
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
        let pattern = /^\d{4}$/;
        if (series.value.match(pattern)) {
            form.classList.remove('tomato__border');
        } else {
            form.classList.add('tomato__border');
        }
        if (series.value == '') {
            form.classList.remove('tomato__border');
        }
    }
    /*Валидация даты*/
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
