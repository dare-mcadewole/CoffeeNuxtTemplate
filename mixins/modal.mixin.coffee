export default
    props:
        active:
            type: Boolean
            default: no

        title:
            type: String
            required: true
    
    methods:
        submit: (form) -> @$emit 'submit', form
        close: -> @$emit 'close'