import { render, screen } from '@testing-library/react';
import { initializeTimes, updateTimes } from './Main';

describe('initializeTimes', () => {
    it('should return the correct initial times', () => {
        const initialTimes = initializeTimes();
        expect(initialTimes).toEqual(expect.any(Array)); // Expecting an array
        expect(initialTimes.length).toBeGreaterThan(0);  // Should have some times
    });
});
