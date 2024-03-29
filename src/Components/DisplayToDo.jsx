import React from "react";
import { connect } from "react-redux";
// import { deleteTodo } from "../../redux/action/todo";

import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import { deleteTodo } from "../../redux/action/todo";

const DisplayToDo = ({ todos, deleteTodo }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <h3>All todos are here</h3>
              <DisplayCount />
              <ListGroup>
                {todos.map((todo, index) => (
                  <ListGroup.Item key={index}>
                    <h4>{todo.title}</h4>
                    <p>{todo.desc}</p>
                    <Button
                      onClick={(e) => deleteTodo(todo.id)}
                      variant="danger"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapDispatchToProps, mapStateToProps)(DisplayToDo);
