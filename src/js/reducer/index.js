import goods from '../goods';
const initialState = goods.reduce((acc, good) => {
  acc[good.id] = 1;
  return acc;
}, []);

export default (basketState = initialState, action) => {
  return basketState;
}
