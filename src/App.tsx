import NewsAppBar from "./layout/app_bar";
import AppThemeProvider from "./providers/theme_provider";
import MaterialThemeProvider from "./providers/material_theme_provider";

function App() {
  


  return (
    <AppThemeProvider>
      <MaterialThemeProvider>
        <NewsAppBar />
      </MaterialThemeProvider>
    </AppThemeProvider>
  );
}

export default App;
