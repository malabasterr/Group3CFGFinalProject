import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BackHome from '../game/BackHome';
import { logout } from '../../redux/actions';

// Mock react-router-dom's useNavigate
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// Mock react-redux's useDispatch
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

// Mock axios.post
jest.mock('axios');

describe('BackHome', () => {
  test('reshuffles questions and logs out on button click', async () => {
    const navigate = jest.fn();
    const dispatch = jest.fn();

    useNavigate.mockReturnValue(navigate);
    useDispatch.mockReturnValue(dispatch);
    axios.post.mockResolvedValueOnce();

    // Render the component
    render(<BackHome />);

    // Click the "Back to Homepage" button
    const backButton = screen.getByText('Back to Homepage');
    fireEvent.click(backButton);

    // Check if axios.post was called with the expected argument
    expect(axios.post).toHaveBeenCalledWith('/api/reset-cache');

    // Check if dispatch was called with the expected action
    expect(dispatch).toHaveBeenCalledWith(logout());

    // Check if navigate was called with the expected route
    expect(navigate).toHaveBeenCalledWith('/');

    // Reset mock functions
    axios.post.mockReset();
    dispatch.mockReset();
    navigate.mockReset();
  });
});
