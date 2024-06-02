
import './App.css';

const EconomyCard = () => (
  <div className="card economy-card">
    <h2 className="card-header">Economy</h2>
    <p className="card-description">Основной план для начального уровня. Включает базовые функции для старта.</p>
    <div className="card-price">$9.99 / месяц</div>
    <button className="card-button economy-button">Подписаться</button>
  </div>
);

const StandardCard = () => (
  <div className="card standard-card">
    <h2 className="card-header">Standard</h2>
    <p className="card-description">Оптимальный план для большинства пользователей. Включает дополнительные функции.</p>
    <div className="card-price">$19.99 / месяц</div>
    <button className="card-button standard-button">Подписаться</button>
  </div>
);

const PremiumCard = () => (
  <div className="card premium-card">
    <h2 className="card-header">Premium</h2>
    <p className="card-description">Полный набор функций для профессионалов. Включает все доступные функции.</p>
    <div className="card-price">$29.99 / месяц</div>
    <button className="card-button premium-button">Подписаться</button>
  </div>
);

const App = () => (
  <div className="card-container">
    <EconomyCard />
    <StandardCard />
    <PremiumCard />
  </div>
);

export default App;
