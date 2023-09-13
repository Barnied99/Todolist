const getUserData = () => {
  try {
    let currentUser = localStorage.getItem('currentUser');
    currentUser = currentUser ? JSON.parse(currentUser) : undefined;

    if (currentUser) {
      const initialUserData = {
        user: { email: currentUser },
      };
      return initialUserData;
    } else {
      return { user: { email: null } };
    }
  } catch (e) {
    return { user: { email: null } };
  }
};

export default getUserData;
