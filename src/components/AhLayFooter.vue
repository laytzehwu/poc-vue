<template>
    <v-footer dark padless app>
        <v-container fill-height fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" md="3" xl="2">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <span
                                v-bind="attrs"
                                v-on="on"
                            >
                                <a href="https://community.vuetifyjs.com" target="_blank"
                                    class="white--text"
                                >Discord Community</a>
                            </span>
                        </template>
                        <span>For help and collaboration with other Vuetify developers, please join our online</span>
                    </v-tooltip>
                </v-col>
                <v-col cols="12" md="9" xl="10">
                    <ul>
                        Important Links
                        <li v-for="(link, i) in importantLinks" :key="i">
                            <a :href="link.href" target="_blank">{{ link.text }}</a>
                        </li>
                    </ul>
                    
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>


<script>
export default {
    name: 'AhLayFooter',
    data: () => {
        return {
            importantLinks: [
                {
                    text: 'Documentation',
                    href: 'https://vuetifyjs.com',
                },
                {
                    text: 'Chat',
                    href: 'https://community.vuetifyjs.com',
                },
                {
                    text: 'Made with Vuetify',
                    href: 'https://madewithvuejs.com/vuetify',
                },
                {
                    text: 'Articles',
                    href: 'https://medium.com/vuetify',
                }
            ]
        }
    }
}
</script>