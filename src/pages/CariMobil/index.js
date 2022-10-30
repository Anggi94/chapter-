import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Grid } from "react-loader-spinner";
import "./style.scss";
import { queryData, currencyFormat } from "../../helper";

// import Filter from "../../components/filter";
import Main from "../../components/main";

const CariMobil = () => {
  const [active, setActive] = useState(false);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [emptyData, setEmptyData] = useState(false);

  const overLay = () => {
    setActive(true);

  }
  const removeOverLay = () => {
    setActive(false);

  }
  const baseUrl = "https://bootcamp-rent-cars.herokuapp.com";

  // const getCars = () => {
  //   Axios.get(`${baseUrl}/cars`)
  //     .then((response) => {
  //       const descending = response.data.sort((a, b) => b.id - a.id);
  //       setCars(descending);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const fetch = useRef(true);

  // React.useEffect(() => {
  //   if (fetch.current) {
  //     getCars();
  //     fetch.current = false;
  //   }
  // }, []);

  // const submitData = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     name: inputSamplePost.current.value,
  //     category: 6,
  //     price: 7290,
  //     status: true,
  //     start_rent_at: '2040-07-03T03:00:07.069Z',
  //     finish_rent_at: '2002-02-26T07:56:36.623Z',
  //     image: 'http://loremflickr.com/640/480?random=2',
  //     createdAt: '2097-04-15T17:34:57.248Z',
  //     updatedAt: '2019-10-28T13:24:33.132Z',
  //     description: 'odio.',
  //   };

  //   Axios.post(`${baseUrl}/cars`, formData)
  //     .then((response) => {
  //       if (response) {
  //         getCars();
  //         inputSamplePost.current.value = null;
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const submitEditData = () => {
  //   const formData = {
  //     name: 'Mazda 3',
  //     category: 6,
  //     price: 7290,
  //     status: false,
  //     start_rent_at: '2040-07-03T03:00:07.069Z',
  //     finish_rent_at: '2002-02-26T07:56:36.623Z',
  //     image: 'http://loremflickr.com/640/480?random=1',
  //     createdAt: '2097-04-15T17:34:57.248Z',
  //     updatedAt: '2019-10-28T13:24:33.132Z',
  //     description: 'odio.',
  //   };

  //   Axios.put(`${baseUrl}/cars/${inputSampleEdit.current.value}`, formData)
  //     .then((response) => {
  //       if (response) {
  //         getCars();
  //         inputSampleEdit.current.value = null;
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const submitDeleteData = () => {
  //   Axios.delete(`${baseUrl}/cars/${inputSampleDelete.current.value}`)
  //     .then((response) => {
  //       if (response) {
  //         getCars();
  //         inputSampleDelete.current.value = null;
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const inputSamplePost = useRef();
  // const inputSampleEdit = useRef();
  // const inputSampleDelete = useRef();

  const namaMobil = useRef('');
  const category = useRef('');
  const harga = useRef('');
  const statusOrder = useRef('');
  const price = () => {


    // menggunakan switch
    switch (harga.current.value) {
      case "small":
        return { maxPrice: 400000 };
      case "medium":
        return { minPrice: 400000, maxPrice: 600000 };
      case "large":
        return { minPrice: 600000 };
      default:
        return "";
    }
  };

  const getData = (e) => {
    e.preventDefault();
    const params = {
      name: namaMobil.current.value,
      category: category.current.value,
      minPrice: price().minPrice,
      maxPrice: price().maxPrice,
      isRented: statusOrder.current.value,
    };
    // const descending = (data) => {
    //   return data.sort((a, b) => b.id - a.id);
    // };
    setLoading(true);
    setEmptyData(false);
    setCars([]);

    // Axios.get(`${baseUrl}/cars?name=${namaMobil.current.value}&category=${category.current.value}&price=${harga.current.value}&status=${statusOrder.current.value}
    Axios.get(`${baseUrl}/customer/v2/car?${queryData(params)}`)
      .then((response) => {
        if (response.data.cars.length > 0) {
          setCars(response.data.cars);
        } else {
          setEmptyData(true);
        }
        setLoading(false)
        // if (response) {
        //   setTimeout(() => {
        //     if (response.data.length > 0) {
        //       const descending = response.data.sort((a, b) => b.id - a.id);
        //       setCars(descending);
        //     } else {
        //       setEmptyData(true);
        //     }
        //     setLoading(false);
        //   }, 2000);
        // }
      })
      .catch((error) => console.log(error));
  };

  const filterData = {
    getData,
    namaMobil,
    category,
    harga,
    statusOrder,
  };

  return (
    <div>
      <Main />
      <section className="find-car">
        <div className="container">
          <div className="row">
            <div className={`find-car-border ${active ? 'overlay-active' : ''}`}>

              <form className="find-car-form" onSubmit={filterData.getData}>
                <div className="row" >
                  <div className="col-lg-3">
                    <div className="form-border">
                      <div className="mb-3" >
                        <label className="form-label">Nama Mobil</label>
                        <input onClick={overLay} type="text" ref={filterData.namaMobil} className="form-control" placeholder="Ketik nama/tipe mobil" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-border">
                      <label className="form-label">Kategori</label>
                      <select onClick={overLay} ref={filterData.category} className="form-select">
                        {/* <option hidden> Masukkan Kapasitas Mobil</option> */}
                        <option></option>
                        <option value="small">2 - 4 orang</option>
                        <option value="medium">4 - 6 orang</option>
                        <option value="large">6 - 8 orang</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-border">
                      <label className="form-label">Harga</label>
                      <select onClick={overLay} ref={filterData.harga} className="form-select">
                        {/* <option hidden>Masukkan Harga Sewa Perhari</option> */}
                        <option />
                        <option value="small">{'< Rp. 400.000'}</option>
                        <option value="medium">Rp. 400.000 - Rp. 600.000</option>
                        <option value="large">{'> Rp. 600.000'}</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-border">
                      <label className="form-label">Status</label>
                      <select onClick={overLay} ref={filterData.statusOrder} className="form-select">
                        <option />
                        <option value="true">Tersedia</option>
                        <option value="false">Disewa</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="submit">
                  <button type='submit' onClick={removeOverLay} className='button btn btn-success'>Cari Mobil</button>
                </div>
              </form>
              <br />
              <br />
            </div>
            <div className="car-choice">
              <div className="container">

                <div className="car-choice-border">
                  {loading ? (
                    <Grid
                      height="100"
                      width="100"
                      color="#4fa94d"
                      ariaLabel="grid-loading"
                      radius="12.5"
                      wrapperStyle={{}}
                      wrapperClass="grid-loading"
                      visible={true}
                    />
                  ) : (
                    <div className="row">
                      {cars.map((car, index) => {
                        return (
                          <div className="col-lg-4 col-md-6" key={index}>
                            <div className="card-border">
                              <div className="card">
                                <img src={car.image} alt="" />

                                <div className="card-body">
                                  <h3 className="card-title">{car.name}</h3>
                                  <p className="price">
                                    Rp {currencyFormat(car.price)} / hari
                                  </p>
                                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut est inventore natus fugiat tenetur corrupti a libero eligendi deserunt nihil excepturi, necessitatibus iure labore rerum molestias. Nam, unde optio!</p>
                                </div>
                                <Link
                                  className="btn btn-success d-block"
                                  to={`/Detail/${car.id}`}
                                >
                                  Pilih Mobil
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {emptyData && <>Data Tidak Ditemukan</>}
                </div>


              </div>
            </div>
          </div>
        </div >
      </section >
      <div onClick={removeOverLay} className={`overlay-bg-2 ${active ? 'overlay-active' : ''}`}></div>
    </div >


  );
};
export default CariMobil;
