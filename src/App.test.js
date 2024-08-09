import { render, screen } from '@testing-library/react';

import BookingForm from './BookingForm';

test('date input has required attribute', () => {
    render(<BookingForm availableTimes={[]} submitForm={() => {}} />);
    const dateInput = screen.getByLabelText(/Choose a Date/i);
    expect(dateInput).toBeRequired();
});

test('time select has required attribute', () => {
    render(<BookingForm availableTimes={['17:00']} submitForm={() => {}} />);
    const timeSelect = screen.getByLabelText(/Choose a Time/i);
    expect(timeSelect).toBeRequired();
});

test('guests input has required, min, and max attributes', () => {
    render(<BookingForm availableTimes={[]} submitForm={() => {}} />);

    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
});

test('occasion select has required attribute and default option', () => {
    render(<BookingForm availableTimes={[]} submitForm={() => {}} />);

    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(occasionSelect).toBeRequired();

    const defaultOption = screen.getByText(/select an occasion/i);
    expect(defaultOption).toBeInTheDocument();
    expect(defaultOption).toHaveAttribute('value', '');
});