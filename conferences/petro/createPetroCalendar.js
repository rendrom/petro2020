import { createCalendar } from '../../src/calendar';

export function createPetroCalendar() {

  var dataSource = [
    {
      id: 1,
      name: 'Регистрация участников',
      startDate: new Date(),
      endDate: new Date(2020, 1, 3),
      color: 'yellow'
    },
    {
      id: 2,
      name: 'Прием тезисов докладов',
      startDate: new Date(),
      endDate: new Date(2020, 4, 30),
      color: 'lightgreen'
    },
    {
      id: 0,
      name: '1-й Циркуляр',
      startDate: new Date(2019, 8, 22),
      endDate: new Date(2019, 8, 22),
      color: 'red'
    },
    {
      id: 3,
      name: '2-й Циркуляр (программа)',
      startDate: new Date(2020, 6, 20),
      endDate: new Date(2020, 6, 20),
      color: 'red'
    },
    {
      id: 4,
      name: 'Совещание',
      startDate: new Date(2020, 8, 7),
      endDate: new Date(2020, 8, 10),
      color: '#524ad0'
    },
    {
      id: 5,
      name: 'Экскурсии',
      startDate: new Date(2020, 8, 11),
      endDate: new Date(2020, 8, 13),
      color: '#00d1b2'
    }
  ]
  createCalendar({
    dataSource: dataSource,
    minDate: new Date(),
    maxDate: new Date(2020, 8, 13),
    style: 'border'
  });
}
