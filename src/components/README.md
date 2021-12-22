# Components

Components to be called by [App.vue](../App.vue):

* [AhLayPoC.vue](./AhLayPoC.vue) the main pease of content.
* [AhLayFooter.vue](./AhLayFooter.vue) the footer of page, it provides links for further study.
* [WeekDays.vue](./WeekDays.vue), it is not really called by [App.vue](../App.vue) but called by [AhLayPoC.vue](./AhLayPoC.vue).

## Data exachange

[WeekDays.vue](./WeekDays.vue) produce part of content for [AhLayPoC.vue](./AhLayPoC.vue). It shows checkboxes for week days. [AhLayPoC.vue](./AhLayPoC.vue) received the selected week days and does summary and call [WeekDaysMessager](../services/week-days-messager.js) to populate summary message.
