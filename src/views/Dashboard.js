/*!


*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Oficinas</p>
                        <CardTitle tag="p">
	    			<iframe src="http://offgrid.pe:3000/d-solo/WsiB9qCGz/empresa-1?orgId=1&refresh=10s&panelId=8" width="100%" height="100%" frameborder="0"></iframe>
	    		</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Grupo Electrógeno</p>
                        <CardTitle tag="p">
				<iframe src="http://offgrid.pe:3000/d-solo/WsiB9qCGz/empresa-1?orgId=1&refresh=10s&panelId=8" width="100%" height="100%" frameborder="0"></iframe>
	    		</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Cuarto de Servidores</p>
                        <CardTitle tag="p">
				<iframe src="http://offgrid.pe:3000/d-solo/WsiB9qCGz/empresa-1?orgId=1&refresh=10s&panelId=8" width="100%" height="100%" frameborder="0"></iframe>
	    		</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
            </Col>
          </Row>
          <Row>
            <Col md="12">
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Alertas de la última hora</CardTitle>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Atendidas{" "}
                    <i className="fa fa-circle text-warning" /> En curso 1{" "}
                    <i className="fa fa-circle text-danger" /> En curso 2{" "}
	    	    <i className="fa fa-circle text-gray" /> Falsa alarma{" "}

                  </div>
                  <hr />
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Alertas a lo largo del año</CardTitle>
                </CardHeader>
                <CardBody>
		    <iframe src="http://offgrid.pe:3000/d-solo/WsiB9qCGz/empresa-1?orgId=1&refresh=10s&panelId=6" width="100%" height="100%" frameborder="0"></iframe>
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Mes Actual{" "}
                    <i className="fa fa-circle text-warning" /> Mes Anterior
                  </div>
                  <hr />
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
