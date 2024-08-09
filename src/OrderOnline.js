import React from "react";
import recipes from './Recipes.js';
import Swal from 'sweetalert2';

const OrderOnline = () => {
    const handleOrder = (id) => {
        const selectedRecipe = recipes.find((recipe) => recipe.id === id);

        Swal.fire({
          title: `Order ${selectedRecipe.title}`,
          text: "Do you want to confirm this order?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, order it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Ordered!", "Your order has been confirmed.", "success");
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire("Cancelled", "Your order has been cancelled.", "error");
          }
        });
      };

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>Order from the comfort of your home!</h2>
                <button>Online Menu</button>
            </div>
            <div className="cards">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt={recipe.title} className="menu-image" />
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p>${recipe.price.toFixed(2)}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderOnline;