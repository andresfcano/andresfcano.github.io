import './index.scss'

const Modal = ({ open, onClose }) => {
  if (!open) return null

  return (
    <>
    <div className="overlay"/>
    <div className="portfolio-modal">
      <h2>Scientific Research</h2>
      <p>
        I completed my M.S. Thesis in Mechanical Engineering at the University of Colorado, Boulder in August 2022
        (Advisor: <a target="_blank" rel="noopener noreferrer" href="https://www.colorado.edu/mechanical/nicole-labbe" class="link">Nicole J. Labbe</a>).
        My thesis <em>Alkyl end group effects on the thermal decomposition of oxymethylene ether fuel additives</em> focused
        on leveraging computational chemistry tools to improve chemistry models of additives that reduce
        soot formation in diesel engines. I graduated from the University of Rochester in 2019 with a B.S. in Astrophysics, where I worked for two years
        with <a target="_blank" rel="noopener noreferrer" href="https://www.sas.rochester.edu/pas/people/faculty/gourdain_pierre/index.html" class="link">Pierre-Alexandre Gourdain</a> studying extreme state physics.
      </p>
      <h2>Data Science</h2>
      <p>
        I worked as a Data Scientist before starting my masters, where gaining experience with relational databases, namely with Microsoft SQL Server.
        My responsibilities involved querying, importing, analyzing, and extracting insights on sales data, as well as developing Python-based
        machine learning models that would predict market trends. Together with the web development team, I deployed a business intelligence app
        that showcased our products compared to those of competitors using web scraping tools like <em>Beautiful Soup</em> and <em>Selenium</em>.
      </p>
      <h2>Machine Learning in Python</h2>
      <p>
        I've leveraged Python libraries (numpy, pandas, sklearn) in my research work to build classical machine learning models
        (i.e. KNN, ensemble methods, regressors) to extract knowledge from experiments. In personal projects, I've used basic NLP
        libraries (Vader, TextBlob) to perform sentiment analysis on online posts, and have build extensions to open-source neural
        networks codes to enable Chess engines to play the <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Millennium_3D_chess" class="link">Millenium 3D Chess</a> variation.
        The cube on the right shows the technologies that I've used in my past work.
      </p>
      <button className="closeButn" onClick={onClose}>Close Modal</button>
    </div>
    </>
  )
}

export default Modal
