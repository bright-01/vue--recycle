const TestMixin = {
    created(){
        console.log("mixin test created");
        this.mixinTest();
    },
    beforeDestroy() {
        console.log('mixin beforeDestroy');
    },
    methods:{
        mixinTest(){
            console.log("MixinTest method!!");
        },
        addCount(number){
            return number + 10;
        }
    }
}

export {
    TestMixin
}