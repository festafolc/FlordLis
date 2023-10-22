import { Col, Container, Row } from "react-bootstrap"
import { BasicInformation } from "../../components/BasicInformation"
import { SidebarProfile } from "../../components/SidebarProfile"

export const ProfileInformationPage = () => {
  return (
    <>
      <Container className="mt-5">

        {/* Sidebar */}
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <SidebarProfile />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <br />
            <BasicInformation />
          </Col>
        </Row>

      </Container>
    </>
  )
}
