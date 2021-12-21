<template>
    <v-row>
        <v-col cols="12" sm="4"
            v-for="(option, i) in options"
            :key="i"
        >
            <v-checkbox
                :label="option"
                :value="option"
                v-model="workingDays"
                @change="onDaysChange($event)"
            ></v-checkbox>
        </v-col>
    </v-row>
</template>

<script>
import { WeekDaysMessager } from '../services/week-days-messager';
const options = WeekDaysMessager.options;

const workingDays = [];

export default {
    name: 'WeekDays',
    props: ['selectedDays'],
    data: () => {
        return {
            options,
            workingDays
        };
    },
    methods: {
        onDaysChange(updatedDays) {
            this.$emit('change', updatedDays);
        }
    },
    created() {
        this.selectedDays.forEach(days => this.workingDays.push(days));
    },
}
</script>