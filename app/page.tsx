import Link from 'next/link';
import Image from 'next/image';
import Navbar from './component/navbar';

import BottomBar from './component/bottom';

export default function About() {
  return (
    <main className='container py-0'>
      <Navbar title={"/"} />
      <div className="my-2 stage">
        <div className="card">
          <div className="card-body">
            <div className="align-items-center">
              <h1 className='fw-bold'>
                Hi 👋! <br/>
                I'm Michael.
              </h1>

              <p>
                I'm a computer student and enthutiast, software developer and engineer. I enjoy making things
                and solve problem with computer. Well equipped with experience in experience working in Machine Learning,
                backend and frontend development. <b>I'm proud with my projects and mini projects, so here are they...</b> 
              </p>                      
            </div>
          </div>
        </div>

        <div className="row my-1 g-3 project-items">
          <div className="col-sm-12  col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className='fw-bold'>TSTH2 cabbage count software</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12  col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className='fw-bold'>Pharmacy stock management software</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12  col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className='fw-bold'>A Simple web-based note</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12  col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className='fw-bold'>Tarhilala waste-bank management software</h5> 
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className='fw-bold'>Private webfont host</h5> 
              </div>
            </div>
          </div>

        </div>        

      </div>
      <BottomBar/>
    </main>
  );
}