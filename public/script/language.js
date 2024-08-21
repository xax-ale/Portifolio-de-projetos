// Traduções para os idiomas
const translations = {
    'en': {
        'texto-1': "<p class='fs-4 fw-light mx-3 pt-3 mt-5 texto texto-1' data-key='title'>Hello! Great to see you here <span style='display: inline-block; animation: pulseendrotate 2.2s infinite;' class=''>🫡</span></p>"
        'texto-2': "<h1 class='display-1 texto texto-2' style='letter-spacing:4px' data-key='title'>My name is Alê</h1>"
        'texto-3': "<span class='fs-4 fw-light mt-4 texto texto-3' data-key='title'>Data Analyst and Developer</span>"
        'texto-4': "<button class='nav-link texto texto-4 text-dark shadow p-3 mb-5 bg-body-tertiary rounded bg-dark-subtle' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4'>Spreadsheets</button>"
        'texto-5': "<button class='nav-link texto texto-5 text-dark shadow p-3 mb-5 bg-body-tertiary rounded bg-dark-subtle' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2'>Dashboards</button>"
        'texto-6': "<button class='nav-link texto texto-6 text-dark shadow p-3 mb-5 bg-body-tertiary rounded bg-light-subtle' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true'>Everything</button>"
        'texto-7': "<button class='nav-link texto texto-7 text-dark shadow p-3 mb-5 bg-body-tertiary rounded bg-dark-subtle' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1'>Web</button>"
        'texto-8': "<button class='nav-link texto texto-8 text-dark shadow p-3 mb-5 bg-body-tertiary rounded bg-dark-subtle' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3'>About</button>"
        'texto-9': "<h5 class='card-title pt-2 pb-1 texto texto-9'>Management Spreadsheet</h5>"
        'texto-10': "<p class='card-text texto texto-10'>I developed an advanced management solution, consisting of 39 spreadsheets in Google Sheets, which integrates advanced functions, data validation, and automatic calculations between multiple spreadsheets...</p>"
        'texto-11': "<a class='btn btn-secondary texto texto-11' data-bs-toggle='collapse' href='#LerMais1' role='button' aria-expanded='false' aria-controls='collapseExample'>Read more</a>"
        'texto-12': "<p class='card-text'><small class='text-body-secondary texto texto-12'>Project with Google Sheets</small></p>"
        'texto-13': "<p class='fs-5 texto texto-13'><small>This structure allows for instant communication between HR and accounting departments, optimized to calculate the company's profits and expenses accurately.</small></p>"
        'texto-14': "<h3 class='mt-4 texto texto-14'>Features:</h3>"
        'texto-15': "<li class='mb-2 fs-5 texto texto-15'><small><strong>Complete Integration:</strong> The spreadsheet connects various functions and departments, ensuring that updates in one area are automatically reflected in others, facilitating the management of products, employees, vacancies, and inventory.</small></li>"
        'texto-16': "<li class='mb-2 fs-5 texto texto-16'><small><strong>High Efficiency:</strong> With a large volume of interconnected data, the system is designed to keep maintenance and value updates quick and accurate, minimizing the risk of errors.</small></li>"
        'texto-17': "<li class='mb-2 fs-5 texto texto-17'><small><strong>Customization and Adaptation:</strong> The system is flexible and can be adapted to meet the specific needs of any company, regardless of the volume or complexity of operations.</small></li>"
        'texto-18': "<li class='mb-2 fs-5 texto texto-18'><small><strong>Security and Accuracy:</strong> Integrated data validation prevents manual errors and ensures information integrity, providing a secure and reliable solution for business management.</small></li>"
        'texto-19': "<p class='fs-5 texto texto-19'><small>This system is ideal for companies looking to optimize processes, improve communication between departments, and ensure data accuracy, regardless of the size or type of business. It can also be easily transformed into a management dashboard.</small></p>"
        'texto-20': "<button class='accordion-button collapsed z-0 texto texto-20' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapse1' aria-expanded='false' aria-controls='flush-collapse1'>Spreadsheet Links</button>"
        'texto-21': "<a type='button' target='_blank' href='https://docs.google.com/spreadsheets/d/1aRsowVQmSFe2ebGrABYlhIiG-H1i2_xOXuiiXjRk52Y/edit?usp=sharing' class='btn btn-secondary texto texto-21'>HR</a>"
        'texto-22': "<a type='button' target='_blank' href='https://docs.google.com/spreadsheets/d/14U3iUIuOk2YBqT_EDxzTiQLS8BUeCcR7qu-pdBcJLog/edit?usp=sharing' class='btn btn-secondary texto texto-22'>Accounting</a>"
        'texto-23': "<button class='accordion-button collapsed z-0 texto texto-23' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapse2' aria-expanded='false' aria-controls='flush-collapse2'>Example Spreadsheet Image</button>"
        'texto-24': "<a class='btn btn-secondary w-100 mt-5 texto texto-24' data-bs-toggle='collapse' href='#LerMais1' role='button' aria-expanded='false' aria-controls='collapseExample'>Collapse</a>"
        'texto-25': "<h5 class='card-title pt-2 pb-1 texto texto-25'>Text to Spreadsheet Converter</h5>"
        'texto-26': "<p class='card-text texto texto-26'>I developed a JavaScript code that facilitates the transformation of copied texts, pasted data, or CSV files into automatically formatted spreadsheets...</p>"
        'texto-27': "<a class='btn btn-secondary texto texto-27' data-bs-toggle='collapse' href='#LerMais2' role='button' aria-expanded='false' aria-controls='collapseExample'>Read more</a>"
        'texto-28': "<p class='card-text'><small class='text-body-secondary texto texto-28'>Project using Google App Script</small></p>"
        'texto-29': "<p class='fs-5 texto texto-29'><small>This project is ideal for anyone who needs to convert textual data into spreadsheets quickly and easily.</small></p>"
        'texto-30': "<h3 class='mt-4 texto texto-30'>Project Features:</h3>"
        'texto-31': "<li class='mb-2 fs-5 texto texto-31'><small><strong>Automatic Conversion:</strong> The code converts copied texts, pasted data, or CSV files into an automatically organized spreadsheet.</small></li>"
        'texto-32': "<li class='mb-2 fs-5 texto texto-32'><small><strong>Instant Formatting:</strong> The system automatically adjusts font size and colors to improve readability.</small></li>"
        'texto-33': "<li class='mb-2 fs-5 texto texto-33'><small><strong>Flexible Input:</strong> Accepts different types of input, whether it's simple comma-separated text or CSV files.</small></li>"
        'texto-34': "<li class='mb-2 fs-5 texto texto-34'><small><strong>Ease of Use:</strong> The process is simple and eliminates the need for manual formatting, saving time.</small></li>"
        'texto-35': "<p class='fs-5 texto texto-35'><small>This project is a practical solution for transforming textual data into formatted spreadsheets quickly and accurately.</small></p>
        'texto-36': "<button class='accordion-button collapsed z-0 texto texto-36' type='button' data-bs-toggle='collapse' data-bs-target='#flush-3' aria-expanded='false' aria-controls='flush-3'>GitHub Link</button>"
        'texto-37': "<a type='button' target='_blank' href='https://github.com/xax-ale/Planilha-copia-e-cola' class='btn btn-secondary texto texto-37'>Project Link</a>"
        'texto-38': "<a class='btn btn-secondary w-100 mt-5 texto texto-38' data-bs-toggle='collapse' href='#LerMais2' role='button' aria-expanded='false' aria-controls='collapseExample'>Collapse</a>"
        'texto-39': "<h5 class='card-title pt-2 pb-1 texto texto-39'>Dashboard with DAX</h5>",
        'texto-40': "<a class='btn btn-secondary  texto texto-40' data-bs-toggle='collapse' href='#LerMais4' role='button' aria-expanded='false' aria-controls='collapseExample'>Read more</a>",
        'texto-41': "<p class='card-text  texto texto-41'><small class='text-body-secondary'>Project with Power BI, Power Query, and DAX</small></p>",
        'texto-42': "<p class='fs-5 texto texto-42'><small>This system centralizes all data into a single spreadsheet, eliminating the need for manual edits, and automatically handles all parameters and relationships.</small></p>",
        'texto-43': "<h3 class='mt-4 texto texto-43'>Features:</h3>",
        'texto-44': "<li class='mb-2 fs-5 texto texto-44'><small><strong>Automatic Data Validation:</strong> Using DAX, the dashboard automatically validates data, ensuring the integrity and accuracy of information.</small></li>",
        'texto-45': "<li class='mb-2 fs-5 texto texto-45'><small><strong>Spreadsheet Relationships:</strong> The system creates and maintains relationships between various spreadsheets, integrating data cohesively and facilitating analysis.</small></li>",
        'texto-46': "<li class='mb-2 fs-5 texto texto-46'><small><strong>Data Centralization:</strong> All data is centralized in a single spreadsheet, eliminating the need for manual edits and simplifying management.</small></li>",
        'texto-47': "<li class='mb-2 fs-5 texto texto-47'><small><strong>Complete Automation:</strong> Parameters and relationships are automatically set by the dashboard, reducing workload and minimizing errors.</small></li>",
        'texto-48': "<li class='mb-2 fs-5 texto texto-48'><small><strong>Efficiency and Accuracy:</strong> Continuous automation and validation of data ensure that information is always correct and up-to-date.</small></li>",
        'texto-49': "<p class='fs-5 texto texto-49'><small>This dashboard is ideal for companies seeking an efficient and automated solution for data management, providing an integrated and accurate view of information without the need for manual intervention.</small></p>",
        'texto-50': "<button class='accordion-button collapsed z-0 texto texto-50' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapse3' aria-expanded='false' aria-controls='flush-collapse3'>Dashboard Link</button>",
        'texto-51': "<a type='button' target='_blank' href='https://app.powerbi.com/view?r=eyJrIjoiYzA3OWYwMjEtMjJkNy00ZDIxLWI1NTgtZDM2ZjU5MTFjNjdhIiwidCI6ImI3MGQ5OWMzLTY1ODAtNGUxNy1iYWNiLWYxYjU1ODdjZGU4NSJ9' class='btn btn-secondary texto texto-51'>Power BI Link</a>",
        'texto-52': "<button class='accordion-button collapsed z-0 texto texto-52' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseT3' aria-expanded='false' aria-controls='flush-collapseT3'>Dashboard</button>",
        'texto-53': "<a class='btn btn-secondary w-100 mt-5 texto texto-53' data-bs-toggle='collapse' href='#LerMais4' role='button' aria-expanded='false' aria-controls='collapseExample'>Collapse</a>",
        'texto-54': "<h5 class='card-title pt-2 pb-1 texto texto-54'>Management Dashboard</h5>",
        'texto-55': "<p class='card-text texto texto-55'>I developed a comprehensive management dashboard that integrates 39 CSV spreadsheets, transforming this data into interactive charts to efficiently monitor profits and expenses...</p>",
        'texto-56': "<a class='btn btn-secondary texto texto-56' data-bs-toggle='collapse' href='#LerMais5' role='button' aria-expanded='false' aria-controls='collapseExample'>Read more</a>",
        'texto-57': "<p class='card-text'><small class='text-body-secondaryc  texto texto-57'>Project with Power BI and Power Query</small></p>",
        'texto-58': "<p class='fs-5  texto texto-58'><small>Using Power BI and Power Query, this system provides a detailed and dynamic view of the company's finances.</small></p>",
        'texto-59': "<h3 class='mt-4  texto texto-59'>Features:</h3>",
        'texto-60': "<li class='mb-2 fs-5 texto texto-60'><small><strong>Automated Data Transformation:</strong> The data from 39 CSV spreadsheets is automatically transformed and integrated into Power BI, facilitating information analysis and visualization.</small></li>",
        'texto-61': "<li class='mb-2 fs-5 texto texto-61'><small><strong>Interactive Charts:</strong> The dashboard features dynamic charts that allow for detailed and intuitive analysis of profits and expenses, aiding in strategic decision-making.</small></li>",
        'texto-62': "<li class='mb-2 fs-5 texto texto-62'><small><strong>Integration with Power Query:</strong> Utilizing Power Query, the system processes and cleans the data, ensuring that the information presented is accurate and up-to-date.</small></li>",
        'texto-63': "<li class='mb-2 fs-5 texto texto-63'><small><strong>Global and Detailed View:</strong> Provides both a general and detailed view of the company's finances, allowing you to track trends and identify areas for improvement.</small></li>",
        'texto-64': "<li class='mb-2 fs-5 texto texto-64'><small><strong>Adaptability:</strong> The system is flexible and can be adapted to meet the specific needs of any company, regardless of the volume or complexity of operations.</small></li>",
        'texto-65': "<p class='fs-5 texto texto-65'><small>This dashboard is ideal for companies seeking to optimize financial management, improve inter-departmental communication, and ensure data accuracy, providing a powerful and efficient solution for profit and expense analysis.</small></p>",
        'texto-66': "<button class='accordion-button collapsed z-0 texto texto-66' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapse4' aria-expanded='false' aria-controls='flush-collapse4'>Dashboard Link</button>",
        'texto-67': "<a type='button' target='_blank' href='https://app.powerbi.com/view?r=eyJrIjoiMDdlYWUwNTgtMGM1OC00NjAwLWIzMDMtNzVmZmFlOWJhNzI4IiwidCI6ImI3MGQ5OWMzLTY1ODAtNGUxNy1iYWNiLWYxYjU1ODdjZGU4NSJ9' class='btn btn-secondary texto texto-67'>Power BI Link</a>",
        'texto-68': "<button class='accordion-button collapsed z-0 texto texto-68' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseT4' aria-expanded='false' aria-controls='flush-collapseT4'>Dashboard</button>",
        'texto-69': "<a class='btn btn-secondary w-100 mt-5  texto texto-69' data-bs-toggle='collapse' href='#LerMais5' role='button' aria-expanded='false' aria-controls='collapseExample'>Collapse</a>",
        'texto-70': "<h5 class='card-title pt-2 pb-1 texto texto-70'>Dashboard with Python, Pandas, and Streamlit</h5>",
        'texto-71': "<p class='card-text texto texto-71'>I developed an advanced management dashboard using Python, Pandas, and Streamlit, which centralizes and processes data automatically, offering a dynamic and interactive visualization...</p>",
        'texto-72': "<a class='btn btn-secondary texto texto-72' data-bs-toggle='collapse' href='#LerMais6' role='button' aria-expanded='false' aria-controls='collapseExample'>Read more</a>",
        'texto-73': "<p class='card-text'><small class='text-body-secondary texto texto-73'>Project with Python, Pandas, and Streamlit</small></p>",
        'texto-74': "<h3 class='mt-4 texto texto-74'>Management Dashboard: Traditional vs. Python</h3>",
        'texto-75': "<p class='fs-5 texto texto-75'><small>Traditionally, creating dashboards involves time-consuming manual processes, from data import to chart and report generation. This can require specific skills in various tools and considerable setup and maintenance time. On the other hand, a dashboard built with Python, using libraries like Pandas and Streamlit, can be developed quickly and efficiently, automating much of the work and offering unmatched flexibility and customization.</small></p>",
        'texto-76': "<h3 class='mt-4 texto texto-76'>Features:</h3>",
        'texto-77': "<li class='mb-2 fs-5 texto texto-77'><small><strong>Data Processing with Pandas:</strong> Using Pandas, data is processed and manipulated efficiently, allowing for comprehensive analysis and insights.</small></li>",
        'texto-78': "<li class='mb-2 fs-5 texto texto-78'><small><strong>Interactive Visualization with Streamlit:</strong> Streamlit allows for the creation of interactive dashboards with a user-friendly interface, making data exploration and analysis intuitive.</small></li>",
        'texto-79': "<li class='mb-2 fs-5 texto texto-79'><small><strong>Automation:</strong> The system automates many tasks, reducing manual work and ensuring that data is always current and accurate.</small></li>",
        'texto-80': "<li class='mb-2 fs-5 texto texto-80'><small><strong>Customizable Layout:</strong> Streamlit provides flexibility in designing dashboards, allowing for customized visualizations that fit specific needs.</small></li>",
        'texto-81': "<li class='mb-2 fs-5 texto texto-81'><small><strong>Efficient and Scalable:</strong> The use of Python ensures that the system is efficient and scalable, capable of handling large volumes of data and complex analyses.</small></li>",
        'texto-82': "<p class='fs-5 texto texto-82'><small>This dashboard is ideal for those looking for a powerful, customizable, and automated solution for data management and visualization, providing a modern and efficient approach to traditional methods.</small></p>",
        'texto-83': "<button class='accordion-button collapsed z-0 texto texto-83' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapse5' aria-expanded='false' aria-controls='flush-collapse5'>Dashboard Link</button>",
        'texto-84': "<a type='button' target='_blank' href='https://share.streamlit.io/xax-ale/dashboard-python-pandas-streamlit' class='btn btn-secondary texto texto-84'>Streamlit Link</a>",
        'texto-85': "<button class='accordion-button collapsed z-0 texto texto-85' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseT5' aria-expanded='false' aria-controls='flush-collapseT5'>Dashboard</button>",
        'texto-86': "<a class='btn btn-secondary w-100 mt-5 texto texto-86' data-bs-toggle='collapse' href='#LerMais6' role='button' aria-expanded='false' aria-controls='collapseExample'>Collapse</a>"
        'texto-87': "<h3 class='mt-2 mb-3 texto texto-87'>Welcome to my project portfolio</h3>",
        'texto-88': "<p class='fs-5 texto texto-88'><small>I am excited to share with you the projects I have developed over time. This portfolio is a collection of my work, where each project is an expression of my enthusiasm for technology and innovation.</small></p>",
        'texto-89': "<p class='fs-5 texto texto-89'><small>Here, you will find everything from complex management and automation solutions to interactive dashboards that facilitate data visualization and analysis. Each project was designed to solve real problems, bringing efficiency and practicality to various areas.</small></p>",
        'texto-90': "<p class='fs-5 mb-5 texto texto-90'><small>I believe the best way to understand my skills and work style is by exploring the projects I have prepared. I hope they not only demonstrate my capabilities but also inspire new ideas and collaborations.</small></p>"      
        'texto-91': "<h5 class='card-title pt-2 pb-1 texto texto-91'>Spreadsheet and Management Dashboard</h5>",
        'texto-92': "<p class='card-text texto texto-92'>In this project, I developed a comprehensive management solution for a company with three branches and a head office ...</p>",
        'texto-93': "<p class='d-inline-flex gap-1 texto texto-93'><a class='btn btn-secondary texto texto-94' data-bs-toggle='collapse' href='#LerMais8' role='button' aria-expanded='false' aria-controls='collapseExample'>Read more</a></p>",
        'texto-95': "<p class='card-text'><small class='text-body-secondary texto texto-95'>Project with Google AppScript, Google Sheets, Power BI, and Power Query</small></p>",
        'texto-96': "<p class='fs-5 texto texto-96'><small>Using App Script, I created 39 interconnected spreadsheets that facilitate communication and data integration across different areas of the company.</small></p>",
        'texto-97': "<h3 class='mt-4 texto texto-97'>How it was done:</h3>",
        'texto-98': "<li class='mb-2 fs-5 texto texto-98'><small><strong>Creation of Spreadsheets with App Script:</strong> I developed 39 spreadsheets in Google Sheets, each focused on different aspects of management, including products, employees, open positions, and inventory. The spreadsheets are interconnected, allowing data to communicate with each other automatically.</small></li>",
        'texto-99': "<li class='mb-2 fs-5 texto texto-99'><small><strong>Implementation of Relationships and Functions:</strong> I used advanced functions and data validation to ensure consistency and accurate data exchange between spreadsheets. This involves automatic calculations and real-time updates between the head office and branches.</small></li>",
        'texto-100': "<li class='mb-2 fs-5 texto texto-100'><small><strong>Data Cleaning and Preparation with Power Query:</strong> After setting up the spreadsheets, I used Power Query to extract and clean the data, focusing only on the necessary information for performance analysis. This process ensured that the data was organized and ready for use in the dashboard.</small></li>",
        'texto-101': "<li class='mb-2 fs-5 texto texto-101'><small><strong>Development of the Dashboard:</strong> I created an interactive dashboard that uses the prepared data to provide clear and dynamic visualizations of the company's profits and expenses. The dashboard is directly fed by the spreadsheets, ensuring that the information is always up to date.</small></li>",
        'texto-102': "<p class='fs-5 texto texto-102'><small>This project demonstrates how the combination of App Script and Power Query can result in a robust and efficient data management solution, facilitating decision-making and performance analysis.</small></p>",
        'texto-103': "<button class='accordion-button collapsed z-0 texto texto-103' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapse7' aria-expanded='false' aria-controls='flush-collapse7'>Dashboard link</button>",
        'texto-104': "<a type='button' target='_blank' href='https://app.powerbi.com/view?r=eyJrIjoiMDdlYWUwNTgtMGM1OC00NjAwLWIzMDMtNzVmZmFlOWJhNzI4IiwidCI6ImI3MGQ5OWMzLTY1ODAtNGUxNy1iYWNiLWYxYjU1ODdjZGU4NSJ9' class='btn btn-secondary texto texto-104'>Power BI Link</a>",
        'texto-105': "<button class='accordion-button collapsed z-0 texto texto-105' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseT7' aria-expanded='false' aria-controls='flush-collapseT7'>Dashboard image</button>",
        'texto-106': "<a class='btn btn-secondary w-100 mt-5 texto texto-106' data-bs-toggle='collapse' href='#LerMais8' role='button' aria-expanded='false' aria-controls='collapseExample'>Collapse</a>"   
        'texto-107': "<h3 class='mt-5 mb-3 texto texto-107'>About Me</h3>",
        'texto-108': "<p class='fs-5 texto texto-108'><small>I am an 18-year-old who is fascinated by technology and determined to become a data scientist. I started my journey with web development, learning HTML, CSS, and JavaScript self-taught. Now, I am focused on data analysis, developing essential skills for the field. I seek opportunities to apply my knowledge in challenging projects, contributing to more informed and efficient decisions, and continuing to evolve professionally.</small></p>",
        'texto-109': "<h3 class='mt-5 mb-3 texto texto-109'>Web</h3>",
        'texto-110': "<h5 class='card-title pt-2 pb-1 texto texto-110'>This Portfolio!</h5>",
        'texto-111': "<p class='card-text texto texto-111'>I developed a sophisticated web portfolio that integrates JavaScript, Bootstrap, and the Astro framework to create a dynamic online experience ...</p>",
        'texto-112': "<p class='d-inline-flex gap-1'><a class='btn btn-secondary texto texto-112' data-bs-toggle='collapse' href='#LerMais10' role='button' aria-expanded='false' aria-controls='collapseExample'>Read more</a></p>",
        'texto-113': "<p class='card-text texto texto-113'><small class='text-body-secondary'>Project with JavaScript, Bootstrap, and Astro</small></p>",
        'texto-114': "<p class='fs-5 texto texto-114'><small>This portfolio is a comprehensive showcase of my skills and projects, designed to offer intuitive navigation and modern design.</small></p>",
        'texto-115': "<h3 class='mt-4 texto texto-115'>Features:</h3>",
        'texto-116': "<li class='mb-2 fs-5 texto texto-116'><small><strong>Dynamic Interactivity with JavaScript:</strong> Using JavaScript, the portfolio offers interactive and customized features, providing an engaging and responsive user experience. From visual effects to interactive functionalities, JavaScript ensures that the portfolio is both attractive and functional.</small></li>",
        'texto-117': "<li class='mb-2 fs-5 texto texto-117'><small><strong>Responsive Design with Bootstrap:</strong> The design of the portfolio is optimized for all devices, using Bootstrap to ensure a flawless presentation on screens of different sizes. Bootstrap's flexibility and compatibility allow for a layout that adapts perfectly to each visitor's needs.</small></li>",
        'texto-118': "<li class='mb-2 fs-5 texto texto-118'><small><strong>Efficient Development with Astro:</strong> The Astro framework provides a solid foundation for the portfolio, allowing for efficient integration of components and performance optimization. With Astro, the portfolio loads quickly and offers a smooth browsing experience.</small></li>",
        'texto-119': "<li class='mb-2 fs-5 texto texto-119'><small><strong>Centralization and Organization of Projects:</strong> All projects and information are centralized in an organized and easy-to-navigate interface. The portfolio presents the works clearly and structured, facilitating the visualization and exploration of my achievements.</small></li>",
        'texto-120': "<li class='mb-2 fs-5 texto texto-120'><small><strong>Automation and Updates:</strong> The portfolio is designed to be easy to update, with integration of tools and processes that minimize the need for manual edits. Automation of updates ensures that the portfolio is always up-to-date with the latest projects and information.</small></li>",
        'texto-121': "<p class='fs-5 texto texto-121'><small>This portfolio is ideal for those who want to view an example of my work and competencies in web development, offering a clear view of my skills.</small></p>",
        'texto-122': "<button class='accordion-button collapsed z-0 texto texto-122' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapse9' aria-expanded='false' aria-controls='flush-collapse9'>Link to the Portfolio on GitHub</button>",
        'texto-123': "<a type='button' target='_blank' href='https://github.com/xax-ale/portifolio-de-projetos' class='btn btn-secondary texto texto-123'>GitHub Link</a>",
        'texto-124': "<button class='accordion-button collapsed z-0 texto texto-124' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseT9' aria-expanded='false' aria-controls='flush-collapseT9'>Portfolio Image</button>",
        'texto-125': "<a class='btn btn-secondary w-100 mt-5 texto texto-125' data-bs-toggle='collapse' href='#LerMais10' role='button' aria-expanded='false' aria-controls='collapseExample'>Collapse</a>",
        'texto-126': "<p class='fs-5 mt-5 texto texto-126'><small>I enjoy self-learning and am always looking for new technologies and methods. Currently, I am focused on developing my skills in data analysis and programming. I have experience with HTML, CSS, JavaScript, and PHP, mastering the basics to use any framework or library, and am delving into data analysis techniques to transform information into valuable insights.</small></p>",
        'texto-127': "<h3 class='mt-5 mb-3 texto texto-127'>About Me</h3>",
        'texto-128': "<p class='fs-5 texto texto-128'><small>I am an 18-year-old, drawn to the world of technology and seeking to become a data scientist. My journey began when a teacher introduced me to development, and since then, I have been exploring this vast field.</small></p>",
        'texto-129': "<p class='fs-5 texto texto-129'><small>I enjoy self-learning and am always on the lookout for new technologies and methods. Currently, I am focused on developing my skills in data analysis and programming. I have experience with HTML, CSS, JavaScript, and PHP, mastering the basics to use any framework or library, and I am delving into data analysis techniques to turn information into valuable insights.</small></p>",
        'texto-130': "<p class='fs-5 mb-5 texto texto-130'><small>My approach is practical and user-oriented, creating interfaces that are not only functional but also pleasant to use. I am looking for opportunities to apply what I have learned in challenging and innovative projects.</small></p>",
        'texto-131': "<p class='fs-5 mb-5 texto texto-131'><small>I believe that with dedication and effort, I can contribute significantly to the field, helping to make more informed and efficient decisions. I am excited to follow this path and see where it will lead me.</small></p>"
        'texto-135': '<a type="button" target="_blank" href="https://github.com/user-attachments/files/16605185/Alexandre.Henrique.CV.en.pdf" class="btn btn-outline-secondary me-3 mb-3 texto texto-135">Resume PDF</a>',
    }
};

// Armazena o HTML padrão original
const originalHTML = {};

// Função para armazenar o HTML original
function storeOriginalHTML() {
    const elements = document.querySelectorAll('.texto');
    elements.forEach(el => {
        const className = el.className.match(/texto-\d+/)[0]; // Extrai a classe para identificação
        originalHTML[className] = el.outerHTML;
    });
}

// Função para aplicar traduções
function setLanguage(lang) {
    const elements = document.querySelectorAll('.texto');
    elements.forEach(el => {
        const className = el.className.match(/texto-\d+/)[0];
        if (translations[lang][className]) {
            el.outerHTML = translations[lang][className];
        }
    });
}

// Função para resetar para o HTML original
function resetToOriginal() {
    const elements = document.querySelectorAll('.texto');
    elements.forEach(el => {
        const className = el.className.match(/texto-\d+/)[0];
        if (originalHTML[className]) {
            el.outerHTML = originalHTML[className];
        }
    });
}

// Inicializa o armazenamento do HTML original
storeOriginalHTML();

// Adiciona eventos de clique aos botões
document.getElementById('btnChange').addEventListener('click', () => {
    setLanguage('en');
    document.getElementById('btnChange').disabled = true;
    document.getElementById('btnReset').disabled = false;
});

document.getElementById('btnReset').addEventListener('click', () => {
    resetToOriginal();
    document.getElementById('btnChange').disabled = false;
    document.getElementById('btnReset').disabled = true;
});
