yarTask: Create the React Native Application runnable on ios, adapted to mobile screen.

Application scans and stores the Copyright information from the predefined list of websites. The Copyright information
is usually located in the Footer of the website, consisting of © sign. We expect the text, that attached to © sign, to
be a result of Copyright information grab. For nike.com this is “© 2023 Nike, Inc. All Rights Reserved“

Screen is separated into 3 parts/blocks:

- List of Sites as links
- WebView with selected Site
- Result of the scan for the selected Site

Todo:

1. Provide the authentication screen that requests the user email, sends it to the server (mock), presents it on the
   main screen. Like: hello, some.email@gmail.com;
2. Redirect after “auth” user to the main screen with the list of the shops;
3. Fetch the list of the predefined websites' URLs
   from https://6389df1b4eccb986e89cf319.mockapi.io/external-verification/websites
4. Extend the information received from API with the html selectors, required to access Copyright information to grab
5. Render the list of the Sites in Block #1
6. Handle the Tap on the Site link to open it in WebView (#2)
7. Once the Site is loaded, trigger the page scan for the specified selector
8. Grab the Copyright information
9. Store the Copyright information as pure text in the Application storage
10. Display the grabbed Copyright information in the Block #3 as text
11. Bonus point: together with the text content grad the image of the Copyright information block.

- The code in the private repo is expected as a result, together with the functioning application available with the
  development environment on iPhone.
- Estimation of the expected work is 4 hrs.
- No deadline
- Please send the message as reply to the task invitation once you started the work on the home assignment.
