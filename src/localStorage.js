const loadQueueState = () => {
  try {
    const serializedQueueState = localStorage.getItem('queueState');
    if (!serializedQueueState) return undefined;

    return JSON.parse(serializedQueueState);
  } catch (err) {
    return undefined;
  }
}

const saveQueueState = (state) => {
  try {
    const serializedQueueState = JSON.stringify(state.queueState);
    localStorage.setItem('queueState', serializedQueueState);
  } catch (error) {
    console.log(error);
  }
}

const loadUserData = () => {
  try {
    const serializedUserData = localStorage.getItem('user');
    if(!serializedUserData) return undefined;
  } catch (error) {
    return undefined;
  }
}

exports = {
  loadQueueState,
  saveQueueState,
  loadUserData
};