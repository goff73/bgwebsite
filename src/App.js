import logo from './logo.svg';
import './App.css';
import './Dashboard.css';

function App() {
  return (
    // Simple dashboard grid layout
    <div class="App">
      <div class="menu-icon">
        <i class="fas fa-bars header__menu"></i>
      </div>
      
      <header class="header">
        <h2>Bryan Goff</h2>
      </header>

      <aside class="sidenav">
        <div class="sidenav__profile">
          <div class="sidenav__profile-image"></div>
          <div class="sidenav__profile-text">Top Artists </div>
        </div>
        
        <ul class="sidenav__list">
          <li class="sidenav__list-item">Drake</li>
          <li class="sidenav__list-item">CHVRCHES</li>
          <li class="sidenav__list-item">Imagine Dragons</li>
          <li class="sidenav__list-item">Yellowcard</li>
          <li class="sidenav__list-item">Clint Black</li>
        </ul>
      </aside>

      <main class="main">
        <div class="main-overview">  {/* Sports */}
          <div class="overviewcard">
            <div class="overviewcard__icon">Wolves</div>
            <div class="overviewcard__info">Lakers 88-33</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Huskers</div>
            <div class="overviewcard__info">Spartans 33-22</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Nuggets</div>
            <div class="overviewcard__info">Kings 33-33</div>
          </div>
        </div>

        <div class="main-cards">
          <div class="card">Coding Career</div>
          <div class="card">Weather Lincoln, NE</div>
          <div class="card">Recommended Podcasts</div>
        </div>
      </main>

      <footer class="footer">
        <div class="footer__copyright">&copy; 2021 Goff Productions - Development Purposes Only</div>
      </footer>
    </div>
  );
}

export default App;
