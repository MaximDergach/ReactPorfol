import React from 'react'
import './footerStyle.css'

function Footer(){
	return (
		<div className='footer'>
			 
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify"><i>Maxim Dergach </i> Этот код был написан в рамках образовательного процесса. После прохождения курсв Frontend React. Отработка навыков HTML, CSS, JS, React.js</p>
          </div>

         

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Contact Us</a></li>
              <li><a href='#'>Contribute</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Sitemap</a></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2019 All Rights Reserved by 
         <a href="#">MaximDergach</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a className="facebook" href="#">facebook</a></li>
              <li><a className="twitter" href="#">twitter</a></li>
              <li><a className="dribbble" href="#">dribbble</a></li>
              <li><a className="linkedin" href="#">linkedin</a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
		</div>
	)
}

export default Footer