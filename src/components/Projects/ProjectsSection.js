import React from "react";
import { Container } from "react-bootstrap";
import "../../Projects.css";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";

import coincompanionDashboard from "../../Assets/Projects/coincompanion/dashboard.jpeg";
import coincompanionExpenseEdit from "../../Assets/Projects/coincompanion/expenseEdit.jpeg";
import coincompanionGroupDashboard from "../../Assets/Projects/coincompanion/groupDashboard.jpeg";
import coincompanionGroupsPage from "../../Assets/Projects/coincompanion/groupsPage.jpeg";
import coincompanionHomepage from "../../Assets/Projects/coincompanion/homepage.jpeg";
import coincompanionModelDiagram from "../../Assets/Projects/coincompanion/modelDiagram.jpeg";
import coincompanionSettings from "../../Assets/Projects/coincompanion/settings.jpeg";

import travelhelperCompare from "../../Assets/Projects/travelhelper/travel-helper-compare-price-red-circle.jpg";

import proshopAdminProductControl from "../../Assets/Projects/proshop/adminProductControl.png";
import proshopAdminProductEdit from "../../Assets/Projects/proshop/adminProductEdit.png";
import proshopCartpage from "../../Assets/Projects/proshop/cartpage.png";
import proshopHomepage from "../../Assets/Projects/proshop/homepage.png";
import proshopOrderSummary from "../../Assets/Projects/proshop/ordersummary.png";
import proshopProductPage from "../../Assets/Projects/proshop/productPage.png";

const projectData = [
    {
        name: "Coin Companion",
        images: [
            { image: coincompanionHomepage, description: "Login/Registration" },
            { image: coincompanionDashboard, description: "Dashboard" },
            { image: coincompanionGroupsPage, description: "Groups List" },
            {
                image: coincompanionGroupDashboard,
                description: "Group Expenses",
            },
            { image: coincompanionExpenseEdit, description: "Expense Update" },
            { image: coincompanionSettings, description: "Settings" },
            { image: coincompanionModelDiagram, description: "Models Diagram" },
        ],
        projectDescription: `
        This app is similar to Splitwise. Users can create groups for their different trips. 
        Other users are added to the group with a code or an invitation is sent to other users. 
        Once part of a groups, users can add expenses such as car rental, hotel cost, food cost, 
        etc. When the trip is all said and done, users can pay whoever they owe. The app will try 
        to minimize the amount of people the user will have to pay in order to reduce hassles between 
        sending money to each other.
        <br /><br />
        One issue with splitwise, which many users, even myself, have encountered is that if a trip 
        is already in progress wherein expenses already exist, if a new user is added, the cost per 
        user will not be recalculated. This becomes rather annoying as trips can have tens or even
        hundreds of expenses. Do you really expect users to manually update each expense? This app 
        tries to solve that issue`,
        techStack: `
        <b>Frontend:</b> Javascript, React, Redux, CSS, Bootstrap <br />
        <br />
        <b>Backend:</b> Python, Django, PostgreSQL, AWS
        `,
        problems: `
        1. <b>Lack of Functionality:</b> This app addresses a common issue with Splitwise, aiming to streamline the user experience. 
        The problem lies in the process of adding a user to an existing trip with expenses. Currently, 
        when a user is added to such a trip, they aren't automatically included in the existing expenses. 
        This can prove highly inconvenient, especially in cases where trips involve a multitude of expenses. 
        The manual task of adding oneself to each expense is not only time-consuming but also tiring. <br />
        <br />
        2. <b>Algorithm Choice:</b> Now, let's address the core functionality of Splitwise. At the heart of Splitwise's magic is its ability to 
        calculate the least number of transfers required between users when they decide to settle up their shared expenses. 
        This involves the use of a specialized algorithm known as the Simplify Debt Algorithm. However, it's worth noting that
        Splitwise's version of this algorithm is more advanced. One of its key features is ensuring that users only need to pay 
        an amount equal to what they've borrowed, without having to pay more users than they've borrowed from. While this 
        approach offers a more precise settlement, it's also more resource-intensive. This project, although not operating 
        at the same scale as Splitwise, faces the challenge of deciding whether to implement the Simplify Debt Algorithm 
        or explore the complexities of Splitwise's version.
        `,
        myApproach: `
        1. <b>Improving Splitwise Functionality:</b> This feature addresses a common issue with Splitwise. 
        When users join a group, they are offered the option to automatically join all existing expenses. By accepting 
        this prompt, users are added to evenly split expenses, ensuring a fair distribution among all group members. 
        Manually entered expenses only involve those already in the group. <br />
        <br />
        2. <b>Algorithm Choice:</b> In handling large datasets and increasing expenses, this app faces 
        limitations in processing power compared to larger apps like Splitwise. To optimize performance, we opted for 
        the original Simplify Debt Algorithm. This decision was based on efficiency considerations, as Splitwise's improved 
        algorithm exhibits exponential time complexity, making it less practical for our purposes compared to the original 
        algorithm with a more manageable O(n log n) time complexity.
        `,
        furtherImprovement: `
        <b>Enhancing Algorithm Accuracy:</b> In some scenarios, the Simplify Debt Algorithm exhibits unexpected behavior, 
        such as a user paying one person but inadvertently settling debts with two others due to sorting intricacies. 
        A potential enhancement involves modifying the algorithm to prevent such situations, aligning it more closely
         with the advanced Splitwise version.<br />
        <br />
        <b>Streamlined User Experience:</b> To improve user convenience, the addition of Google login and registration 
        functionality can be considered.<br />
        <br />
        <b>Payment Integration:</b> Another enhancement involves integrating payment gateways like Venmo or PayPal, 
        replacing the current system of manually recording third-party payments. This simplifies the process and 
        enhances user experience.
        `,
    },
    {
        name: "Travel Helper Extension",
        images: [
            { image: travelhelperCompare, description: "" },
            // { image: editor, description: "there" },
        ],
        projectDescription: `
        Google Flights is easy to use and convenient since users can easily search for flights rather than entering a 
        different domain then once again search for flights. It eliminates that annoying one step. However, Google 
        Flights often fails in providing the best price. Many of times, it failed to find connecting flights which would 
        make last minute trips cheaper. Similarly, it would find the exact same flight as other sites, but label them 
        at a higher price, somewhere around 5% to 15%.<br />
        <br />
        Travel Helper looks to take advantage of the easiness of Google Flights and the ability of the more powerful 
        sites such as skyscanner and kayak in order to provide users with the lowest price possible for their next 
        destination.
        `,
        techStack: "Javascript, HTML, CSS",
        problems: `
        1. <b>Understanding Website Structure and Data Management:</b> In my journey, I encountered challenges related to 
        the management of data. I discovered that data could exist under various circumstances. For instance, some 
        data would be present when a new page was loaded, while other data depended on specific user interactions 
        or the presence of certain elements. Interestingly, certain data remained in place even as the visual aspects 
        of the page changed.<br />
        <br />
        2. <b>Navigating Data Usage:</b> Another challenge I faced was determining the most effective method to utilize 
        the gathered data. I pondered whether there were APIs available to streamline the process of inputting the 
        data and redirecting users to the desired page. Alternatively, I questioned if I would need to navigate the 
        site manually, inputting data much like a web scraping bot.
        `,
        myApproach: `
        1. <b>Efficient Data Gathering Approach:</b> During my exploration, I encountered situations where data was 
        unexpectedly located or persisted without direct visibility. To address these challenges, I opted for a web 
        scraping approach while maintaining a general scope. This approach allowed me to gather information without 
        delving too deeply into specific variables, ensuring adaptability in case variables changed or data persisted 
        unexpectedly.<br />
        <br />
        2. <b>Considerations for User Experience:</b> While contemplating my strategy, I recognized that implementing a 
        bot was not the optimal choice due to the extensive time it would consume. Users typically prefer swift results, 
        and a bot's gradual process might lead to frustration. Additionally, the idea of utilizing APIs seemed promising. 
        However, I found that APIs provided search results but lacked the crucial URL information. To expedite user access 
        to their desired destinations, I devised an approach centered on identifying URL patterns and populating them 
        with data extracted from Google Flights. This method offered a rapid means of generating URLs and seamlessly 
        redirecting users to their requested pages.
        `,
        furtherImprovement: `
        <b>Enhancing Flight Search Experience:</b>
        One of the primary goals of this application was to simplify my own flight search process. Consequently, 
        the chosen websites for user redirection were tailored to my personal preferences, aligning with platforms 
        I commonly used for flight searches. An enhancement worth considering involves expanding the selection of 
        supported websites to accommodate a broader user base, catering to various individuals and their preferred 
        flight search platforms.<br />
        <br />
        <b>Clarifying App Functionality:</b>
        While the app bears the name "Travel Helper," its core functionality predominantly revolves around assisting 
        users in finding the best flight prices. To further augment its utility, an area for potential improvement lies 
        in extending its capabilities to encompass functions related to car rentals and hotel reservations. This 
        expansion would align the application more comprehensively with travel planning needs.
        `,
    },
    {
        name: "ProShop Ecommerce",
        images: [
            { image: proshopHomepage, description: "Home" },
            { image: proshopProductPage, description: "Product" },
            { image: proshopCartpage, description: "Cart" },
            { image: proshopOrderSummary, description: "Order Summary" },
            {
                image: proshopAdminProductControl,
                description: "Admin Product Control",
            },
            {
                image: proshopAdminProductEdit,
                description: "Admin Produc Update",
            },
        ],
        projectDescription: `
        <b>E-commerce Platform Overview:</b>
        This e-commerce website offers a user-friendly experience that begins with account management. Users 
        have the option to both login and register for an account. To streamline access, the website employs 
        persistent login functionality, eliminating the need for users to worry about session interruptions upon 
        page closure.<br />
        <br />
        <b>Personalized Shopping Cart:</b>
        Each user enjoys the convenience of a personalized shopping cart. Within this cart, users can effortlessly 
        add and remove items, curating their selection with ease.<br />
        <br />
        <b>Seamless Order Placement and Payment:</b>
        When users are satisfied with their cart's contents, they can proceed to place an order. Payment options 
        include the convenience of PayPal integration, providing a secure and familiar payment method.<br />
        <br />
        <b>Admin Privileges:</b>
        Administrative users wield additional capabilities, empowering them to manage the store efficiently. Admins 
        can perform actions such as adding, updating, or removing products from the catalog. Furthermore, they have 
        the ability to address user concerns by monitoring and adjusting order statuses, ensuring timely fulfillment 
        and addressing any issues that may arise during the process.<br />
        <br />
        `,
        techStack: `
        <b>Frontend:</b> Javascript, React, Redux, CSS, Bootstrap <br />
        <br />
        <b>Backend:</b> Python, Django, PostgreSQL, AWS
        `,
        problems: `
        <b>Project's Primary Challenge:</b>
        The primary challenge encountered during this project revolved around gaining a comprehensive understanding 
        of Django's syntax and methodologies. This encompassed delving into Django APIs and mastering the intricacies 
        of configuring settings. Notably, this extended beyond Django itself to encompass the configuration of cloud-based
        storage solutions like AWS RDS and AWS S3.
        `,
        myApproach: `
        <b>Strategic Approach:</b>
        My strategic approach involved a methodical and measured pace. I dedicated time to acquiring proficiency in 
        implementing JWT authentication within the Django framework. Additionally, I sought to grasp the intricacies 
        of integrating PayPal payments. It's worth noting that the PayPal integration is configured with sandbox accounts, 
        ensuring a secure environment to avoid any inadvertent transactions involving real money. Furthermore, I undertook 
        the task of configuring the settings to seamlessly connect with AWS, facilitating the storage of static files 
        and data in the cloud infrastructure.
        `,
        furtherImprovement: `
        <b>Streamlined User Access:</b> Consider the integration of Google login and registration to enhance the user 
        experience.<br />
        <br />
        <b>Visual Data Insights:</b> Improve the admin's ability to visualize and analyze data related to previous 
        and current orders. Incorporating graphs and charts into the admin dashboard can enhance the user interface 
        and facilitate data-driven decision-making.
        `,
    },
];

function ProjectsSection() {
    return (
        <Container fluid className="project-section" id="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                {projectData.map((project, index) => (
                    <ProjectCard key={index} projectData={project} />
                ))}
            </Container>
        </Container>
    );
}

export default ProjectsSection;
