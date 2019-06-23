import React from "react";
import Skycons from 'react-skycons'
class Weather extends React.Component{
	render(){
		let color = 'lightblue';
		let icon = [];
		// light rain, clear sky, scattered clouds, moderate rain, broken clouds, few clouds


		// check if there is a description before looping through
		if(this.props.description){
			for(var i=0; i < 5; i++){
				var string = this.props.description[i];
				console.log(string);
				if(string === "light rain" || string === "moderate rain"){
					icon.push('RAIN');
				}
				if(string === "broken clouds" || string === "few clouds" || string === "scattered clouds"){
					icon.push('PARTLY_CLOUDY_DAY');
				}
			}
		}
		
		return(
			<div className="weather-wrap">
				{/* && checks are like if statements inside react*/}

				<div className="weather-table-wrap">
					<table className="table table-borderless table-hover table-responsive">
						<thead className="weather-table-header">
							<tr>
								{this.props.date && <th className="weather__key" scope="col">Date</th>}
								{this.props.date && <th className="weather__key" scope="col"></th>}
								{this.props.temperature && this.props.unit && <th className="weather__key" scope="col">Temperature </th>}								
								{this.props.humidity && <th className="weather__key" scope="col">Humidity</th>}							
								{this.props.description && <th className="weather__key" scope="col">Description</th>}								
								
							</tr>
						</thead>
						<tbody className="weather-table-row">
							<tr>
								
								{this.props.date && <th className="weather__value">{this.props.date[0]}</th>}

								{this.props.date && <th className="weather__value">
									<div className="skycons-wrapper">
										<Skycons
										color={color} 
										icon={icon[0]}
										autoplay={true}
										/>
									</div>
								</th>}

								{this.props.temperature && this.props.unit && <th className="weather__value" scope="col">{this.props.temperature[0]} </th>}
								{this.props.humidity && <th className="weather__value" scope="col">{this.props.humidity[0]}%</th>}
								{this.props.description && <th className="weather__value" scope="col">{this.props.description[0]}</th>}
							</tr>
							<tr>
								{this.props.date && <th className="weather__value">{this.props.date[1]}</th>}
								{this.props.date && <th className="weather__value">
									<div className="skycons-wrapper">
										<Skycons
										color={color} 
										icon={icon[1]}
										autoplay={true}
										/>
									</div>
								</th>}

								{this.props.temperature && this.props.unit && <th className="weather__value" scope="col">{this.props.temperature[1]} </th>}
								{this.props.humidity && <th className="weather__value" scope="col">{this.props.humidity[1]}%</th>}
								{this.props.description && <th className="weather__value" scope="col">{this.props.description[1]}</th>}
							</tr>
							<tr>
								{this.props.date && <th className="weather__value">{this.props.date[2]}</th>}
								{this.props.date && <th className="weather__value">
									<div className="skycons-wrapper">
										<Skycons
										color={color} 
										icon={icon[2]}
										autoplay={true}
										/>
									</div>
								</th>}
								{this.props.temperature && this.props.unit && <th className="weather__value" scope="col">{this.props.temperature[2]} </th>}
								{this.props.humidity && <th className="weather__value" scope="col">{this.props.humidity[2]}%</th>}
								{this.props.description && <th className="weather__value" scope="col">{this.props.description[2]}</th>}
							</tr>
							<tr>
								{this.props.date && <th className="weather__value">{this.props.date[3]}</th>}
								{this.props.date && <th className="weather__value">
									<div className="skycons-wrapper">
										<Skycons
										color={color} 
										icon={icon[3]}
										autoplay={true}
										/>
									</div>
								</th>}
								{this.props.temperature && this.props.unit && <th className="weather__value" scope="col">{this.props.temperature[3]} </th>}
								{this.props.humidity && <th className="weather__value" scope="col">{this.props.humidity[3]}%</th>}
								{this.props.description && <th className="weather__value" scope="col">{this.props.description[3]}</th>}
							</tr>
							<tr >
								{this.props.date && <th className="weather__value" scoop="col">{this.props.date[4]}</th>}
								{this.props.date && <th className="weather__value">
									<div className="skycons-wrapper">
										<Skycons
										color={color} 
										icon={icon[4]}
										autoplay={true}
										/>
									</div>
								</th>}
								{this.props.temperature && this.props.unit && <th className="weather__value" scope="col">{this.props.temperature[4]} </th>}
								{this.props.humidity && <th className="weather__value" scope="col">{this.props.humidity[4]}%</th>}
								{this.props.description && <th className="weather__value" scope="col">{this.props.description[4]}</th>}
							</tr>
						</tbody>
					</table>
					
						
					{this.props.error && <p>{this.props.error}</p>}
						
				</div>

				
			</div>
		);
	}
}

export default Weather;