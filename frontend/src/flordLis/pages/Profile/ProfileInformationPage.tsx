import { Col, Container, Row } from "react-bootstrap"
import { BasicInformation } from "../../components/BasicInformation"
import { SidebarProfile } from "../../components/SidebarProfile"
import flordLisApi from "../../../apis/flordLisApi"
import { useEffect, useState } from "react"
import { useFlordLisSelector } from "../../../hooks/useFlordLis"
import { AuthState } from "../../../redux/slices/authSlice"

export const ProfileInformationPage = () => {

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [customerFullInfo, setCustomerFullInfo] = useState({});

  const { userId } = useFlordLisSelector<AuthState>((state) => state.auth);

  useEffect(() => {

    if (userId != undefined) {

      getCustomerFullInfo(userId);
    }
  }, []);

  const getCustomerFullInfo = async (id: number) => {

    try {

      const result = await flordLisApi.get('/customer/' + id);
      
      setCustomerFullInfo(result.data);
      setIsLoaded(true);

    } catch (error) {

      setIsLoaded(false);
      setCustomerFullInfo({});
    }
  }
  
  return !isLoaded ? null : (
    <>
      <Container className="mt-5">

        {/* Sidebar */}
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <SidebarProfile />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <br />
            {
              (customerFullInfo)
                ?
                <BasicInformation customerFullInfo={customerFullInfo} />
                :
                null
            }
          </Col>
        </Row>

      </Container>
    </>
  )
}
