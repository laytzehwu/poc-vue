const summaryPoints = [];
const data = {
    name: 'Lay',
    age: 30,
    gender: 'Male',
    greeting: 'Good morning',
    workingDays: [],
    country: '',    
    malaysiaStates: [ 
        { label: 'Johor', vehicle: 'J', areaCode: '07'},
        { label: 'Melaka', vehicle: 'M', areaCode: '06'},
        { label: 'Negeri Sembilan', vehicle: 'N', areaCode: '06'},
        { label: 'Selangor', vehicle: 'B', areaCode: '03'},
        { label: 'Pahang', vehicle: 'C', areaCode: '09'},
        { label: 'Perak', vehicle: 'A', areaCode: '05'},
        { label: 'Kelantan', vehicle: 'D', areaCode: '09'},
        { label: 'Kedah', vehicle: 'K', areaCode: '04'},
        { label: 'Perlis', vehicle: 'R', areaCode: '04'},
        { label: 'Pulau Pinang', vehicle: 'P', areaCode: '04'},
        { label: 'Terengganu', vehicle: 'T', areaCode: '09'},
        { label: 'Sabah', vehicle: 'SA, SY, SB, SD, SK, SS, SM, ST, SW, SU', areaCode: '087, 088, 089'},
        { label: 'Salawak', vehicle: 'T', areaCode: '082'}
    ],
    stayInMalaysiaState: '',
    summaryPoints: summaryPoints,
};

const onMyStageChange = function (state) {
    console.log(state, data);
}

new Vue({
    el: '#vue-app',
    data: data,
    methods: {
        showWelcomeMessage: function () {
            return `Welcome ${this.name}` + (this.greeting ? `: ${this.greeting}`:'');
        },
        showGendarMsg: function () {
            if (this.gender == 'Female') {
                return 'You must looking forward chocolate as gift during Valentine day!';
            } else {
                return 'You should have a good plan before Valentine day!';
            }
        },
        showWorkDaysNotes: function () {
            if (this.workingDays.length == 1) {
                return `You only works on ${this.workingDays[0]}`;
            } else if (this.workingDays.length > 1) {
                return `Your working days are ${this.workingDays.join(',')}`;
            } else {
                return 'You are not working at all';
            }
        },
        changeMalaysiaState: function ($event) {
            const selState = this.malaysiaStates.find(state => state.label == this.stayInMalaysiaState);
            onMyStageChange(selState);
        }
    }
});