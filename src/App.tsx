import AppThemeProvider from "./providers/theme_provider";
import MaterialThemeProvider from "./providers/material_theme_provider";
import Aritcles from "./features/articles/articles";

function App() {

  return (
    <AppThemeProvider>
      <MaterialThemeProvider>
        <Aritcles />
      </MaterialThemeProvider>
    </AppThemeProvider>
  );
}

export default App;
