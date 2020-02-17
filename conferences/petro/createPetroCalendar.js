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
    excursions: 'Excursions'
  },
  ru: {
    registration: 'Регистрация участников',
    abstracts: 'Прием тезисов докладов',
    excursions_registration: 'Запись на экскурсии',
    circular1: '1-й Циркуляр',
    circular2: '2-й Циркуляр',
    circular3: '3-й Циркуляр (программа)',
    conference: 'Совещание',
    excursions: 'Экскурсии'
  }
}



export function createPetroCalendar() {

  var msg = messages[detectLanguage()];

  var dataSource = [
    {
      id: 1,
      name: msg.registration,
      startDate: new Date(),
      endDate: new Date(2020, 2, 16),
      color: 'yellow'
    },
    {
      id: 2,
      name: msg.abstracts,
      startDate: new Date(),
      endDate: new Date(2020, 3, 30),
      color: 'lightgreen'
    },
    {
      id: 6,
      name: msg.excursions_registration,
      startDate: new Date(),
      endDate: new Date(2020, 3, 30),
      color: '#00d1b2'
    },
    {
      id: 0,
      name: msg.circular1,
      startDate: new Date(2019, 9, 1),
      endDate: new Date(2019, 8, 22),
      color: 'red'
    },
    {
      id: 3,
      name: msg.circular2,
      startDate: new Date(2020, 1, 17),
      endDate: new Date(2020, 1, 17),
      color: 'red'
    },
    {
      id: 3,
      name: msg.circular3,
      startDate: new Date(2020, 6, 20),
      endDate: new Date(2020, 6, 20),
      color: 'red'
    },
    {
      id: 4,
      name: msg.conference,
      startDate: new Date(2020, 8, 7),
      endDate: new Date(2020, 8, 10),
      color: '#524ad0'
    },
    {
      id: 5,
      name: msg.excursions,
      startDate: new Date(2020, 8, 11),
      endDate: new Date(2020, 8, 14),
      color: '#00d1b2'
    }
  ];

  createCalendar({
    dataSource: dataSource,
    minDate: new Date(new Date().setDate(new Date().getDate()-1)),
    maxDate: new Date(2020, 8, 14),
    style: 'border'
  });
}
