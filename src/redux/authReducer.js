const InitialState = {
    user: null,
    error: null,
  };
  
  const AuthReducer = (state = InitialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, user: action.payload, error: null };
      case 'LOGIN_ERROR':
        return { ...state, error: action.payload };
      case 'SET_USER_PROFILE':
        return { ...state, user: action.payload, error: null };
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  