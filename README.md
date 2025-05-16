# REMWaste

I begin by creating a React project with Typescript using Vite

First step, i'm implementing the backend in order to get the data from the API
After the data is fetched it will be displayed on the SelectSkipPage
(The API url is saved in a different file in order to avoid make it public and it will not be uploaded to Github)
Next step is to design the Select Skip Page, display the skip card with the data from the API and display the current status from the checkout(an idea that can be made is that when you click on the status to be redirected to that page, for example i press on the postcode status to be redirected to that page and so on), i tried to choose a simple and elegant design with an almost white background and a simple format of 4 skip cards per row, when a card is selected it will added to the basket, the selected card will be displayed with a blue board and the button text it will display "Selected", for more information about the price you can hover over the price or the information gray circle. If an item is in a basket it will be displayed at the bottom bar of the screen, if everything looks good you can press "Continue" button to go to the next stage(this functions need to be implemented), if not you can press "Delete" button to empty the basket.
(To be implemented, to store the data in cache in case of a crash or losing internet connection)