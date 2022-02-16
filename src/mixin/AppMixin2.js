const logText = {
    mounted(){
        console.log('mounted!!!');
    }
}

const toggle = {
    data(){
        return {
            isToggle :false
        }
    },
    methods: {
        changeToggle(){
            console.log("click")
            this.isToggle = !this.isToggle;
        }
    }
}

export {
    logText,
    toggle,
}