import moment from 'moment';

const isADateString = date => {
  return (
    typeof date === 'string' &&
    (date.match(
      /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/
    ) ||
      date.match(/(\d{4})[-/](\d{2})[-/](\d{2})/) ||
      date.match(/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/)) //General.brazilianFormat
  );
};

class Model {
  constructor(response) {
    if (response) {
      for (let key in this) {
        if (isADateString(response[key])) {
          this[key] = moment(response[key]);
        } else this[key] = response[key];
      }
    }
  }
}

export default Model;
