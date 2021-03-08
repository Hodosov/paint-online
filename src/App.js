import { AppHeader } from "./components/Toolbar";
import { Canvas } from './components/Canvas'
import { Container } from "@material-ui/core";

function App() {
  return (
    <div>
      <AppHeader />
      <Container>
      <Canvas />
      </Container>
    </div>
  );
}

export default App;
