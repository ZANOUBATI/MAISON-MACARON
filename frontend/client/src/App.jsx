import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Coffret Macarons Premium",
    category: "Macarons",
    price: 120,
    oldPrice: 145,
    discount: "-17%",
    image:
      "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Coffret Macarons Colorés",
    category: "Macarons",
    price: 99,
    oldPrice: 145,
    discount: "-32%",
    image:
      "https://images.unsplash.com/photo-1571506165871-ee72a35bcf7f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Coffret Dattes Premium",
    category: "Dattes",
    price: 150,
    oldPrice: 180,
    discount: "-17%",
    image:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Coffret Ramadan",
    category: "Ramadan",
    price: 180,
    oldPrice: 220,
    discount: "-18%",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Pâte de Fruits",
    category: "Pâtes De Fruits",
    price: 85,
    oldPrice: 100,
    discount: "-15%",
    image:
      "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Tartelette Fruits Rouges",
    category: "Tartelettes",
    price: 60,
    oldPrice: 70,
    discount: "-14%",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "Tous",
  "Macarons",
  "Canette Cake",
  "Dattes",
  "Ramadan",
  "Pâtes De Fruits",
  "Tartelettes",
  "Spécial",
];

function App() {
  const [category, setCategory] = useState("Tous");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      category === "Tous" || product.category === category;

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <div className="logo-title">MAISON-MACARON</div>
          <div className="logo-subtitle">maître artisan</div>
        </div>

        <nav>
          <a href="#home">Accueil</a>
          <a href="#shop">Boutique</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>

          <button className="cart-button">
            🛒 Panier
            <span>{cart.length}</span>
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">MAÎTRE ARTISAN</p>

          <h1>
            L'art du <span>macaron</span>
          </h1>

          <p>
            Découvrez nos créations artisanales préparées
            avec passion et les meilleurs ingrédients.
          </p>

          <a href="#shop" className="hero-button">
            Découvrir la boutique
          </a>
        </div>
      </section>

      {/* SHOP */}
      <main className="shop" id="shop">

        <div className="shop-header">
          <h2>Notre Boutique</h2>

          <p>
            Découvrez tous nos produits et trouvez le coffret parfait
          </p>
        </div>

        {/* SEARCH */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* CATEGORIES */}
        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="products">

          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="discount">
                  PROMO {product.discount}
                </span>

                <span className="popular">
                  Populaire
                </span>
              </div>

              <div className="product-info">

                <p className="category">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <div className="price">
                  <strong>{product.price} DH</strong>
                  <del>{product.oldPrice} DH</del>
                </div>

                <button
                  className="add-button"
                  onClick={() => addToCart(product)}
                >
                  Ajouter au panier
                </button>

              </div>

            </div>
          ))}

        </div>

        {filteredProducts.length === 0 && (
          <div className="empty">
            Aucun produit trouvé.
          </div>
        )}

      </main>

      {/* ABOUT */}
      <section className="about" id="about">
        <div>
          <p className="small-title">NOTRE SAVOIR-FAIRE</p>

          <h2>
            Des créations faites
            <span> avec amour</span>
          </h2>

          <p>
            Chaque produit est préparé avec soin dans notre atelier.
            Nous sélectionnons les meilleurs ingrédients pour vous
            proposer des créations gourmandes et élégantes.
          </p>

          <button>
            En savoir plus
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">

        <div>
          <h3>le macaron</h3>
          <p>
            Maître artisan
          </p>
        </div>

        <div>
          <h4>Boutique</h4>
          <a href="#shop">Macarons</a>
          <a href="#shop">Dattes</a>
          <a href="#shop">Ramadan</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p>📍 Casablanca, Maroc</p>
          <p>📞 +212 6 53 49 43 43</p>
          <p>✉️ MAISON-MACARON@gmail.com</p>
          
        </div>

      </footer>

    </div>
  );
}

export default App;