import moment from 'moment';

moment.updateLocale('en', {
    relativeTime: {
        future: "just now",
        past:   "%s ago",
        s  : 'few seconds',
        ss : '%d seconds',
        m:  "a minute",
        mm: "%d minutes",
        h:  "an hour",
        hh: "%d hours",
        d:  "a day",
        dd: "%d days",
        M:  "a month",
        MM: "%d months",
        y:  "a year",
        yy: "%d years"
    }
});