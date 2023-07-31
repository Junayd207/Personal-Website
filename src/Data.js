import inventoryAppImg from "./Images/inventory-app.jpg"
import businessAppImg from "./Images/business-app.jpg"
import financeAppImg from "./Images/finance-app.jpg"
import socialAppImg from "./Images/social-media-app.jpg"
import eCommerceImg from "./Images/e-commerce.jpg"
import quizImg from "./Images/quiz.jpg"
import memeGeneratorImg from "./Images/meme-generator.jpg"
import magic8BallImg from "./Images/magic-8-ball.jpg"

const data = [
    {
        id:0,
        src: inventoryAppImg,
        url: "https://junayd208.bsite.net/",
        title: "Inventory Management Application",
        description: "ASP.Net application that lets businesses track and manage product inventory and create their own categories " +
                    "to seperate products. The app uses an SQL databse to store the different categories and products " +
                    "and then calculates relevent financial statistics on inventory products. " 
    },
    {
        id:1,
        src: businessAppImg,
        url: "https://junayd207.bsite.net/",
        title: "Business Finance Application",
        description: "ASP.Net application that lets businesses track and manage inflows and expenses and create their own categories " +
                    "to seperate transactions. The app uses an SQL databse to store the different categories and transactions " +
                    "and implements data visualisation to see the past weeks finanace in/outgoings and see where money is being " +
                    "spent in a pie chart. " 
    },
    {
        id:2,
        src: financeAppImg,
        url: "https://finance-app-jun207.netlify.app/",
        title: "Personal Finance Application",
        description: "React application that lets you monitor and track your spending into categories, view analytics based " +
                    "on your transactions and make investment related decisions. Filter and view historical transactions " +
                    "in detail and using a machine learning algorithm, creates a forecast on your investment portfolios " +
                    "potential future returns. Can view live prices of investment assets and past price action from API data. " +
                    "Has multi-currency support and user authentication to save user data in database and keep it secure." 
    },
    {
        id:3,
        src: socialAppImg,
        url: "https://social-media-app-jun207.netlify.app/",
        title: "Social Media Application",
        description: "Social media app that allows you to make posts online for other users to see where they can " +
                    "like and comment to interact. Users can edit their profile by changing their avatar and delete " + 
                    "posts and comments at a later date if wanted. You can view the profiles of other users as well " +
                    "and view all the posts they have made on the app."
    },
    {
        id:4,
        src: eCommerceImg,
        url: "https://ecommerce-jun207.netlify.app/",
        title: "E-Commerce Website",
        description: "Car rental dealership website that lets users filter through an array of cars and add/remove  " +
                    "them from their basket. Users can view their potential purchase in the checkout. State data is " +
                    "maintained using React Context API when changing pages."
    },
    {
        id:5,
        src: quizImg,
        url: "https://quizmaster-jun207.netlify.app/",
        title: "QuizMaster",
        description: "Allows the user to customise their quiz via difficulty, category and number of questions then " +
                    "randomly generates questions from an API based on the criteria. Gives the user a score and highlights " +
                    "the questions they got right and wrong."
    },
    {
        id:6,
        src: memeGeneratorImg,
        url: "https://meme-generator-jun207.netlify.app/",
        title: "Meme Generator",
        description: "Randomly generates and refreshes meme template images from an online meme API. Allows the " +
                    "user to customise the header and footer text to create their own memes and has download functionality."
    },
    {
        id:7,
        src: magic8BallImg,
        url: "https://magic-8-ball-jun207.netlify.app/",
        title: "Magic 8 Ball",
        description: "Randomly generates a response to a question from a predefined set of answers." 
    },
]

export default data;