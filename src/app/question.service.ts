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
          {key: '12:00AM', value: '12:00AM'},
          {key: '12:30AM', value: '12:30AM'},
          {key: '12:30AM', value: '12:30AM'},
          {key: '01:30AM', value: '01:30AM'},
          {key: '02:00AM', value: '02:00AM'},
          {key: '02:30AM', value: '02:30AM'},
          {key: '03:00AM', value: '03:00AM'},
          {key: '03:30AM', value: '03:30AM'},
          {key: '04:00AM', value: '04:00AM'},
          {key: '04:30AM', value: '04:30AM'},
          {key: '05:00AM', value: '05:00AM'},
          {key: '05:30AM', value: '05:30AM'},
          {key: '06:00AM', value: '06:00AM'},
          {key: '06:30AM', value: '06:30AM'},
          {key: '07:00AM', value: '07:00AM'},
          {key: '07:30AM', value: '07:30AM'},
          {key: '08:00AM', value: '08:00AM'},
          {key: '08:30AM', value: '08:30AM'},
          {key: '09:00AM', value: '09:00AM'},
          {key: '09:30AM', value: '09:30AM'},
          {key: '10:00AM', value: '10:00AM'},
          {key: '10:30AM', value: '10:30AM'},
          {key: '11:00AM', value: '11:00AM'},
          {key: '11:30AM', value: '11:30AM'},
          {key: '12:00PM', value: '12:00PM'},
          {key: '12:30PM', value: '12:30PM'},
          {key: '13:00PM', value: '13:00PM'},
          {key: '13:30PM', value: '13:30PM'},
          {key: '14:00PM', value: '14:00PM'},
          {key: '14:30PM', value: '14:30PM'},
          {key: '15:00PM', value: '15:00PM'},
          {key: '15:30PM', value: '15:30PM'},
          {key: '16:00PM', value: '16:00PM'},
          {key: '16:30PM', value: '16:30PM'},
          {key: '17:00PM', value: '17:00PM'},
          {key: '17:30PM', value: '17:30PM'},
          {key: '18:00PM', value: '18:00PM'},
          {key: '18:30PM', value: '18:30PM'},
          {key: '19:00PM', value: '19:00PM'},
          {key: '19:30PM', value: '19:30PM'},
          {key: '20:00PM', value: '20:00PM'},
          {key: '20:30PM', value: '20:30PM'},
          {key: '21:00PM', value: '21:00PM'},
          {key: '21:30PM', value: '21:30PM'},
          {key: '22:00PM', value: '22:00PM'},
          {key: '22:30PM', value: '22:30PM'},
          {key: '23:00PM', value: '23:00PM'},
          {key: '23:30PM', value: '23:30PM'}
        ],
        order: 2,
        icon: 'access_time'

      }),

      new DropdownQuestion({
        key: 'EndTime',
        label: 'Время окончания',
        options: [
          {key: '',  value: 'Время окончания'},
          {key: '12:00AM', value: '12:00AM'},
          {key: '12:30AM', value: '12:30AM'},
          {key: '12:30AM', value: '12:30AM'},
          {key: '01:30AM', value: '01:30AM'},
          {key: '02:00AM', value: '02:00AM'},
          {key: '02:30AM', value: '02:30AM'},
          {key: '03:00AM', value: '03:00AM'},
          {key: '03:30AM', value: '03:30AM'},
          {key: '04:00AM', value: '04:00AM'},
          {key: '04:30AM', value: '04:30AM'},
          {key: '05:00AM', value: '05:00AM'},
          {key: '05:30AM', value: '05:30AM'},
          {key: '06:00AM', value: '06:00AM'},
          {key: '06:30AM', value: '06:30AM'},
          {key: '07:00AM', value: '07:00AM'},
          {key: '07:30AM', value: '07:30AM'},
          {key: '08:00AM', value: '08:00AM'},
          {key: '08:30AM', value: '08:30AM'},
          {key: '09:00AM', value: '09:00AM'},
          {key: '09:30AM', value: '09:30AM'},
          {key: '10:00AM', value: '10:00AM'},
          {key: '10:30AM', value: '10:30AM'},
          {key: '11:00AM', value: '11:00AM'},
          {key: '11:30AM', value: '11:30AM'},
          {key: '12:00PM', value: '12:00PM'},
          {key: '12:30PM', value: '12:30PM'},
          {key: '13:00PM', value: '13:00PM'},
          {key: '13:30PM', value: '13:30PM'},
          {key: '14:00PM', value: '14:00PM'},
          {key: '14:30PM', value: '14:30PM'},
          {key: '15:00PM', value: '15:00PM'},
          {key: '15:30PM', value: '15:30PM'},
          {key: '16:00PM', value: '16:00PM'},
          {key: '16:30PM', value: '16:30PM'},
          {key: '17:00PM', value: '17:00PM'},
          {key: '17:30PM', value: '17:30PM'},
          {key: '18:00PM', value: '18:00PM'},
          {key: '18:30PM', value: '18:30PM'},
          {key: '19:00PM', value: '19:00PM'},
          {key: '19:30PM', value: '19:30PM'},
          {key: '20:00PM', value: '20:00PM'},
          {key: '20:30PM', value: '20:30PM'},
          {key: '21:00PM', value: '21:00PM'},
          {key: '21:30PM', value: '21:30PM'},
          {key: '22:00PM', value: '22:00PM'},
          {key: '22:30PM', value: '22:30PM'},
          {key: '23:00PM', value: '23:00PM'},
          {key: '23:30PM', value: '23:30PM'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'Title',
        placeholder: 'Добавьте название',
        // required: true,
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
