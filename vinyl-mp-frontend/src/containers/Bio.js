import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Bio extends React.Component {
        
    render(){
       return(<div class="col-xs-12 col-sm-9">
                            <div class="container" style={{paddingLeft:100}}>
							<div class="profile-user-info">
								<div class="profile-info-row">
									<div class="profile-info-name"> Username </div>
                                   

									<div class="profile-info-value">
										<span>Shreya Sridhar</span>
									</div>
                                    <i class="fas fa-edit"></i>
								</div>

								<div class="profile-info-row">
									<div class="profile-info-name"> Location </div>

									<div class="profile-info-value">
										<i class="fa fa-map-marker light-orange bigger-110"></i>
										<span>Seattle</span>
										<span>Washington</span>
									</div>
                                    <i class="fas fa-edit"></i>
								</div>

								<div class="profile-info-row">
									<div class="profile-info-name"> Age </div>

									<div class="profile-info-value">
										<span>38</span>
									</div>
                                    <i class="fas fa-edit"></i>
								</div>

								<div class="profile-info-row">
									<div class="profile-info-name"> Joined </div>

									<div class="profile-info-value">
										<span>2010/06/20</span>
									</div>
								</div>

								
							</div>

							<div class="hr hr-8 dotted"></div>

							<div class="profile-user-info">
								<div class="profile-info-row">
									<div class="profile-info-name"> Website </div>

									<div class="profile-info-value">
										<a href="#" target="_blank">www.shreyasridhar.com</a>
									</div>
                                    <i class="fas fa-edit"></i>
								</div>

								<div class="profile-info-row">
									<div class="profile-info-name">
										<i class="middle ace-icon fa fa-facebook-square bigger-150 blue"></i>
									</div>

									<div class="profile-info-value">
										<a href="#">Find me on Facebook</a>
									</div>
                                    <i class="fas fa-edit"></i>
								</div>

								<div class="profile-info-row">
									<div class="profile-info-name">
										<i class="middle ace-icon fa fa-twitter-square bigger-150 light-blue"></i>
									</div>

									<div class="profile-info-value">
										<a href="#">Follow me on Twitter</a>
                                        
									</div>
                                    <i class="fas fa-edit"></i>
								</div>
							</div>
						</div>
					</div>
       )}}