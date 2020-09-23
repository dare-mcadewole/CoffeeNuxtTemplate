<template>
    <transition name="fade"
        enter-active-class="animate__animated animate__faster animate__fadeIn"
        leave-active-class="animate__animated animate__faster animate__fadeOut">
        <div class="modal fixed z-20 left-0 right-0 top-0 bottom-0 flex justify-center items-center"  v-if="active">
            <a @click="cancel" class="modal__overlay absolute left-0 right-0 top-0 bottom-0 block"></a>
            
            <div class="modal__container relative z-10 white shadow-2xl px-6 pt-6 pb-3">
                <header class="flex flex-col justify-center items-center text-center">
                    <h4 class="font-bold text-2xl">
                        {{ title }}
                    </h4>
                    <p class="solid-gray-text text-sm m-t-10" v-if="hint">
                        {{ hint }}
                    </p>
                </header>

                <main class="w-full px-3 my-6">
                    <slot></slot>
                </main>

                <footer slot="footer" class="mb-2 text-right">
                    <button class="py-2 px-5 text-sm rounded-md border-gray-500 font-medium dark-text hover:bg-gray-200 mr-2"
                        @click="close">
                        {{ cancelText }}
                    </button>
                    
                    <button class="py-2 px-5 text-sm rounded-md border-orange-200 bg-orange-200 text-orange-600 font-medium"
                        @click="submit">
                        {{ submitText }}
                    </button>
                </footer>

            </div>
        </div>
    </transition>
</template>

<script lang="coffee">
import ModalMixin from '~/mixins/modal.mixin'

export default
    name: 'modal'
    mixins: [ ModalMixin ]

    props:

        size:
            type: String
            default: 'sm'

        hint:
            type: String

        image:
            type: String

        submitText:
            type: String
            default: 'Submit'

        cancelText:
            type: String
            default: 'Cancel'

    computed:
        isActive:
            get: -> @active
            set: (val) -> @$emit 'close', val

    methods:
        cancel: ->
            @$emit 'cancel'
            @close
</script>

<style lang="scss">
.modal {
    // max-width: 
}

.modal__overlay {
    background: radial-gradient(
        circle at center center, rgba(0, 0, 0, 0.4) 0px, rgba(0, 0, 0, 0.8) 100%
    ) !important;
}

.modal__container {
    border-radius: $radius;
}

.modal__container footer button {
    border-width: 1px !important;
}

.modal__container footer {
    // padding-top: 0;
}
</style>