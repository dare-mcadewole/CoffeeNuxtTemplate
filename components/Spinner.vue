<template>
    <svg :width="size" :height="size" class="transform scale-75" :viewBox="`0 0 ${size} ${size}`" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                <stop :stop-color="fill" stop-opacity="0" offset="0%"/>
                <stop :stop-color="fill" stop-opacity=".631" offset="63.146%"/>
                <stop :stop-color="fill" offset="100%"/>
            </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)">
                <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite" />
                </path>
                <circle :fill="fill" cx="36" cy="18" r="1">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite" />
                </circle>
            </g>
        </g>
    </svg>
</template>

<script>
const COLOR_MAP = {
    primary: '#FFBD2D',
    secondary: '#27AE60',
    accent: '#e89147',
    green: '#2BBF53',
    black: '#000000',
    dark: '#3F3C3C',
    gre: '#999999',
    white: '#FFFFFF',
}

export default {
    name: 'spinner',
    props: {
        size: {
            type: Number,
            default: 38
        },

        color: {
            type: String,
            default: 'dark',
            validator (val) {
                return Object.keys(COLOR_MAP).includes(val)
            }
        }
    },

    computed: {
        fill () {
            return COLOR_MAP[this.color]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>