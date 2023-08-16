"use client";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBarsStaggered, faPlus } from "@fortawesome/free-solid-svg-icons";

function IndexPage() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>
            <div className="main-container d-flex">
                <div className="sidebar" id="side_nav">
                    <div className="header-box px-2 pt-3 pb-4">
                        <h1 className="fs-2 text-center pt-2">
                            <span className="bg-white  text-dark rounded shadow px-2 me-2">Walmart</span>
                        </h1>
                        <button className="btn  d-md-none d-block close-btn px-1 py-0 text-white bg-white ">
                            <FontAwesomeIcon icon={faBarsStaggered} className="text-dark" />
                        </button>
                    </div>

                    <ul className="list-unstyled px-2">
                        <li className="my-2 active">
                            <a href="#" className="text-decoration-none ">
                                <FontAwesomeIcon icon={faArrowRight} /> Home
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="text-decoration-none  d-flex justify-content-between">
                                <span>
                                    <FontAwesomeIcon icon={faArrowRight} /> Eventos Recients
                                </span>
                                <span className="badge bg-secondary text-wrap mx-2">10</span>
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="text-decoration-none ">
                                <FontAwesomeIcon icon={faArrowRight} /> Eventos Abiertos
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="text-decoration-none ">
                                <FontAwesomeIcon icon={faArrowRight} /> Eventos Cerrados
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="text-decoration-none ">
                                <FontAwesomeIcon icon={faArrowRight} /> Buscar Eventos
                            </a>
                        </li>
                    </ul>
                    <hr className="h-color mx-3"></hr>
                    <ul className="list-unstyled px-2">
                        <li className="my-2">
                            <a href="#" className="text-decoration-none ">
                                <FontAwesomeIcon icon={faArrowRight} /> Eventos por Categoria
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="text-decoration-none ">
                                <FontAwesomeIcon icon={faArrowRight} /> Buscar por Formato
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                Eventos Criticos
                            </a>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item pe-2">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                                CEDIS
                                            </label>
                                        </div>
                                    </li>
                                    <li className="nav-item pe-2">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                                Plantas
                                            </label>
                                        </div>
                                    </li>
                                    <li className="nav-item pe-2">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                                HO
                                            </label>
                                        </div>
                                    </li>
                                    <li className="nav-item pe-2">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                                Walmart
                                            </label>
                                        </div>
                                    </li>
                                    <li className="nav-item pe-2">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                                Super
                                            </label>
                                        </div>
                                    </li>
                                    <li className="nav-item pe-2">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                                Bodega
                                            </label>
                                        </div>
                                    </li>

                                    <li className="nav-item">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                                Descuento
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <div className="d-flex" role="search">
                                    <div className="dropdown me-2">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            PAISES
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    COSTA RICA
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    GUATEMALA
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                                        Modal title
                                    </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">...</div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row m-4 d-flex justify-content-center">
                            <div className="col-2 p-2">
                                <h1 className="text-center">10</h1>
                                <h5 className="text-center">Eventos Activos</h5>
                            </div>
                            <div className="col-2 p-2">
                                <h1 className="text-center">5</h1>
                                <h5 className="text-center">Criticos Activos</h5>
                            </div>
                            <div className="col-2 p-2">
                                <h1 className="text-center">50</h1>
                                <h5 className="text-center">Criticos Incativos</h5>
                            </div>
                            <div className="col-2 p-2">
                                <h1 className="text-center">1</h1>
                                <h5 className="text-center">Eventos Mayores</h5>
                            </div>
                            <div className="col-2 p-2">
                                <h1 className="text-center">4</h1>
                                <h5 className="text-center">On hold</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-striped table-hover table-secondary">
                                    <thead>
                                        <th>Incident</th>
                                        <th>Live Status</th>
                                        <th>Priority</th>
                                        <th>Description</th>
                                        <th>Site</th>
                                        <th>Country</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Duration</th>
                                        <th>Status</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Incident</td>
                                            <td>Live Status</td>
                                            <td>Priority</td>
                                            <td>Description</td>
                                            <td>Site</td>
                                            <td>Country</td>
                                            <td>Start Time</td>
                                            <td>End Time</td>
                                            <td>Duration</td>
                                            <td>Status</td>
                                        </tr>
                                        <tr>
                                            <td>Incident</td>
                                            <td>Live Status</td>
                                            <td>Priority</td>
                                            <td>Description</td>
                                            <td>Site</td>
                                            <td>Country</td>
                                            <td>Start Time</td>
                                            <td>End Time</td>
                                            <td>Duration</td>
                                            <td>Status</td>
                                        </tr>
                                        <tr>
                                            <td>Incident</td>
                                            <td>Live Status</td>
                                            <td>Priority</td>
                                            <td>Description</td>
                                            <td>Site</td>
                                            <td>Country</td>
                                            <td>Start Time</td>
                                            <td>End Time</td>
                                            <td>Duration</td>
                                            <td>Status</td>
                                        </tr>
                                        <tr>
                                            <td>Incident</td>
                                            <td>Live Status</td>
                                            <td>Priority</td>
                                            <td>Description</td>
                                            <td>Site</td>
                                            <td>Country</td>
                                            <td>Start Time</td>
                                            <td>End Time</td>
                                            <td>Duration</td>
                                            <td>Status</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
