import "./Main.css";
import Chart from "../charts/Chart";
import Charts1 from "../charts/Charts1";
import Charts2 from "../charts/Charts2";


const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          
          <div className="main__greeting">
           <h1>Time VS PM Series</h1>
            <p>Welcome to admin dashboard</p>
          </div>
        </div>

        
        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Location 1 </h1>
                <p>PM 1.0 Particle</p>
              </div>
              
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
            <div>
                <h1>Location 2 </h1>
                <p>PM 2.5 Particle</p>
              </div>
            </div>
            <Charts1 />

            
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
            <div>
                <h1>Location 3</h1>
                <p>PM 10 Particle</p>
              </div>
            </div>
            <Charts2 />

            
          </div>
          <div className="charts__right__cards">
              <div className="card1">
                <h1>Most Windy Days of the Week </h1>
                <p></p>
              </div>
          </div>    
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
