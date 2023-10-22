import { Col, Container, Row } from "react-bootstrap"
import { SidebarProfile } from "../../components/SidebarProfile"
import { MyOrders } from "../../components/MyOrders"

export const ProfileOrdersPage = () => {
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
            <MyOrders />
          </Col>
        </Row>

      </Container>
    </>
  )
}
