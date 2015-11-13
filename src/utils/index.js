exports.repaintTrigger = function(el) {
  return el.offsetHeight;
};

exports.noop = function() { return null; };

exports.dateUtils = {
  isLeapYear: function(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
  },

  getDaysInMonth: function(year, month) {
    return [31, (this.isLeapYear(year) ? 29 : 28),
      31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  },

  getLocale: function(locale) {
    if (!locale) {
      locale = navigator.language && navigator.language.split('-');
      locale[1] = locale[1].toUpperCase();
      locale = locale.join('_');
    }

    return locales[locale] || locales['en_US'];
  }
};
