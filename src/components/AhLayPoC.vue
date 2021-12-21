<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <h1>{{ showWelcomeMsg() }}</h1>
            </v-col>
            <v-col cols="12" md="3">
                <div class="text-left">Name: {{name}}</div>
                <div class="age text-left">
                    <span>Age: {{ age }}</span>
                    <span v-on:click="age++">+</span>
                    <span v-on:click="age--">-</span>
                </div>
                <div class="text-left">
                    <v-radio-group v-model="gender">
                        <v-radio
                            label="Male"
                            value="male"
                        ></v-radio>
                        <v-radio
                            label="Female"
                            value="female"
                        ></v-radio>
                    </v-radio-group>
                    <span class="text-caption">{{ showGenderMsg() }}</span>
                </div>
            </v-col>
            <v-col cols="12" md="3">
                <div>
                    <v-text-field
                        label="Greeting message"
                        :value="greeting"
                        v-on:input="greeting  = $event"
                    ></v-text-field>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <app-week-days :selectedDays="workingDays" @change="onWorkingDaysChange"></app-week-days>
                <div>{{ showWorkingDaysTips() }}</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss">
.age {
    span:nth-child(2), span:nth-child(3) {
        padding: 0 .5rem;
        margin: 0 .25rem;
        cursor: pointer;
        border-radius: .25rem;

        &:hover {
            background-color: #e1e1e1;
        }

        &:active {
            background-color: yellow;
        }
    }
}
</style>

<script>
import { WeekDaysMessager } from '../services/week-days-messager';
import WeekDays from './WeekDays.vue';


const data = {
    name: 'Ah Lay',
    age: 46,
    gender: '',
    greeting: '',
    workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
};

export default {
    name: 'AhLayPoC',
    data: () => data,
    methods: {
        showWelcomeMsg() {
            return `Hi ${data.name}` + (data.greeting ? `:${data.greeting}` : '');
        },
        showGenderMsg() {
            if (data.gender) {
                if (data.gender == 'female') {
                    return 'You must looking forward chocolate as gift during Valentine day!';
                } else {
                    return 'You should have a good plan before Valentine day!';
                }            
            }
        },
        onWorkingDaysChange(updateDays) {
            // Clear previous selection
            while(this.workingDays.length > 0) this.workingDays.pop();
            updateDays.forEach(day => this.workingDays.push(day));
        },
        showWorkingDaysTips() {
            return WeekDaysMessager.generateMessage(this.workingDays);            
        }
    },
    components: {
        'app-week-days': WeekDays
    }
}
</script>