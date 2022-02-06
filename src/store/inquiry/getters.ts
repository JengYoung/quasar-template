import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { InquiryStateInterface } from './state';

const getters: GetterTree<InquiryStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
