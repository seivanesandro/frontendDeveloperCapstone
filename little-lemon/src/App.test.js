import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//import userEvent from '@testing-library/user-event';
import Text from './components/commons/Text';
import Subtitle from './components/commons/Subtitle';
import Button from './components/commons/Button';
import Input from './components/commons/Input';

//test the header of bookingForms header

 test('renders the BookingForm heading', () => {
   render(<Text text="Please fill your data accurately below to allow us to give the best experience possible."/>);
  expect(screen.getByText(`Please fill your data accurately below to allow us to give the best experience possible.`)).toBeInTheDocument()
  });

//test the component Text
  test('it test thegiven text to component Text', () => {
      const textTest = 'loream';
      render(<Text text={textTest} />);
      expect(screen.getByText(`${textTest}`)).toBeInTheDocument();
  });

  //test the text of Subtitle

 test('renders the test in subtitle hero', () => {
   render(<Subtitle subtitle="Chicago"/>);
  expect(screen.getByText(`Chicago`)).toBeInTheDocument()
  });

//test the component subttitle
  test('it test type of subtitle component', () => {
      const subtitleTest = 'subtitle';
      render(
          <Subtitle subtitle={subtitleTest} />
      );
      expect(screen.getByText(`${subtitleTest}`)).toBeInTheDocument();
  });


  //test the text button

 test('renders button and fires click event', () => {
  const onClickMock = jest.fn();
  render(<Button name="Button"  onClick={onClickMock} />);
  const button = screen.getByText('Button');
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalled();
  });



  //test the component input
describe("<Input />", () => {
    test("displays text input", () => {
        render(<Input  type="text" />);
        const userInput = screen.getByTestId("input-field");
        const userInputValue = screen.getByDisplayValue("");

        expect(userInput).toBeInTheDocument();
        expect(userInputValue).toBeInTheDocument();
     });

  });