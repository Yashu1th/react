import React from "react";
// import "./style.css";

const Products = ({ data }) => {
  return (
    <div>
      <div className="row ps-5 pb-5">
        {data.map((data) => (
          <div className="col-md-4 ps-5 pb-5">
            <div class="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={data.recipe.image}
                alt="card img cap"
              />
              <div class="card-body">
                <center>
                  <h5 class="card-title">{data.recipe.label}</h5>
                  <p class="card-text">
                    Total Amount Of Calories :{" "}
                    {Math.floor(data.recipe.calories)}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Know More
                  </a>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Products;
