
1. First page "/question-with-one-answer" has a form with a submit button and two inputs inside:

Textarea with label "Give me a question" (mandatory field)
Dropdown with label "Set the only answer". Possible selection: Yes, No (default yes)
Form must be submitted with GET method to "/the-question" URL
2. When the form is filled and submitted

Take the GET parameters and generate a page where the question is written out in a heading tag
Below the heading there are the answers on two buttons (Yes, No). If the button is pressed which the user selected on the form previously then a popup should come up with message "I knew you selected this :)" otherwise when the user tries to press the other button then the button should jump away from the mouse cursor.
