import "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  return (
    <div>
      <Navbar />
      <LandiPage />
      <Resources />
      <Contact />
    </div>
  );
}

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar__logo">
        <h1>
          Mwalimu<span className="logo_red">Central</span>
        </h1>
      </div>
      <div className="nav-bar__links">
        <a href="#home">Home</a>
        <a href="#resorces">Resource</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
function LandiPage() {
  return (
    <div className="landing_page" id="home">
      <div className="landing_page__text">
        <h1>
          Revolutionize Your Teaching with
          <br />
          <span>Mwalimu Central -Effortlessly</span>
          <br />
          Customize CbC Forms and Go Paperless Today!
        </h1>
      </div>
      <Image src="/mc.png" alt="landing page" width={600} height={500} />
    </div>
  );
}
function Resources() {
  const [gradeLevel, setGradeLevel] = useState("");
  const [categories, setCategories] = useState("");
  const [learningArea, setLearningArea] = useState("");
  const [download, setDownload] = useState(null);

  const handleGradeLevelChange = (e) => {
    setGradeLevel(e.target.value);
  };

  const handleCategoriesChange = (e) => {
    setCategories(e.target.value);
  };

  const handleLearningAreaChange = (e) => {
    setLearningArea(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      categories,
      gradeLevel,
      learningArea,
    };
    try {
      const response = await axios.post("/api/submit-form", formData);
      setDownload(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const categoris = ["Regular Grades", "SNE Grades", "SNE Pathway"];
  const grade_level = [
    "PP1",
    "PP2",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Foundattion",
    "Intermediate",
    "Pre-Vocational",
  ];
  const learning_areas = [
    "Christian Religious Education",
    "Enviromental Activities",
    "Hindu Religious",
    "Islamic Religious Education",
    "Mathematics Activities",
    "Language Activities",
    "Psycomotor & Creative Activities - Art and Craft",
    "Psycomotor & Creative Activities - Movement",
    "Psycomotor & Creative Activities - Music",
    "Kenya Sign Language",
    "Braille Activities",
    "Enviroment Activities",
  ];

  return (
    <div className="resources" id="resorces">
      <div className="resources__text">
        <h1>Resource</h1>
        <h2>
          Here you will pick the file you want and download it on your device
        </h2>
        <form className="resource-form" onSubmit={handleFormSubmit}>
          <div className="dropdown">
            <label>
              categoris:
              <select value={categories} onChange={handleCategoriesChange}>
                {categoris.map((categoris) => (
                  <option value={categoris}>{categoris}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="dropdown">
            <label>
              Grade Level:
              <select value={gradeLevel} onChange={handleGradeLevelChange}>
                {grade_level.map((grade_level) => (
                  <option value={grade_level}>{grade_level}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="dropdown">
            <label>
              Learning Areas:
              <select value={learningArea} onChange={handleLearningAreaChange}>
                {learning_areas.map((learning_areas) => (
                  <option value={learning_areas}>{learning_areas}</option>
                ))}
              </select>
            </label>
          </div>
          <Button />
          {download && <button type="button">Download Template</button>}
        </form>
      </div>
    </div>
  );
}
function Button() {
  return (
    <button className="btn" type="submit">
      Submit
    </button>
  );
}
function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__text">
        <h1>Contact</h1>
        <h2>
          If you have any questions or concerns, please contact us at
          <br />
          <span>
            <a href="mailto:kamausuzan711@gmail.com">Email</a>
          </span>
          <br />
          phone: +254 722 000 000
        </h2>
      </div>
    </div>
  );
}
