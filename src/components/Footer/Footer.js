import './Footer.css';

const Footer = () => {
    return (
        <div className="container mt-5 footer">
        <div className="row">
            <div className="col-md-4 mt-5 col-sm-12 text-center ">
                <h3 className="title fw-bold ">Rafi</h3>
                <p  className="title fw-bold ">Dhaka-1206 </p>
                <p  className="title fw-bold ">66/1 - D, Baulghat, Dhaka</p>
                <p  className="title fw-bold ">Hotline: +880-185030138</p>
            </div>
            <div className="col-md-4 mt-5 col-sm-12">
            <h2 className="text-center fw-bold title mb-4 ">Subscribe to our newsletter</h2>
            <form class="row">
  <div class="col">
                      <input type="email" className="form-control rounded-pill" id="inputEmail4" placeholder="enter your email"/>
  </div>
  <div class="col-auto">
  <button type="submit" className="btn btn-primary header-btn rounded-pill">Submit</button>
  </div>
</form>
          
            </div>
            <div className="col-md-4 mt-5 col-sm-12">
            <h2 className="text-center fw-bold title">Follow social network</h2>
                <div className="icons">
                    <h1><i className='bx bxl-facebook-circle'></i></h1>
                    <h1><i className='bx bxl-twitter'></i></h1>
                    <h1><i className='bx bxl-linkedin' ></i></h1>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <p className="text-center title">Copyright © 2021 @Rafi - All Rights Reserved.</p>
                </div>
      
        </div>
        
    </div>
    )
}

export default Footer;