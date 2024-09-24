export interface CountStore {
    count: number,
    actions: {
        increment: () => void,
        decrement: () => void
    }
}