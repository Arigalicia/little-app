import { render, screen } from '@testing-library/react';
import { initializeTimes, updateTimes } from './Main';

describe('initializeTimes', () => {
    it('should return the correct initial times', () => {
        const initialTimes = initializeTimes();
        expect(initialTimes).toEqual(expect.any(Array)); // Expecting an array
        expect(initialTimes.length).toBeGreaterThan(0);  // Should have some times
    });
});

describe('updateTimes', () => {
    it('should return the updated times based on the provided date', () => {
        const initialState = initializeTimes();
        const action = { type: 'UPDATE_TIMES', payload: new Date('2024-07-29') };
        const updatedState = updateTimes(initialState, action);

        expect(updatedState).toEqual(expect.any(Array)); // Expecting an array
        expect(updatedState.length).toBeGreaterThan(0);  // Should have some times
    });

    it('should return the same state if action type is unknown', () => {
        const initialState = initializeTimes();
        const action = { type: 'UNKNOWN_ACTION', payload: new Date('2024-07-29') };
        const updatedState = updateTimes(initialState, action);

        expect(updatedState).toEqual(initialState);  // Should be the same as initial state
    });
});
