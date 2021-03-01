import './App.css';
import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import * as styles from './foo.scss';

const App = () => (
  <EuiFlexGroup>
    <EuiFlexItem grow={4}>
      <EuiPanel grow={true}>
        <EuiButton>Foo</EuiButton>
        <h1>hello world</h1>
        <div className={styles.div} />
      </EuiPanel>
    </EuiFlexItem>
    <EuiFlexItem grow={6}>
      <EuiPanel>
        <EuiButton>Foo</EuiButton>
        <h1>hello world</h1>
      </EuiPanel>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default App;
