import React, { Component } from "react";

class Products extends Component {
  state = {
    products: [
      {
        id: 1001,
        name: "Samsung Tv",
      },
      {
        id: 1002,
        name: "Onida",
      },
      {
        id: 1003,
        name: "LG",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>Products Page</h1>
        <div className="row">
          <div className="col-md-3">
            <h1>Sidebar</h1>
          </div>
          <div className="col-md-9">
            <button type="button" class="btn btn-primary">
              Add
            </button>
            <table className="table w-75 mx-auto">
              <thead>
                <tr>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((product) => (
                  <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                      <button type="button" class="btn btn-secondary">
                        Update
                      </button>
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
