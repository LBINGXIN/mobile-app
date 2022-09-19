import send from '@/apis/send';

export default {
  list(data) {
    return send('/euler/list', data);
  },
};
