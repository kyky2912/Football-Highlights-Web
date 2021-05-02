import { action, createStore } from "easy-peasy";

const stor = createStore({
    LiveInfo: "",
    addInfo : action((state,payload) => {
        state.LiveInfo =payload
    } )
    
  });

  export default stor