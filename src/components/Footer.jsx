import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "2rem 0",
        marginTop: "2rem",
        borderTop: "1px solid #e9ecef",
      }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <img
                src="/WhatsApp Image 2025-04-08 at 17.31.59_d4eac1b3.jpg"
                alt="FoamEase Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
              <h5>FoamEase</h5>
            </div>
            <p>
              Your portable hygiene companion designed for convenience and
              sustainability.
            </p>
          </Col>
          <Col md={6}>
            <h5>Contact</h5>
            <p>N.Rishitha</p>
            <p>P.Tanu sri</p>
            <p>© {new Date().getFullYear()} FoamEase. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
