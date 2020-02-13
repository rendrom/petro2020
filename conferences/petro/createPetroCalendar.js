import { createCalendar } from '../../src/calendar';
import { detectLanguage } from '../../src/utils';

var messages = {
  en: {
    registration: 'Registration for participation at the conference and excursions',
    abstracts: 'Reception of abstracts',
    circular1: '1nd Circular',
    circular2: '2nd Circular',
    circular3: '3rd Circular (program)',
    conference: 'Conference',
    excursions: 'Excursions'
  },
  ru: {
    registration: 'Регистрация участникови запись на экскурсии',
    abstracts: 'Прием тезисов докладов',
    circular1: '1-й Циркуляр',
    circular2: '2-й Циркуляр',
    circular3: '3-й Циркуляр (программа)',
    conference: 'Совещание',
    excursions: 'Экскурсии'
  }
}



export function createPetroCalendar() {

  var dataSource = [
    {
      id: 1,
      name: messages[detectLanguage()].registration,
      startDate: new Date(),
      endDate: new Date(2020, 2, 16),
      color: 'yellow'
    },
    {
      id: 2,
      name: messages[detectLanguage()].abstracts,
      startDate: new Date(),
      endDate: new Date(2020, 4, 30),
      color: 'lightgreen'
    },
    {
      id: 0,
      name: messages[detectLanguage()].circular1,
      startDate: new Date(2019, 9, 1),
      endDate: new Date(2019, 8, 22),
      color: 'red'
    },
    {
      id: 3,
      name: messages[detectLanguage()].circular2,
      startDate: new Date(2020, 1, 17),
      endDate: new Date(2020, 1, 17),
      color: 'red'
    },
    {
      id: 3,
      name: messages[detectLanguage()].circular3,
      startDate: new Date(2020, 6, 20),
      endDate: new Date(2020, 6, 20),
      color: 'red'
    },
    {
      id: 4,
      name: messages[detectLanguage()].conference,
      startDate: new Date(2020, 8, 7),
      endDate: new Date(2020, 8, 10),
      color: '#524ad0'
    },
    {
      id: 5,
      name: messages[detectLanguage()].excursions,
      startDate: new Date(2020, 8, 11),
      endDate: new Date(2020, 8, 14),
      color: '#00d1b2'
    }
  ]
  createCalendar({
    dataSource: dataSource,
    minDate: new Date(),
    maxDate: new Date(2020, 8, 14),
    style: 'border'
  });
}
