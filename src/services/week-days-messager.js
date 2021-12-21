export class WeekDaysMessager {

    static options = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ]

    static isStandardWorkingDays(days) {
        return days?.length != 5 ? false : days.indexOf('Saturday') === -1 && days.indexOf('Sunday') === -1;
    }

    static generateMessage(days) {
        let message = '';
        switch(days?.length) {
            case 0:
                message = "You are not working!";
                break;
            case 1:
                message = `You are working a day a week which is ${days[0]}`;
                break;
            case 7:
                message = "Wah! You don't take rest. Take care bro";
                break;
            case 5:
                message = this.isStandardWorkingDays(days) ?
                    'Standard! You are woring Mon - Fri and Saturday and Sunday is off.'
                    : `You are working ${days.length} days for a week`; 
                break;
            case 2:
            case 3:
            case 4:
            case 6:    
                message = `You are working ${days.length} days for a week`;
        }
        return message;
    }   
}