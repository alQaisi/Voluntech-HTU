export function selectUser(state){
    return state.user.user;
}

export function selectUserWorkExp(state){
    return state.user.user?.user_metadata?.workExp;
}

export function selectUserStore(state){
    return state.user;
}

export function selectOuterLoadingType(state){
    return state.user.OuterLoadingType;
}

export function selectErrorMessage(state){
    return state.user.errorMessage;
}

export function selectImageUrl(state){
    return state.user.imageUrl;
}
