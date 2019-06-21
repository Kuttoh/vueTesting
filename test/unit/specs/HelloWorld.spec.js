import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
// import {mount} from "vue-test-utils";
// import Counter from "../../../src/components/Counter";

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
});

// describe('Counter.vue', () =>{
//   it('should default to 0', () => {
//     let wrapper = mount(Counter);
//     expect(wrapper.vm.count).to.equal(0);
//   })
// })
