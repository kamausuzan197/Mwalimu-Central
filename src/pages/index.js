import "../styles/Home.module.css";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
export default function Home() {
  return (
    <div>
      <Navbar />
      <LandiPage /> {/* <Resources /> */} <Contact />
    </div>
  );
}

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar__logo">
        <h1>
          Mwalimu <span className="logo_red"> Central </span>{" "}
        </h1>{" "}
      </div>{" "}
      <div className="nav-bar__links">
        <a href="#home"> Home </a> <a href="#resorces"> Resource </a>{" "}
        <a href="#contact"> Contact </a>{" "}
      </div>{" "}
    </div>
  );
}

function LandiPage() {
  return (
    <div className="landing_page" id="home">
      <div className="landing_page__text">
        <h1>
          Revolutionize Your Teaching with <br />
          <span> Mwalimu Central - Effortlessly </span> <br />
          Customize CbC Forms and Go Paperless Today!
        </h1>{" "}
      </div>{" "}
      <Image src="/mc.png" alt="landing page" width={600} height={500} />{" "}
    </div>
  );
}

function App() {
  const [categories, setCategories] = useState([]);
  const [regularGrades, setRegularGrades] = useState([]);
  const [learningAreas, setLearningAreas] = useState([]);
  const [sneStrands, setSNEStrands] = useState([]);
  const [sneSubStrands, setSNESubStrands] = useState([]);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get("/api/categories/").then((res) => setCategories(res.data));
  }, []);

  const handleCategoryChange = (event) => {
    axios
      .get("/api/regular-grades/", {
        params: {
          category: event.target.value,
        },
      })
      .then((res) => setRegularGrades(res.data));
  };

  const handleRegularGradeChange = (event) => {
    axios
      .get("/api/learning-areas/", {
        params: {
          regular_grade: event.target.value,
        },
      })
      .then((res) => setLearningAreas(res.data));

    axios
      .get("/api/strands/", {
        params: {
          regular_grade: event.target.value,
        },
      })
      .then((res) => setSNEStrands(res.data));
  };

  const handleSNEStrandChange = (event) => {
    axios
      .get("/api/sub-strands/", {
        params: {
          strand: event.target.value,
        },
      })
      .then((res) => setSNESubStrands(res.data));
  };

  const handleSNESubStrandChange = (event) => {
    axios
      .get("/api/documents/", {
        params: {
          sub_strand: event.target.value,
        },
      })
      .then((res) => setDocuments(res.data));
  };

  return (
    <div>
      <h1> Search for Documents </h1>{" "}
      <form>
        <div>
          <label htmlFor="category"> Category: </label>{" "}
          <select id="category" name="category" onChange={handleCategoryChange}>
            <option value=""> Select a category </option>{" "}
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {" "}
                {category.name}{" "}
              </option>
            ))}{" "}
          </select>{" "}
        </div>{" "}
        <div>
          <label htmlFor="regular-grade"> Regular Grade: </label>{" "}
          <select
            id="regular-grade"
            name="regular-grade"
            onChange={handleRegularGradeChange}
          >
            <option value=""> Select a regular grade </option>{" "}
            {regularGrades.map((regularGrade) => (
              <option key={regularGrade.id} value={regularGrade.id}>
                {" "}
                {regularGrade.name}{" "}
              </option>
            ))}{" "}
          </select>{" "}
        </div>{" "}
        <div>
          <label htmlFor="learning-area"> Learning Area: </label>{" "}
          <select
            id="learning-area"
            name="learning-area"
            onChange={handleLearningAreaChange}
          >
            <option value=""> Select a learning area </option>{" "}
            {learningAreas.map((learningArea) => (
              <option key={learningArea.id} value={learningArea.id}>
                {" "}
                {learningArea.name}{" "}
              </option>
            ))}{" "}
          </select>{" "}
        </div>{" "}
        <div>
          <label htmlFor="sne-strand"> SNE Strand: </label>{" "}
          <select
            id="sne-strand"
            name="sne-strand"
            onChange={handleSNEStrandChange}
          >
            <option value=""> Select an SNE strand </option>{" "}
            {sneStrands.map((sneStrand) => (
              <option key={sneStrand.id} value={sneStrand.id}>
                {" "}
                {sneStrand.name}{" "}
              </option>
            ))}{" "}
          </select>{" "}
        </div>{" "}
        <div>
          <label htmlFor="sne-sub-strand"> SNE Sub Strand: </label>{" "}
          <select
            id="sne-sub-strand"
            name="sne-sub-strand"
            onChange={handleSNEStrandChange}
          >
            <option value=""> Select an SNE sub strand </option>{" "}
            {sneSubStrands.map((sneSubStrand) => (
              <option key={sneSubStrand.id} value={sneSubStrand.id}>
                {" "}
                {sneSubStrand.name}{" "}
              </option>
            ))}{" "}
          </select>{" "}
        </div>{" "}
        <div>
          <label htmlFor="document"> Document: </label>{" "}
          <select id="document" name="document" onChange={handleDocumentChange}>
            <option value=""> Select a document </option>{" "}
            {documents.map((document) => (
              <option key={document.id} value={document.id}>
                {" "}
                {document.name}{" "}
              </option>
            ))}{" "}
          </select>{" "}
        </div>{" "}
        <div>
          <label htmlFor="document-type"> Document Type: </label>{" "}
          <select
            id="document-type"
            name="document-type"
            onChange={handleDocumentTypeChange}
          >
            <option value=""> Select a document type </option>{" "}
            {documentTypes.map((documentType) => (
              <option key={documentType.id} value={documentType.id}>
                {" "}
                {documentType.name}{" "}
              </option>
            ))}{" "}
          </select>{" "}
        </div>{" "}
        <div>
          <button type="submit"> Get Document </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}

function Button() {
  return (
    <button className="btn" type="submit">
      Submit{" "}
    </button>
  );
}

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__text">
        <h1> Contact </h1>{" "}
        <h2>
          If you have any questions or concerns, please contact us at <br />
          <span>
            <a href="mailto:kamausuzan711@gmail.com"> Email </a>{" "}
          </span>{" "}
          <br />
          phone: +254 722 000 000{" "}
        </h2>{" "}
      </div>{" "}
    </div>
  );
}
