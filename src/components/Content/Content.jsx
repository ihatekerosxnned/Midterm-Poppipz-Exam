import './Content.css'
import React,{useState} from 'react';
import Poppipz from '../../database/Poppipz';
import Model from '../../Model/Model';

const Content = () => {
    const [model, setModel] = useState(false);
    const [tempdata, setTempData] = useState([]);

    const getData = (img, name, description) =>{
      let tempData = [img, name, description];
      setTempData(item => [1, ...tempData]);

      return setModel(true);
    }
    return(  
      <>
      <div className="container-fluid">
      <section id="team" class="pb-5">
    <div class="container">
        <h5 class="section-title h1">Top Popular People </h5>
        <div class="row">
          {Poppipz.cardData.map((item, index)=>{
            return(
              <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
                <div className="image-flip" >
                    <div className="mainflip flip-0">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={item.imgSrc} alt={item.name} /></p>
                                    <h4 className="card-title">Rank {item.id}</h4>
                                    <h4 className="card-title">{item.name}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Description</h4>
                                    <p className="card-text">{item.description}</p>
                                    <button className='btn btn-primary' onClick={()=>getData(item.imgSrc, item.name, item.description)}>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
          })}
            
          </div>
        </div>
    </section>
      </div>
      {
        model === true ?<Model img={tempdata[1]} name={tempdata[2]} description={tempdata[3]} hide={()=> setModel(false)}/> : ''
      }
      
    </>
    );
  }

      

export default Content;
