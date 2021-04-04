
const INITIAL_STATE = {
    events:[],
    datalist:[],
    datavalue:[],
    currentUser:{},
    mergeUid:{},
    location:[],
    status:[]
};
export default  (state = INITIAL_STATE,action) =>  {
    switch (action.type) {
        case "ADDEVENTS":
            return({
                
                ...state,
                events:action.payload
            }
            )
            case "ADDCURRENTUSER":
            return({
            ...state,
               currentUser:action.payload
            }
            
            )
            case "ADDDATAVAL":
            return({
            ...state,
               datavalue:action.payload
            }
            
            )
            case "ADDMERGE":
            return({
            ...state,
               mergeUid:action.payload
            }
            
            )
            case "ADDLOCATION":
            return({
            ...state,
               location:action.payload
            }
            
            )
            case "ADDSTATUS":
            return({
            ...state,
               status:action.payload
            }
            
            )
            case "ADDDATA":
            return({
            ...state,
               datalist:action.payload
            }
            
            )
        }


        return state;
}