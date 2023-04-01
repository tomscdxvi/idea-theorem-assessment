# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run this App

In the project directory, you can run:

### `npm install`

To install the necessary node_modules to run this app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Front-End

Technologies Used:

HTML, CSS, JavaScript (React.js + Libraries), and TailwindCSS.

Missing / Not Finished:

1. Red label between error border. 

2. Red asterisk next to placeholder.

Checklist for Front-End:

1. Navbar with Idea Theorem logo.

2. Create User Account is outside of the form box.

3. Labels and form inputs replicate the design.

4. Outlined and filled buttons. 'Cancel' does nothing, 'Submit' sends/posts the form to the given API.

5. No error messages are shown until the user focuses on any input (Besides date_of_birth). 

6. Red outline is shown when the user focuses on any input.

7. Error lines and messages are removed when the user enters a valid input.

8. Submit button shows alert based on 'Success' or 'Error' depending on back-end validations.

### Back-End

Technologies Used:

JavaScript, Axios

Checklist for Form Validation:

1. full_name: Cannot be empty, does not allow symbols and spaces. (Was unable to add Last Name, might fix later on)

Test Cases: [space] Tommy!, [space] Tommy!@# [space]

2. contact_number: Cannot be empty, Canadian phone format [111-111-1111]

Test Cases: 1111111111, 1111-1111-1111, 11-111-1111, 111 111 1111

3. email: Cannot be empty, email format

Test Cases: tomm.com, tommy@.com, tom@gmail, tom, t@gmail.com

4. date_of_birth: Uses calender drop down selector, returns yyyy-mm-dd in string. (To test error message, leave this empty when filling the rest of the form.)

5. password: Cannot be empty. Passwords can have a lower case letter, upper case letter, and a number. Also, the password must be 8 characters in length minimum.

Test Cases: 123asd, Aa23

6. confirm_password: Cannot be empty and must match the password field.

7. Submit Button - Success: Form inputs must be filled and validated accordingly. If so, the success title and description will be shown in the alert.

8. Submit Button - Error: Form inputs cannot be empty. If so, the error message will be shown in the alert. To test, leave date_of_birth empty when pressing submit.
