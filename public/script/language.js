// Traduções para os idiomas
const translations = {
    'en': {
        'texto-1': '<p class="fs-4 fw-light mx-3 pt-3 mt-5 translate texto texto-1"data-key="title">Hey! Good to have you here.<span style="display: inline-block; animation: pulseendrotate 2.2s infinite;" class="">🫡</span></p>',
        'texto-2': '<h1 class="display-2 texto texto-2" data-key="title">Let me introduce myself, Im Alê.</h1>',
        'texto-3': '<span class="fs-4 fw-light mt-4 texto texto-3"data-key="title">Data Analyst and Programmer</span>',
        'texto-4': '<a class="nav-link texto texto-4 text-dark shadow p-3 mb-5 bg-body-tertiary rounded bg-dark-subtle" href="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4">Spreadsheets</a>',
        'texto-5': '<a class="nav-link texto texto-5 text-dark shadow p-3 mb-5 bg-body-tertiary rounded bg-dark-subtle" href="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2">Dashboards</a>',
        'texto-6': '<a class="nav-link texto texto-6 text-dark shadow p-3 mb-5 bg-body-tertiary rounded bg-light-subtle" href="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  aria-current="true">Everything</a>',
        'texto-7': '<a class="nav-link texto texto-7 text-dark shadow p-3 mb-5 bg-body-tertiary rounded bg-dark-subtle" href="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1">Web</a>',
        'texto-8': '<a class="nav-link texto texto-8 text-dark shadow p-3 mb-5 bg-body-tertiary rounded bg-dark-subtle" href="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3">About</a>',
        'texto-9': '<h5 class="card-title pt-2 pb-1 texto texto-9">Administrative spreadsheet:</h5>',
        'texto-10': '<p class="card-text texto texto-10">Ive built a highly integrated management solution using 39 Google Sheets. This system leverages advanced functions, data validation, and automated calculations to seamlessly connect multiple spreadsheets.</p>',
        'texto-11': '<a class="btn btn-secondary texto texto-11" data-bs-toggle="collapse" href="#LerMais1" role="button" aria-expanded="false" aria-controls="collapseExample">Read More</a>',
        'texto-12': '<p class="card-text"><small class="text-body-secondary texto texto-12">Project with Google Sheets</small></p>',
        'texto-13': '<p class="fs-5 texto texto-13"><small>This structure allows for instant communication between HR and accounting departments, optimized for accurately calculating company profits and expenses.</small></p>',
        'texto-14': '<h3 class="mt-4 texto texto-14">features :</h3>',
        'texto-15': '<li class="mb-2 fs-5 texto texto-15"><small><strong>Full Integration:</strong> The spreadsheet integrates multiple functions and departments, ensuring that changes made in one area are automatically updated in others, simplifying the management of products, employees, vacancies, and inventory.</small></li>',
        'texto-16': '<li class="mb-2 fs-5 texto texto-16"><small><strong>High Efficiency:</strong> Handling a large volume of interconnected data, the system is designed to ensure quick and accurate value updates and maintenance, minimizing the risk of errors.</small></li>',
        'texto-17': '<li class="mb-2 fs-5 texto texto-17"><small><strong>Customization and Adaptation:</strong> The system is flexible and can be customized to meet the specific needs of any business, regardless of the volume or complexity of operations.</small></li>',
        'texto-18': '<li class="mb-2 fs-5 texto texto-18"><small><strong>Data Integrity and Security:</strong> Integrated data validation eliminates manual errors and guarantees data integrity, offering a secure and reliable business management solution.</small></li>',
        'texto-19': '<p class="fs-5 texto texto-19"><small>This solution is perfect for businesses seeking to optimize operations, improve cross-functional communication, and maintain data integrity, regardless of industry or scale. It can also be readily configured as a management dashboard.</small></p>',
        'texto-20': '<button class="accordion-button collapsed z-0 texto texto-20" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Spressheets link</button>',
        'texto-21': '<a type="button" target="_blank" href="https://docs.google.com/spreadsheets/d/1aRsowVQmSFe2ebGrABYlhIiG-H1i2_xOXuiiXjRk52Y/edit?usp=sharing" class="btn btn-secondary texto texto-21">HR</a>',
        'texto-22': '<a type="button" target="_blank" href="https://docs.google.com/spreadsheets/d/14U3iUIuOk2YBqT_EDxzTiQLS8BUeCcR7qu-pdBcJLog/edit?usp=sharing" class="btn btn-secondary  texto texto-22">accounting</a>',
        'texto-23': '<button class="accordion-button collapsed z-0  texto texto-23" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Example spreadsheet image</button>',
        'texto-24': '<a class="btn btn-secondary w-100 mt-5  texto texto-24" data-bs-toggle="collapse" href="#LerMais1" role="button" aria-expanded="false" aria-controls="collapseExample">Collapse</a>',
        'texto-25': '<h5 class="card-title pt-2 pb-1 texto texto-25">Text to Spreadsheet Converter</h5>',
        'texto-26': '<p class="card-text texto texto-26">I developed a JavaScript code that facilitates the transformation of copied, pasted, or CSV file texts into automatically formatted spreadsheets ...</p>',
        'texto-27': '<a class="btn btn-secondary texto texto-27" data-bs-toggle="collapse" href="#LerMais2" role="button" aria-expanded="false" aria-controls="collapseExample">Read more</a>',
        'texto-28': '<p class="card-text"><small class="text-body-secondary texto texto-28">Project using Google App Script</small></p>',
        'texto-29': '<p class="fs-5 texto texto-29"><small>This project is ideal for those who need to quickly and easily convert textual data into spreadsheets.</small></p>',
        'texto-30': '<h3 class="mt-4 texto texto-30">Project Features:</h3>',
        'texto-31': '<li class="mb-2 fs-5 texto texto-31"><small><strong>Automatic Conversion:</strong>The code converts copied, pasted, or CSV file texts into an organized spreadsheet automatically.</small></li>',
        'texto-32': '<li class="mb-2 fs-5 texto texto-32"><small><strong>Instant Formatting:</strong>The system automatically adjusts the font size and colors for better visualization.</small></li>',
        'texto-33': '<li class="mb-2 fs-5 texto texto-33"><small><strong>Flexible Input:</strong>Accepts different types of input, whether it\'s simple text separated by commas or CSV files.</small></li>',
        'texto-34': '<li class="mb-2 fs-5 texto texto-34"><small><strong>Ease of Use:</strong>The process is simple and eliminates the need for manual formatting, saving time.</small></li>',
        'texto-35': '<p class="fs-5 texto texto-35"><small>This project is a practical solution for quickly and accurately transforming textual data into formatted spreadsheets.</small></p>',
        'texto-36': '<button class="accordion-button collapsed z-0 texto texto-36" type="button" data-bs-toggle="collapse" data-bs-target="#flush-3" aria-expanded="false" aria-controls="flush-collapseOne">GitHub Link</button>',
        'texto-37': '<a target="_blank" href="https://github.com/xax-ale/Planilha-copia-e-cola" class="btn btn-secondary texto texto-37">Project Link</a>',
        'texto-38': '<a class="btn btn-secondary w-100 mt-5 texto texto-38" data-bs-toggle="collapse" href="#LerMais2" role="button" aria-expanded="false" aria-controls="collapseExample">Collapse</a>',
        'texto-39': '<h5 class="card-title pt-2 pb-1 texto texto-39">Management Dashboard</h5>',
        'texto-40': '<p class="card-text texto texto-40">I developed a comprehensive management dashboard that integrates 39 CSV-format spreadsheets, transforming this data into interactive charts to efficiently monitor profits and expenses...</p>',
        'texto-41': '<a class="btn btn-secondary texto texto-41" data-bs-toggle="collapse" href="#LerMais3" role="button" aria-expanded="false" aria-controls="collapseExample">Read more</a>',
        'texto-42': '<p class="card-text"><small class="text-body-secondary texto texto-42">Project with Power BI and Power Query</small></p>',
        'texto-43': '<p class="fs-5 texto texto-43"><small>Using Power BI and Power Query, this system offers a detailed and dynamic view of the company\'s finances.</small></p>',
        'texto-44': '<h3 class="mt-4 texto texto-44">Features:</h3>',
        'texto-45': '<li class="mb-2 fs-5 texto texto-45"><small><strong>Automated Data Transformation:</strong>The data from the 39 CSV spreadsheets is automatically transformed and integrated into Power BI, facilitating data analysis and visualization.</small></li>',
        'texto-46': '<li class="mb-2 fs-5 texto texto-46"><small><strong>Interactive Charts:</strong> The dashboard presents dynamic charts that allow detailed and intuitive analysis of profits and expenses, aiding strategic decision-making.</small></li>',
        'texto-47': '<li class="mb-2 fs-5 texto texto-47"><small><strong>Integration with Power Query:</strong> Using Power Query, the system processes and cleans the data, ensuring that the presented information is accurate and up-to-date.</small></li>',
        'texto-48': '<li class="mb-2 fs-5 texto texto-48"><small><strong>Global and Detailed View:</strong>Provides both an overall and detailed view of the company\'s finances, enabling you to track trends and identify areas for improvement.</small></li>',
        'texto-49': '<li class="mb-2 fs-5 texto texto-49"><small><strong>Adaptability:</strong>The system is flexible and can be adapted to meet the specific needs of any company, regardless of the volume or complexity of operations.</small></li>',
        'texto-50': '<p class="fs-5 texto texto-50"><small>This dashboard is ideal for companies looking to optimize financial management, improve communication between departments, and ensure data accuracy, providing a powerful and efficient solution for analyzing profits and expenses.</small></p>',
        'texto-51': '<button class="accordion-button collapsed z-0 texto texto-51" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Dashboard Link</button>',
        'texto-52': '<a type="button" target="_blank" href="https://docs.google.com/spreadsheets/d/1aRsowVQmSFe2ebGrABYlhIiG-H1i2_xOXuiiXjRk52Y/edit?usp=sharing" class="btn btn-secondary texto texto-52">Power BI Link</a>',
        'texto-53': '<button class="accordion-button collapsed z-0 texto texto-53" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Dashboard</button>',
        'texto-54': '<a class="btn btn-secondary w-100 mt-5 texto texto-54" data-bs-toggle="collapse" href="#LerMais3" role="button" aria-expanded="false" aria-controls="collapseExample">Collapse</a>',
        'texto-55': '<h5 class="card-title pt-2 pb-1 texto texto-55">Dashboard with DAX</h5>',
        'texto-56': '<a class="btn btn-secondary texto texto-56" data-bs-toggle="collapse" href="#LerMais4" role="button" aria-expanded="false" aria-controls="collapseExample">Read more</a>',
        'texto-57': '<p class="card-text texto texto-57"><small class="text-body-secondary">Project with Power BI, Power Query, and DAX</small></p>',
        'texto-58': '<p class="fs-5 texto texto-58"><small>This system centralizes all data in a single spreadsheet, with no need for manual edits, automatically performing all parameters and relationships.</small></p>',
        'texto-59': '<h3 class="mt-4 texto texto-59">Features:</h3>',
        'texto-60': '<li class="mb-2 fs-5 texto texto-60"><small><strong>Automatic Data Validation:</strong>Using DAX, the dashboard automatically validates data, ensuring the integrity and accuracy of the information.</small></li>',
        'texto-61': '<li class="mb-2 fs-5 texto texto-61"><small><strong>Spreadsheet Relationships:</strong>The system creates and maintains relationships between various spreadsheets, integrating data cohesively and facilitating analysis.</small></li>',
        'texto-62': '<li class="mb-2 fs-5 texto texto-62"><small><strong>Data Centralization:</strong> All data is centralized in a single spreadsheet, eliminating the need for manual edits and simplifying management.</small></li>',
        'texto-63': '<li class="mb-2 fs-5 texto texto-63"><small><strong>Complete Automation:</strong>Parameters and relationships are automatically defined by the dashboard, reducing workload and minimizing errors.</small></li>',
        'texto-64': '<li class="mb-2 fs-5 texto texto-64"><small><strong>Efficiency and Accuracy:</strong>Continuous data automation and validation ensure that information is always correct and up-to-date.</small></li>',
        'texto-65': '<p class="fs-5 texto texto-65"><small>This dashboard is ideal for companies seeking an efficient and automated data management solution, providing an integrated and accurate view of information without the need for manual interventions.</small></p>',
        'texto-66': '<button class="accordion-button collapsed z-0 texto texto-66" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Dashboard Link</button>',
        'texto-67': '<a type="button" target="_blank" href="https://docs.google.com/spreadsheets/d/1aRsowVQmSFe2ebGrABYlhIiG-H1i2_xOXuiiXjRk52Y/edit?usp=sharing" class="btn btn-secondary texto texto-67">Power BI Link</a>',
        'texto-68': '<button class="accordion-button collapsed z-0 texto texto-68" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Dashboard</button>',
        'texto-69': '<a class="btn btn-secondary w-100 mt-5 texto texto-69" data-bs-toggle="collapse" href="#LerMais4" role="button" aria-expanded="false" aria-controls="collapseExample">Collapse</a>',
        'texto-70': '<h5 class="card-title pt-2 pb-1 texto texto-70">Dashboard with Python, Pandas, and Streamlit</h5>',
        'texto-71': '<p class="card-text texto texto-71">I developed an advanced management dashboard using Python, Pandas, and Streamlit, which centralizes and processes data automatically, offering a dynamic and interactive visualization...</p>',
        'texto-72': '<a class="btn btn-secondary texto texto-72" data-bs-toggle="collapse" href="#LerMais5" role="button" aria-expanded="false" aria-controls="collapseExample">Read more</a>',
        'texto-73': '<p class="card-text"><small class="text-body-secondary texto texto-73">Project with Python, Pandas, and Streamlit</small></p>',
        'texto-74': '<h3 class="mt-4 texto texto-74">Management Dashboard: Traditional vs. Python</h3>',
        'texto-75': '<p class="fs-5 texto texto-75"><small>Traditionally, creating dashboards involves time-consuming manual processes, from data import to generating charts and reports. This can require specific skills in various tools and considerable time for setup and maintenance. Conversely, a dashboard built with Python, using libraries like Pandas and Streamlit, can be developed quickly and efficiently, automating much of the work and offering unparalleled flexibility and customization.</small></p>',
        'texto-76': '<h3 class="mt-4 texto texto-76">Features:</h3>',
        'texto-77': '<li class="mb-2 fs-5 texto texto-77"><small><strong>Data Processing with Pandas:</strong>Using Pandas, data is processed and manipulated efficiently, ensuring cleanliness and organization of the information.</small></li>',
        'texto-78': '<li class="mb-2 fs-5 texto texto-78"><small><strong>Interactive Visualization with Streamlit:</strong> Streamlit allows the creation of interactive and dynamic dashboards, facilitating real-time data analysis.</small></li>',
        'texto-79': '<li class="mb-2 fs-5 texto texto-79"><small><strong>Complete Automation:</strong> The system automates data import, processing, and visualization, significantly reducing manual workload.</small></li>',
        'texto-80': '<li class="mb-2 fs-5 texto texto-80"><small><strong>Flexibility and Customization:</strong>Python allows total flexibility in developing the dashboard, adapting it to the specific needs of each company.</small></li>',
        'texto-81': '<li class="mb-2 fs-5 texto texto-81"><small><strong>Scalability:</strong>The dashboard can be easily scaled to meet the needs of growing companies, handling large volumes of data.</small></li>',
        'texto-82': '<p class="fs-5 texto texto-82"><small>This dashboard is an ideal choice for companies looking to leverage the power of Python for data management, offering a highly efficient and customizable solution for visualizing and analyzing information.</small></p>',
        'texto-83': '<button class="accordion-button collapsed z-0 texto texto-83" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Dashboard Link</button>',
        'texto-84': '<a type="button" target="_blank" href="https://docs.google.com/spreadsheets/d/1aRsowVQmSFe2ebGrABYlhIiG-H1i2_xOXuiiXjRk52Y/edit?usp=sharing" class="btn btn-secondary texto texto-84">Streamlit Link</a>',
        'texto-85': '<button class="accordion-button collapsed z-0 texto texto-85" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Dashboard Image</button>',
        'texto-86': '<a class="btn btn-secondary w-100 mt-5 texto texto-86" data-bs-toggle="collapse" href="#LerMais5" role="button" aria-expanded="false" aria-controls="collapseExample">Collapse</a>',
        'texto-87': '<h3 class="mt-2 mb-3 texto texto-87">Welcome to my project portfolio</h3>',
        'texto-88': '<p class="fs-5 texto texto-88"><small>I am excited to share with you the projects I have developed over time. This portfolio is a collection of my work, where each project is an expression of my enthusiasm for technology and innovation.</small></p>',
        'texto-89': '<p class="fs-5 texto texto-89"><small>Here, you will find everything from complex management and automation solutions to interactive dashboards that facilitate data visualization and analysis. Each project was designed to solve real problems, bringing efficiency and practicality to various areas.</small></p>',
        'texto-90': '<p class="fs-5 mb-5 texto texto-90"><small>I believe that the best way to understand my skills and work style is by exploring the projects I have prepared. I hope they not only demonstrate my capabilities but also inspire new ideas and collaborations.</small></p>',
        'texto-91': '<h5 class="card-title pt-2 pb-1 texto texto-91">Management Spreadsheet and Dashboard</h5>',
        'texto-92': '<p class="card-text texto texto-92">In this project, I developed a comprehensive management solution for a company with three branches and one headquarters...</p>',
        'texto-93': '<p class="d-inline-flex gap-1 texto texto-93"><a class="btn btn-secondary texto texto-94" data-bs-toggle="collapse" href="#LerMais3" role="button" aria-expanded="false" aria-controls="collapseExample">Read more</a></p>',
        'texto-95': '<p class="card-text"><small class="text-body-secondary texto texto-95">Project with Google AppScript, Google Sheets, Power BI, and Power Query</small></p>',
        'texto-96': '<p class="fs-5 texto texto-96"><small>Using App Script, I created 39 interlinked spreadsheets that facilitate communication and data integration between different areas of the company.</small></p>',
        'texto-97': '<h3 class="mt-4 texto texto-97">How it was done:</h3>',
        'texto-98': '<li class="mb-2 fs-5 texto texto-98"><small><strong>Creation of Spreadsheets with App Script:</strong> I developed 39 spreadsheets in Google Sheets, each focused on different aspects of management, including products, employees, open positions, and inventory. The spreadsheets are interlinked, allowing data to communicate automatically.</small></li>',
        'texto-99': '<li class="mb-2 fs-5 texto texto-99"><small><strong>Implementation of Relationships and Functions:</strong> I used advanced functions and data validation to ensure consistency and accurate data exchange between the spreadsheets. This involves automatic calculations and real-time updates between the headquarters and branches.</small></li>',
        'texto-100': '<li class="mb-2 fs-5 texto texto-100"><small><strong>Data Cleaning and Preparation with Power Query:</strong> After setting up the spreadsheets, I used Power Query to extract and clean the data, focusing only on the information needed for performance analysis. This process ensured that the data was organized and ready for use in the dashboard.</small></li>',
        'texto-101': '<li class="mb-2 fs-5 texto texto-101"><small><strong>Dashboard Development:</strong> I created an interactive dashboard that uses the prepared data to provide clear and dynamic visualizations of the company\'s profits and expenses. The dashboard is directly fed by the spreadsheets, ensuring that the information is always up-to-date.</small></li>',
        'texto-102': '<p class="fs-5 texto texto-102"><small>This project demonstrates how combining App Script and Power Query can result in a robust and efficient data management solution, facilitating decision-making and performance analysis.</small></p>',
        'texto-103': '<button class="accordion-button collapsed z-0 texto texto-103" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Dashboard Link</button>',
        'texto-104': '<a type="button" target="_blank" href="https://docs.google.com/spreadsheets/d/1aRsowVQmSFe2ebGrABYlhIiG-H1i2_xOXuiiXjRk52Y/edit?usp=sharing" class="btn btn-secondary texto texto-104">Power BI Link</a>',
        'texto-105': '<button class="accordion-button collapsed z-0 texto texto-105" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Dashboard Image</button>',
        'texto-106': '<a class="btn btn-secondary w-100 mt-5 texto texto-106" data-bs-toggle="collapse" href="#LerMais3" role="button" aria-expanded="false" aria-controls="collapseExample">Collapse</a>',
        'texto-107': '<h5 class="card-title pt-2 pb-1 texto texto-107">Dashboard with Python, Pandas, and Streamlit</h5>',
        'texto-108': '<p class="card-text texto texto-108">I developed an advanced management dashboard using Python, Pandas, and Streamlit, which centralizes and processes data automatically, providing dynamic and interactive visualization...</p>',
        'texto-109': '<h3 class="mt-5 mb-3 texto texto-109">About Me</h3>',
        'texto-110': '<p class="fs-5 texto texto-110"><small>I am an 18-year-old who is fascinated by technology and determined to become a data scientist. I started my journey with web development, learning HTML, CSS, and JavaScript on my own. Now, I am focused on data analysis, developing essential skills for the field. I seek opportunities to apply my knowledge in challenging projects, contributing to more informed and efficient decisions, and continuing to evolve professionally.</small></p>',
        'texto-111': '<h3 class="mt-5 mb-3 texto texto-111">Web</h3>',
        'texto-112': '<h5 class="card-title pt-2 pb-1 texto texto-112">This Portfolio!</h5>',
        'texto-113': '<p class="card-text texto texto-113">I developed a sophisticated web portfolio that integrates JavaScript, Bootstrap, and the Astro framework to create a dynamic online experience ...</p>',
        'texto-114': '<a class="btn btn-secondary texto texto-114" data-bs-toggle="collapse" href="#LerMais4" role="button" aria-expanded="false" aria-controls="collapseExample">Read more</a>',
        'texto-115': '<p class="card-text texto texto-115"><small class="text-body-secondary">Project with JavaScript, Bootstrap, and Astro</small></p>',
        'texto-116': '<p class="fs-5 texto texto-116"><small>This portfolio is a comprehensive showcase of my skills and projects, designed to offer intuitive navigation and modern design.</small></p>',
        'texto-117': '<h3 class="mt-4 texto texto-117">Features:</h3>',
        'texto-118': '<li class="mb-2 fs-5 texto texto-118"><small><strong>Dynamic Interactivity with JavaScript: </strong> By using JavaScript, the portfolio offers interactive and personalized features, providing an engaging and responsive user experience. From visual effects to interactive functionalities, JavaScript ensures the portfolio is both attractive and functional.</small></li>',
        'texto-119': '<li class="mb-2 fs-5 texto texto-119"><small><strong>Responsive Design with Bootstrap:</strong> The portfolio’s design is optimized for all devices, using Bootstrap to ensure a flawless presentation on screens of various sizes. Bootstrap’s flexibility and compatibility allow for a layout that perfectly adapts to each visitor’s needs.</small></li>',
        'texto-120': '<li class="mb-2 fs-5 texto texto-120"><small><strong>Efficient Development with Astro:</strong> The Astro framework provides a solid foundation for the portfolio, enabling efficient component integration and performance optimization. With Astro, the portfolio loads quickly and offers a smooth browsing experience.</small></li>',
        'texto-121': '<li class="mb-2 fs-5 texto texto-121"><small><strong>Centralization and Organization of Projects:</strong> All projects and information are centralized in an organized and easy-to-navigate interface. The portfolio presents work clearly and structurally, facilitating the viewing and exploration of my achievements.</small></li>',
        'texto-122': '<li class="mb-2 fs-5 texto texto-122"><small><strong>Automation and Updates:</strong> The portfolio is designed to be easy to update, with tools and processes that minimize the need for manual edits. Automation of updates ensures that the portfolio is always up-to-date with the latest projects and information.</small></li>',
        'texto-123': '<p class="fs-5 texto texto-123"><small>This portfolio is ideal for those who want to view an example of my work and skills in web development, offering a clear view of my abilities.</small></p>',
        'texto-124': '<button class="accordion-button collapsed z-0 texto texto-124" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Portifolio on GitHub Link</button>',
        'texto-125': '<a type="button" target="_blank" href="https:https://github.com/xax-ale/portifolio-de-projetos" class="btn btn-secondary texto texto-125">GitHub Link</a>',
        'texto-126': '<button class="accordion-button collapsed z-0 texto texto-126" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Portifolio Image</button>',
        'texto-127': '<a class="btn btn-secondary w-100 mt-5 texto texto-127" data-bs-toggle="collapse" href="#LerMais4" role="button" aria-expanded="false" aria-controls="collapseExample">Collapse</a>',
        'texto-128': '<p class="fs-5 mt-5 texto texto-128"><small>I enjoy learning on my own and am always looking for new technologies and methods. Currently, I am focused on developing my skills in data analysis and programming. I have experience with HTML, CSS, JavaScript, and PHP, thus mastering the basics to use any framework or library, and I am diving into data analysis techniques to transform information into valuable insights.</small></p>',
        'texto-129': '<p class="fs-5 mb-5 texto texto-129"><small>I believe that with dedication and effort, I can make significant contributions in the field, helping to make more informed and efficient decisions. I am excited to continue this path and see where it will lead me.</small></p>',
        'texto-130': '<h3 class="mt-5 mb-3 texto texto-130">About Me</h3>',
        'texto-131': '<p class="fs-5 texto texto-131"><small>I am an 18-year-old who is drawn to the world of technology and looking to become a data scientist. My journey began when a teacher introduced me to development, and since then, I have been exploring this vast field.</small></p>',
        'texto-132': '<p class="fs-5 texto texto-132"><small>I enjoy learning on my own and am always in search of new technologies and methods. Currently, I am focused on developing my skills in data analysis and programming. I have experience with HTML, CSS, JavaScript, and PHP, thus mastering the basics to use any framework or library, and I am delving into data analysis techniques to transform information into valuable insights.</small></p>',
        'texto-133': '<p class="fs-5 mb-5 texto texto-133"><small>My approach is practical and user-centered, creating interfaces that are not only functional but also enjoyable to use. I am looking for opportunities to apply what I have learned in challenging and innovative projects.</small></p>',
        'texto-134': '<p class="fs-5 mb-5 texto texto-134"><small>I believe that with dedication and effort, I can make significant contributions in the field, helping to make more informed and efficient decisions. I am excited to continue this path and see where it will lead me.</small></p>',
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
