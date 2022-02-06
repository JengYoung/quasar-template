export interface InquiryStateInterface {
  prop: boolean;
}

function state(): InquiryStateInterface {
  return {
    prop: false,
  };
}

export default state;
