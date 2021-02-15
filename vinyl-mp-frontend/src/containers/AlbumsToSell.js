import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class AlbumsToSell extends React.Component {

    render(){
        return(
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-12 p-5 bg-white rounded shadow-sm">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="p-2 px-3 text-uppercase">Product</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Price</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Quantity</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Remove</div>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row" class="border-0">
                                                <div class="p-2">
                                                    <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" class="img-fluid rounded shadow-sm"></img>
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">On Melancholy Hill</a></h5><span class="text-muted font-weight-normal font-italic d-block">Genre: Indie</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="border-0 align-middle"><strong>$79.00</strong></td>
                                            <td class="border-0 align-middle"><strong>3</strong></td>
                                            <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div class="p-2">
                                                    <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-3_cexmhn.jpg" alt="" width="70" class="img-fluid rounded shadow-sm"></img>
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"><a href="#" class="text-dark d-inline-block">Baby</a></h5><span class="text-muted font-weight-normal font-italic">Genre: Pop</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="align-middle"><strong>$79.00</strong></td>
                                            <td class="align-middle"><strong>3</strong></td>
                                            <td class="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div class="p-2">
                                                    <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-3_cexmhn.jpg" alt="" width="70" class="img-fluid rounded shadow-sm"></img>
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"><a href="#" class="text-dark d-inline-block">It's Not Over</a></h5><span class="text-muted font-weight-normal font-italic">Genre: Rock</span>

                                                    </div>
                                                </div>
                                            </th>
                                            <td class="align-middle"><strong>$79.00</strong></td>
                                            <td class="align-middle"><strong>3</strong></td>
                                            <td class="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
        )


    }}

export default AlbumsToSell;