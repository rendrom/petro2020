import { createCalendar } from '../../src/calendar';

export function createPetroCalendar() {

  var dataSource = [
    {
      id: 1,
      name: 'Регистрация участников',
      startDate: new Date(),
      endDate: new Date(2020, 2, 3)
    },
    {
      id: 2,
      name: 'Прием тезисов докладов',

      startDate: new Date(),
      endDate: new Date(2020, 5, 30)
    },
    {
      id: 0,
      name: '1-й Циркуляр',
      startDate: new Date(2019, 9, 22),
      endDate: new Date(2019, 9, 22),
    },
    {
      id: 3,
      name: '2-й Циркуляр (программа)',
      location: 'San Francisco, CA',
      startDate: new Date(2020, 7, 20),
      endDate: new Date(2020, 7, 20),
    },
    {
      id: 4,
      name: 'Совещание',
      startDate: new Date(2020, 9, 7),
      endDate: new Date(2020, 9, 10)
    },
    {
      id: 5,
      name: 'Экскурсии',
      startDate: new Date(2020, 9, 11),
      endDate: new Date(2020, 9, 13)
    }
  ]
  createCalendar({ dataSource: dataSource, minDate: new Date(), maxDate: new Date(2020, 9, 13)});
}
