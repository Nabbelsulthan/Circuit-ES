


import "./ProjectDocuments.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL, STORAGE_URL } from "./Config/Config";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
// import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import ConnectLoading from "./Connect/ConnectLoading";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import PhotoRoundedIcon from "@mui/icons-material/PhotoRounded";





export default function ProjectDocuments() {

  const { id } = useParams();

  console.log("Project ID:", id);

  const [documents, setDocuments] =
    useState([]);

  const [fatReports, setFatReports] =
    useState([]);

  const [project, setProject] =
    useState(null);



  const [gallery, setGallery] =
    useState([]);


  const [selectedImage,
    setSelectedImage] =
    useState(null);

  const [showDocuments, setShowDocuments] =
    useState(false);
  const [showFatReports, setShowFatReports] =
    useState(false);

  const [showGallery, setShowGallery] =
    useState(false);






  useEffect(() => {

  fetch(
    `${API_URL}/api/customer-projects/${id}`
  )
    .then((res) => res.json())
    .then((data) => {

      console.log("PROJECT:", data);

      setProject(data);

    });

  fetch(
    `${API_URL}/api/documents/${id}`
  )
    .then((res) => res.json())
    .then((data) => {

      console.log("DOCUMENTS:", data);

      setDocuments(data);

    });

  fetch(
    `${API_URL}/api/fat-reports/${id}`
  )
    .then((res) => res.json())
    .then((data) => {

      console.log("FAT REPORTS:", data);

      setFatReports(data);

    });

  fetch(
    `${API_URL}/api/gallery/${id}`
  )
    .then((res) => res.json())
    .then((data) => {

      setGallery(data);

    });

}, [id]);

  useEffect(() => {

    if (documents.length === 1) {

      setShowDocuments(true);

    }

  }, [documents]);

  useEffect(() => {

    if (fatReports.length === 1) {

      setShowFatReports(true);

    }

  }, [fatReports]);

  useEffect(() => {

    if (gallery.length === 1) {

      setShowGallery(true);

    }

  }, [gallery]);

  if (!project) {

    return <ConnectLoading />;

  }

  return (

    <div className="project-doc-page">

      <div className="project-header">

        <div className="project-folder">

          <FolderOpenRoundedIcon
            className="project-folder-icon"
          />

        </div>

        <div className="project-header-content">



          <h1>
            {project.project_name}
            {console.log("Project Name:", project.project_name)}
          </h1>

          <p>
            Engineering documents, FAT reports and
            project progress gallery for this project.
          </p>

        </div>

      </div>

      <div
        className="section-header clickable"
        onClick={() =>
          setShowDocuments(!showDocuments)
        }
      >

        <div className="section-left">

          <DescriptionRoundedIcon />

          <h2>
            Documents
          </h2>

        </div>

        <div className="section-right">

          <span className="section-count">

            {documents.length}

          </span>

          {/* {showDocuments ? (

            <KeyboardArrowDownRoundedIcon />

          ) : (

            <KeyboardArrowRightRoundedIcon />

          )} */}


          <KeyboardArrowRightRoundedIcon
            className={`expand-arrow ${showDocuments ? "expanded" : ""
              }`}
          />

        </div>

      </div>

      {showDocuments && (

        <div className="document-grid">

          {documents.length === 0 ? (

            <div className="empty-section">

              <DescriptionRoundedIcon
                className="empty-section-icon"
              />

              <h3>
                No Documents Available
              </h3>

              <p>
                Engineering drawings, manuals and
                technical documents will appear here
                once they have been uploaded for
                this project.
              </p>

            </div>

          ) : (

            documents.map((doc) => {

              const extension =
                doc.file_name
                  .split(".")
                  .pop()
                  .toUpperCase();

              const fileType = {

                PDF: "PDF Document",

                DWG: "CAD Drawing",

                DXF: "CAD Drawing",

                DOC: "Word Document",

                DOCX: "Word Document",

                XLS: "Excel Spreadsheet",

                XLSX: "Excel Spreadsheet",

                PPT: "PowerPoint",

                PPTX: "PowerPoint",

                JPG: "Image",

                JPEG: "Image",

                PNG: "Image",

                ZIP: "ZIP Archive",

                RAR: "RAR Archive",

              }[extension] || `${extension} File`;

              return (

                <div
                  key={doc.id}
                  className="document-card"
                >

                  <div className="document-left">

                    <div className="document-icon">

                      <DescriptionRoundedIcon />

                    </div>

                    <div>

                      <h4 className="document-title">
                        {doc.file_name}
                      </h4>

                      <span className="document-type">
                        {fileType}
                      </span>

                    </div>

                  </div>

                  <a
                    href={`${STORAGE_URL}/documents/${doc.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                    className="download-btn"
                  >

                    <DownloadRoundedIcon />

                    Download

                  </a>

                </div>

              );

            })

          )}

        </div>

      )}

      <div
        className="section-header clickable"
        onClick={() =>
          setShowFatReports(!showFatReports)
        }
      >

        <div className="section-left">

          <FactCheckRoundedIcon
            className="fat-icon"
          />

          <h2>
            FAT Reports
          </h2>

        </div>

        <div className="section-right">

          <span className="section-count fat-count">

            {fatReports.length}

          </span>

          {/* {showFatReports ? (

            <KeyboardArrowDownRoundedIcon />

          ) : (

            <KeyboardArrowRightRoundedIcon />

          )} */}

          <KeyboardArrowRightRoundedIcon
            className={`expand-arrow ${showFatReports ? "expanded" : ""
              }`}
          />

        </div>

      </div>

      {showFatReports && (

        <div className="document-grid">

          {fatReports.length === 0 ? (

            <div className="empty-section">

              <VerifiedRoundedIcon
                className="empty-section-icon"
              />

              <h3>
                No FAT Reports Available
              </h3>

              <p>
                Factory Acceptance Test reports
                will appear here once testing has
                been completed and uploaded.
              </p>

            </div>

          ) : (

            fatReports.map((report) => (

              <div
                key={report.id}
                className="document-card"
              >

                <div className="document-left">

                  <div className="fat-document-icon">

                    <VerifiedRoundedIcon />

                  </div>

                  <div>

                    <h4 className="document-title">

                      {report.report_name}

                    </h4>

                    <span className="document-type">

                      Factory Acceptance Test

                    </span>

                  </div>

                </div>

                <a
                  href={`${STORAGE_URL}/fat-reports/${report.file_path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="fat-download-btn"
                >

                  <DownloadRoundedIcon />

                  Download

                </a>

              </div>

            ))

          )}

        </div>

      )}

      <div
        className="section-header clickable"
        onClick={() =>
          setShowGallery(!showGallery)
        }
      >

        <div className="section-left">

          <PhotoLibraryRoundedIcon
            className="gallery-header-icon"
          />

          <h2>
            Progress Gallery
          </h2>

        </div>

        <div className="section-right">

          <span className="section-count gallery-count">

            {gallery.length}

          </span>

          {/* {showGallery ? (

            <KeyboardArrowDownRoundedIcon />

          ) : (

            <KeyboardArrowRightRoundedIcon />

          )} */}


          <KeyboardArrowRightRoundedIcon
            className={`expand-arrow ${showGallery ? "expanded" : ""
              }`}
          />

        </div>

      </div>

      {showGallery && (

        gallery.length === 0 ? (

          <div className="empty-section">

            <PhotoLibraryRoundedIcon
              className="empty-section-icon"
            />

            <h3>
              No Progress Images Yet
            </h3>

            <p>
              Progress photographs will appear
              here as work advances on your
              project.
            </p>

          </div>

        ) : (

          <div className="gallery-grid">

            {gallery.map((image) => (

              <div
                key={image.id}
                className="gallery-card"
              >

                <div className="gallery-image-wrapper">


                  <img
                    src={`${STORAGE_URL}/gallery/${image.image_path}`}
                    alt={image.caption}
                    className="gallery-image"
                    onClick={() => {

                      console.log("Clicked");

                      console.log(image);

                      setSelectedImage(image);

                    }}

                  />

                  <div className="gallery-overlay">

                    <PhotoRoundedIcon />

                    <span>
                      View Image
                    </span>

                  </div>

                </div>

                <div className="gallery-info">

                  <h4>

                    {image.caption || "Project Progress"}

                  </h4>

                </div>

              </div>

            ))}

          </div>

        )

      )}

      {selectedImage && (

        <div
          className="image-modal"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <div
            className="image-preview-container"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-image-btn"
              onClick={() =>
                setSelectedImage(null)
              }
            >
              ✕
            </button>

            <img
              src={`${STORAGE_URL}/gallery/${selectedImage.image_path}`}
              alt={selectedImage.caption}
              className="image-preview"
            />

            <div className="image-preview-caption">

              {selectedImage.caption || "Project Progress"}

            </div>

          </div>

        </div>

      )}


    </div>

  );

}