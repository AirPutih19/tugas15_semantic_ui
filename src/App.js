import React,{Component} from "react";
import "semantic-ui-css/semantic.min.css"
import { Table,Menu,Label,Container,Grid, Icon, Search, Feed, Image, Comment, Header,Form,Button } from "semantic-ui-react";
class App extends Component{
  render(){
    return(
      <div>
        <Container>
              <Table celled>
            <Table.Header>
              <Table.Row textAlign="right">
                <Table.HeaderCell colSpan='2'> <Search placeholder="Search document..."/></Table.HeaderCell>
              </Table.Row>
              <Table.Row textAlign="center">
                <Table.HeaderCell>NamaDocument</Table.HeaderCell>
                <Table.HeaderCell>JenisFile</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
          <Grid>
            <Grid.Column width={11}>
            <Comment.Group threaded>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Satria</Comment.Author>
        <Comment.Metadata>
          <span>Today at 5:42PM</span>
        </Comment.Metadata>
        <Comment.Text>Halo...!</Comment.Text>
        <Comment.Actions>
          Reply
        </Comment.Actions>
      </Comment.Content>
      
    </Comment>
    

    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Danang</Comment.Author>
        <Comment.Metadata>
          <span>Today at 5:50PM</span>
        </Comment.Metadata>
        <Comment.Text>
          <p>Kerjakan Sesuatu Semampu Kamu...</p>
        </Comment.Text>
        <Comment.Actions>
          Reply
        </Comment.Actions>
      </Comment.Content>

      <Comment.Group>
        <Comment>
          <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Ricky</Comment.Author>
            <Comment.Metadata>
              <span>Just now</span>
            </Comment.Metadata>
            <Comment.Text>Kmu Sekarang Dimana Danang?</Comment.Text>
            <Comment.Actions>
              Reply
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Joe</Comment.Author>
        <Comment.Metadata>
          <span>1 days ago</span>
        </Comment.Metadata>
        <Comment.Text>Terimakasi Atas Nasihatnya</Comment.Text>
        <Comment.Actions>
          Reply
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
            </Grid.Column>
            <Grid.Column width={5}>
            <Feed>
              <Feed.Event>
                <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User> added you as a friend
                    <Feed.Date>3 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label><Icon name="pencil"/></Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    You submitted a new post to the page
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Meta>
                  <Feed.Extra text>
                    Saya Senang Belajar Bahasa Pemograman
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>11 Likes</Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg"/>
                <Feed.Content>
                  <Feed.Date>4 days ago</Feed.Date>
                  <Feed.Summary>
                    David added 2 new Image
                  </Feed.Summary>
                  <Feed.Extra images>
                     <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"/>
                     <Image src="https://cdn-images-1.medium.com/v2/resize:fit:1600/1*6kK9j74vyOmXYm1gN6ARhQ.png" />
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' />
                        2 Likes
                      </Feed.Like>
                    </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
              </Feed>
            </Grid.Column>
          </Grid>
          
      </Container>
      </div>
    );
  }
}

export default App;
