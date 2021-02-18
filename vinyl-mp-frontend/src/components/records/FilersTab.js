import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

class FiltersTab extends React.Component {
    render() {
        return (
            <div className="container">
                <h5>Filters</h5>

                    <h6 className="col-sm font-weight-bold ">Condition</h6>

                    <div className="form-check ">
                        <input
                            type="checkbox"
                            class="form-check-input filled-in"
                            id="new"
                        />
                        <label
                            className="form-check-label small text-uppercase card-link-secondary"
                            for="new"
                        >New</label
                        >
                    </div>
                    <div className="form-check ">
                        <input
                            type="checkbox"
                            className="form-check-input filled-in"
                            id="used"
                        />
                        <label
                            className="form-check-label small text-uppercase card-link-secondary"
                            for="used"
                        >Used</label
                        >
                    </div>
                    <div className="form-check ">
                        <input
                            type="checkbox"
                            className="form-check-input filled-in"
                            id="collectible"
                        />
                        <label
                            className="form-check-label small text-uppercase card-link-secondary"
                            for="collectible"
                        >Collectible</label
                        >
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input filled-in"
                            id="renewed"
                        />
                        <label
                            className="form-check-label small text-uppercase card-link-secondary"
                            for="renewed"
                        >Renewed</label
                        >
                    </div>
                {/*<!-- Section: Condition -->*/}

                {/*<!-- Section: Average -->*/}
                {/*<section>*/}
                {/*    <h6 class="font-weight-bold mb-3">Avg. Customer Review</h6>*/}

                {/*    <label for="customer-rating-4" class="z-depth-0 py-0">*/}
                {/*        <ul class="rating waves-light mb-0">*/}
                {/*            <li>*/}
                {/*                <i class="fas fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="fas fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="fas fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="fas fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="far fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <p class="small text-uppercase card-link-secondary px-2">*/}
                {/*                    & Up*/}
                {/*                </p>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*        <input*/}
                {/*            id="customer-rating-4"*/}
                {/*            class="filter-option"*/}
                {/*            type="checkbox"*/}
                {/*        />*/}
                {/*    </label>*/}
                {/*    <br/>*/}
                {/*    <label for="customer-rating-3" class="z-depth-0 py-0">*/}
                {/*        <ul class="rating waves-light mb-0">*/}
                {/*            <li>*/}
                {/*                <i class="fas fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="fas fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="fas fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="far fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="far fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <p class="small text-uppercase card-link-secondary px-2">*/}
                {/*                    & Up*/}
                {/*                </p>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*        <input*/}
                {/*            id="customer-rating-3"*/}
                {/*            class="filter-option"*/}
                {/*            type="checkbox"*/}
                {/*        />*/}
                {/*    </label>*/}
                {/*    <br/>*/}
                {/*    <label for="customer-rating-2" class="z-depth-0 py-0">*/}
                {/*        <ul class="rating waves-light mb-0">*/}
                {/*            <li>*/}
                {/*                <i class="fas fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="fas fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="far fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="far fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="far fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <p class="small text-uppercase card-link-secondary px-2">*/}
                {/*                    & Up*/}
                {/*                </p>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*        <input*/}
                {/*            id="customer-rating-2"*/}
                {/*            class="filter-option"*/}
                {/*            type="checkbox"*/}
                {/*        />*/}
                {/*    </label>*/}
                {/*    <br/>*/}
                {/*    <label for="customer-rating-1" class="z-depth-0 py-0">*/}
                {/*        <ul class="rating waves-light mb-0">*/}
                {/*            <li>*/}
                {/*                <i class="fas fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="far fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="far fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="far fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <i class="far fa-star fa-sm text-primary"></i>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <p class="small text-uppercase card-link-secondary px-2">*/}
                {/*                    & Up*/}
                {/*                </p>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*        <input*/}
                {/*            id="customer-rating-1"*/}
                {/*            class="filter-option"*/}
                {/*            type="checkbox"*/}
                {/*        />*/}
                {/*    </label>*/}
                {/*</section>*/}
                {/*<!-- Section: Average -->*/}

                {/*<!-- Section: Price -->*/}
                {/*<section class="mb-4">*/}
                {/*    <h6 class="font-weight-bold mb-3">Price</h6>*/}

                {/*    <div class="form-check pl-0 mb-3">*/}
                {/*        <input*/}
                {/*            type="radio"*/}
                {/*            class="form-check-input"*/}
                {/*            id="under25"*/}
                {/*            name="materialExampleRadios"*/}
                {/*        />*/}
                {/*        <label*/}
                {/*            class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*            for="under25"*/}
                {/*        >Under $25</label*/}
                {/*        >*/}
                {/*    </div>*/}
                {/*    <div class="form-check pl-0 mb-3">*/}
                {/*        <input*/}
                {/*            type="radio"*/}
                {/*            class="form-check-input"*/}
                {/*            id="2550"*/}
                {/*            name="materialExampleRadios"*/}
                {/*        />*/}
                {/*        <label*/}
                {/*            class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*            for="2550"*/}
                {/*        >$25 to $50</label*/}
                {/*        >*/}
                {/*    </div>*/}
                {/*    <div class="form-check pl-0 mb-3">*/}
                {/*        <input*/}
                {/*            type="radio"*/}
                {/*            class="form-check-input"*/}
                {/*            id="50100"*/}
                {/*            name="materialExampleRadios"*/}
                {/*        />*/}
                {/*        <label*/}
                {/*            class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*            for="50100"*/}
                {/*        >$50 to $100</label*/}
                {/*        >*/}
                {/*    </div>*/}
                {/*    <div class="form-check pl-0 mb-3">*/}
                {/*        <input*/}
                {/*            type="radio"*/}
                {/*            class="form-check-input"*/}
                {/*            id="100200"*/}
                {/*            name="materialExampleRadios"*/}
                {/*        />*/}
                {/*        <label*/}
                {/*            class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*            for="100200"*/}
                {/*        >$100 to $200</label*/}
                {/*        >*/}
                {/*    </div>*/}
                {/*    <div class="form-check pl-0 mb-3">*/}
                {/*        <input*/}
                {/*            class="form-check-input"*/}
                {/*            id="200above"*/}
                {/*            name="materialExampleRadios"*/}
                {/*        />*/}
                {/*        <label*/}
                {/*            class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*            for="200above"*/}
                {/*        >$200 & Above</label*/}
                {/*        >*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<!-- Section: Price -->*/}

                {/*<!-- Section: Size -->*/}
                {/*<section class="mb-4">*/}
                {/*    <h6 class="font-weight-bold mb-3">Size</h6>*/}

                {/*    <div class="form-check pl-0 mb-3">*/}
                {/*        <input*/}
                {/*            type="checkbox"*/}
                {/*            class="form-check-input filled-in"*/}
                {/*            id="34"*/}
                {/*        />*/}
                {/*        <label*/}
                {/*            class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*            for="34"*/}
                {/*        >34</label*/}
                {/*        >*/}
                {/*    </div>*/}
                {/*    <div class="form-check pl-0 mb-3">*/}
                {/*        <input*/}
                {/*            type="checkbox"*/}
                {/*            class="form-check-input filled-in"*/}
                {/*            id="36"*/}
                {/*        />*/}
                {/*        <label*/}
                {/*            class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*            for="36"*/}
                {/*        >36</label*/}
                {/*        >*/}
                {/*    </div>*/}
                {/*    <div class="form-check pl-0 mb-3">*/}
                {/*        <input*/}
                {/*            type="checkbox"*/}
                {/*            class="form-check-input filled-in"*/}
                {/*            id="38"*/}
                {/*        />*/}
                {/*        <label*/}
                {/*            class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*            for="38"*/}
                {/*        >38</label*/}
                {/*        >*/}
                {/*    </div>*/}
                {/*    <div class="form-check pl-0 mb-3">*/}
                {/*        <input*/}
                {/*            type="checkbox"*/}
                {/*            class="form-check-input filled-in"*/}
                {/*            id="40"*/}
                {/*        />*/}
                {/*        <label*/}
                {/*            class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*            for="40"*/}
                {/*        >40</label*/}
                {/*        >*/}
                {/*    </div>*/}
                {/*    <a*/}
                {/*        class="btn btn-link text-muted p-0"*/}
                {/*        data-toggle="collapse"*/}
                {/*        href="#collapseExample"*/}
                {/*        aria-expanded="false"*/}
                {/*        aria-controls="collapseExample"*/}
                {/*    >*/}
                {/*        More*/}
                {/*    </a>*/}
                {/*    <div class="collapse pt-3" id="collapseExample">*/}
                {/*        <div class="form-check pl-0 mb-3">*/}
                {/*            <input*/}
                {/*                type="checkbox"*/}
                {/*                class="form-check-input filled-in"*/}
                {/*                id="42"*/}
                {/*            />*/}
                {/*            <label*/}
                {/*                class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*                for="42"*/}
                {/*            >42</label*/}
                {/*            >*/}
                {/*        </div>*/}
                {/*        <div class="form-check pl-0 mb-3">*/}
                {/*            <input*/}
                {/*                type="checkbox"*/}
                {/*                class="form-check-input filled-in"*/}
                {/*                id="44"*/}
                {/*            />*/}
                {/*            <label*/}
                {/*                class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*                for="44"*/}
                {/*            >44</label*/}
                {/*            >*/}
                {/*        </div>*/}
                {/*        <div class="form-check pl-0 mb-3">*/}
                {/*            <input*/}
                {/*                type="checkbox"*/}
                {/*                class="form-check-input filled-in"*/}
                {/*                id="46"*/}
                {/*            />*/}
                {/*            <label*/}
                {/*                class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*                for="46"*/}
                {/*            >46</label*/}
                {/*            >*/}
                {/*        </div>*/}
                {/*        <div class="form-check pl-0 mb-3">*/}
                {/*            <input*/}
                {/*                type="checkbox"*/}
                {/*                class="form-check-input filled-in"*/}
                {/*                id="50"*/}
                {/*            />*/}
                {/*            <label*/}
                {/*                class="form-check-label small text-uppercase card-link-secondary"*/}
                {/*                for="50"*/}
                {/*            >50</label*/}
                {/*            >*/}
                {/*        </div>*/}
                {/*    </div>*/}
            </div>
        )
    }
}

export default FiltersTab