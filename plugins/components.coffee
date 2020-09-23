import Vue from 'vue'
import Logo from '~/components/Logo'
import Spinner from '~/components/Spinner'
import Back from '~/components/Back'
import Animated from '~/components/Animated'
# import Password from '~/components/Password'
# import DisplayPicture from '~/components/DisplayPicture'
# import CreateButton from '~/components/CreateButton'
import Modal from '~/components/Modal'

export default (ctx) ->
    Vue.component('Spinner', Spinner)
    Vue.component('Back', Back)
    Vue.component('Animated', Animated)
    # Vue.component('password', Password)
    # Vue.component('display-picture', DisplayPicture)
    # Vue.component('create-button', CreateButton)
    Vue.component('Modal', Modal)