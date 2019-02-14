const existsPartnerMessage = (partnerSocketId, directMessageList) => {
  const hasPartnerMessage = partnerSocketId in directMessageList;
  return hasPartnerMessage;
};

const createNewState = (partnerData, currentState) => {
  const { name, socketId } = partnerData;
  const { directMessage } = currentState;
  const newDirectMessageObj = {};
  newDirectMessageObj[socketId] = [];
  const hasPartnerMessage = existsPartnerMessage(socketId, directMessage);
  if (hasPartnerMessage) {
    return {
      ...currentState,
      currentPartnerUser: {
        name,
        socketId,
      },
    };
  }
  return {
    ...currentState,
    currentPartnerUser: {
      name: partnerData.name,
      socketId: partnerData.socketId,
    },
    directMessage: Object.assign({}, directMessage, newDirectMessageObj),
  };
};

export default createNewState;
