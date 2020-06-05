import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)

    const header = getByText(/Checkout Form/i)

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByRole, getByText } = render(<CheckoutForm />);

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const address = getByLabelText(/address:/i);
    const city = getByLabelText(/city/i);
    const state = getByLabelText(/state/i);
    const zip = getByLabelText(/zip/i);
    const button = getByRole('button');

    fireEvent.change(firstName, { target: { value: 'John' } });
    fireEvent.change(lastName, { target: { value: 'Doe' } });
    fireEvent.change(address, { target: { value: '123 Street' }});
    fireEvent.change(city, {target: { value: 'CulDeSac' }});
    fireEvent.change(state, {target: { value: 'Alaska' }});
    fireEvent.change(zip, {target: { value: '12345' }});
    fireEvent.click(button);

    expect(getByText(/John/i)).toBeInTheDocument();

    expect(getByText(/Doe/i)).toBeInTheDocument();

    expect(getByText(/123 Street/i)).toBeInTheDocument();

    expect(getByText(/CulDeSac/i)).toBeInTheDocument();

    expect(getByText(/Alaska/i)).toBeInTheDocument();

    expect(getByText(/12345/i)).toBeInTheDocument();

});
