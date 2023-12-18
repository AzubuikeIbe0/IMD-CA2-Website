/*  loader */
window.addEventListener("load", () => {
    const mainSection = document.querySelector(".main");
    const homeSection = document.querySelector(".home_section");
    const pageLoader = document.querySelector(".loader");

    mainSection.classList.remove("hidden");
    homeSection.classList.add("active");

    pageLoader.classList.add("fade_out");
    setTimeout(() => {
        pageLoader.style.display = "none";
    }, 600);
});



/* Navbar */
const navToggler = document.querySelector(".toggle__btn");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();

});

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade_out");
}

function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}



/* Section */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link_item") && e.target.hash !== "") {
        activateOverlay();
        handleSectionClick(e.target);
    }
});

function activateOverlay() {
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
}

function handleSectionClick(targetElement) {
    if (targetElement.classList.contains("nav_item")) {
        toggleNavbar();
    } else {
        hideSection();
        document.body.classList.add("hide__scrolling");
    }

    const activeSection = document.querySelector("section.active");
    activeSection.classList.remove("active", "fade_out");
    document.querySelector(targetElement.hash).classList.add("active");
    window.scrollTo(0, 0);
    document.body.classList.remove("hide__scrolling");
    navToggler.classList.remove("hide");
    document.querySelector(".overlay").classList.remove("active");
}





/* Portfolio  */

const tabs = document.querySelectorAll('.portfolio__button');
const tabContents = document.querySelectorAll('.tab__content');


tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.target;
    const target = document.querySelector(targetId);
    
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });

    target.classList.add('active');
    tabs.forEach((otherTab) => {
      otherTab.classList.remove('active');
    });

    tab.classList.add('active');
  });
});


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view_project_btn")) {
      togglePortfolioPopup();
      document.querySelector(".portfolio__modal").scrollTo(0, 0);
      portfolioItemDetails(e.target.parentElement);
    }
  });
  
  function togglePortfolioPopup() {
    const portfolioPopup = document.querySelector(".portfolio__modal");
    document.body.classList.toggle("hide__scrolling");
    document.querySelector(".main").classList.toggle("fade_out");
    portfolioPopup.classList.toggle("open");
  }
  
  document.querySelector(".portfolio__modal__close").addEventListener("click", togglePortfolioPopup);
  
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("portfolio__moda__inner")) {
      togglePortfolioPopup();
    }
  });
  
  function portfolioItemDetails(portfolioItem) {
    const thumbnailImg = document.querySelector(".portfolio__modal__thumbnail img");
    const headerText = document.querySelector(".portfolio__modal__header h3");
    const bodyContent = document.querySelector(".portfolio__modal__body");
  
    thumbnailImg.src = portfolioItem.querySelector(".portfolio_item_thumbnail img").src;
    headerText.innerHTML = portfolioItem.querySelector(".portfolio_item_title").innerHTML;
    bodyContent.innerHTML = portfolioItem.querySelector(".portfolio_item_details").innerHTML;
  }
  
  const portfolioItemsContainer = document.getElementById('portfolioItemsContainer');
  let category = 'All';
  let portfolioItems = [
    {
      "category": "Web",
      "thumbnail": "images/works/portfolio.png",
      "title": "Portfolio Website",
      "details": {
        "description": "This is my own portfolio website, put together during my second year. It's a space where I share my projects and find inspiration to create even more.",
        "created": "July 2021",
        "technology_used": "Html, Css, js",
        "role": "Frontend",
        "view_online": "https://ai-dev.vip/"
      }
    },
    {
      "category": "Mobile",
      "thumbnail": "images/works/wellness.png",
      "title": "Fitness App",
      "details": {
        "description": "A comprehensive wellness app built with React Native, offering a holistic approach to health and well-being. Features include personalized fitness routines, mindfulness exercises, nutritional guidance, and a user-friendly interface to promote a balanced and healthy lifestyle.",
        "created": "July 2023",
        "technology_used": "React Native",
        "role": "FullStack",
        "view_online": "N/A"
      }
    },
    {
      "category": "Mobile",
      "thumbnail": "images/works/weather.png",
      "title": "Weather App",
      "details": {
        "description": "A sleek React Native weather app delivering real-time weather updates with an intuitive user interface. Stay informed with accurate forecasts, interactive maps, and customizable settings, providing a seamless experience for users to plan their day with confidence.",
        "created": "Jun 2023",
        "technology_used": "React Native",
        "role": "FullStack",
        "view_online": "https://www.instagram.com/ai_dev_official/"
      }
    },
    {
      "category": "Web",
      "thumbnail": "images/works/musicapp.png",
      "title": "Music App",
      "details": {
        "description": "Crafted with passion and expertise, I proudly present my music app, skillfully developed with Blazor WebAssembly. Immerse yourself in a world of melodies as you explore seamless navigation and real-time API integration, showcasing the artistry of technology in music.",
        "created": "Dec 2023",
        "technology_used": "C#, Html, Css",
        "role": "FullStack",
        "view_online": "n/a"
      }
    },
    {
        "category": "Mobile",
        "thumbnail": "images/works/cookie.png",
        "title": "Shop App",
        "details": {
          "description": "Whisked to perfection, my React Native Cookie Shop app sweetens your digital experience. Indulge in a delightful journey through a tastefully designed interface, featuring a delectable array of cookies at your fingertips. Elevate your app-tasting adventure with React Native magic!",
          "created": "Aug 2023",
          "technology_used": "Html, Css",
          "role": "FullStack",
          "view_online": "n/a"
        }
      },
      {
        "category": "Mobile",
        "thumbnail": "images/works/genz.png",
        "title": "Social App",
        "details": {
          "description": "Dive into the social universe with my React Native Social Media app. Connect, share, and explore seamlessly through a sleek and intuitive interface. Experience the power of React Native as it brings a vibrant social network to life at your fingertips. Stay connected, stay engaged!",
          "created": "Oct 2023",
          "technology_used": "Html, Css",
          "role": "FullStack",
          "view_online": "n/a"
        }
      },
      {
        "category": "Web",
        "thumbnail": "images/works/shop2.png",
        "title": "2nd Year Project",
        "details": {
          "description": "This was my 2nd year project. I created this Django Ecommerce project with 2 of my colleagues, It was hosted on Heroku before it was removed",
          "created": "March 2022",
          "technology_used": "Django, Html, Css",
          "role": "FullStack",
          "view_online": "n/a"
        }
      },
      {
          "category": "Web",
          "thumbnail": "images/works/player.png",
          "title": "Shop App",
          "details": {
            "description": "Here is a simple music player I create using html and plain javascript. This is a self initiated project while I was at Ibat College Dublin",
            "created": "Aug 2020",
            "technology_used": "JS, Html, Css",
            "role": "FrontEnd",
            "view_online": "https://courageous-cuchufli-6e7aa3.netlify.app/"
          }
        },
        {
          "category": "Web",
          "thumbnail": "images/works/photographer.png",
          "title": "Photographer",
          "details": {
            "description": "This is a photographer website I created in second year using Django python framework. Admin can upload and edit images, while users can like and make comments",
            "created": "Dec 2023",
            "technology_used": "Djang, Html, Css",
            "role": "FullStack",
            "view_online": "https://azubuike.pythonanywhere.com/"
          }
        },
        {
            "category": "Web",
            "thumbnail": "images/works/gameshop2.png",
            "title": "Game Shop",
            "details": {
              "description": "This is an ecommerce shop built with javascript, html and css. It is a project for web authoring course in Rathmines College Dublin. The hardcoded password is 0000 while username is admin",
              "created": "March 2021",
              "technology_used": "HTML, CSS, js",
              "role": "FrontEnd",
              "view_online": "https://azubuikeibe.github.io/"
            }
          },
          {
            "category": "Web",
            "thumbnail": "images/works/phone.png",
            "title": "Django Website",
            "details": {
              "description": "This is my second year project in TU Dublin, it is an ecommerce shop built using Django, a python framework for web development. It was hosted on Heroku before they removed it",
              "created": "Dec 2021",
              "technology_used": "Django,Html, Css",
              "role": "FullStack",
              "view_online": "n/a"
            }
          },
          {
            "category": "Web",
            "thumbnail": "images/works/news.png",
            "title": "Svelte News",
            "details": {
              "description": "This is website was created using Svelte, a javascript framework for web development. It consumes the news api, to display the latest news updates",
              "created": "Oct 2022",
              "technology_used": "Svelte, Html, Css",
              "role": "FullStack",
              "view_online": "n/a"
            }
          }

  ];
  
  const fetchPortfolioItems = () => {
    renderPortfolioItems();
  };
  
  const handleCategoryClick = (selectedCategory) => {
    category = selectedCategory;
    renderPortfolioItems();
  };
  
  const renderPortfolioItems = () => {
    portfolioItemsContainer.innerHTML = '';
  
    portfolioItems
      .filter(item => category === 'All' || item.category === category)
      .forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'portfolio_item';
        itemElement.innerHTML = `
          <div class="portfolio_item_thumbnail glass">
            <img src="${item.thumbnail}" alt="portfolio item thumbnail">
            <h3 class="portfolio_item_title">${item.title}</h3>
          </div>
          <button class="btn view_project_btn">view</button>
          <div class="portfolio_item_details">
            <div class="description">
              <p>${item.details.description}</p>
            </div>
            <div class="general_info">
              <ul>
                <li>Created - <span>${item.details.created}</span></li>
                <li>Technology used - <span>${item.details.technology_used}</span></li>
                <li>Role - <span>${item.details.role}</span></li>
                <li>View Online - <span><a href="#" target="_blank">${item.details.view_online}</a></span></li>
              </ul>
            </div>
          </div>
        `;
        portfolioItemsContainer.appendChild(itemElement);
      });
  };
  
 
renderPortfolioItems();

/* About */

const skillsSection = document.createElement('div');
skillsSection.className = 'about__education';

const skillsHeader = document.createElement('h3');
skillsHeader.className = 'about__headers';
skillsHeader.textContent = 'Skills';

const skillsContainer = document.createElement('div');
skillsContainer.className = 'programs';

const skillsList = [
  'csharp', 'java', 'sql', 'cpp', 'dj', 'firebase', 'mongodb',
  'python', 'reactjs', 'js', 'ml2', 'nodejs', 'dotnet', 'wp', 'joomla',
  'figma', 'angular', 'cisco', 'oracle', 'js', 'svelte', 'security', 'aws', 'rn'
];

skillsList.forEach(skill => {
  const skillIcon = document.createElement('div');
  skillIcon.className = 'icon__skills';
  
  const skillImage = document.createElement('img');
  skillImage.src = `images/svg/${skill}.svg`;
  skillImage.alt = skill;
  
  skillIcon.appendChild(skillImage);
  skillsContainer.appendChild(skillIcon);
});

skillsSection.appendChild(skillsHeader);
skillsSection.appendChild(skillsContainer);

// Create education section
const educationHeader = document.createElement('h3');
educationHeader.className = 'about__headers';
educationHeader.textContent = 'Education';

const educationTabContent = document.createElement('div');
educationTabContent.className = 'tab__content active';
educationTabContent.dataset.content = '';
educationTabContent.id = 'education';

const educationTimeline = document.createElement('div');
educationTimeline.className = 'timeline';

const educationItems = [
  { date: '2020-2020', title: 'Diplome in WebDev', institution: 'Ibat College' },
  { date: '2020-2021', title: 'Advanced Software Dev', institution: 'Rathmines College' },
  { date: '2020-2021', title: 'Bsc Computing with Software Dev', institution: 'TU Dublin' }
];

educationItems.forEach(item => {
  const timelineItem = document.createElement('div');
  timelineItem.className = 'timeline__item';
  
  const dateSpan = document.createElement('span');
  dateSpan.className = 'date';
  dateSpan.textContent = item.date;
  
  const itemTitle = document.createElement('h4');
  itemTitle.innerHTML = `${item.title} - <span>${item.institution}</span>`;
  
  timelineItem.appendChild(dateSpan);
  timelineItem.appendChild(itemTitle);
  
  educationTimeline.appendChild(timelineItem);
});

educationTabContent.appendChild(educationTimeline);

// Append sections to the container
const container = document.querySelector('.about__contents');
container.appendChild(skillsSection);
container.appendChild(educationHeader);
container.appendChild(educationTabContent);

// Create the "Hire Me" link
const hireMeLink = document.createElement('a');
hireMeLink.href = '#contact';
hireMeLink.classList.add('btn');
hireMeLink.textContent = 'Hire Me';
hireMeLink.onclick = openModal;

// Append the "Hire Me" link after the education content
container.appendChild(hireMeLink);

  
/* Typejs*/

const lines = [
  "Coding the future, bit by bit,",
  " Innovation guides every script.",
  "Through binary realms, I navigate,",
  " crafting tomorrow's digital landscape."
];

let lineIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    function typeText() {
      const textContainer = document.getElementById('text');
      const cursor = document.getElementById('cursor');
      const currentLine = lines[lineIndex];

      if (charIndex < currentLine.length) {
        textContainer.innerHTML += currentLine.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        isTyping = false;
        setTimeout(eraseText, 1500);
      }
    }

    function eraseText() {
      const textContainer = document.getElementById('text');
      const currentLine = lines[lineIndex];

      if (charIndex > 0) {
        textContainer.innerHTML = currentLine.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
      } else {
        lineIndex = (lineIndex + 1) % lines.length;
        isTyping = true;
        setTimeout(typeText, 500);
      }
    }

    typeText();

window.onload = typeLines

function openModal() {
  const contactFormTemplate = document.getElementById('contactme').cloneNode(true);
  contactFormTemplate.style.display = 'block';
  document.getElementById('modal__form').appendChild(contactFormTemplate);
  document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal__form').innerHTML = '';
  document.getElementById('myModal').style.display = 'none';
}


