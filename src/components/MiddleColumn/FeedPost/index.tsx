import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://cdn.mensagenscomamor.com/content/images/m000479446.jpg?v=1" alt="Cyborg" />
          <Column>
            <h3>Cyborg</h3>
            <h4>Teste de Clone</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://cdn.mensagenscomamor.com/content/images/m000479446.jpg?v=1"
          alt="Cyborg"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
