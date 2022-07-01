import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '.';

describre ('Navbar component tests', ()=> {
    test ('renders without crashing', ()=> {

        render(<Navbar size="default" /> );

    const navbar = screen.getByTestId('Navbar')

    expect (navbar).toBeIntheDocument();
    })
})