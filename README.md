## FLAVORCAMP

### Live Website Link:- https://flavorcamp.web.app/

1) The website includes a navbar and footer on all pages, except the 404 page.
2) The website's navbar includes the following elements:

    Website name, Home, Instructors, Classes, Dashboard
    User profile picture (conditionally shown based on user authentication)
    Login button (shown if the user is not authenticated)

3) The homepage consists of the following sections:
Top Slider Section,
Popular Classes Section--featuring the top 6 classes based on the number of students.
Popular Instructors Section: Displays relevant pictures related to instructors 
Extra Section: Why Choose FLAVORCAMP.

4) The instructors page displays all the instructors with their information:
Image, Name, Email

5) The classes page shows all approved classes with the following details:

Image, Name, Instructor name, Available seats, Price
Select Button (disabled if logged in as admin/instructor)

6) The student dashboard is accessible only to students and includes the following sections:

My Selected Classes: Displays all classes booked by the student, providing relevant information, delete option, and pay button.
My Enrolled Classes: Shows all classes the student has successfully booked after payment.

7) When a student clicks the pay button for a class in the "My Selected Classes" section, they will be redirected to the payment page to finalize their payment. After successful payment. The class information will be displayed on the "My Enrolled Classes" page and removed from the "My Selected Classes" page.

Payment History Page: Shows the payment history for students, sorted in descending order.

8) The instructor dashboard is accessible only to instructors and includes the following sections:

Add a Class: A form to add a new class with fields for class name, image, instructor name (read-only), instructor email (read-only), available seats, price, and add button.
My Classes: Displays all classes added by the instructor, including pending/approved/denied status, total enrolled students, feedback, and update button.

9) The admin dashboard is accessible only to admins and includes the following sections:

Manage Classes: Shows all classes added by instructors, including class image, name, instructor name, instructor email, available seats, price, status (pending/approved/denied), and buttons to approve, deny, and send feedback.
Manage Users: Provides relevant information about all registered users. Includes buttons to make a user an instructor or admin.

10)  Used animations Framer Motion animation when hovering cards image.


### Tools used:

React.js,
Firebase Authentication,
MongoDB,
React Router DOM,
Node.js,
Express.js