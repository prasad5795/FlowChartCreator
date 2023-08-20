const cancelButtonHandler = (_event: any, appcontextValue: any) => {
  const { setSelectedNode, fitToView } = appcontextValue;
  setSelectedNode();
  fitToView();
};

export const customClickHandlerMap: any = {
  cancelButtonHandler,
};
