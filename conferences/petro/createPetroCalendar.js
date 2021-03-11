import { createCalendar } from '../../src/calendar';
import { detectLanguage } from '../../src/utils';

var messages = {
  en: {
    registration: 'Registration for participation at the conference',
    abstracts: 'Reception of abstracts',
    excursions_registration: 'Registration for excursions',
    circular1: '1nd Circular',
    circular2: '2nd Circular',
    circular3: '3rd Circular (program)',
    conference: 'Conference',
    excursions: 'Excursions',
  },
  ru: {
    registration: 'Регистрация участников',
    abstracts: 'Прием тезисов докладов',
    excursions_registration: 'Запись на экскурсии',
    circular1: '1-й Циркуляр',
    circular2: '2-й Циркуляр',
    circular3: '3-й Циркуляр (программа)',
    conference: 'Совещание',
    excursions: 'Экскурсии',
  },
};

export const [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

export function createPetroCalendar() {
  var msg = messages[detectLanguage()];

  var dataSource = [
    {
      id: 1,
      name: msg.registration,
      startDate: new Date(),
      endDate: new Date(2021, apr, 30),
      color: 'yellow',
    },
    {
      id: 2,
      name: msg.abstracts,
      startDate: new Date(),
      endDate: new Date(2021, apr, 30),
      color: 'lightgreen',
    },
    {
      id: 6,
      name: msg.excursions_registration,
      startDate: new Date(),
      endDate: new Date(2021, apr, 30),
      color: '#00d1b2',
    },
    // {
    //   id: 0,
    //   name: msg.circular1,
    //   startDate: new Date(2019, 9, 1),
    //   endDate: new Date(2019, 8, 22),
    //   color: 'red'
    // },
    {
      id: 3,
      name: msg.circular2,
      startDate: new Date(2021, mar, 5),
      endDate: new Date(2021, mar, 5),
      color: 'red',
    },
    {
      id: 3,
      name: msg.circular3,
      startDate: new Date(2021, jun, 21),
      endDate: new Date(2021, jun, 21),
      color: 'red',
    },
    {
      id: 4,
      name: msg.conference,
      startDate: new Date(2021, sep, 6),
      endDate: new Date(2021, sep, 9),
      color: '#524ad0',
    },
    {
      id: 5,
      name: msg.excursions,
      startDate: new Date(2021, sep, 10),
      endDate: new Date(2021, sep, 13),
      color: '#00d1b2',
    },
  ];

  createCalendar({
    dataSource: dataSource,
    minDate: new Date(new Date().setDate(new Date().getDate() - 1)),
    maxDate: new Date(2021, 8, 14),
    style: 'border',
  });
}
