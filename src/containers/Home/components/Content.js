import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Container, Row, Col, Button, Jumbotron, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import AlbumJSON from './Album.json';


export default class Content extends Component {
  state = {
    modal: false,
    cart: [],
  }

  toggle = () => {
    this.setState({modal: !this.state.modal, });
  }
  addToCart = (product) => {
    const newCart = this.state.cart;
    newCart.push(product);
    this.setState({
      cart: newCart,
    });
  }
  checkout = (TotalPrice) => {
    alert(`已從你信用卡扣除${TotalPrice}元`);
  }
  render() {
    const TotalPrice = this.state.cart.reduce((acc, item) => acc + item.price, 0);
    return (
      <Container>
        <Row>
          <Col md="12">
            <Jumbotron>
              <h1 className="display-3">美客唱片</h1>
              <p className="lead">
                  美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源
                </p>
              <p className="lead">
                  並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評
                </p>
              <p className="lead">
                  不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動
                </p>
              <p className="lead">
                  進一步擴大影響力，提昇流行音樂產業的動能
                </p>
              <hr className="my-2" />
              <p className="lead">
                <Button onClick={this.toggle} color="primary">購物車({this.state.cart.length})</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          {
            AlbumJSON.map(product => (
              <Col xs="6" md="4">
                <Card>
                  <CardImg top width="100%" src={product.img} alt="Card image cap" />
                  <CardBlock>
                    <CardTitle>{product.title}</CardTitle>
                    <CardSubtitle>價格：{product.price}</CardSubtitle>
                    <CardText>{product.desc}</CardText>
                    <Button disabled={this.state.cart.find(item => item.id === product.id)} onClick={() => this.addToCart(product)}>購買</Button>
                  </CardBlock>
                </Card>
              </Col>
            ))
          }
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>購物車</ModalHeader>
          <ModalBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>品項</th>
                  <th>價格</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.cart.map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.checkout(TotalPrice)}>結帳</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>取消</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
