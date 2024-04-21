export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export const increment = (payload) => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});