
import { fireEvent, render, screen } from '@testing-library/react';
import Text from './components/commons/Text';
import Subtitle from './components/commons/Subtitle';
import Button from './components/commons/Button';


//test the header of bookingForms header

 test('renders the BookingForm heading', () => {
   render(<Text text="Please fill your data accurately below to allow us to give the best experience possible."/>);
  expect(screen.getByText(`Please fill your data accurately below to allow us to give the best experience possible.`)).toBeInTheDocument()
  });

//test the component Text
  test('it renders the given text in the Text component', () => {
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
  test('it renders the subtitle component', () => {
      const subtitleTest = 'subtitle';
      render(
          <Subtitle subtitle={subtitleTest} />
      );
      expect(screen.getByText(`${subtitleTest}`)).toBeInTheDocument();
  });


  //test the text button from bookingform
  

 test('renders button and fires click event', () => {
  const onClickMock = jest.fn();
  render(<Button name="Button"  onClick={onClickMock} />);
  const button = screen.getByText('Button');
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalled();
  }); 

//test the component button
/*   test('it renders the given text in the Text component', () => {
      const text = 'loream';
      render(<Text text={text} />);
      expect(screen.getByText(`${text}`)).toBeInTheDocument();
  }); 
 */


/*import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("Adds one", () => {
  // render the App component
  render(<App />); 
  
  // save the heading in a variable
  const heading = screen.getByTestId("currentNumber"); 
  
  // save the button in a variable
  const btn = screen.getByTestId("addOne"); 
  
  // click the btn
  fireEvent.click(btn); 
  
  // test assumption
  expect(heading).toHaveTextContent("2");
});
 */
