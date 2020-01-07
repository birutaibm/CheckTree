import {returnOrEval as answer} from '../../../lib'

export default function If({ Condition=false, Then=()=>{}, Else=()=>{} }) {
  return answer(Condition) ? answer(Then) : answer(Else);
}