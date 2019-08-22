import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';

@Injectable()
export class QuestionService {

  getQuestions() {

    const questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'StartTime',
        label: 'Время начала',
        options: [
          {key: '',  value: 'Время начала'},
          {key: '12:00', value: '12:00'},
          {key: '12:30', value: '12:30'},
          {key: '12:30', value: '12:30'},
          {key: '01:30', value: '01:30'},
          {key: '02:00', value: '02:00'},
          {key: '02:30', value: '02:30'},
          {key: '03:00', value: '03:00'},
          {key: '03:30', value: '03:30'},
          {key: '04:00', value: '04:00'},
          {key: '04:30', value: '04:30'},
          {key: '05:00', value: '05:00'},
          {key: '05:30', value: '05:30'},
          {key: '06:00', value: '06:00'},
          {key: '06:30', value: '06:30'},
          {key: '07:00', value: '07:00'},
          {key: '07:30', value: '07:30'},
          {key: '08:00', value: '08:00'},
          {key: '08:30', value: '08:30'},
          {key: '09:00', value: '09:00'},
          {key: '09:30', value: '09:30'},
          {key: '10:00', value: '10:00'},
          {key: '10:30', value: '10:30'},
          {key: '11:00', value: '11:00'},
          {key: '11:30', value: '11:30'},
          {key: '12:00', value: '12:00'},
          {key: '12:30', value: '12:30'},
          {key: '13:00', value: '13:00'},
          {key: '13:30', value: '13:30'},
          {key: '14:00', value: '14:00'},
          {key: '14:30', value: '14:30'},
          {key: '15:00', value: '15:00'},
          {key: '15:30', value: '15:30'},
          {key: '16:00', value: '16:00'},
          {key: '16:30', value: '16:30'},
          {key: '17:00', value: '17:00'},
          {key: '17:30', value: '17:30'},
          {key: '18:00', value: '18:00'},
          {key: '18:30', value: '18:30'},
          {key: '19:00', value: '19:00'},
          {key: '19:30', value: '19:30'},
          {key: '20:00', value: '20:00'},
          {key: '20:30', value: '20:30'},
          {key: '21:00', value: '21:00'},
          {key: '21:30', value: '21:30'},
          {key: '22:00', value: '22:00'},
          {key: '22:30', value: '22:30'},
          {key: '23:00', value: '23:00'},
          {key: '23:30', value: '23:30'}
        ],
        order: 2,
        icon: 'access_time'

      }),

      new DropdownQuestion({
        key: 'EndTime',
        label: 'Время окончания',
        options: [
          {key: '',  value: 'Время окончания'},
          {key: '12:00', value: '12:00'},
          {key: '12:30', value: '12:30'},
          {key: '12:30', value: '12:30'},
          {key: '01:30', value: '01:30'},
          {key: '02:00', value: '02:00'},
          {key: '02:30', value: '02:30'},
          {key: '03:00', value: '03:00'},
          {key: '03:30', value: '03:30'},
          {key: '04:00', value: '04:00'},
          {key: '04:30', value: '04:30'},
          {key: '05:00', value: '05:00'},
          {key: '05:30', value: '05:30'},
          {key: '06:00', value: '06:00'},
          {key: '06:30', value: '06:30'},
          {key: '07:00', value: '07:00'},
          {key: '07:30', value: '07:30'},
          {key: '08:00', value: '08:00'},
          {key: '08:30', value: '08:30'},
          {key: '09:00', value: '09:00'},
          {key: '09:30', value: '09:30'},
          {key: '10:00', value: '10:00'},
          {key: '10:30', value: '10:30'},
          {key: '11:00', value: '11:00'},
          {key: '11:30', value: '11:30'},
          {key: '12:00', value: '12:00'},
          {key: '12:30', value: '12:30'},
          {key: '13:00', value: '13:00'},
          {key: '13:30', value: '13:30'},
          {key: '14:00', value: '14:00'},
          {key: '14:30', value: '14:30'},
          {key: '15:00', value: '15:00'},
          {key: '15:30', value: '15:30'},
          {key: '16:00', value: '16:00'},
          {key: '16:30', value: '16:30'},
          {key: '17:00', value: '17:00'},
          {key: '17:30', value: '17:30'},
          {key: '18:00', value: '18:00'},
          {key: '18:30', value: '18:30'},
          {key: '19:00', value: '19:00'},
          {key: '19:30', value: '19:30'},
          {key: '20:00', value: '20:00'},
          {key: '20:30', value: '20:30'},
          {key: '21:00', value: '21:00'},
          {key: '21:30', value: '21:30'},
          {key: '22:00', value: '22:00'},
          {key: '22:30', value: '22:30'},
          {key: '23:00', value: '23:00'},
          {key: '23:30', value: '23:30'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'Title',
        placeholder: 'Добавьте название',
        order: 1
      }),

      new TextboxQuestion({
        key: 'Guests',
        placeholder: 'Добавьте гостей',
        type: 'text',
        order: 4,
        icon: 'people'
      }),

      new TextboxQuestion({
        key: 'Location',
        placeholder: 'Укажите место проведения',
        type: 'text',
        order: 5,
        icon: 'location_on'
      }),

      new TextboxQuestion({
        key: 'Description',
        placeholder: 'Добавьте описание',
        type: 'text',
        order: 6,
        icon: 'notes'
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
