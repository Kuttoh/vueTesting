import Counter from '@/components/Counter';
import {mount} from "vue-test-utils";

describe('Counter.vue', () =>{
    let wrapper;

    beforeEach(() =>{
        wrapper = mount(Counter)
    });

    it('displays welcome message in header', () =>{
        expect(wrapper.find('.welcome').html()).to.contains('Welcome to the counter');
    });

    it('displays current count in header, even after click', () =>{
        expect(wrapper.find('.hello').html()).to.contains(0);

        wrapper.find('.increment').trigger('click');

        expect(wrapper.find('.hello').html()).to.contains(1);
    });

    it('should contain a default value of 0', () => {
        expect(wrapper.vm.count).to.equal(0);
    });

    it('should increment by 1 on click', () => {
        expect(wrapper.vm.count).to.equal(0);

        wrapper.find('.increment').trigger('click')

        expect(wrapper.vm.count).to.equal(1);
    });

    it('should decrement by 1 on click', () => {
        expect(wrapper.vm.count).to.equal(0);

        wrapper.find('.decrement').trigger('click')

        expect(wrapper.vm.count).to.equal(-1);
    });

});
