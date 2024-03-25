const sidebarReducer = (state, action) => {
  if (action.type === "TOGGLE_SIDEBAR") {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  throw new Error(`没有对应操作："${action.type}`);
};

export default sidebarReducer;
