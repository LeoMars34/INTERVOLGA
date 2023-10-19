import { useNavigate } from 'react-router-dom';
import { Button } from '../Components/Button';
import { Input } from '../Components/Input';
import { InfoPopUp } from '../Components/InfoPopUp';
import { useEffect, useState } from 'react';

export function Task2() {
    const [licensePlate, setLicensePlate] = useState();
    const [car, setCar] = useState();
    const [arrivalDate, setarrivalDate] = useState();
    const [fio, setFio] = useState();
    const [series, setSeries] = useState();
    const [number, setNumber] = useState();
    const [date, setDate] = useState();
    const [issued_by, setIssued_by] = useState();

    useEffect(() => {
        setLicensePlate(localStorage.getItem('licensePlate'));
        setCar(localStorage.getItem('car'));
        setarrivalDate(localStorage.getItem('arrivalDate'));
        setFio(localStorage.getItem('fio'));
        setSeries(localStorage.getItem('series'));
        setNumber(localStorage.getItem('number'));
        setDate(localStorage.getItem('date'));
        setIssued_by(localStorage.getItem('issued_by'));
    }, []);

    const navigate = useNavigate();
    function backToMain() {
        navigate(-1);
    }
    function request() {
        let error = false;
        document.querySelectorAll('.inputBox').forEach((i) => {
            if (i.firstChild.value !== '') {
                i.classList.remove('red__border');
            } else {
                error = true;
                i.classList.add('red__border');
                InfoPopUp(
                    'ПОЛЯ ОБЯЗАТЕЛЬНЫЕ ДЛЯ ЗАПОЛНЕНИЯ',
                    'popup__Info_red'
                );
            }
            if (i.classList.contains('tomato__border')) {
                error = true;
                InfoPopUp('НЕВЕРНО ВНЕСЕНЫ ДАННЫЕ', 'popup__Info_red');
            }
        });
        if (error) {
            return;
        }
        let licensePlate = document.getElementById('licensePlate').value;
        let car = document.getElementById('car').value;
        let arrivalDate = document.getElementById('arrivalDate').value;
        let fio = document.getElementById('fio').value;
        let series = document.getElementById('series').value;
        let number = document.getElementById('number').value;
        let date = document.getElementById('date').value;
        let issued_by = document.getElementById('issued_by').value;
        localStorage.setItem('licensePlate', licensePlate);
        localStorage.setItem('car', car);
        localStorage.setItem('arrivalDate', arrivalDate);
        localStorage.setItem('fio', fio);
        localStorage.setItem('series', series);
        localStorage.setItem('number', number);
        localStorage.setItem('date', date);
        localStorage.setItem('issued_by', issued_by);
        InfoPopUp('ФОРМА УСПЕШНО ОТПРАВЛЕНА', 'popup__Info_green');
    }

    return (
        <div className="p__task2">
            <div className="container__PopUp">
                <div className="content__PopUp">
                    <h3 style={{ borderBottom: 'thick double var(--dark)' }}>
                        Транспортные средства и водители
                    </h3>

                    <Input
                        licensePlate="licensePlate"
                        id="licensePlate"
                        name="Гос-номер"
                        value={licensePlate}
                    />

                    <Input value={car} id="car" name="Транспортное средство" />
                    <h6>Ориентировочная дата прибытия к покупателю</h6>
                    <Input value={arrivalDate} id="arrivalDate" type="date" />
                    <h3 style={{ borderBottom: 'thick double var(--dark)' }}>
                        Данные о водителе
                    </h3>
                    <Input value={fio} id="fio" name="ФИО" />
                    <h4 style={{ borderBottom: 'thick double var(--dark)' }}>
                        Паспортные данные
                    </h4>

                    <Input
                        value={series}
                        style="input__small"
                        id="series"
                        name="Серия"
                        series="series"
                    />
                    <Input
                        value={number}
                        style="input__small"
                        id="number"
                        name="Номер"
                        number="number"
                    />

                    <Input
                        value={date}
                        date="date"
                        id="date"
                        name="Когда выдан"
                    />
                    <Input value={issued_by} id="issued_by" name="Кем выдан" />

                    <div>
                        <Button
                            onClick={request}
                            style="button_green"
                            name="Отправить"
                        />
                        <Button
                            onClick={backToMain}
                            style="button_red"
                            name="Отмена"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
