# Repo of studying Vue 2

Refer simple implementation at [StudyNote.md](StudyNote.md)

## Prerequisite

*vue-cli* is required to create a Vue project, run below command to install them:

```
npm install -g @vue/cli @vue/cli-service-global
```

Note: Further [documentation](https://cli.vuejs.org/guide/prototyping.html)

This project was created by running below command:

```
winpty vue.cmd create poc-vue
```

Note: The interactive prompts will not work if run it in Windows and Git Bash. We need to use Git Bash with minTTY.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Vuetify

Because of using Windows + Git Bash, we need to run below command to install Vuetify:

```
winpty vue.cmd add vuetify
```

I am following below setting:
* Choose a preset: Configure (advanced)
* Use a pre-made template? (will replace App.vue and HelloWorld.vue) Yes
* Use custom theme? Yes
* Use custom properties (CSS variables)? Yes
* Select icon font Material Icons
* Use fonts as a dependency (for Electron or offline)? No
* Use a-la-carte components? No
* Use babel/polyfill? Yes
* Select locale English

## SASS

In order to allow code SASS in ```.vue``` file, sass and sass-loader is required to install. Run below command:

```
yarn add sass sass-loader -D
```
