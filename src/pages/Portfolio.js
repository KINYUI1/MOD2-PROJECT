import { Link } from "react-router-dom";
import '../App.css'
function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <nav className="flex">
        <h2>Clement Kinyui Ndimuangu</h2>
        <p>ndiclementkinyui@gmail.com</p>
      </nav>
      <div className="flex">
        <div>
          <img src='./images/IMG_20230816_154348.jpg' alt=" clement" className="smallimg"/>
          <div>
            <a
              href="https://www.linkedin.com/in/clement-kinyui-ndimuangu-11876b250"
              target="blank"
              alt="photo of clement"
            >
              {" "}
              linkedin
            </a>
            <a href="https://github.com/KINYUI1" target="blank">
              Github
            </a>
          </div>
        </div>
        <div className="intro">
          <hr />
          <h2>
            The individual who is capable of developing both client and
            server-side software
          </h2>
          <p>
            Motivated software engineer with expertise in computer science
            principle, programming languages and software development. Skilled
            in developing and maintaining applications to meet user needs.
            Effective collaborator delivering high quality solutions within
            deadlines. Eager to learn and apply emerging technologies for
            enhanced software development.Commited to driving innovation and
            improving user experience.
          </p>
        </div>
      </div>
      <hr />
      <h2>Skills</h2>
      <div className="flex">
        
        <div className="skills">
          <p>
            Build the front-end portion of a site, which is the part that users
            see and interact with using using HTML,CSS,JavaScript and React JS.
          </p>
          <ul>
            <li>
              <strong>HTML:</strong> used for creeation of the structure of a
              web page.
            </li>
            <li>
              <strong>CSS:</strong> is used to make website more appealing than
              just plain text.
            </li>
            <li>
              <strong>JavaScript:</strong> use to give funtionality and
              responsiveness to a web page.
            </li>
            <li>
              <strong>React JS:</strong> a JavaScript library use to create
              single page web applications.
            </li>
          </ul>
        </div>
        <h2 className="skillstitle">Front End Development</h2>
      </div>
      <hr />
      <div className="flex">
      <h2 className="skillstitle">Back End Development</h2>
        <div className="skills">
          <p>
            Build the back-end portion responsible for server-side web
            application logic and integration of the work front-end web
            developers do using Node JS, MongoDB, express JS, Mongoose.
          </p>
          <ul>
            <li>
              <strong>Node JS:</strong> runtime environment for running
              JavaScript locally
            </li>
            <li>
              <strong>MongoDB:</strong> a non relational data base for storing
              and working with data.
            </li>
            <li>
              <strong>Express JS:</strong> is a web application framework for
              Node.js.
            </li>
            <li>
              <strong>Mongoose JS:</strong> is a MongoDB object modeling library
              for Node.js.{" "}
            </li>
          </ul>
        </div>
        
      </div>
      <hr />
      <div className="flex"> 
      
      <p className="skills">can build both the front end and the back end of a website.</p>
      <h2 className="skillstitle">Full Stack Development</h2>
      </div>
      <h2>Recent projects</h2>
      <div>
        <div className="flex">
          <h3 className="skillstitle">
            <Link to="/newscatalogue">ACE News</Link>
          </h3>
          <p className="skills">
            International news website showing the latest headlines from more
            than 50 countries in catergories like BUSINESS, HEALTH, SPORTS,
            SCIENCE,ENTERTAINMENT, TECHNOOGY AND GENERAL NEWS with the
            opportunity to search news base on given key word/words
          </p>
        </div>
        <div className="flex">
          <p className="skills">
            A numbers Guessing Game that gives the player multiple chances to
            pick the right number and quidelines on if the number guessed by the
            player id greater or less than the actual value. The game has great
            sound effect for every action taken in the game.
          </p>
          <h3 className="skillstitle">
            <a href="https://kinyui1.github.io/MOD1-PROJECT/" target="blank" >Number Guessing Game</a>
          </h3>
        </div>
      </div>
      <img src="" alt="" />
      <h2>
        "Clement has consistently worked to improve on a number of technical
        skills in finding creative solutions for challenging problems. He's your
        go to person for creative web dev."
      </h2>
      <p>Per Scholas Intructional Team</p>
      <img src="" alt=""/>
      <hr />
      <h2>So why work with me?</h2>
      <p>
        I possess a deep understanding of the event and experiential software
        industry, including its tight timelines, impending deadlines, uncertain
        landscape, and dynamic downstream client demands. Armed with a computer
        science background, my forte lies in effective problem-solving. I excel
        in deconstructing unconventional and imaginative experiential concepts,
        unraveling the path to their successful implementation.
      </p>
      <p>
        My extensive solo work experience has nurtured agility within me,
        enabling me to outpace fellow developers. Notably, I spearheaded the
        launch of an internationally acclaimed news website, attuned to the
        criticality of flawless performance from day one.
      </p>
      <p>
        Furthermore, I exhibit exceptional communication and collaboration
        skills. I acknowledge that the 'how' might not always matter as much as
        the end result, which I consistently deliver with excellence and
        punctuality.
      </p>
      <hr />
      <h2>Lets Chat</h2>
      <div className="flex">
        <p>
          Have a vacant position? Call me at <strong>'301-793-5217' </strong> or
          email me at <strong>ndiclementkinyui@gmail.com</strong> for detailed
          discussion on filling it. Alternitively connect with me elsewhere on
          the web.
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/clement-kinyui-ndimuangu-11876b250"
            target="blank"
          >
            {" "}
            linkedin
          </a>
          <a href="https://github.com/KINYUI1" target="blank">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
