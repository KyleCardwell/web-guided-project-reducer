export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const UPDATE_TITLE = 'UPDATE_TITLE'

// action creator: a function that formats an action object
// () => {type: string, payload: any}

// this is basically our "translation" layer between the components and the reducer

export default {
  toggleEditing: () => {
    console.log("toggleEditing called in action creator")
    return { type: TOGGLE_EDITING }
  },
  updateTitle: (title) => {
    console.log("updateTitle called in action creator")
    return { type: UPDATE_TITLE, payload: title}
  }
}