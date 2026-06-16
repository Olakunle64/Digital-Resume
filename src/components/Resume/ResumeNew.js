import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import siteConfig from "../../config/siteConfig";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { resume, features } = siteConfig;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!resume.enabled) return null;

  const DownloadButton = () => (
    <Button
      variant="primary"
      href={resume.pdf}
      target="_blank"
      rel="noreferrer"
      className="resume-download-btn"
    >
      <AiOutlineDownload />
      &nbsp;{resume.downloadLabel}
    </Button>
  );

  return (
    <div>
      <Container fluid className="resume-section">
        {features.particles && <Particle />}
        <p className="section-eyebrow text-center">Credentials</p>
        <h1 className="project-heading text-center">{resume.pageTitle}</h1>

        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "20px" }}>
          <DownloadButton />
        </Row>

        <Row className="resume">
          <div className="resume-pdf-frame">
            <Document file={resume.pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
          <DownloadButton />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
