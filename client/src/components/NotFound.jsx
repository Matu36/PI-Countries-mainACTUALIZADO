import notFound from "../img/404.svg";
import {
  PageNotFound,
  TopNotFound,
  LinkBack,
  Content,
} from "../styles/NotFound";
import { BackBtn } from "../styles/Detail";

export default function NotFound() {
  return (
    <PageNotFound>
      <Content>
        <LinkBack to="/home">
          <BackBtn title="Regresar" />
        </LinkBack>

        <div>
          <img src={notFound} alt="Page Not found" />
        </div>
        <TopNotFound>
          <h2>Página no encontrada</h2>
        </TopNotFound>
      </Content>
    </PageNotFound>
  );
}
