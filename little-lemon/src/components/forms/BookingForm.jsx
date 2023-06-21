import { useState } from 'react';
import styled from 'styled-components';
import Button from '../commons/Button';
import Text from '../commons/Text'; 
import Select from '../commons/Select';
import Input from '../commons/Input';

const FormStyle = styled.div`
    margin: 2rem 0;
`;

function BookingForm({
    availableTimes,
    dispatch,
    submitForm
}) {
    console.log(dispatch);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        date: '',
        time: '00:00',
        noOfGuests: 1,
        occasion: 'Occasion'
    });

    const handleFormChange = event => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleDateChange = async event => {
        const { name, value } = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
        dispatch({
            type: 'UPDATE_TIMES',
            payload: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        submitForm(formData);
    };

    const currentDate = new Date()
        .toISOString()
        .split('T')[0];

    const options = availableTimes.map((time) => (
        <option key={time}>{time}</option>
    ));
    return (
        <main style={{ marginTop: '2rem' }}>
            <Text
                sizeText="60rem"
                text="Please fill your data accurately below to allow us to give the best experience possible."
                fontSize="20px"
                color="#F4CE14"
            />
            <form onSubmit={handleSubmit}>
                <FormStyle className="form-style">
                    <Input
                        type="text"
                        id="first-name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={
                            handleFormChange
                        }
                        inputPlaceholder="Name"
                    />
                </FormStyle>

                <FormStyle className="form-style">
                    <Input
                        type="text"
                        id="last-name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={
                            handleFormChange
                        }
                        inputPlaceholder="Last name"
                    />
                </FormStyle>

                <FormStyle className="form-style">
                    <Input
                        type="text"
                        id="contact-number"
                        name="contactNumber"
                        value={
                            formData.contactNumber
                        }
                        onChange={
                            handleFormChange
                        }
                        inputPlaceholder="Phone"
                        pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{3}"
                    />
                </FormStyle>
                <FormStyle className="form-style">
                    <Input
                        type="date"
                        id="res-date"
                        name="date"
                        value={formData.date}
                        onChange={
                            handleDateChange
                        }
                        min={currentDate}
                        inputPlaceholder="Date"
                    />
                </FormStyle>
                <FormStyle className="form-style">
                    <Input
                        type="number"
                        inputPlaceholder="Nº Guests"
                        min="1"
                        max="10"
                        id="guests"
                        name="noOfGuests"
                        value={
                            formData.noOfGuests
                        }
                        onChange={
                            handleFormChange
                        }
                        required
                    />
                </FormStyle>
                <FormStyle className="form-style">
                    <Select
                        title="Choose your best time"
                        id="res-time "
                        name="time"
                        value={formData.time}
                        onChange={
                            handleFormChange
                        }
                    >
                        {options}
                    </Select>
                </FormStyle>
                <FormStyle className="form-style">
                    <Select
                        title="Choose your Occasion"
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={
                            handleFormChange
                        }
                    >
                        <option>Occasion</option>

                        <option>
                            Romantic Dinner
                        </option>

                        <option>
                            Group Friends
                        </option>

                        <option>
                            Team Building
                        </option>

                        <option>
                            Anniversary
                        </option>
                    </Select>
                </FormStyle>

                <FormStyle className="form-style">
                    <Button
                        name="Reserve"
                        className="submit"
                        type="submit"
                        value=""
                        aria-label="submit button"
                        size="0.5rem 25rem 0.5rem 25rem"
                        fontSize="18px"
                        colorText="#fff"
                        backgroundText="#000000"
                        boxShadow="white"
                        colorHover="#495E57"
                        backgroundHover="#F4CE14"
                        boxShadowHover="0 0 0.5rem #495E57"
                    />
                </FormStyle>
            </form>
        </main>
    );
}

export default BookingForm;