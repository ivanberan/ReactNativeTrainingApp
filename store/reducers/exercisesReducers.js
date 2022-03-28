import { combineReducers } from "redux";
import { POSES } from "../../data/test-data"
import { SET_FAVOURITE, SET_FILTER } from "../actions/exercisesActions";
const initialState = {
    allExercises: POSES,
    exercisesFiltered: POSES,
    exercisesToDo: []
}

const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVOURITE:
            const markedExe = state.exercisesToDo.findIndex(
                exe => exe.id === action.exerciseId
            )
            if (markedExe >= 0) {
                const newState = [...state.exercisesToDo]
                newState.splice(markedExe, 1)
                return { ...state, exercisesToDo: newState }
            } else {
                const exe = state.allExercises.find(exe => exe.id === action.exerciseId)
                const newState = state.exercisesToDo.concat(exe)
                return { ...state, exercisesToDo: newState }


            }
        case SET_FILTER:
            const exeFilters = action.filters
            console.log(true && false)
            const newState = state.allExercises.filter(
                exe => {

                    if (exeFilters.filterLegs && exe.legsFilter) {
                        return true
                    }
                    if (exeFilters.filterArms && exe.armsFilter) {
                        return true
                    }
                    if (exeFilters.filterBack && exe.backFilter) {
                        return true
                    }
                    if (exeFilters.filterAbdominals && exe.abdominalsFilter) {
                        return true
                    }
                    if (exeFilters.filterHamstrings && exe.hamstringsFilter) {
                        return true
                    }
                    return false;
                    // iskljucivo filtriranje
                    /* if (!(exeFilters.filterLegs ^ exe.legsFilter)
                         && !(exeFilters.filterArms ^ exe.armsFilter)
                         && !(exeFilters.filterBack ^ exe.backFilter)
                         && !(exeFilters.filterAbdominals ^ exe.abdominalsFilter)
                         && !(exeFilters.filterHamstrings ^ exe.hamstringsFilter)) {
                         return true
                     }
                     else {
                         return false
                     }*/

                }
            )
            return { ...state, exercisesFiltered: newState }
        default:
            return state;
    }

}

export default exerciseReducer