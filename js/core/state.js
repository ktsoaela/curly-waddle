const appState = {
    data: {}, // Centralized state data
    listeners: [],

    // Method to update the state
    setState(newState) {
        this.data = { ...this.data, ...newState };
        this.listeners.forEach(listener => listener(this.data));
    },

    // Subscribe to state changes
    subscribe(listener) {
        this.listeners.push(listener);
    }
};

export default appState;
