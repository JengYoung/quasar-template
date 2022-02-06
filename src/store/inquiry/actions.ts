import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { InquiryStateInterface } from './state';

const actions: ActionTree<InquiryStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default actions;
