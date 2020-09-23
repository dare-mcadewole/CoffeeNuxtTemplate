<template>
    <section class="container p-20">
        <div>
            <logo/>
            <h1 class="text-4xl font-bold">
                Nuxt.js + Coffee!
            </h1>
            <h2 class="text-2xl">
                {{ message }}
            </h2>

            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
            </div>

            <hr class="border-gray-400 my-12">
        </div>

        <h3 class="text-3xl mb-5">Usage</h3>

        <section class="my-5">
            <h5>Back Button</h5>
            <Back />
        </section>

        <section class="my-5">
            <h5>Ion-Icon</h5>
            <ion-icon name="american-football-outline"></ion-icon>
            <ion-icon name="battery-charging-outline"></ion-icon>
            <ion-icon name="boat-outline"></ion-icon>
            <ion-icon name="bus-outline"></ion-icon>
            <ion-icon name="bug"></ion-icon>
        </section>

        <section class="my-5">
            <h5>Spinner</h5>
            <div class="flex">
                <Spinner color="primary" />
                <Spinner />
                <Spinner color="dark" />
            </div>
        </section>

        <section class="my-5">
            <h5>Modal</h5>
            <div class="my-3">
                <button @click="openModal" class="py-2 px-3 rounded-md text-sm bg-gray-200">
                    Open Modal
                </button>
            </div>
            <Modal :active="active" @close="active = false" @submit="submit" title="Modal">
                <p>
                    There is really nothing to show here other than to showproof this beautiful Modal.
                    What do you think?
                </p>
            </Modal>
            <!-- <Back /> -->
        </section>
    </section>
</template>

<script lang="coffee">
import Logo from '~/components/Logo.vue'

export default {
    components: { Logo }

    data: ->
        active: no

    computed:
        message: -> @$store.state.message

    methods:
        openModal: -> @active = yes

        submit: ->
            alert 'Submitted!'
            @active = no
}
</script>

<style>
.container {
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.title {
  font-family: -apple-system, BlinkMacSystemFont, "Poppins", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
