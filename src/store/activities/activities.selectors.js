import { createSelector } from "reselect";

export function selectActivitiesStatus(state){
    return state.activities;
}

function selectActivitiesFunction(state){
    return state.activities.activities;
}

export const selectActivities=createSelector(
    [selectActivitiesFunction],
    function(activities){
        return activities;
    }
);

export function selectFilterdActivities(state){
    const { searchFilter,categoryFilter,cityFilter,activities }=state.activities;
    if(!activities)
        return [];
    return activities
        .filter(activity=>activity.data.title.toLowerCase().includes(searchFilter))
        .filter(activity=>categoryFilter==="All Category"?true:activity.data.skill===categoryFilter)
        .filter(activity=>cityFilter==="All Cities"?true:activity.data.city===cityFilter);
}